import React from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Income() {
    const incomeOptions = [
        { label: "10,000 - 20,000", value: "10000-20000" },
        { label: "20,001 - 30,000", value: "20001-30000" },
        { label: "30,001 - 40,000", value: "30001-40000" },
        // more options
    ];

    const handleSelect = (value) => {
        console.log("Selected Income Range:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
    };

    const handleNext = () => {
        console.log("Next button clicked");
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Income
            </Typography>
            <Dropdown
                options={incomeOptions}
                label="Income Range"
                onSelect={handleSelect}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary">
                Previous
            </Button>
            <Button variant="contained" color="primary">
                Next
            </Button>
            </Box>
        </Layout>
    );
}

export default Income;
