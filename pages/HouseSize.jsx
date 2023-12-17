import React, { useState } from "react";
import { useRouter } from "next/router";

function HouseSize() {
    const [size, setSize] = useState('');
    const router = useRouter();

    const handleSave = () => {
        console.log(size);
    };

    const handleNext = () => {
        router.push('/HouseSize'); // next page; change accordingly
    };

    return (
        <div>
            <h1>Please enter your house size:</h1>
            <input
                type="number"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                placeholder="HouseSize"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default HouseSize;
