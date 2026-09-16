import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero">
    <p className="hero-greeting">Hi, I'm</p>

    <h1>Syed Abdullah</h1>

    <h2>Full-Stack Developer</h2>

    <p className="hero-description">
        I build modern, responsive and user-focused web applications.
    </p>

    <div className="hero-buttons">
        <a href="#work">View My Work</a>
        <a href="#contact">Contact Me</a>
    </div>
</section>
  )
}

export default Hero