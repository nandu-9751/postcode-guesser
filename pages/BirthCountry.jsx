// dropdown
import React, { useState } from "react";import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function  BirthCountry() {
    const countryOptions = [
        { value: "Australia", label: "Australia" },
        { value: "United_States", label: "United States" },
        { value: "United_Kingdom", label: "United Kingdom" },
        { value: "Canada", label: "Canada" },
        { value: "China", label: "China" },
        { value: "India", label: "India" },
        { value: "Japan", label: "Japan" },
        { value: "Germany", label: "Germany" },
        { value: "France", label: "France" },
        { value: "Italy", label: "Italy" },
        { value: "New_Zealand", label: "New Zealand" },
        { value: "South_Africa", label: "South Africa" },
        { value: "Brazil", label: "Brazil" },
        { value: "Mexico", label: "Mexico" },
        { value: "Russia", label: "Russia" },
        { value: "South_Korea", label: "South Korea" },
        { value: "Other", label: "Other" },
        // more countries...
    ];
    
    const router = useRouter();

    const [selectedCountry, setSelectedCountry] = useState(null); 

    const handleSelect = (value) => {
        setSelectedCountry(value); 
        console.log("Selected Country of Birth:", value);
    };

    const handlePrevious = () => {
        console.log("Previous button clicked");
        router.push('/Ethnic');
    };

    const handleNext = () => {
        //check if country is selected
        if (!selectedCountry) {
            alert("Please select your country of birth.");
        }
        else {
            console.log(selectedCountry)
            console.log("Next button clicked");
            router.push('/Language');
        }
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                7. Country of birth
            </Typography>
            <Dropdown
                options={countryOptions}
                label="Country of birth"
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

export default BirthCountry;
