import React from "react";
import PostcodeTable from "../components/PostcodeTable"; 
import Layout from "../components/Layout";
import Typography from '@mui/material/Typography';
import TextInput from "../components/TextInput";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRouter } from "next/router";

function Result() {
    const router = useRouter();
    const [postcode, setPostcode] = useState('');

    const handleBack = () => {
        localStorage.clear(); // clear all the data we've collected so far
        router.push('/Index');
    };

    const handleSubmit = () => {
        localStorage.setItem('truePostcode', JSON.stringify(postcode)); // if we didn't guess the postcode correctly, we can use this to update the database
        router.push('/Index');
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Your postcode is...
            </Typography>
            <PostcodeTable />
            Don't see your postcode? Tell us the answer!
            <TextInput
                type="text"
                label="Postcode"
                onChange={setPostcode}
                value={postcode}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button variant="contained" color="primary" onClick={handleBack}>
                    Go back to main page
                </Button>
            </Box>
        </Layout>
        
    );
}

export default Result;
