import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">Syed Abdullah</a>

            <div className="navbar-links">
                <a href="#work">My Work</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar