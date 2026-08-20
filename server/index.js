import app from "./app.js"
import connectDB from "./config/db.js"
const port = 5000
const startServer = async()=>{
    await connectDB()
app.listen(port,()=>{console.log(`server is running on port ${port}`)})

}
startServer()