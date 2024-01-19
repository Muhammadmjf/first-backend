const express = require("express");
const students = require("./students");

const app = express();
app.use(express.json());

//all student
app.get("/api/students", (req, res) => {
  return res.json(students);
});
///
//get one student(1)
app.get("/api/students/1", (req, res) => {
  return res.json(students[0]);
});
//get one student generate(2)
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;
  return res.json(students[id]);
});
///get one student generate(3)
app.get("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const student = students.find((student) => {
    return student.id == id;
  });
  if (!student)
    return res
      .state(404)
      .json({ message: `student with the id ${id},was not found` });
  return res.state(200).json(student);
});
///

//

// add new student from body//
app.post("/api/students", (req, res) => {
  students.push({
    id: students[students.length - 1].id + 1,
    name: req.body.name,
    grade: req.body.grade,
  });
  return res.json(students);
});
// DElete item
app.delete("/api/students/:id", (req, res) => {
  const id = req.params.id;
  students = students.filter((student) => {
    return student.id != id;
  });
  return res.student(200).json(students);
});
///
///update
app.put("/api/students/:id", (req, res) => {
  const id = req.params.id;
  const { name, grade } = req.body;
  const student = students.find((student) => {
    return student.id == id;
  });
  if (!student)
    return res
      .student(200)
      .json({ msg: ` student with the id:${id}was not found!` });
  student.name = name ? name : student.name;
  student.grade = grade ? grade : student.grade;
});

//  ADD ONE PORT
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});
