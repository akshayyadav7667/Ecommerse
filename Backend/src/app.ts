import express from 'express'
import userRoutes from './routes/user.js'
import { connectDB } from './utils/features.js';
import { errorMiddleWare } from './middlewares/error.js';

const PORT = 9000;
connectDB();
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/v1/user", userRoutes)


app.use(errorMiddleWare);

app.listen(PORT, () => {
    console.log(`Server is listing on Port ${PORT}`)
})