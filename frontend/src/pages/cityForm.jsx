// src/components/CityForm.js
import React, { useState } from 'react';

const CityForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cityData = { name };

        try {
            const response = await fetch('http://localhost:5000/api/cities', { // Adjust port if necessary
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cityData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('City added:', result);
                setName(''); // Clear the input field after submission
            } else {
                console.error('Error adding city');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center">Add a City</h2>
            <form onSubmit={handleSubmit} className="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        City Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter city name"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add City
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CityForm;
