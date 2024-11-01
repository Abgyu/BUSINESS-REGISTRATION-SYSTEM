import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique :true },
    created_at: { type: Date, default: Date.now } // Timestamp for creation
});

const Role = mongoose.model('Role', roleSchema);
export default Role;