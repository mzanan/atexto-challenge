import mongoose from "mongoose";

const audioSchema = mongoose.Schema({
    name: String,
    url: String,

}, {
    timestamps: true,
});

export default mongoose.model("audios", audioSchema);