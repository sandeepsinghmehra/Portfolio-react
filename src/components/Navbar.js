import { Link } from 'react-scroll';
export const Navbar = () => {
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
                                    duration={1500}
                                    offset={0}
                                >About</Link>
                            </li>
                           
                            <li><Link
                                    to="Contact"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={0}
                                >Contact</Link></li>
                        </ul>   
                    </div>
                </div>
            </nav> 
        </>
    )
}
