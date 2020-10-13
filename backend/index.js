import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { register } from './src/handlers/index.js';

// App config
const app = express();

// Middlewares
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, err => {
  if (err) throw err;

  register(app);

  // Listener
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
  });
});
