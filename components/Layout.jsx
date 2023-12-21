import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from './Footer'; 

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-start' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Postcode Guesser
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 2 }} /> {/* Placeholder to balance the layout */}
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
