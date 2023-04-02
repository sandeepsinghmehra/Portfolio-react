import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Work } from './Work';

export const Container = () => {
    return (
        <>
            <Home id="Home" />
            <Work id="Work" />
            <About id="About" />
            <Contact id="Contact" />
        </>
    )
}
