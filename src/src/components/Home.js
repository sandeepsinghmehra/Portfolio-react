import React from 'react';
import Resume from '../images/sandeep resume.pdf';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { Link as Links} from 'react-router-dom';
import MainImage from '../images/home-main.svg';


  
export const Home = (props) => {
    
    return (
        <>
            <section id={props.id}>
                <div className="row homeContainer">
                <div className="col-6 homeContainer__left">
                    <div>
                        <span className="home__hello">Hello!    
                        <br />
                            <span className="home__im" > I'm </span>
                            <h1 className="home__name">Sandeep Mehra</h1>
                        </span>
                        <div>
                            <strong className="home__braces">&#10100;</strong>
                                <Typewriter
                                    options={{
                                        strings: [
                                        "Software Developer",
                                        "Front-end Developer",
                                        ],
                                        cursor: '_',
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 10,
                                    }}
                                />
                            <strong className="home__braces">&#10101;</strong>
                        </div>
                        <div className="home__button">
                        
                           <Link 
                                to={"Contact"}  
                                spy={true}
                                smooth={true}
                                duration={1500}
                                offset={0}
                                title="Hire Me"
                            > 
                                <button className="btn btn-blue" >Hire me</button>
                            </Link>
                            <Links 
                                to={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Resume"
                            >
                            <button className="btn btn-pink">Resume</button>
                            </Links>
                        </div>
                    </div>
                </div>
                <div className="col-6 homeContainer__right">
                    <img src={MainImage} alt={MainImage} title="Boy Image" />
                </div>
                </div>
            </section>
            <Link  to={"Project"}  
                   spy={true}
                   smooth={true}
                   duration={1500}
                   offset={0}
                   title="Go to Project"
            >
                <div className="scroll-down"></div>
            </Link>
        </>
    )
}
