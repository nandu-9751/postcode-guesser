import React, { useState } from "react";
import { useRouter } from "next/router";
import TextInput from "../components/TextInput"; 
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from "../components/Layout";

function Age() {
    const [age, setAge] = useState('');
    const router = useRouter();

    const handleNext = () => {
        // check if age is empty
        // check if age is a number, and if it is, check if it is greater than 0, and if it is, check if it is less than 120
        // if all of these are true, then go to the next page
        // otherwise, show an error message
        if ((age === '') || (age === null) || (isNaN(age)) || (age <= 0) || (age > 120)) {
            alert("Please enter a valid age.");
        }
        else {
            localStorage.setItem('age', JSON.stringify(age));
            router.push('/HouseSize');
        }
    };

    return (
        <Layout>
            <Typography variant="h4" gutterBottom>
                1. Enter in Your Age
            </Typography>
            <TextInput
                type="number"
                label="Age"
                onChange={setAge}
                value={age}
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Layout>
    );
}

export default Age;
