import './App.css';
import React from 'react'
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare, FaBuffer, FaHammer, FaGrinAlt, FaFileAlt, FaGithub, FaLink, FaTrophy, FaHome} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'



function App() {
  let Component; 
  switch (window.location.pathname) {
    case "/":
      Component = <Home></Home> 
      break; 
    case "/Projects":
      Component = <Projects></Projects> 
      break;
    case "/skills":
      Component = <Skills></Skills>
      break  

    case "/Resume":
      Component = <Resume></Resume>
      break 
    case "/Aboutme":
      Component = <AboutMe></AboutMe>
  }
  return (
    <>
    <Navbar /> 
    {Component}
    </>
  );
}

function Navbar() { 
  return (
    <nav className="nav">
      <ul>
        <li><a href="/" className="site-title"><FaHome/> Home</a></li>
      </ul>
      <ul>
        <li>
          <a href="/Aboutme"><MdContacts/> About Me</a>
        </li>
        <li>
          <a href="/Projects"><FaBuffer/> Projects</a>
        </li>
        <li>
        <a href="/skills"><FaHammer/> My Skills</a>
        </li>
        <li>
          <a href="/Resume"><FaFileAlt/> Résumé</a>
        </li>
      </ul>
    </nav>
  )
}

function Skills() {
  return ( 
    <React.Fragment>
      <div>
      <br/>
      <h2>Skills</h2>
      <p>Here is a showcase of all my technical skills I have built through the development of my projects.</p>
      </div>
      <h2>Programming Languages</h2>
      <div>
      <p>
        <ul>
          <li>4 years of experience in Python <FaPython /></li>
          <li>3 years experience in HTML, CSS and JavaScript <FaJs/></li>
          <li>2 years experience in Java <FaJava/></li>
          <li>Project experience working with SQL <FaDatabase/></li>
          <li>Currently learning C++/C</li>
        </ul>
      </p>
      </div>
      <div>
        <h2>Technical Experience</h2>
        <p>
          <ul>
            <li>Git and Version Control Procedures <FaGitSquare/></li>
            <li>Web Development</li>
            <ul>
              <li>Frontend Frameworks - ReactJS <FaReact/></li>
              <li>Backend Frameworks - Django</li>
            </ul>
            <li>Data Structures</li>
            <ul>
              <li>Arrays & Hashmaps</li>
              <li>Stacks & Queues</li>
              <li>Singly Linked Lists</li>
            </ul>
            <li>Algorithms</li>
            <ul>
              <li>Big O Analysis and Algorithmic Complexity</li>
              <li>Linear and Binary Search</li>
              <li>Insertion, Bubble, Quick, etc. Sorting Algorithms</li>
            </ul>
            <li>Programming Paradigms</li>
            <ul> 
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
            </ul>
            <li>Basic arduino commands</li>
            <li>Basic understanding of computer networks (i.e. TCP/IP Protocol)</li>
        </ul>
        </p>
      </div>
      <div>
        <h2>Languages</h2>
        <p id="bottomP">
          <ul>
            <li>Native in oral and written English</li>
            <li>Native in oral Chakma</li>
            <li>Intermediate/working proficiency in oral Bangla</li>
            <li>Intermediate/working proficiency in oral and written French</li>
          </ul>
        </p>
      </div>

    </React.Fragment>
  )
}

