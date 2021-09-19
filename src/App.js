import React from 'react';
import ThemeProvider from "./components/Contexts/ThemeProvider";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.scss';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div>
        <Navbar/>
        <Route path="/" component={Container} />
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
