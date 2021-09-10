import { BrowserRouter as Router, Route } from 'react-router-dom';
import './main.scss';
import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={Container} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
