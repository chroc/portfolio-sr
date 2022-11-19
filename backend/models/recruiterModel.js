const mongoose = require('mongoose');

const recruiterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

const Recruiter = mongoose.model('Recruiter', recruiterSchema);

module.exports = Recruiter;