import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-copy-container hero-gradient">
        <h2 className="hero-name">
          <span className="hero-name-first-name">
            <span className="hero-name-first-name-first-letter">B</span>az
          </span>{" "}
          <span className="hero-name-last-name">
            <span className="hero-name-last-name-first-letter">M</span>urphy
          </span>
        </h2>
        <p className="hero-role">Software Developer</p>
        <div className="hero-underline"></div>
        <p className="hero-subtitle">
          Commitment, Enthusiasm, Humility, Competence
        </p>
      </div>
      <div className="hero-image-container">
        <img
          src="./images/hero-image.png"
          alt="Hero Image"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
