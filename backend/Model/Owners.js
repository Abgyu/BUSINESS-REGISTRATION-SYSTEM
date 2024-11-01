import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    passport_number: { type: String },
    image: { type: String },
    created_at: { type: Date, default: Date.now } // Timestamp for creation
});

const Owner = mongoose.model('Owner', ownerSchema);
export default Owner;
