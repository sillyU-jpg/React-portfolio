const Navbar = () => {
    return (
        
<nav className="navbar"> 
<a href="/about"> <img src="./nklogo.png" className="logoimg" alt="topbarlink"></img></a>   
          <a className="topbarlink" id="about-button" href="./about"  >About</a>
          <a className="topbarlink"id="projects-button" href="./projects"> Projects</a>
</nav>

    )
}

export default Navbar