import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now } // Timestamp for creation
});

const City = mongoose.model('City', citySchema);
export default City;