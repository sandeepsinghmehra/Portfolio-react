import React from 'react'
import { Data } from '../Data';
import { Link } from 'react-router-dom';
export const Project = (props) => {
    return (
        <div id={props.id} className="project">
            <h2>Projects</h2>
            <div className="project_card">
                <div className="project_card_image"><img src={Data[0].image} alt={Data[0].image}/></div>
                <div className="project_card_heading">
                    <h3>{Data[0].title}</h3>
                    <h6>{Data[0].subtitle}</h6>
                    <p>{Data[0].description}</p>
                    <Link to={{pathname:Data[0].link}} target="_blank" >View</Link>
                </div>
            </div>
            <div className="project_card">
                <div className="project_card_heading">
                    <h3>{Data[1].title}</h3>
                    <h6>{Data[1].subtitle}</h6>
                    <p>{Data[1].description}</p>
                    <Link to={{pathname:Data[1].link}} target="_blank" >View</Link>
                </div>
                <div className="project_card_image"><img src={Data[1].image} alt={Data[1].image}/></div>
            </div>
            <div className="project_card">
                <div className="project_card_image"><img src={Data[2].image} alt={Data[2].image}/></div>
                <div className="project_card_heading">
                    <h3>{Data[2].title}</h3>
                    <h6>{Data[2].subtitle}</h6>
                    <p>{Data[2].description}</p>
                    <Link to={{pathname:Data[2].link}} target="_blank" >View</Link>
                </div>
            </div>
        </div>
    )
}
