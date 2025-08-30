import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "React",
  "React Native",
  "Node",
  "Next",
  "Express",
  "Vite",
  "Html",
  "Css",
  "JavaScript",
  "TypeScript",
  "NPM",
  "Electron"
];

const labelsSecond = [
    "Electron",
    "GitHub Actions",
    "Github",
    "E-Com",
    "MongoDB",
    "MongoDB Atlas",
    "Firebase",
    "Software",
    "Vercel",
    "Railway"
];

const labelsThird = [
    "POS Software",
    "Bill Manager App",
    "Chat App",
    "Github Upload Data API",
    "Hero War Dom Web",
    "Control Panel",
    "Code Editor",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have developed a Mori System Application as both PC software and a website. The system is designed to be fast, secure, and scalable, offering a seamless experience across different platforms. It includes a modern user interface, efficient backend structure, and smooth performance, ensuring reliability for everyday use. The application is built with a focus on cross-platform compatibility, optimized performance, and user-friendly design, making it suitable for both desktop and web users.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>To enhance the development and deployment process, I implemented DevOps practices and automation. Continuous Integration and Continuous Deployment (CI/CD) pipelines were set up for automated testing, building, and deployment, ensuring faster releases and reduced manual effort. Infrastructure automation and version control practices helped maintain consistency, scalability, and smooth collaboration throughout the development lifecycle.

This combination of modern development with DevOps and automation provides a robust, user-friendly, and future-ready solution.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <h3>Software developed</h3>
                    <p>I have successfully developed a Mori System Application as both PC software and a website, delivering a modern, reliable, and high-performance solution. The system has been designed with a strong focus on speed, security, and scalability, ensuring a smooth user experience across platforms.

It features an intuitive interface and a powerful backend architecture that work together to provide seamless functionality. By implementing best practices in development, automation, and DevOps, the project achieves faster deployment cycles, efficient testing, and consistent performance.

This achievement reflects not only my expertise in modern software development but also my ability to create cross-platform, user-friendly, and future-ready solutions that meet professional standards.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;