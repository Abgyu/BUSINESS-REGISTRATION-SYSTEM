import City from '../model/cityModel.js'; 


export const createCity = async (req, res) => {
    const { name } = req.body;

    try {
        const newCity = new City({ name });
        await newCity.save();
        res.status(201).json(newCity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getCities = async (req, res) => {
    try {
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getCityById = async (req, res) => {
    const { id } = req.params;

    try {
        const city = await City.findById(id);
        if (!city) return res.status(404).json({ message: 'City not found' });
        res.status(200).json(city);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateCity = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const city = await City.findByIdAndUpdate(id, { name }, { new: true });
        if (!city) return res.status(404).json({ message: 'City not found' });
        res.status(200).json(city);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const deleteCity = async (req, res) => {
    const { id } = req.params;

    try {
        const city = await City.findByIdAndDelete(id);
        if (!city) return res.status(404).json({ message: 'City not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
