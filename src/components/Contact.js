import { BiPhoneCall, MdMyLocation,
     AiOutlineMail, RiShieldUserLine, 
     GrLinkedin, GrFacebook, GrGithub} from "react-icons/all";
import { IconContext } from "react-icons";
import Fade from 'react-reveal/Fade';

export const Contact = (props) => {
    return (
        <> 
            <div className="contact" id={props.id}>
         
                <div className="contact__card">
                    <Fade left>
                    <div className="contact__card__card">
                        <div><h2>Contact Me</h2></div>
                        <div className="contact__card__card__group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="contact__card__card__group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" placeholder="E-mail" />
                        </div>
                        <div className="contact__card__card__group">    
                            <label>Message</label>
                            <textarea className="textarea" placeholder="Your msg..." />
                        </div>
                        <button className="btn btn-blue">Send Me</button>   
                    </div> 
                    </Fade>
                    <Fade right>
                    <div className="contact__card__detail">
                        <h2>Contact Information</h2>
                        <div className="contact__card__detail__info"> 
                            <span>Sandeep Mehra</span>
                            <span><RiShieldUserLine size={30} /> </span>
                        </div>
                        <div className="contact__card__detail__info">
                            <span style={{fontStyle: "italic"}}>sandysmart017@gamil.com</span>
                            <span><AiOutlineMail size={30} /> </span>
                        </div>
                        <div className="contact__card__detail__info">
                            <span>+91 6398089297</span>
                            <span><BiPhoneCall size={30} /> </span>
                        </div>
                        <div className="contact__card__detail__info">
                            <span>Betalghat, Nainital, Uttarakhand 263134</span>
                            <span><MdMyLocation size={30} /> </span>
                        </div>
                        <Fade top>
                        <div className="contact__card__detail__social-icons">
                            <IconContext.Provider value={{ className:"react-icon"}}>
                            <span>
                                <GrLinkedin size={50}/>
                            </span>
                            <span>
                                <GrFacebook size={50}/>
                            </span>
                        
                            </IconContext.Provider>
                            <span>
                                <GrGithub size={50} className="git-icon"/>
                            </span>
                        </div>
                        </Fade>
                    </div> 
                    </Fade>  
                </div>
           
            </div> 
        </>
    )
}
