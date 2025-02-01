
import './App.css';

const title = 'welcome to the new website'
const likes = 50;

function App() {
  return (
    <div className="App">
     <div className="content">
     <span>
       <a href="page"> <img src="./nklogo.png" className="logoimg"></img></a>   
          <a className="topbarlink" id="about-button" href="/about" >About</a>
          <a className="topbarlink"id="projects-button" href="/projects">Projects</a>
    </span>
     </div>
    </div>
  );
}

export default App;
