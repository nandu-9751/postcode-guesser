import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Dwelling() {
    const dwellingOptions = [
        { value: "House", label: "House" },
        { value: "Apartment", label: "Apartment" },
        { value: "Townhouse", label: "Townhouse" },
        { value: "Studio", label: "Studio" },
        { value: "Dormitory", label: "Dormitory" },
        { value: "Shared_Housing", label: "Shared Housing" },
        { value: "Mobile_Home", label: "Mobile Home" },
        { value: "Cottage", label: "Cottage" },
        { value: "Farmhouse", label: "Farmhouse" },
        // more dwelling types...
    ];
    
    const router = useRouter();

    const handleSelect = (value) => {
        console.log("Selected Dwelling:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Language');
    };

    const handleNext = () => {
        console.log("Next button clicked");
        router.push('/Education');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                What dwelling do you live in?
            </Typography>
            <Dropdown
                options={dwellingOptions}
                label="Type of Dwelling"
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

export default Dwelling;
