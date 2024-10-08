import express from "express";
import { connectUsingMongoose } from "./db.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

dotenv.config();

connectUsingMongoose();
const app = express();
app.use(cors());
const host = process.env.REACT_APP_FRONTEND_URL;

app.use(cors({ origin: host }));

const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);


app.listen(port, () => {
  console.log(`iNotebook app listening at http://localhost:${port}`);
});
