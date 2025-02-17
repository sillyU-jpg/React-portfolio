import Navbar from './Navbar';
import Projects from './projects';
import Footer from './Footer';
import About from './About';
import Home from './Home';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router> 

      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      </Router>
    </>
  );
}

export default App;
