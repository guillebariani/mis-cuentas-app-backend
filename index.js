const express = require("express");
const app = express();

const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require('cors')

//const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
//const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, () => {
    console.log("[MIS-CUENTAS-APP] Connected to MongoDB Atlas Cluster!");
});

// Middleware 
app.use(express.json());
app.use(helmet())
app.use(morgan("common"));
app.use(cors())

//app.use("/api/users", userRoute);
app.use("/api/v1/auth", authRoute);
//app.use("/api/posts", postRoute);

app.listen(8800, () => {
    console.log("[MIS-CUENTAS-APP] Backend server is running!");
})