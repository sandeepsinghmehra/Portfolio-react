import {useContext} from 'react';
import { FcAbout, AiFillProject, FcContacts, FiSun, HiMoon} from 'react-icons/all';
import { Link } from 'react-scroll';
import ThemeContext from "./Contexts/ThemeContext";

export const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const dark = 'dark';
    const light = 'light';
    const clickEvent = (e) => {
        setTheme(e.currentTarget.value);
    }
    return (
        <>
           <nav className="navbar" id="navbar">
               <div className="navbar__main">
                    <div className="navbar__left">
                        Sandeep Mehra
                    </div>
                    <div className="navbar__right">
                        
                        <ul>
                            <li><Link 
                                    to="Project"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={0}
                                >Project</Link></li>
                            <li>
                                <Link 
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={3000}
                                    offset={0}
                                >About</Link>
                            </li>
                           
                            <li><Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={4500}
                                    offset={0}
                                >Contact</Link></li>
                            <li>
                            { theme === "dark" ? 
                                <span className="modeIcon" ><FiSun value={light} onClick={clickEvent}/></span>:
                                <span className="modeIcon" ><HiMoon value={dark} onClick={clickEvent}/></span>
                            }
                            </li>
                        </ul>   
                    </div>
                    <div className="navbar__mobile">
                        
                        <ul>
                            <li><Link 
                                    to="Project"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={0}
                                ><AiFillProject size="25" /></Link></li>
                            <li>
                                <Link 
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={4000}
                                    offset={0}
                                ><FcAbout size="25" /></Link>
                            </li>
                           
                            <li><Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={5500}
                                    offset={0}
                                ><FcContacts size="25"/></Link>
                            </li>
                            <li>
                            { theme === "dark" ? 
                                <span className="modeIcon" ><FiSun size="25"  value={light} onClick={clickEvent} /></span>:
                                <span className="modeIcon" ><HiMoon size="25"  value={dark} onClick={clickEvent}/></span>
                            }
                            </li>
                        </ul>   
                    </div>
                </div>
            </nav> 
        </>
    )
}
