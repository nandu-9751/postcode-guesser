// 在 src/components/Layout.jsx
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
          <Typography variant="h6">
            EdgeRed Postcode Guesser
          </Typography>
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
