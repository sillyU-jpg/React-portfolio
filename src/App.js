import Navbar from './Navbar';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="content">
      <Projects />
     </div>
     <div className="footer">
      <Footer />
     </div>
    </div>
  );
}

export default App;
