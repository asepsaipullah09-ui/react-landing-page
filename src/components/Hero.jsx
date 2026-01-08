function Hero() {
  return (
    <section className="hero" id="home">
        <div className="container hero-inner">
            <div className="hero-content">
                <h1>
                    Hi, saya <span>Asep</span><br />
                    Frontend Developer
                </h1>
                <p>
                    Saya fokus membangun website modern, cepat, dan mudah digunakan dengan React & CSS modern.
                </p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>
            </div>

            <div className="hero-image">
                <img src="public/hero.png" alt="Hero Illustration" />
            </div>
        </div>
    </section>
  );
}

export default Hero;