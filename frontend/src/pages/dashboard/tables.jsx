import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

// Modal component for adding a city
const AddCityModal = ({ isOpen, onClose, onAddCity }) => {
  const [cityName, setCityName] = useState("");
  const [category, setCategory] = useState(""); // New state for category

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cityData = { name: cityName, category }; // Include category in data

    try {
      const response = await fetch('http://localhost:5000/api/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cityData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('City added:', result);
        onAddCity(result); // Callback to update the city list
        setCityName(''); // Clear input
        setCategory(''); // Clear category input
        onClose(); // Close modal
      } else {
        console.error('Error adding city:', await response.json());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null; // Render nothing if the modal is not open

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-white rounded-lg p-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-lg font-bold mb-4">Add City</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter city name"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter category"
          />
          <div className="flex justify-between">
            <Button type="submit" color="green">Add City</Button>
            <Button onClick={onClose} color="red">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export function Tables() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cities, setCities] = useState([]); // Initialize your cities state

  const handleAddCity = (newCity) => {
    setCities((prev) => [...prev, newCity]); // Update the city list with the new city
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Button color="blue" onClick={() => setModalOpen(true)}>
        Add City
      </Button>
      <AddCityModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onAddCity={handleAddCity} />
      
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            City Data
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["City Name", "Category", "Created At", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cities.map((city, key) => {
                const className = `py-3 px-5 ${
                  key === cities.length - 1 ? "" : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={city._id}>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {city.name}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold"
                      >
                        {city.category} {/* Display category */}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {new Date(city.created_at).toLocaleDateString()}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        as="a"
                        href="#"
                        className="text-xs font-semibold text-blue-gray-600"
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
