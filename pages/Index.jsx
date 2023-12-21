import React from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';

function Index() {
    const theme = useTheme();
    const router = useRouter();

    const handleNext = () => {
        localStorage.clear(); // clear all previous data
        router.push('/Age'); // next page; change accordingly
    };

    return (
        <Layout>
            <Paper 
                sx={{
                    mt: 4,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: theme.shape.borderRadius,
                    borderWidth: '1px', 
                    borderStyle: 'solid', 
                    borderColor: 'divider', 
                }}
                elevation={0} 
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to EdgeRed Postcode Guesser
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Let's try to guess your postcode!
                </Typography>
                <HomeIcon 
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}/>
                <Button variant="contained" color="primary" onClick={handleNext} size="large">
                    Start Now!
                </Button>
            </Paper>
        </Layout>
    );
}

export default Index;
