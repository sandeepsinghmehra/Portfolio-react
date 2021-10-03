import Html from '../images/html.webp';
import Css from '../images/css.webp';
import Js from '../images/javascript.webp';
import Bootstrap from '../images/bootstrap.webp';
import Express from '../images/expressjs.webp';
import Git from '../images/git.webp';
import MongoDb from '../images/mongodb.webp';
import Node from '../images/node.webp';
import Reactpic from '../images/react.webp';
import Sass from '../images/sass.webp';
import Reduxpic from '../images/redux.webp';
import Vscode from '../images/vscode.webp';


export const About = (props) => {
    return (
        <>
            <div className="about" id={props.id}>
                <h2>About Me</h2>
                <p>My name is Sandeep Singh Mehra. I'm a web designer and developer based in Haldwani, India.</p>

                <p>I'm a fresher in web-development. During the evenings I spend my time working on projects and building my own products in websites.</p>

                <p>I learnt the basics like HTML, CSS, & Javascript and then tried my hands on framework that was popular at the moment - React.js</p>

                <p>Soon I became fluent with React and I decided to learn about backend(Node, Express, MongoDB).</p>

            </div>  
            <div className="skill">
                <h2>Languages, Frameworks & Tools</h2>
                <div className="skill__div">
                    <div className="skill__card">
                        <img src={Html} alt={Html} />
                        <p className="skill__card__title">HTML5</p>
                    </div>  
                    <div className="skill__card">
                        <img src={Css} alt={Css} />
                        <p className="skill__card__title">Css3</p>
                    </div>
                    <div className="skill__card">
                        <img src={Sass} alt={Sass} />  
                        <p className="skill__card__title">Sass</p>
                    </div>
                    <div className="skill__card">
                        <img src={Bootstrap} alt={Bootstrap} />
                        <p className="skill__card__title">Bootstrap</p>
                    </div>

                    <div className="skill__card">
                        <img src={Js} alt={Js} />
                        <p className="skill__card__title">JavaScript</p>
                    </div>
                    <div className="skill__card">
                        <img src={Reactpic} alt={Reactpic} />
                        <p className="skill__card__title">React Js</p>    
                    </div>
                    <div className="skill__card">
                        <img src={Reduxpic} alt={Reduxpic} />
                        <p className="skill__card__title">Redux</p>
                    </div>  
                    <div className="skill__card">
                        <img src={Node} alt={Node} />
                        <p className="skill__card__title">Node Js</p>
                    </div>
                   
                
                    <div className="skill__card">
                        <img src={Express} alt={Express} />
                        <p className="skill__card__title">Express Js</p>
                    </div> 
                    <div className="skill__card">
                        <img src={MongoDb} alt={MongoDb} />
                        <p className="skill__card__title">Mongo DB</p>
                    </div> 
                    <div className="skill__card">
                        <img src={Vscode} alt={Vscode} />
                        <p className="skill__card__title">VsCode</p>
                    </div>
                    <div className="skill__card">
                        <img src={Git} alt={Git} />
                        <p className="skill__card__title">Git</p>
                    </div>  
                </div> 
            </div>
        </>
    )
}
