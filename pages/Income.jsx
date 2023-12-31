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

function Income() {
    const router = useRouter();
    const [income, setIncome] = useState('');

    const handlePrevious = () => {
        router.push('/HouseSize');
    };

    const handleNext = () => {
        if ((income < 1) || (isNaN(income))) {
            alert("Please enter a valid income");
            return;
        }
        localStorage.setItem('income', JSON.stringify(income));
        router.push('/HousingSituation');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                3. Enter Your Weekly Income
            </Typography>
            <TextInput
                type="number"
                label="Income"
                onChange={setIncome}
                value={income}
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

export default Income;
