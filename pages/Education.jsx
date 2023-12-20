// dropdown

import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function  Education() {
    const router = useRouter();
    const incomeOptions = [
        { label: "Primary education", value: "primary_education" },
        { label: "Secondary education", value: "secondary_education" },
        { label: "Vocational Education and Training (VET)", value: "vet" },
        { label: "Undergraduate (Bachelor's degree)", value: "undergraduate" },
        { label: "Postgraduate (Graduate Certificates, Diplomas, Masters, and Doctorates)", value: "postgraduate" },
        // more options
    ];

    const handleSelect = (value) => {
        console.log("Selected Highest Education:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Dwelling');
    };

    const handleNext = () => {
        console.log("Next button clicked");
        router.push('/Result');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Choose your highest education level
            </Typography>
            <Dropdown
                options={incomeOptions}
                label="Education"
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

export default Education;
