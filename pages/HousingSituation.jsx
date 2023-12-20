// number

import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";
import TextInput from "../components/TextInput";

function HousingSituation() {
    const router = useRouter();
    const [housing, setHousing] = useState('');

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Income');
    };

    const handleNext = () => {
        console.log("Next button clicked");
        router.push('/State');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Housing Situation (mortage, rent, etc.)
            </Typography>
            <TextInput
                type="number"
                label="Housing Situation"
                onChange={setHousing}
                value={housing}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handlePrevious}>
                Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
                Next
            </Button>
            </Box>
        </Layout>
    );
}

export default HousingSituation;
