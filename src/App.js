import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare, FaBuffer, FaHammer, FaGrinAlt, FaFileAlt, FaGithub, FaLink, FaTrophy, FaHome } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import batteryMeterPCBImg from './pictures/batterychargerpcb.png';
import RFAmplifierImg from './pictures/rfamplifier.png'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personalportfolioproject" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/notavailable" element={<NotAvailable />} />
      </Routes>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/personalportfolioproject" className="site-title"><FaHome /> Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/aboutme"><MdContacts /> About Me</Link></li>
        <li><Link to="/projects"><FaBuffer /> Projects</Link></li>
        <li><Link to="/skills"><FaHammer /> My Skills</Link></li>
        <li><Link to="/resume"><FaFileAlt /> Résumé</Link></li>
      </ul>
    </nav>
  )
}

function Skills() {
  return (
    <React.Fragment>
      <div>
        <br />
      </div>
      <div>
        <h2>Electrical / Computer Engineering</h2>
        <p>
          <b>Printed Circuit Board (PCB) Design</b>
          <ul>
            <li>Altium / KiCAD</li>
            <li>AnSyS Systems Toolkit (STK)</li>
            <li>LTSpice</li>
            <li>Oscilloscope & Spectrum Analyzer Proficiency</li>
            <li>Assembling & Solddering Proficiency</li>
          </ul>
          <b>Embedded Systems and Firmware</b>
          <ul>
            <li>Arduino</li>
            <li>ESP32</li>
            <li>ESP-IDF</li>
            <li>RISC-V Assembly</li>
          </ul>
        </p>
      </div>
      <h2>Software</h2>
      <div>
        <p>
          <b>Programming Languages</b>
          <ul>
            <li>4 years of experience in Python <FaPython /></li>
            <li>3 years of experience in C/C++</li>
            <li>1 year of experience in RISC-V Assembly</li>
          </ul>
          <b>Software Frameworks</b>
          <ul>
            <li>Git and Version Control Procedures <FaGitSquare /></li>
            <li>Web Development</li>
            <ul>
              <li>Frontend Frameworks - ReactJS <FaReact /></li>
              <li>Backend Frameworks - Django</li>
            </ul>
          </ul>
          <b>Software Concepts</b>
          <ul>
            <li>Data Structures (Arrays, Hashmaps, Stacks, Queues, & Linked List)</li>
            <li>Algorithms (Big O, Searching, Sorting, etc.)</li>
            <li>Programming Paradigms</li>
            <ul>
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
            </ul>
          </ul>
        </p>
      </div>

    </React.Fragment>
  )
}

