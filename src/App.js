import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaPython, FaJs, FaJava, FaDatabase, FaReact, FaGitSquare, FaBuffer, FaHammer, FaGrinAlt, FaFileAlt, FaGithub, FaLink, FaTrophy, FaHome} from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { MdContacts } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


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
      </Routes>
    </Router>
  );
}

function Navbar() { 
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/personalportfolioproject" className="site-title"><FaHome/> Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/aboutme"><MdContacts/> About Me</Link></li>
        <li><Link to="/projects"><FaBuffer/> Projects</Link></li>
        <li><Link to="/skills"><FaHammer/> My Skills</Link></li>
        <li><Link to="/resume"><FaFileAlt/> Résumé</Link></li>
      </ul>
    </nav>
  )
}

function Skills() {
  return ( 
    <React.Fragment>
      <div>
      <br/>
      </div>
      <h2>Programming Languages</h2>
      <div>
      <p>
        <ul>
          <li>4 years of experience in Python <FaPython /></li>
          <li>3 years experience in HTML, CSS and JavaScript <FaJs/></li>
          <li>2 years experience in Java <FaJava/></li>
          <li>1 year experience in SQL <FaDatabase/></li>
          <li>1 year experience in C/C++</li>
        </ul>
      </p>
      </div>
      <div>
        <h2>Technical Experience</h2>
        <p>
          <b>Electrical & Embedded Systems</b>
          <ul>
            <li>Altium</li>
            <li>AnSyS Systems Toolkit (STK)</li>
            <li>Arduino</li>
          </ul>
          <b>Software</b>
          <ul>
            <li>Git and Version Control Procedures <FaGitSquare/></li>
            <li>Web Development</li>
            <ul>
              <li>Frontend Frameworks - ReactJS <FaReact/></li>
              <li>Backend Frameworks - Django</li>
            </ul>
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
  const batteryMeterPCBImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaFr9h97qTh1z-KhhmFDC0AySgsOfDvbvlw&s"; 
  const batteryMeterPCB = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDL8ctKb9WCIxSnpkyzXvKlTxQ6wKCKjuikA&s";
  const urlShortener = "https://github.com/AnindD/URL-Shortener";
  const urlShortenerImg = "https://media.discordapp.net/attachments/748183545297502269/1278853386938089512/FrontpageURLShortener-300x300.png?ex=66d25087&is=66d0ff07&hm=0adbb8422fe9af4071896cc44cfc6354be32acf153973caf72a7d331e7b0521f&=&format=webp&quality=lossless"; 
  const portfolio = "https://github.com/AnindD/personalportfolioproject";
  const portfolio_img = "https://media.discordapp.net/attachments/748183545297502269/1278854157675008023/download_1.png?ex=66d2513f&is=66d0ffbf&hm=96093f3774ad7100304d28474842703fb22ede64f2cd74de798fcd41382deca0&=&format=webp&quality=lossless&width=592&height=592";
  const propel = "https://devpost.com/software/propel-r52yae"; 
  const propelImg = "https://media.discordapp.net/attachments/748183545297502269/1278854950897713213/image.png?ex=66d251fc&is=66d1007c&hm=92592cbfb5a502a07aef3d968617405e29e433fbfcbe2d4c91c56d8d494ece48&=&format=webp&quality=lossless";
  const cognition = "https://github.com/AnindD/Mike-Anindit-s-Discord-Bot-"; 
  const cognitionImg = "https://www.deque.com/wp-content/uploads/2019/10/cognitive.png"; 
  const predator_vs_casualty = "https://devpost.com/software/predators-vs-casualty?ref_content=user-portfolio&ref_feature=in_progress"; 
  const predator_vs_casualtyImg = "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/543/144/datas/gallery.jpg";
  const projectile_motion_game = "https://github.com/AnindD/ICS3U1-Culminating"; 
  const projectile_motion_gameImg = "https://media.discordapp.net/attachments/748183545297502269/1278893447624917013/image.png?ex=66d275d6&is=66d12456&hm=b6b5bd212ccd9cfc17a4d77ace24e1b190c62576e6825d1cb92008e47893c22c&=&format=webp&quality=lossless"; 
  return ( 
    <React.Fragment>
      <h3>Hardware Projects</h3>
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
        <a href={batteryMeterPCB} target="_blank">
          <Card id="ProjectCard">
            <Card.Img 
              variant="top" 
              src={batteryMeterPCBImg}
              className="card-image"
            />
          </Card>
        </a>
      </div>
      <h3>Web Development Projects</h3>
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
      <h3>Other Software Projects</h3>
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
      <br/>
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

function Resume() {
  const embedURL = "https://docs.google.com/document/d/1WVqqVdmwMdr8KTbDK3OFBkjq2n0hMiVI5T_yGuEblrM/preview#heading=h.5x0d5h95i329";
  const downloadURL = "https://docs.google.com/document/d/1WVqqVdmwMdr8KTbDK3OFBkjq2n0hMiVI5T_yGuEblrM/edit?usp=sharing"; 
  return (
    <React.Fragment>
      <div className="container">
          <br/>
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
        <br/>  
        <Image id="biographyImage" src={biographyImageLink} fluid/>
        <br/>  
        <h1 id="aboutMePage">About</h1>
        <p><b>Hello!</b></p>
        <p>My name is Anindit, and I am currently pursuing a degree in Electrical and Computer Engineering (ECE) at the University of Toronto. My primary interest is in topics related to electronic hardware design, such as PCBs  and FPGAs. Alongside my hardware interests, I have a diverse background in software projects. I've developed websites, Discord bots, games, and touched a bit into machine learning too.</p>
        <p>Currently, I am looking for internships for the summer of 2025 in electronic design or software engineering. 
          If you're interested in discussing potential opportunities, 
          please reach out to me via <a href="mailto:anindit.dewan@gmail.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/anindit-dewan-3221a2326" target="_blank">Linkedin</a>.</p>    
    </React.Fragment>
  )
}

export default App;
