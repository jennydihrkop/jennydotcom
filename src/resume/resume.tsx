import React from 'react';
import './Resume.css';
import { resumeData } from './resume-info';
import Avatar from '@mui/material/Avatar';
import picture from '../avatar.jpg'
import educationInfo from './education-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faWrench, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Footer from '../footer/footer';


const Resume = () => {

    const listJobs = resumeData.map((data:any) =>
    <div key={data.id}>
        <h4 className="companyName">{data.companyJobTitle}</h4>
        <p>{data.date}</p>
        <ul>
            {data.bullets.map((bullet:string) =>
            <li>{bullet}</li>
            )}
        </ul>
    </div>
  );

  const listSchools = educationInfo.map((school:any) =>
    <div key={school.id}>
        <h4 className="companyName">{school.name}</h4>
        <p>{school.date}</p>
        <span>{school.description}</span>
    </div>
  );

    return(
        <div className="App">
            <div className="App-header">
                <h1>Jenny Dihrkop</h1>
                <Avatar
                    className="avatar"
                    alt="Jenny Dihrkop"
                    src={picture}
                    sx={{ width: 200, height: 200 }}
                />
                <div className="contact-info">
                    <span><FontAwesomeIcon icon={faEnvelope} color="#61dafb"/> : jennydihrkop@gmail.com</span>
                    <span><a href="https://www.linkedin.com/in/jennydihrkop/"><FontAwesomeIcon icon={faLinkedin} color="#61dafb" size="lg"/></a></span>
                </div>
                <div className="container">
                    <div className="experience">
                        <h3><FontAwesomeIcon icon={faBriefcase} color="#61dafb" size="2x"/></h3>
                        <div>{listJobs}</div>
                    </div>
                    <div className="education">
                    <h3><FontAwesomeIcon icon={faGraduationCap} color="#61dafb" size="2x"/></h3>
                        <div>{listSchools}</div>
                    </div>
                </div>
                <div className="skills">
                <h3><FontAwesomeIcon icon={faWrench} color="#61dafb" size="2x"/></h3>
                    <p>React, TypeScript, Angular, Java, HTML, CSS, Spring Boot, CI/CD, BitBucket,
SQL, Agile, public speaking, event coordination, facilitation</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Resume;