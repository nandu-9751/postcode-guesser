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

    const handleSave = () => {
        console.log(age);
    };

    const handleNext = () => {
        router.push('/HouseSize'); // next page; change accordingly
    };

    return (
        <Layout>
            <Typography variant="h4" gutterBottom>
                Enter in Your Age
            </Typography>
            <TextInput
                type="number"
                label="Age"
                onChange={setAge}
                value={age}
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" onClick={handleSave}>
                    Save
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                    Next
                </Button>
            </Box>
        </Layout>
    );
}

export default Age;
