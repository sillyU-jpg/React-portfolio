import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router> 
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
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
