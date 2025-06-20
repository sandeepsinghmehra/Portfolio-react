import { BiPhoneCall} from "react-icons/bi";
import { MdMyLocation} from "react-icons/md";
import { AiOutlineMail} from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";
import { GrLinkedin, GrFacebook, GrGithub} from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

export const Contact = (props) => {
    
    return (
        <> 
            <section id={props.id}>
                <a
                    href={'https://wa.me/+917536885806'}
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoWhatsapp className="whatsapp-icon"/>
                </a>
                <div className="contact">
                    <div className="contact__card">
                            <div className="contact__card__card">
                                <div><h1>Contact Me</h1></div>
                                <div className="contact__card__card__group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="Name" />
                                </div>
                                <div className="contact__card__card__group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" placeholder="E-mail" />
                                </div>
                                <div className="contact__card__card__group">    
                                    <label htmlFor="msg">Message</label>
                                    <textarea className="textarea" placeholder="Your msg..." />
                                </div>
                                <button className="btn btn-blue">Send Me</button>   
                            </div> 
                            <div className="contact__card__detail">
                                <h1>Contact Info</h1>
                                <div className="contact__card__detail__info"> 
                                    <span>Sandeep Mehra</span>
                                    <span><RiShieldUserLine size={30} /> </span>
                                </div>
                                <div className="contact__card__detail__info">
                                    <span style={{fontStyle: "italic"}}>sandeepsm017@gamil.com</span>
                                    <span><AiOutlineMail size={30} /> </span>
                                </div>
                                <div className="contact__card__detail__info">
                                    <span>+91 7536885806</span>
                                    <span><BiPhoneCall size={30} /> </span>
                                </div>
                                <div className="contact__card__detail__info">
                                    <span>Nainital, Uttarakhand 263134</span>
                                    <span><MdMyLocation size={30} /> </span>
                                </div>
                                    <div className="contact__card__detail__social-icons">
                                        <IconContext.Provider value={{ className:"react-icon"}}>
                                            <span>
                                                <Link to={{pathname:'https://www.linkedin.com/in/sandeep-singh-mehra-909a781b2'}} target="_blank" rel="noopener" aria-label="linkedIn" title="LinkedIn" >
                                                    <GrLinkedin size={50}/>
                                                </Link>
                                            </span>
                                            <span>
                                                <Link to={{pathname: 'https://www.facebook.com/sandeepsinghmehara'}} target="_blank" rel="noopener" aria-label="facebook" title="Facebook" >
                                                    <GrFacebook size={50}/>
                                                </Link>
                                            </span>
                            
                                        </IconContext.Provider>
                                        <span>
                                            <Link to={{pathname: 'https://github.com/sandeepsinghmehra'}} target="_blank" rel="noopener" aria-label="git" title="Git" >
                                                <GrGithub size={50} className="git-icon"/>
                                            </Link>
                                        </span>
                                    </div>
                            </div> 
                    </div>
                </div>
            </section> 
        </>
    )
}
