import express from "express";
import routeHandler from "./middlewares/routeHandler";
import errorHandler from "./middlewares/errorHandler";
import dotenv from 'dotenv'
import connectDB from './config/db'
import cors from 'cors'
import router from './routes/notes.route'

dotenv.config()
connectDB()


const app = express()
app.use(express.json())

app.use(cors())

app.use('/api', router); // Notes routes
// app.use('/api', authRoutes);


// app.use(routeHandler);
// app.use(errorHandler);



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    
})