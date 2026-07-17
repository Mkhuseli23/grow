import "../../assets/css/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Growing Together Through God's Word
        </h1>

        <p>
          Join believers from different churches and backgrounds as we
          study the Scriptures with love, humility, and understanding.
        </p>

        <div className="buttons">
          <button>Join Bible Study</button>
          <button className="outline">Read Today's Lesson</button>
        </div>

      </div>

    </section>
  );
}

export default Hero;