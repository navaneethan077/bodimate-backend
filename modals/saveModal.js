import mongoose from "mongoose";

const saveSchema = new mongoose.Schema({
    boardingId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    
}, {
    timestamps: true
});

const saveBoarding = mongoose.model('saveBoarding', saveSchema);
export default saveBoarding;