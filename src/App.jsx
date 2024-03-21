import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import All from './All';
import Fsd from './Fsd';
import Datascience from './Datascience';
import Cybersecurity from './Cybersecurity';
import Career from './Career';
function App() {
const courses = [
  {
    name:"Full-Stack Development Project",
    category:"Full Stack Development",
    image:"Full Stack/Full-Stack Development Project.jpg"
  },
  {
    name:"FULL-STACK-PYTHON",
    category:"Full Stack Development",
    image:"Full Stack/FULL-STACK-PYTHON.jpeg"
  },
  {
    name:"Java-Full-Stack",
    category:"Full Stack Development",
    image:"Full Stack/Java-Full-Stack.png"
  },
  {
    name:"Mern Fsd",
    category:"Full Stack Development",
    image:"Full Stack/Mern Fsd.png"
  },
  {
    name:"12 Real-World Data Science Examples Power Of Data Science",
    category:"Data Science",
    image:"Data science/12 Real-World Data Science Examples Power Of Data Science.png"
  },
  {
    name:"Data Science vs Data Analytics Best Career Choice in 2024",
    category:"Data Science",
    image:"Data science/Data Science vs Data Analytics Best Career Choice in 2024.png"
  },
  {
    name:"Roles and Responsibilities of a Data Scientist",
    category:"Data Science",
    image:"Data science/Roles and Responsibilities of a Data Scientist.png"
  },
  {
    name:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    category:"Data Science",
    image:"Data science/Top 10 High Paying Non-Coding Jobs in Data Science in 2024.png"
  },
  {
    name:"Cybersecurity Vs Ethical Hacking Top 10 Differences",
    category:"Cyber Security",
    image:"Cyber Scecurity/Cybersecurity Vs Ethical Hacking Top 10 Differences.png"
  },
  {
    name:"Non-Coding Jobs in Cybersecurity A Comprehensive Guide",
    category:"Cyber Security",
    image:"Cyber Scecurity/Non-Coding Jobs in Cybersecurity A Comprehensive Guide.png"
  },
  {
    name:"Cyber Scecurity/What Is Hacking Types of Hacking & More",
    category:"Cyber Security",
    image:"Cyber Scecurity/What Is Hacking Types of Hacking & More.png"
  }
]
const fullStack = courses.filter((course)=>course.category==="Full Stack Development")
const dataSceince = courses.filter((course)=>course.category==="Data Science")
const cyberSecurity = courses.filter((course)=>course.category==="Cyber Security")
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<All courses={courses}/>}/>
        <Route path='/fullstackdevelopment' element={<Fsd courses={fullStack}/>}/>
        <Route path='/datascience' element={<Datascience courses={dataSceince}/>}/>
        <Route path='/cybersecurity' element={<Cybersecurity courses={cyberSecurity}/>}/>
        <Route path='/career' element={<Career/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
