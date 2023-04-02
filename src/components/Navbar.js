import {useContext} from 'react';
import { FcAbout, FcContacts } from 'react-icons/fc';
import { AiFillProject} from 'react-icons/ai';
import { FiSun } from 'react-icons/fi';
import { HiMoon } from 'react-icons/hi';
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
                    <div className="navbar__left" title="Name">
                        Sandeep Mehra
                    </div>
                    <div className="navbar__right">
                        
                        <ul>
                            <li><Link 
                                    to="Work"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={0}
                                    title="Work"
                                >Work</Link></li>
                            <li>
                                <Link 
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={3000}
                                    offset={0}
                                    title="About"
                                >About</Link>
                            </li>
                           
                            <li><Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={4500}
                                    offset={0}
                                    title="Contact"
                                >Contact</Link></li>
                            <li>
                            { theme === "dark" ? 
                                <span><button className="modeIcon" value={light} onClick={clickEvent} aria-label="light-theme" title="Light-Theme"><FiSun /></button></span>:
                                <span><button className="modeIcon" value={dark} onClick={clickEvent} aria-label="dark-theme" title="Dark-Theme"><HiMoon /></button></span>
                            }
                            </li>
                        </ul>   
                    </div>
                    <div className="navbar__mobile">
                        
                        <ul>
                            <li><Link 
                                    to="Work"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={0}
                                    title="Work"
                                ><AiFillProject size="25" /></Link></li>
                            <li>
                                <Link 
                                    to="About"
                                    spy={true}
                                    smooth={true}
                                    duration={4000}
                                    offset={0}
                                    title="About"
                                ><FcAbout size="25" /></Link>
                            </li>
                           
                            <li><Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={5500}
                                    offset={0}
                                    title="Contact"
                                ><FcContacts size="25"/></Link>
                            </li>
                            <li>
                            { theme === "dark" ? 
                                <span><button className="modeIcon" value={light} onClick={clickEvent} aria-label="light-theme" title="Light-Theme"><FiSun size="25" /></button></span>:
                                <span><button className="modeIcon" value={dark} onClick={clickEvent} aria-label="dark-theme" title="Dark-Theme"><HiMoon size="25"  /></button></span>
                            }
                            </li>
                        </ul>   
                    </div>
                </div>
            </nav> 
        </>
    )
}
