import React from 'react';
import Fade from 'react-reveal/Fade';
import { Data } from '../Data';
import { Link } from 'react-router-dom';
export const Project = (props) => {
    return (
        <div id={props.id} className="project">
            <h2>Projects</h2>

            <div className="project_card">
                <Fade left>
                    <div className="project_card_image"><img src={Data[0].image} alt={Data[0].image}/></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[0].title}</h3>
                    <p>{Data[0].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark">ReactJs</span>
                        <span className="btn btn-dark">MongoDB</span>
                        <span className="btn btn-dark">NodeJs</span>
                        <span className="btn btn-dark">ExpressJs</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[0].githubLink}} target="_blank">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[0].link}} target="_blank" >
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                <div className="project_card_heading">
                    <h3>{Data[1].title}</h3>
                    <p>{Data[1].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark">React</span>
                        <span className="btn btn-dark">Scss</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[1].githubLink}} target="_blank">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[1].link}} target="_blank" >
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
                <Fade right>
                    <div className="project_card_image"><img src={Data[1].image} alt={Data[1].image}/></div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                    <div className="project_card_image"><img src={Data[2].image} alt={Data[2].image}/></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[2].title}</h3>
                    <p>{Data[2].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark">Html</span>
                        <span className="btn btn-dark">JavaScript</span>
                        <span className="btn btn-dark">Css</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[2].githubLink}} target="_blank">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[2].link}} target="_blank" >
                            Demo 
                        </Link>
                    </div>
                </div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                <div className="project_card_heading">
                    <h3>{Data[3].title}</h3>
                    <p>{Data[3].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark">Html</span>
                        <span className="btn btn-dark">css</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[3].githubLink}} target="_blank">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[3].link}} target="_blank" >
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="project_card_image"><img src={Data[3].image} alt={Data[3].image}/></div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                <div className="project_card_image"><img src={Data[4].image} alt={Data[4].image}/></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[4].title}</h3>
                    <p>{Data[4].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark">Html</span>
                        <span className="btn btn-dark">css</span>
                        <span className="btn btn-dark">JavaScript</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[4].githubLink}} target="_blank">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[4].link}} target="_blank" >
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}
