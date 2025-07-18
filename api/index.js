import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js"
import cors from 'cors'

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected')
  }).catch((err) => {
    console.log(err);
  })

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use(express.json());


app.use('/api/auth', authRouter);
app.use('/api/user',userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000!!')
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
});