import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Radio } from '@mui/material';
import Box from '@mui/material/Box';

const PostcodeTable = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedPostcode, setSelectedPostcode] = useState('');
    const entriesPerPage = 20;

    useEffect(() => {
        fetch('../sydney_postcodes.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrevious = () => {
        setPage(page - 1);
    };

    const handleSubmit = () => {
        console.log("Submit button clicked");
        alert("Thank you for your submission!");
    };

    const handleRadioChange = (event) => {
        setSelectedPostcode(event.target.value);
    };

    return (
        <><TableContainer component={Paper} sx={{ maxHeight: '355px', overflowY: 'auto' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ height: 'auto' }}>
                        <TableCell align="center" style={{ width: '33.33%' }}>Rank (From highest possibility to lowest)</TableCell>
                        <TableCell align="center" style={{ width: '33.33%' }}>Postcode</TableCell>
                        <TableCell align="center" style={{ width: '33.33%' }}>Select if we got it</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * entriesPerPage, (page + 1) * entriesPerPage).map((row) => (
                        <TableRow key={row.rank} sx={{ height: 'auto' }}>
                            <TableCell align="center" style={{ width: '33.33%' }}>{row.rank}</TableCell>
                            <TableCell align="center" style={{ width: '33.33%' }}>{row.postcode}</TableCell>
                            <TableCell align="center" style={{ width: '33.33%' }}>
                                <Radio
                                    checked={selectedPostcode === String(row.postcode)}
                                    onChange={handleRadioChange}
                                    value={String(row.postcode)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Button onClick={handlePrevious} disabled={page === 0}>
                Previous
            </Button>
            <Button onClick={handleNext} disabled={(page + 1) * entriesPerPage >= data.length}>
                Next
            </Button>
        </TableContainer>
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <Button variant="contained" color="primary" disabled={selectedPostcode === ''} onClick={handleSubmit}>
                Submit Correct Postcode
            </Button>
        </Box>
        </>
    );
};

export default PostcodeTable;
