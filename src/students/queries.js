let queries = {};

queries.getStudents = "SELECT * FROM students";

queries.getStudentById = (id) => "SELECT * FROM students WHERE id=" + id;

queries.checkEmailExists = (email) => "SELECT s FROM students s WHERE s.email='" + email + "'";

queries.createStudent = (name, email, age, dob) => "INSERT INTO students (name, email, age, dob) VALUES('" + name + "', '" + email + "', " + age + ", '" + dob + "')"

queries.removeStudent = (id) => "DELETE FROM students WHERE id=" + id;

queries.updateStudent = (id, name) => "UPDATE students SET name='" + name + "' WHERE id=" + id;

module.exports = queries;
