import blog from './images/blog.jpg';
import htmlPortfolio from './images/html-portfolio.jpg';
import weatherApp from './images/weather-app.jpg';
import Image from './images/image.jpg';
import Entertainment from './images/entertainment.jpg';
export const Data = [
    {
      title: "Blogging Site",
      description:
        "An Application that takes posts from valid user and stores it in database. User can create a post in pending state and admin can approved it",
      image: `${blog}`,
      githubLink: "https://github.com/sandeepsinghmehra/project-mern-stack",
      link: "https://blog-articles-app.herokuapp.com/",
    },
    {
      title: "My Portfolio",
      description:
        "The website you are viewing right now.",
      image: `${Image}`,
      githubLink: "https://github.com/sandeepsinghmehra/Portfolio-react",
      link: "https://sandeepmehra-portfolio-react.netlify.app/",
    },
    {
      title: "Entertainment 365",
      description: "An Entertainment 365 application that shows you the popular Action, Drama and Sci-fi movies, with search functionality.",
      image: `${Entertainment}`,
      githubLink: "https://github.com/sandeepsinghmehra/365-Entertainment",
      link: "https://365-entertainment.netlify.app/",
    },
    {
      title: "Portfolio with HTML & CSS",
      description:
        "A portfolio website that I made for myself.",
      image: `${htmlPortfolio}`,
      githubLink: "https://github.com/sandeepsinghmehra/portfolio-websites",
      link: "https://sandeepmehra-portfolio.netlify.app/",
    },
    {
      title: "Weather-App",
      description:
        "Data fetched from an external API. User can search for any place in the world.",
      image: `${weatherApp}`,
      githubLink: "",
      link: "https://weather-app-sandeep.netlify.app/",
    },
    
  ];