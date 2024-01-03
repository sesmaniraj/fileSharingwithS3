import express from "express";
import imageRoutes from "./routes/route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//routes
app.use("/api", imageRoutes);

//server port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
