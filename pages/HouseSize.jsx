// number

import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextInput from "../components/TextInput";

function HouseSize() {
    const [size, setSize] = useState('');
    const router = useRouter();

    const handleNext = () => {
        if ((size < 1) || (isNaN(size))) {
            alert("Please enter a valid household size");
            return;
        }
        router.push('/Income');
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Age');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                2. Enter your Household Size
            </Typography>
            <TextInput
                type="number"
                value={size}
                onChange={setSize}
                label="Household Size"
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" onClick={handlePrevious}>
                    Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Layout>
    );
}

export default HouseSize;
