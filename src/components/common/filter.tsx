import { Box, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React from 'react';
import arrowdown from '../../assets/arrow-down.svg';

const Filter = () => {
  return (
    <React.Fragment>
      <Box sx={{width: '260px', mt: '20px',   }}>
        <Box sx={{ p: '10px 0'}}>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>  */}
          <FormGroup>
            <FormControlLabel control={<Checkbox  />} label="CUSTOMIZABLE" />
          </FormGroup>
         {/* <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} /> */}
        </Box> 
        {/* <Typography>All</Typography></Box> */}
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>IDEAL FOR</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>OCCASION</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>WORK</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>FABRIC</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>SEGMENT</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>SUITABLE FOR</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>RAW MATERIALS</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>
        <Divider />
        
        <Box sx={{ p: '10px 0'}}><Box sx={{ display: 'flex', justifyContent: 'space-between'}}> 
        <Typography>PATTERN</Typography>
        <img src={arrowdown} alt="arrowdown" style={{ width: 22 }} />
        </Box>
        <Typography>All</Typography></Box>

      </Box>
    </React.Fragment>
  );
};

export default Filter;
