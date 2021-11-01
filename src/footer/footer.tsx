import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css'

const Footer = () => {

    return(
        <div className="footerDiv">
            <ul className="footerLinks">
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="https://www.linkedin.com/in/jennydihrkop/"><FontAwesomeIcon icon={faLinkedin} color="lightslategrey" size="lg"/></a></li>
            </ul>
            
        </div>
    )
}
export default Footer;