function Projects() {
  const grabNGlide = "https://devpost.com/software/grab-n-glide";
  const grabNGlideImg = "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/772/265/datas/gallery.jpg";
  const batteryMeterPCB = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL8ctKb9WCIxSnpkyzXvKlTxQ6wKCKjuikA&s";
  const urlShortener = "https://github.com/AnindD/URL-Shortener";
  const urlShortenerImg = "https://github.com/AnindD/personalportfolioproject/blob/master/pictures/urlshortener.png?raw=true";
  const portfolio = "https://github.com/AnindD/personalportfolioproject";
  const portfolio_img = "https://github.com/AnindD/personalportfolioproject/blob/master/pictures/portfolio.png?raw=true";
  const propel = "https://devpost.com/software/propel-r52yae";
  const propelImg = "https://github.com/AnindD/personalportfolioproject/blob/master/pictures/propel.png?raw=true";
  const cognition = "https://github.com/AnindD/Mike-Anindit-s-Discord-Bot-";
  const cognitionImg = "https://www.deque.com/wp-content/uploads/2019/10/cognitive.png";
  const predator_vs_casualty = "https://devpost.com/software/predators-vs-casualty?ref_content=user-portfolio&ref_feature=in_progress";
  const predator_vs_casualtyImg = "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/543/144/datas/gallery.jpg";
  const projectile_motion_game = "https://github.com/AnindD/ICS3U1-Culminating";
  const projectile_motion_gameImg = "https://github.com/AnindD/personalportfolioproject/blob/master/pictures/projectilemotion.png?raw=true";
  const esp_32_project_link = "https://github.com/AnindD/Smart-Light-ESPIDF";
  const esp_32_project_img = "https://camo.githubusercontent.com/f6ce6047da64e9d5bb38787a86844a79902988b93af9f249448e272f53d217ad/68747470733a2f2f69332e7974696d672e636f6d2f76692f55393479464f734f46716f2f6d617872657364656661756c742e6a7067";

  return (
    <React.Fragment>
      <h3 id="CardTitle" >Hardware and Embedded Systems</h3>
      <div id="CardGroupTwo">
        <a href={grabNGlide} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={grabNGlideImg}
              className="card-image"
            />
          </Card>
        </a>
        <a href={esp_32_project_link} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={esp_32_project_img}
              className="card-image"
            />
          </Card>
        </a>
        <Link to="/notavailable">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={batteryMeterPCBImg}
              className="card-image"
            />
          </Card>
        </Link>
        <Link to="/notavailable">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={RFAmplifierImg}
              className="card-image"
            />
          </Card>
        </Link>
      </div>
      <h3 id="CardTitle">Web Development</h3>
      <div id="CardGroupTwo">
        <a href={urlShortener} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={urlShortenerImg}
              className="card-image"
            />
          </Card>
        </a>
        <a href={portfolio} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={portfolio_img}
              className="card-image"
            />
          </Card>
        </a>
      </div>
      <h3 id="CardTitle">Other Software Projects</h3>
      <div id="CardGroupThree">
        <a href={propel} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={propelImg}
              className="card-image"
            />
          </Card>
        </a>
        <a href={cognition} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={cognitionImg}
              className="card-image"
            />
          </Card>
        </a>
        <a href={predator_vs_casualty} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={predator_vs_casualtyImg}
              className="card-image"
            />
          </Card>
        </a>
      </div>
      <br />
      <div id="CardGroupThree">
        <a href={projectile_motion_game} target="_blank">
          <Card id="ProjectCard">
            <Card.Img
              variant="top"
              src={projectile_motion_gameImg}
              className="card-image"
            />
          </Card>
        </a>
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

function NotAvailable() {
  return (
    <p>Unfortunatley this project cannot be viewed publically. If you are a company looking at my portfolio please feel free to ask during my interview.</p>
  )
}

function Resume() {
  const embedURL = "https://drive.google.com/file/d/1QBZsvXRD3dB4vZZSWX7Dmf-Cfbs_kDcJ/preview";
  const downloadURL = "https://drive.google.com/file/d/1QBZsvXRD3dB4vZZSWX7Dmf-Cfbs_kDcJ/view?usp=sharing";
  return (
    <React.Fragment>
      <div className="container">
        <br />
        <h2>Resume</h2>
        <p>I may adjust my resume to highlight the skills most relevant to a specific job. But, the following is a general overview of my qualifications.</p>
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
      <br />
      <Image id="biographyImage" src={biographyImageLink} fluid />
      <br />
      <h1 id="aboutMePage">About</h1>
      <p><b>Hello!</b></p>
      <p>My name is Anindit, and I am currently pursuing a degree in Electrical and Computer Engineering (ECE) at the University of Toronto. My primary interest is in computer hardware, printed circuit board (PCB) design and embedded systems/firmware/low level programming.</p>
      <p>I have completed a number of projects within each domain, shown on the projects tab of my website, and taking/taken coursework related to these topics such as: analog electronics (ECE331), hardware design and communication (ECE295), operating systems (ECE344), computer organization (ECE243), and etc. </p>
      <p>Currently, I am looking for internships for the summer of 2026 in power engineering, printed circuit board design, hardware engineering, or embedded systems/firmware development.
        If you're interested in discussing potential opportunities,
        please reach out to me via <a href="mailto:anindit.dewan@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/anindit-dewan-3221a2326" target="_blank">Linkedin</a>.</p>
    </React.Fragment>
  )
}

export default App;
