// import app from "./app.js"
// import connectDB from "./config/db.js"
// const port = 5000
// const startServer = async()=>{
//     await connectDB()
// app.listen(port,()=>{console.log(`server is running on port ${port}`)})

// }
// startServer()




import app from "./app.js"
import connectDB from "./config/db.js"

// Use Render's environment port, or fallback to 5000 for local testing
const port = process.env.PORT || 5000

const startServer = async () => {
  await connectDB()
  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  })
}

startServer()