function Projects() { 
  return ( 
    <React.Fragment>
      <div>
        <br/>
        <h2>My Work</h2>
        <p>Here is a showcase of all my projects from beginning to end. I have many interests within technology including but not limited to: web development, machine learning, computer vision, databases, and digital electronics.</p>
        <h2>Awards and Certifications</h2>
        <p>
          <ul>
            <li>2nd place in The 2022 <a id="pLink" href="https://devpost.com/software/propel-r52yae">Queens University Summer Computing Challenge</a></li>
            <li>Silver medalist in the 2023 TDSB skills competition <br/> within the coding subcategory</li>
          </ul>
        </p>
        <h2>Projects</h2>
      </div> 
      <br/>
      {/* Card table. Each card row has 3 items. There is an image, a title, a description and buttons to external links. */ }
      {/* First Row */ }
      <div style={{display: 'flex', justifyContent: 'center', gap: '3rem'}}>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://github.com/AnindD/URL-Shortener/blob/master/FrontpageURLShortener.png?raw=true" className="img-fluid"/>
          <Card.Body>  
            <Card.Title id="ProjectTitle">URL Shortener <FaLink/></Card.Title>
            <Card.Text id="ProjectDescription">URL Shortener is my first web development project using Django. It is a website which allows users to enter URLs and shorten them. The website will save the original link into a database and create a shortened randomly generated custom link which will redirect you to the website you would like.</Card.Text>
              <Button id="ProjectButton" href="https://github.com/AnindD/URL-Shortener" variant="outline-dark">View On Github <FaGithub/></Button>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/186/089/datas/gallery.jpg" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="ProjectTitle">Propel</Card.Title>
            <Card.Text id="AwardSection"><br/><b>2nd Place In QSCC Hackathon 2022 <FaTrophy/></b><br/></Card.Text>
            <Card.Text id="ProjectDescription">Propel is an educational gaming application designed to help children and people who suffer from the condition of dyscalculia. The application was mainly constructed using Pygame, a Python library used for game development. Things such as music, text, buttons, games, timers, etc. were made using Pygame. For the login/create account system we used MySQL, a data management system to hold and save data within the game.</Card.Text>
            <Button id="ProjectButton" href="https://github.com/AnindD/Queens-Programming-Challenge" variant="outline-dark">View on Github <FaGithub/></Button>
            <Button id="ProjectButton" href="https://devpost.com/software/propel-r52yae" variant="outline-dark">View on Devpost <SiDevpost/></Button>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://www.deque.com/wp-content/uploads/2019/10/cognitive.png" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="ProjectTitle">Cognition</Card.Title>
            <Card.Text id="ProjectDescription">Cognition is a discord bot geared towards helping students with their academics and other tasks related to school.</Card.Text>
            <Button id="ProjectButton" href="https://github.com/AnindD/Mike-Anindit-s-Discord-Bot-" variant="outline-dark">View on Github <FaGithub/></Button>
          </Card.Body>
        </Card>
      </div>
      {/* Second Row */ }
      <div style={{display: 'flex', justifyContent: 'center', gap: '3rem'}}>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/543/144/datas/gallery.jpg" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="ProjectTitle">Predator vs Casualty</Card.Title>
            <Card.Text id="AwardSection"><br/><b>Submitted to 2023 STEMist Hackathon <FaTrophy/></b><br/></Card.Text>
            <Card.Text id="ProjectDescription">Predator vs Casualty is an evolution simulator powered through neural networks and deep learning.</Card.Text>
            <Button id="ProjectButton" href="https://github.com/RamyPoe/PredatorPrey" variant="outline-dark">View on Github <FaGithub/></Button>
            <Button id="ProjectButton" href="https://devpost.com/software/predators-vs-casualty?ref_content=user-portfolio&ref_feature=in_progress" variant="outline-dark">View on Devpost <SiDevpost/></Button>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1491484815100-6f2890d04007?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="AwardSection">Coming Soon...</Card.Title>
            <Card.Text id="ProjectDescription">More to come soon :)</Card.Text>
          </Card.Body>
        </Card>
        <Card id="ProjectCard">
          <Card.Img variant="top" src="https://static.billygraham.org/sites/billygraham.org/uploads/pro/2016/09/28110556/joshua-earle-183442-unsplash.jpg" className="img-fluid"/>
          <Card.Body>
            <Card.Title id="AwardSection">Coming Soon...</Card.Title>
            <Card.Text id="ProjectDescription">More to come soon :)</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <p id="bottomP"></p>
    </React.Fragment>
  )
}

function Home() {
  return (
    <div class="hero">
        <h1 class="frontpageName">ANINDIT DEWAN</h1>
    </div>
  )
}

function Resume() {
  const embedURL = "https://drive.google.com/file/d/1h3JfaTKGaM3SwupQxhIJOYX0QG0ZGeeL/preview";
  const downloadURL = "https://drive.google.com/file/d/1h3JfaTKGaM3SwupQxhIJOYX0QG0ZGeeL/view?usp=sharing"; 
  return (
    <React.Fragment>
      <div className="container">
        <br/>
        <h2>Resume</h2>
        <p><a href={downloadURL}>Click Here To Download PDF</a></p>
        <iframe id="resumePDF" src={embedURL} title="My Resume"></iframe>
        
      </div>
    </React.Fragment>
  )
}

function AboutMe() {
  const biographyImageLink = "https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  return (
    <React.Fragment>
      <br/>  
      <Image id="biographyImage" src={biographyImageLink} fluid/>
      <br/>  
      <h1 id="aboutMePage">About</h1>
      <p><b>Hello!</b></p>
      <p>My name is Anindit / <b>Uh-nin-dit</b>, and I am currently studying Electrical and Computer Engineering (ECE) at the University of Toronto. I have interests across a wide range of computer engineering and computer science topics. My primary interests are in machine learning, web development, and firmware/digital electronics. I have done projects on each as shown in my projects section on my website. Additionally, I am interested in combining the three in interdiciplinary projects in the future. I have previously worked at CodeNinjas Leaside as a coding instructor.</p>
      <p>Currently I am looking for internships or software engineering work experience for the summer of 2024.</p>
    </React.Fragment>
  )
}

export default App;
