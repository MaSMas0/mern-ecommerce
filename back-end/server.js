import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from './routes/productRoutes.js'

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server side");
});

app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(
  port,
  console.log(
    `Server is up and running in ${process.env.NODE_ENV} on http://localhost:${port}`
      .yellow
  )
);
