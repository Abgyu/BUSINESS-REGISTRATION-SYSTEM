import mongoose from 'mongoose';

const businessRegSchema = new mongoose.Schema({
    business_name: { type: String, required: true },                     
    business_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessType', required: true }, 
    owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true },                
    city_id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },                  
    full_address: { type: String, required: true },                      
    description: { type: String },                                       
    payment_status: { type: Boolean, default: false },                  
    status: { 
        type: String,
        enum: ['Approved', 'Pending', 'Rejected'],
        default: 'Pending'                                              
    },
    created_at: { type: Date, default: Date.now }                      
});

// Create the model
const BusinessReg= mongoose.model('businessReg', businessRegistrationSchema);
export default BusinessRegistration;
