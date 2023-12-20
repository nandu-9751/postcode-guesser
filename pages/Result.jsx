import React from "react";
import PostcodeTable from "../components/PostcodeTable"; 
import Layout from "../components/Layout";
import Typography from '@mui/material/Typography';
import TextInput from "../components/TextInput";
import { useState } from "react";

function Result() {
    const [postcode, setPostcode] = useState('');

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Your postcode is...
            </Typography>
            <PostcodeTable />
            Don't see your postcode? Tell us the answer!
            <br></br>
            <TextInput
                type="text"
                label="Postcode"
                onChange={setPostcode}
                value={postcode}
            />
        </Layout>
        
    );
}

export default Result;
