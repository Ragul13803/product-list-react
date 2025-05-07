import { Box, Button, Card, Divider, Fade, List, ListItem, ListItemText, Paper, Popper, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import arrowdown from '../assets/arrow-down.svg';
import Filter from './common/filter';
import heart from '../assets/heart.svg';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [showFilter, setShowFilter] = useState(true);
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Recommended');

  const options = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE: HIGH TO LOW',
    'PRICE: LOW TO HIGH',
  ];
  
  const toggleLike = (id: number) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  const handleFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenFilter(prev => !prev);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setOpenFilter(false);
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);  // No need to call response.json(), Axios does that for you
      })
      .catch(error => {
        console.error("There was an error fetching the products:", error);
      });
  }, []);
  

  return (
    <Box sx={{ padding: '0 60px' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '60%',
          padding: '60px 0',
          mx: 'auto',
        }}
      >
        <Typography variant="h3" textAlign="center">
          DISCOVER OUR PRODUCTS
        </Typography>
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </Typography>
      </Box>

      <Divider />

      {/* Top bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontWeight="bold">{products.length} ITEMS</Typography>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={toggleFilter}
            sx={{ ml: '30px' }}
          >
            {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
          </Button>
        </Box>

        {/* Popper trigger */}
        <Box>
      <Button onClick={handleFilter} sx={{ }}>
        {selectedOption} <img src={arrowdown} style={{ marginLeft: '10px' }} />
      </Button>
      
    </Box>

        {/* Popper content */}
        <Popper
          open={openFilter}
          anchorEl={anchorEl}
          placement="bottom"
          transition
          sx={{ zIndex: 1200, }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper sx={{ mt: '6px', boxShadow: 2 }}>
                {/* <Typography>This is the bottom popper content.</Typography> */}
                <List>
            {options.map((option) => (
              <Box key={option} >
                <ListItem onClick={() => handleSelect(option)}>
                  {selectedOption === option && (
                    <DoneIcon sx={{ mr: 1, color: 'black', fontWeight: 'bold' }} />
                  )}
                  <ListItemText primary={option} style={{ textAlign: 'right'}}/>
                </ListItem>
                {/* <Divider /> */}
              </Box>
            ))}
          </List>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Box>

      <Divider />

      {/* Main content: Filter left, products right */}
      <Box sx={{ display: 'flex', padding: '20px 0' }}>
        {/* Left: Filter Sidebar */}
        {showFilter && (
          <Box sx={{ width: '220px', flexShrink: 0 }}>
            <Filter />
          </Box>
        )}

        {/* Right: Product Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-start',
            flex: 1,
            pl: showFilter ? '60px': ''
          }}
        >
          {products.map((item) => (
            <Card key={item.id} sx={{ width: 220, padding: 1 }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  height: '160px',
                  width: '100%',
                  objectFit: 'contain',
                  marginBottom: '10px',
                }}
              />

              <Tooltip title={item.title} placement="bottom" arrow>
                <Typography variant="h6" noWrap>
                  {item.title}
                </Typography>
              </Tooltip>

              <Typography variant="body2">${item.price}</Typography>

              <Tooltip title={item.description} placement="bottom" arrow>
                <Typography variant="body2" noWrap>
                  {item.description}
                </Typography>
              </Tooltip>

              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color="text.secondary">
                  {item.category}
                </Typography>
                <img
                  src={heart}
                  alt="heart"
                  onClick={() => toggleLike(item.id)}
                  style={{
                    backgroundColor: likedItems[item.id] ? '#EB4C6B' : 'transparent',
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                />
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
