import React from 'react';
import Fade from 'react-reveal/Fade';
import { Data } from '../Data';
import { Link } from 'react-router-dom';
export const Project = (props) => {
    return (
        <section id={props.id} className="project">
            <h1>Projects</h1>

            <div className="project_card">
                <Fade left>
                    <div className="project_card_image"><img src={Data[0].image} alt={Data[0].image} title="Blog Image" /></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[0].title}</h3>
                    <p>{Data[0].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark mg-10">ReactJs</span>
                        <span className="btn btn-dark mg-10">MongoDB</span>
                        <span className="btn btn-dark mg-10">NodeJs</span>
                        <span className="btn btn-dark mg-10">ExpressJs</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[0].githubLink}} target="_blank" rel="noopener" title="Source Code">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[0].link}} target="_blank" rel="noopener" title="Demo Site">
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
                        <span className="btn btn-dark mg-10">React</span>
                        <span className="btn btn-dark mg-10">Scss</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[1].githubLink}} target="_blank" rel="noopener" title="Source Code">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[1].link}} target="_blank" rel="noopener" title="Demo">
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
                <Fade right>
                    <div className="project_card_image"><img src={Data[1].image} alt={Data[1].image} title="Site Image" /></div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                    <div className="project_card_image"><img src={Data[2].image} alt={Data[2].image} title="Site Image " /></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[2].title}</h3>
                    <p>{Data[2].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark mg-10">Html</span>
                        <span className="btn btn-dark mg-10">JavaScript</span>
                        <span className="btn btn-dark mg-10">Css</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[2].githubLink}} target="_blank" rel="noopener" title="Source Code">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[2].link}} target="_blank" rel="noopener" title="Demo">
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
                        <span className="btn btn-dark mg-10">Html</span>
                        <span className="btn btn-dark mg-10">css</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[3].githubLink}} target="_blank" rel="noopener" title="Source Code">
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[3].link}} target="_blank" rel="noopener" title="Demo" >
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="project_card_image"><img src={Data[3].image} alt={Data[3].image} title="Image Site" /></div>
                </Fade>
            </div>
            <div className="project_card">
                <Fade left>
                <div className="project_card_image"><img src={Data[4].image} alt={Data[4].image} title="Image" /></div>
                </Fade>
                <Fade right>
                <div className="project_card_heading">
                    <h3>{Data[4].title}</h3>
                    <p>{Data[4].description}</p>
                    <div className="btn-group">
                        <span className="btn btn-dark mg-10">Html</span>
                        <span className="btn btn-dark mg-10">css</span>
                        <span className="btn btn-dark mg-10">JavaScript</span>
                    </div>
                    <div>
                        <Link to={{pathname: Data[4].githubLink}} target="_blank" rel="noopener" title="Source Code" >
                            Source Code
                        </Link>
                        <Link to={{pathname:Data[4].link}} target="_blank" rel="noopener" title="Demo">
                            Demo
                        </Link>
                    </div>
                </div>
                </Fade>
            </div>
        </section>
    )
}
