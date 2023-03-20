const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
})

//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", userRoute)

app.listen(9800,()=> {
    console.log("Yo! backend server running")
                    }) 


MONGO_URL = mongodb+srv://admin:Hiy1317@cluster0.iqisjuh.mongodb.net/?retryWrites=true&w=majority
