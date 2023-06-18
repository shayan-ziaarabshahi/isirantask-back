import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
import { createServer } from "http"
import routes from './api/routes.js'



dotenv.config()

mongoose.connect(process.env.MONGODB_URI || "",
   {
      useNewUrlParser: true
   }
);
export const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error: "));
db.once("open", function () {
   console.log("db Connected successfully");
});


const app = express()
const httpServer = createServer(app);


app.use(cors({
   origin: '*',
   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
   credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



/* routes start */
app.use('/api', routes)


const port = process.env.PORT || 5000
httpServer.listen(port, () => console.log(`server started on port ${port}`))