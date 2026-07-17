import Hero from "../../components/Hero/Hero";
import "../../assets/css/Home.css";

function Home() {
  return (
    <main className="home">

      <Hero />

      {/* Disclaimer */}
      <section className="disclaimer">
        <div className="container">
          <h2>📜 Disclaimer</h2>

          <p>
            <strong>We Grow Together Fellowship</strong> welcomes believers
            from different Christian denominations and backgrounds.
          </p>

          <p>
            Our purpose is to study the Bible sincerely, seek God's truth,
            and grow together in faith through His Holy Word.
          </p>

          <p>
            We respect different biblical perspectives and encourage
            respectful, Christ-centered discussions rooted in love,
            humility, and unity.
          </p>

          <blockquote>
            "Make every effort to keep the unity of the Spirit through the bond of peace."
          </blockquote>

          <span>— Ephesians 4:3</span>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome">
        <div className="container">
          <h2>We Grow Together Fellowship</h2>

          <p>
            We Grow Together is a Bible study community dedicated to helping
            believers grow in the knowledge, wisdom, and understanding of
            God's Holy Word.
          </p>

          <p>
            Although we come from different churches, ministries, and
            backgrounds, we are united by one purpose—to know Christ more
            deeply through the study of the Scriptures.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="container">

          <div className="card">
            <h3>📖 Study the Bible</h3>
            <p>
              Learn the Scriptures chapter by chapter with clear and meaningful
              Bible studies.
            </p>
          </div>

          <div className="card">
            <h3>🙏 Pray Together</h3>
            <p>
              Encourage one another through prayer and grow stronger in faith
              as a community.
            </p>
          </div>

          <div className="card">
            <h3>❤️ Grow Spiritually</h3>
            <p>
              Deepen your relationship with God by applying His Word in
              everyday life.
            </p>
          </div>

        </div>
      </section>

      {/* Verse */}
      <section className="verse">
        <div className="container">
          <h2>Verse of the Day</h2>

          <blockquote>
            "Your word is a lamp to my feet and a light to my path."
          </blockquote>

          <span>Psalm 119:105</span>
        </div>
      </section>

      {/* Study */}
      <section className="study">
        <div className="container">

          <h2>Latest Bible Study</h2>

          <div className="study-card">
            <h3>Growing in Faith</h3>

            <p>
              Discover what it truly means to walk by faith and trust God's
              promises through every season of life.
            </p>

            <button>Read Study</button>
          </div>

        </div>
      </section>

      {/* Join */}
      <section className="join">
        <div className="container">
          <h2>Grow With Us</h2>

          <p>
            Join believers from around the world as we study God's Word,
            encourage one another, and grow together in Christ.
          </p>

          <button>Join Bible Study</button>
        </div>
      </section>

    </main>
  );
}

export default Home;