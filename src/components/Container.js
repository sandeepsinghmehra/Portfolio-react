
import { About } from './About';
import { Project } from './Project';
import { Contact } from './Contact';
import { Home } from './Home';

export const Container = () => {
    return (
        <>
            <Home id="Home"/>
            <Project id="Project"/>
            <About id="About" />
            <Contact id="Contact" />
        </>
    )
}
