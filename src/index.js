import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR:", error);
//   }
// })();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED!!!", err);
  });
