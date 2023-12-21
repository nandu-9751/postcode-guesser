// dropdown

import React, {useState} from "react";
import Dropdown from "../components/Dropdown"; 
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Language() {
    const languageOptions = [
        { value: "English", label: "English" },
        { value: "Mandarin", label: "Mandarin" },
        { value: "Spanish", label: "Spanish" },
        { value: "Arabic", label: "Arabic" },
        { value: "Hindi", label: "Hindi" },
        { value: "Bengali", label: "Bengali" },
        { value: "Portuguese", label: "Portuguese" },
        { value: "Russian", label: "Russian" },
        { value: "Japanese", label: "Japanese" },
        { value: "German", label: "German" },
        // more languages...
    ];
    
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const router = useRouter();

    const handleSelect = (value) => {
        console.log("Selected Language:", value);
        setSelectedLanguage(value);
    };

    const handlePrevious = () => {
        router.push('/BirthCountry');
    };

    const handleNext = () => {
        if (!selectedLanguage) {
            alert("Please select your language.");
        }
        else {
            console.log(selectedLanguage)
            localStorage.setItem('language', JSON.stringify(selectedLanguage));
            router.push('/Education');
        }
    };

    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                8. What language do you speak at home?
            </Typography>
            <Dropdown
                options={languageOptions}
                label="Language"
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

export default Language;

