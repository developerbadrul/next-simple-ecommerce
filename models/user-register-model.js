import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    confirm: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// Middleware to ensure the password and confirm fields match
userSchema.pre('save', function (next) {
    if (this.password !== this.confirm) {
        const err = new Error('Passwords do not match');
        next(err);
    } else {
        next();
    }
});

// Create the model
const UserModel = mongoose.models.User ?? mongoose.model('users', userSchema);

export default UserModel;