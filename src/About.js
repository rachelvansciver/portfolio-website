import React from 'react';
import BoopAnimation from "./BoopAnimation";
import {GrGithub} from "react-icons/all";
import {GrLinkedin} from "react-icons/all";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseEnter: false,
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }
    handleMouseEnter(){
        this.setState(prevState => ({
            mouseEnter: !prevState.mouseEnter
        }));
    }
    render(){
        return(
            <div className = "about-container">
                <h1>Who is <em>Rachel Van Sciver?</em> </h1>
                    <p className="text-container">
                        Hi! My name is Rachel and I program computers. I started my career in software
                        development in a strange place: World of Warcraft. I played while working odd jobs to pay the bills.
                        I knew I wanted to do something great in my career, and since I enjoyed playing games on computers, I decided to
                        study computer science on a whim. <em>World of Warcraft has no overlap with software development,</em> but I
                        persisted, and I am currently a junior at Lamar University. I also currently have the privilege of working
                        as an software engineering intern for a great company. Besides school and work, my main focus lately has been learning new languages
                        and frameworks.
                        Here's a small, non-exclusive list of what I've been working with:
                        <ul className="list">
                            <li>C/C++</li>
                            <li><a href="https://en.wikipedia.org/wiki/Oz_(programming_language)" className="links"><em>Oz</em></a></li>
                            <li>Java</li>
                            <li>React</li>
                            <li>Vue.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </p>
                <BoopAnimation rotation={10} timing={120}>
                    <a href="https://github.com/rachelvansciver"><GrGithub className="icons"></GrGithub></a>
                    <a href="https://www.linkedin.com/in/rachelvansciver/"><GrLinkedin className="icons"></GrLinkedin></a>
                </BoopAnimation>

            </div>)
    }
}
export default About;