import React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  LanguageSharp: '#',
  instagram: '#',
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {/* The Suits House */}
            </Typography>
            <img src="https://bizweb.dktcdn.net/100/314/343/themes/780999/assets/logo.png?1720407861153" alt="" style={{marginLeft:'50px'}}/>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" color="inherit" display="block">Classy</Link>
            <Link href="#" color="inherit" display="block">Standard</Link>
            <Link href="#" color="inherit" display="block">Signature</Link>
            <Link href="#" color="inherit" display="block">Luxury</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              ADDRESS
            </Typography>
            <Link href="#" color="inherit" display="block">Ha Noi City</Link> 
            <Link href="#" color="inherit" display="block">Da Nang City</Link>
            <Link href="#" color="inherit" display="block">Ho Chi Minh City</Link>
            <Link href="#" color="inherit" display="block">Can Tho City</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              MTPE SERVICES
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton> 
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" color="inherit" component="a" href={socialMediaLinks.LinkedIn}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 THE SUITS HOUSE by MTPE - Minh Thao Pham Entertaiment.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;