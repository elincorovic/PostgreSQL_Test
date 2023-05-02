const express = require("express")
const studentRoutes = require("./src/students/routes")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/students", studentRoutes)

app.listen(3000, () => {
    console.log("app listening on port 3000, http://localhost:3000")
})