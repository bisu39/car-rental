import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/connectDB.js';
import cros from 'cors'
import userRoute from './routes/userRoute.js';
import errorHandler from './middleWares/errorHandler.js';

const app = express();
connectDB();
const port = process.env.PORT || 4000

// middlewares
//enabling cross origin request
app.use(cros())

//json data parsing to object and adding to req.body
app.use(express.json());

//user route
app.use('/user',userRoute)

// error handler middleware
app.use(errorHandler)
app.listen(port, () => console.log(`backend is listening with port:${port}`));


