
import './App.css'

let arr = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "age": 21,
    "course": "Computer Science",
    "year": "Final Year",
    "skills": ["HTML", "CSS", "JavaScript", "React"],
    "email": "amit.sharma@example.com",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Neha Verma",
    "age": 20,
    "course": "Information Technology",
    "year": "3rd Year",
    "skills": ["Python", "Django", "SQL"],
    "email": "neha.verma@example.com",
    "isActive": true
  },
  {
    "id": 3,
    "name": "Rahul Singh",
    "age": 22,
    "course": "Electronics",
    "year": "Final Year",
    "skills": ["C", "C++", "Embedded Systems"],
    "email": "rahul.singh@example.com",
    "isActive": false
  },
  {
    "id": 4,
    "name": "Pooja Yadav",
    "age": 19,
    "course": "Mechanical",
    "year": "2nd Year",
    "skills": ["AutoCAD", "SolidWorks"],
    "email": "pooja.yadav@example.com",
    "isActive": true
  },
  {
    "id": 5,
    "name": "Rohit Kumar",
    "age": 21,
    "course": "Civil Engineering",
    "year": "Final Year",
    "skills": ["AutoCAD", "STAAD Pro"],
    "email": "rohit.kumar@example.com",
    "isActive": false
  },
  {
    "id": 6,
    "name": "Anjali Mishra",
    "age": 20,
    "course": "Computer Science",
    "year": "3rd Year",
    "skills": ["Java", "Spring Boot", "MySQL"],
    "email": "anjali.mishra@example.com",
    "isActive": true
  },
  {
    "id": 7,
    "name": "Vikas Patel",
    "age": 22,
    "course": "Information Technology",
    "year": "Final Year",
    "skills": ["React", "Node.js", "MongoDB"],
    "email": "vikas.patel@example.com",
    "isActive": true
  },
  {
    "id": 8,
    "name": "Sneha Gupta",
    "age": 19,
    "course": "Computer Science",
    "year": "2nd Year",
    "skills": ["C", "Data Structures"],
    "email": "sneha.gupta@example.com",
    "isActive": true
  },
  {
    "id": 9,
    "name": "Arjun Mehta",
    "age": 21,
    "course": "Electronics",
    "year": "3rd Year",
    "skills": ["Python", "IoT", "Raspberry Pi"],
    "email": "arjun.mehta@example.com",
    "isActive": false
  },
  {
    "id": 10,
    "name": "Kavita Joshi",
    "age": 22,
    "course": "Computer Science",
    "year": "Final Year",
    "skills": ["React", "Redux", "TypeScript"],
    "email": "kavita.joshi@example.com",
    "isActive": true
  }
]


let App =()=>{
  return( <div>
    <h1>Student Information </h1>
    <table border="1"> 
      <tr>
        <th>Student-ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Year</th>
        <th>Skills</th>
        <th>E-mail</th>
        <th></th>
      </tr>

      {
        arr.map((obj)=>{
          return ( <tr> 
            <td> {obj.id}</td>
            <td> {obj.name}</td>
            <td> {obj.age}</td>
            <td> {obj.course}</td>
            <td> {obj.year}</td>
            <td> {obj.skills}</td>
            <td> {obj.email}</td>
          </tr>)
        })
      }
    </table>

  </div>)
}

export default App
