import { Box, Divider, Link, Typography } from '@mui/material';
import logo from '../assets/Logo.svg';
import search from '../assets/search-normal.svg';
import heart from '../assets/heart.svg';
import bag from '../assets/shopping-bag.svg';
import profile from '../assets/profile.svg';
import arrowdown from '../assets/arrow-down.svg';

const Header = () => {
  return (
    <Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '98vw' }}>
      {/* Left: Logo */}
      <Box sx={{ m: '10px'}}>
        <img src={logo} alt="logo" style={{ height: 40 }} />
      </Box>

      {/* Center: Logo Text */}
      <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {/* <img src={logo} alt="logo" style={{ height: 40 }} />/ */}
          <Typography variant="h4" fontWeight="bold">
            LOGO
          </Typography>
        </Box>

      {/* Right: Icons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: '10px' }}>
        <img src={search} alt="search" />
        <img src={heart} alt="heart" />
        <img src={bag} alt="bag" />
        <img src={profile} alt="profile" />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography>ENG</Typography>
          <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'center'}}>
      <Link >SHOP</Link>
      <Link>SKILLS</Link>
      <Link>STORIES</Link>
      <Link>ABOUT</Link>
      <Link>CONTACT US</Link>
    </Box>
    <Divider sx={{ mt: '20px' }}/>
    </Box>
  );
};

export default Header;
