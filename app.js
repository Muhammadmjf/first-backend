const express = require("express");
const data = require("./data");
const app = express();

app.get("/api/products", (req, res) => {
  return res.json(data);
});

// app.put("/api/products", (req, res) => {
//     return res.json(data);
//   });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});

// //this new
// app.use(express.json());
// //this new

// app.post("/api/students",(req,res)=>(

//     console.get(req.body);
//     students.push({
//         id: students[students.length-1].id+1,
//         name:req.body.name,
//         grade:req.body.grade,
//     });
//     return res.json(students);
// ));
// //this new

// app.get("/api/students/id",(req.res)=>{
//     const.id=req.params.id;
//     const student=students.find((student)=>{
//         return student.id ==id
//     });
//     if(!student)
//     return res.state(404).json({message:`student with the id ${id},was not found`});
// return res.state(200).json(student);
// });
