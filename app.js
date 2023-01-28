import express from "express";
import { set, connect } from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/api/user",router);//user route
app.use("/api/blog",blogRouter) //blog route

//PW: ozwXlL15zNNWkCVN
set("strictQuery",false);
connect(
"mongodb+srv://admin:ozwXlL15zNNWkCVN@cluster0.k9atbio.mongodb.net/SocMed?retryWrites=true&w=majority"
  )
  .then(() => app.listen(PORT))
  .then(() => console.log(`Connected to database and port=${PORT}`))
  .catch((err) => console.log(err));
