const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is runinng on the ${port}`));
