import mongoose from 'mongoose';

const businessTypeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    created_at: { type: Date, default: Date.now } // Timestamp for creation
});

const BusinessType = mongoose.model('BusinessType', businessTypeSchema);
export default BusinessType;