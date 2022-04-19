import mongoose from "mongoose";

const ipSchema = mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
});

const Ip = mongoose.model("ip", ipSchema);
export default Ip;
