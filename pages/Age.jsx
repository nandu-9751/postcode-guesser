import React, { useState } from "react";
import { useRouter } from "next/router";

function Age() {
    const [age, setAge] = useState(0);
    const router = useRouter();

    const handleSave = () => {
        console.log(age);
    };

    const handleNext = () => {
        router.push('/HouseSize'); // next page; change accordingly
    };

    return (
        <div>
            <h1>Please enter your age:</h1>
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Age;
