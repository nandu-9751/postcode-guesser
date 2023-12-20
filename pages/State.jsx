// dropdown

import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function  State() {
    const stateOptions = [
        { label: "New South Wales (NSW)", value: "NSW" },
        { label: "Victoria (VIC)", value: "VIC" },
        { label: "Queensland (QLD)", value: "QLD" },
        { label: "Western Australia (WA)", value: "WA" },
        { label: "South Australia (SA)", value: "SA" },
        { label: "Tasmania (TAS)", value: "TAS" },
        { label: "Australian Capital Territory (ACT)", value: "ACT" },
        { label: "Northern Territory (NT)", value: "NT" },
    ];
    
    const router = useRouter();

    const handleSelect = (value) => {
        console.log("Selected Highest Education:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/HousingSituation');
    };

    const handleNext = () => {
        console.log("Next button clicked");
        router.push('/Ethnic');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                What state do you live in?
            </Typography>
            <Dropdown
                options={stateOptions}
                label="State"
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

export default State;
