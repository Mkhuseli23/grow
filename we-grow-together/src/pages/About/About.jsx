import "../../assets/css/About.css";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>About We Grow Together</h1>
          <p>
            Growing together in the knowledge, wisdom, and understanding of
            God's Holy Word.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="container">

          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              <strong>We Grow Together</strong> is an online Bible study
              community created to encourage believers from different churches,
              ministries, and backgrounds to come together with one purpose:
              studying God's Word faithfully and growing spiritually.
            </p>

            <p>
              We believe that the Bible is God's inspired Word and the
              foundation for Christian living. Through regular Bible studies,
              prayer, and fellowship, we seek to deepen our understanding of
              Scripture while strengthening our relationship with Jesus Christ.
            </p>

            <p>
              Our desire is not to promote any denomination or personal
              ministry, but to glorify Christ alone by providing a respectful
              environment where believers can learn together.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">

          <div className="box">
            <h3>📖 Our Mission</h3>

            <p>
              To help believers understand, live, and apply God's Word through
              sound Bible study, prayer, and Christian fellowship.
            </p>
          </div>

          <div className="box">
            <h3>🌍 Our Vision</h3>

            <p>
              To build a worldwide Bible study community where people grow
              together in faith, love, wisdom, and obedience to Christ.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <div className="container">

          <h2>Our Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h3>📖 Biblical Truth</h3>
              <p>
                We believe the Bible is the final authority for faith and life.
              </p>
            </div>

            <div className="value-card">
              <h3>❤️ Love</h3>
              <p>
                We treat every member with kindness, patience, humility, and
                respect.
              </p>
            </div>

            <div className="value-card">
              <h3>🙏 Prayer</h3>
              <p>
                Prayer is central to our relationship with God and one another.
              </p>
            </div>

            <div className="value-card">
              <h3>🤝 Unity</h3>
              <p>
                We are united in Christ despite our different backgrounds and
                denominations.
              </p>
            </div>

            <div className="value-card">
              <h3>🌱 Spiritual Growth</h3>
              <p>
                We encourage every believer to grow daily in faith and
                obedience.
              </p>
            </div>

            <div className="value-card">
              <h3>✨ Christ-Centered</h3>
              <p>
                Our goal is to glorify Jesus Christ in everything we do.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Scripture */}
      <section className="about-verse">
        <div className="container">

          <blockquote>
            "Let the word of Christ dwell in you richly in all wisdom."
          </blockquote>

          <span>Colossians 3:16</span>

        </div>
      </section>

    </>
  );
}

export default About;