import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>POS Software | Smart Sale</h2></a>
                <p>Developed a Software to Manage Invantory System and Control Super Market.The best Software foraver.</p>
            </div>
            <div className="project">
                <a href="https://wolverine-house-f932.vercel.app/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://wolverine-house-f932.vercel.app/" target="_blank" rel="noreferrer"><h2>Wolverine House React Web</h2></a>
                <p>Designed, developed, and Deploy on Vercel.The best React app foraver.For US. </p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Tech Js Lib</h2></a>
                <p>Developed and released soon.Tech.js is my own technicals language to Developed Website, Mobile App.This Lib is powered by Adeel and use JavaScript.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Hero War Dom Web</h2></a>
                <p>This is an online educational platform that get username and password.This is Just Educational Parpose</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Chatt App</h2></a>
                <p>Chatt App is my First Web app using JavaScript and backend firebase realtime database.This App is always best and talk any person who install this app without any sim number</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>Bill Manager App</h2></a>
                <p>Create a Bill any type and Management your data very easy just click and click.This app is perfect and i use this app to manage my bills for my clothes shop.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;