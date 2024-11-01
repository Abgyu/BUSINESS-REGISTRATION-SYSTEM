
// import validator, { isLowercase } from "validator";
import mongoose from 'mongoose';
import { type } from "os";


const userSchema = new mongoose.Schema({

    full_name: { type: String, required: true },

    email :
    {
        type : String,
        unique : true,
        required : [true , "Email is required"]
    },

    password_hash: 
    { 
         type : String,
         required: [true , "Password is required"],
         minlength : [true , "password must not be less than 8 characters"]
    },

    role_id: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role', 
        required: true 
    },

    created_at: 
    { 
        type: Date, 
        default: Date.now 
    } 
});

const User = mongoose.model('User', userSchema);
export default User;
