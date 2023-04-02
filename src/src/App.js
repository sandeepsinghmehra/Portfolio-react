import React from 'react';
import ThemeProvider from "./components/Contexts/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar/>
        <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<Container />} />
            </Routes>
          </div>
        </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;