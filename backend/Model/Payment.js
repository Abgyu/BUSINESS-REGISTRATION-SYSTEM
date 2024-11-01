import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
    amount: { type: Number, required: true },
    payment_method: { type: String, required: true },
    payment_status: { type: String },
    created_at: { type: Date, default: Date.now } 
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
