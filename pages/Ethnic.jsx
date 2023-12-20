// dropdown

import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function  Ethnic() {
    const ethnicOptions = [
        { value: "Aboriginal_TorresStraitIslander", label: "Aboriginal and Torres Strait Islander" },
        { value: "AngloCeltic", label: "Anglo-Celtic" },
        { value: "European", label: "European" },
        { value: "Asian", label: "Asian" },
        { value: "MiddleEastern", label: "Middle Eastern" },
        { value: "African", label: "African" },
        { value: "Oceanian_PacificIslander", label: "Oceanian/Pacific Islander" },
        { value: "MixedEthnicity", label: "Mixed Ethnicity" },
        { value: "Other", label: "Other" },
    ];
    
    
    const router = useRouter();

    const handleSelect = (value) => {
        console.log("Selected Highest Education:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/State');
    };

    const handleNext = () => {
        console.log("Next button clicked");
        router.push('/BirthCountry');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Ethnic background
            </Typography>
            <Dropdown
                options={ethnicOptions}
                label="Ethnic"
                onSelect={handleSelect}
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

export default Ethnic;
