import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Ip from "./dbSchema.js";

const router = express.Router();

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

app.use("/index.html", router);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected"))
    .catch((err) => console.log(err));
});

router.post("/", async (req, res) => {
  try {
    const my_ip = req.ip;
    const realIp = await Ip.create(my_ip);
    res.status(201).json(realIp);
    if (!mongoose.Types.ObjectId.isValid(my_ip)) {
      return res.status(404).send("no ip");
    }

    res.send(myIp);
  } catch (error) {
    console.log(error);
  }
});
