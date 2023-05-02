const pool = require("../../db")
const queries = require("./queries")

let controllers = {}

controllers.getStudents = (req, res) => {
    pool.query(queries.getStudents, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

controllers.getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById(id), (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

controllers.createStudent = (req, res) => {
    const {name, email, age, dob} = req.body
    console.log(email)
    pool.query(queries.checkEmailExists(email), (error, results) => {
        if (results.rows.length > 0) {
           res.send("Email already exists") 
        } else {
            pool.query(queries.createStudent(name, email, age, dob), (error, results) => {
                if(error) throw error
                res.status(201).send("Student created successfully")
            })
        }
    })
}

controllers.removeStudent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById(id), (error, results) => {
        const noStudentFound = !results.rows.length
        if(noStudentFound) {
            res.send("Student does not exist in the database")
        } else {
            pool.query(queries.removeStudent(id), (error, results) => {
                if(error) throw error
                res.status(201).send("Student deleted sucessfully")
            })
        }
    })
}

controllers.updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body
    pool.query(queries.getStudentById(id), (error, results) => {
        const noStudentFound = !results.rows.length
        if (noStudentFound) {
            res.send("Student does not exist in the database")
        } else {
            pool.query(queries.updateStudent(id, name), (error, results) => {
                if(error) throw error
                res.status(201).send("Student updated successfully")
            })
        }
    })
}

module.exports = controllers