const express = require("express")
const router = express.Router()
const controllers = require("./controllers")

router.get("/", controllers.getStudents)

router.get("/:id", controllers.getStudentById)

router.post("/", controllers.createStudent)

router.delete("/:id", controllers.removeStudent)

router.put("/:id", controllers.updateStudent)

module.exports = router