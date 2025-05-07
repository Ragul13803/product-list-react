import { Box, Button, TextField, Typography } from "@mui/material";
import payment from '../assets/footer.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '95.4vw',
          bgcolor: 'black',
          color: 'white',
          p: '40px 20px',
          flexWrap: 'wrap',
        }}
      >
        {/* First Box: Newsletter Subscription */}
        <Box sx={{ width: { xs: '100%', md: '30%' }, mb: 4 }}>
          <Typography fontWeight={'bold'} variant="h6">BE THE FIRST TO KNOW</Typography>
          <Typography marginTop={'20px'} variant="body1">
            Sign up for updates from mettā muse.
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px', mt: 2 }}>
            <TextField
              placeholder="Enter your E-mail.."
              size="small"
              sx={{ width: '70%', bgcolor: 'white', borderRadius: '4px' }}
            />
            <Button variant="outlined" sx={{ width: '30%' }}>Subscribe</Button>
          </Box>
        </Box>

        {/* Second Box: Contact Info & Currency */}
        <Box sx={{ width: { xs: '100%', md: '30%' }, mb: 4 }}>
          <Typography fontWeight={'bold'} variant="h6">CONTACT US</Typography>
          <Typography marginTop={'10px'} variant="body1">+44 221 133 5360</Typography>
          <Typography marginTop={'10px'} variant="body1">customercare@mettamuse.com</Typography>

          <Typography marginTop={'16px'} fontWeight={'bold'} variant="h6">CURRENCY</Typography>
          <Typography variant="body1" fontWeight={'bold'}>USD</Typography>
          <Typography variant="caption">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </Typography>
        </Box>

        <Box sx={{ my: 4, borderBottom: '1px solid white', width: '100%' }} />

        {/* Third Box: Navigation Links */}
        <Box sx={{ display: 'flex', gap: '100px', flexWrap: 'wrap' }}>
          {/* Mettā Muse Links */}
          <Box sx={{ width: { xs: '100%', md: '20%' }, mb: 4 }}>
            <Typography fontWeight={'bold'} variant="h6">mettā muse</Typography>
            {['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'].map((link) => (
              <Typography key={link} marginTop={'6px'} variant="body1">{link}</Typography>
            ))}
          </Box>

          {/* Quick Links */}
          <Box sx={{ width: { xs: '100%', md: '20%' }, mb: 4 }}>
            <Typography fontWeight={'bold'} variant="h6">QUICK LINKS</Typography>
            {[
              'Orders & Shipping',
              'Join/Login as a Seller',
              'Payment & Pricing',
              'Return & Refunds',
              'FAQs',
              'Privacy Policy',
              'Terms & Conditions',
            ].map((link) => (
              <Typography key={link} marginTop={'6px'} variant="body1">{link}</Typography>
            ))}
          </Box>

          {/* Social Media & Payment */}
          <Box sx={{ width: { xs: '100%', md: '20%' }, mb: 4 }}>
            <Typography fontWeight={'bold'} variant="h6">FOLLOW US</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Box
                sx={{
                  padding: '10px',
                  borderRadius: '50%',
                  borderColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 10,
                  height: 10,
                  border: '1px solid white',
                }}
              >
                <InstagramIcon />
              </Box>
              <Box
                sx={{
                  padding: '10px',
                  borderRadius: '50%',
                  borderColor: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 10,
                  height: 10,
                  border: '1px solid white',
                }}
              >
                <LinkedInIcon />
              </Box>
            </Box>

            <Typography fontWeight={'bold'} variant="body1" sx={{ mt: 2 }}>
              mettā muse Accepts
            </Typography>
            <img src={payment} alt="payment" style={{ maxWidth: '100%', marginTop: 8 }} />
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Copyright */}
      <Box sx={{ textAlign: 'center', bgcolor: 'black', color: 'white', p: '20px 0' }}>
        <Typography variant="body1">Copyright © 2023 mettā muse. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
