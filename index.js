import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 5000;
const app = express();

import TestRouter from "./Routes/test.js";
import CourseRouter from "./Routes/courses.js";
import UnitsRouter from "./Routes/unit.js";
import LessonRouter from "./Routes/lessons.js";
import UserProgressRouter from "./Routes/userprogress.js";

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(TestRouter);
app.use(UnitsRouter);
app.use(LessonRouter);
app.use("/api/courses", CourseRouter);
app.use("/api/userProgress", UserProgressRouter);

const getConnectToDatabase = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://maro:VBP1ACAwuEgEySEj@cluster0.3rhla.mongodb.net/Duolingo"
      )
      // mongodb+srv://maro:VBP1ACAwuEgEySEj@cluster0.3rhla.mongodb.net/
      .then((data) => {
        if (data) console.log("Done Connect To Database");
      });
  } catch (error) {
    console.error(`Error From Connect To Data: ` + error.message);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  console.log("Done Connect Server");
  getConnectToDatabase();
});
