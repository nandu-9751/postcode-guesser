import React, { useState } from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextInput from "../components/TextInput";

function HousingSituation() {
    const router = useRouter();
    const [housing, setHousing] = useState('');
    const [amount, setAmount] = useState('');

    const housingOptions = [
        { label: "Mortgage", value: "mortgage" },
        { label: "Rent", value: "rent" },
        // more?
    ];

    const handleSelect = (value) => {
        console.log("Selected Housing Situation:", value);
        setHousing(value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Income');
    };

    const handleNext = () => {
        if (!housing || !amount) {
            alert("Please enter a valid housing situation and amount");
            return;
        }
        router.push('/State');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                4. Housing Situation
            </Typography>
            <Box marginBottom={2}>
                <Dropdown
                    label="Select Housing Situation"
                    options={housingOptions}
                    value={housing}
                    onSelect={handleSelect}
                />
            </Box>
            <TextInput
                type="number"
                label="Amount"
                value={amount}
                onChange={setAmount}
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
