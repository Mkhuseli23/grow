import "../../assets/css/Prayer.css";

function Prayer() {
  return (
    <>
      {/* Hero */}
      <section className="prayer-hero">
        <div className="container">
          <h1>Prayer</h1>

          <p>
            Prayer is our direct communication with God. Let us come before Him
            with faith, thanksgiving, and confidence, knowing that He hears
            those who call upon Him.
          </p>

          <a href="#prayer-topics" className="hero-btn">
            Explore Prayer
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="prayer-intro">
        <div className="container">
          <h2>Why Should We Pray?</h2>

          <p>
            Prayer is not simply asking God for our needs—it is building a
            relationship with Him. Through prayer we worship, give thanks,
            confess our sins, seek wisdom, and intercede for others.
          </p>
        </div>
      </section>

      {/* Prayer Topics */}
      <section className="prayer-topics" id="prayer-topics">
        <div className="container">

          <h2>Prayer Guides</h2>

          <div className="prayer-grid">

            <div className="prayer-card">
              <div className="icon">🙏</div>
              <h3>Morning Prayer</h3>
              <p>
                Begin your day by seeking God's guidance, wisdom, and strength.
              </p>
            </div>

            <div className="prayer-card">
              <div className="icon">❤️</div>
              <h3>Prayer for Family</h3>
              <p>
                Lift your family before God and ask Him to bless, protect, and
                guide them.
              </p>
            </div>

            <div className="prayer-card">
              <div className="icon">🕊️</div>
              <h3>Prayer for Peace</h3>
              <p>
                Receive God's peace in every situation through faithful prayer.
              </p>
            </div>

            <div className="prayer-card">
              <div className="icon">💪</div>
              <h3>Prayer for Strength</h3>
              <p>
                Ask God to strengthen you during difficult seasons of life.
              </p>
            </div>

            <div className="prayer-card">
              <div className="icon">🌍</div>
              <h3>Intercessory Prayer</h3>
              <p>
                Pray for your church, community, nation, and the world.
              </p>
            </div>

            <div className="prayer-card">
              <div className="icon">🙌</div>
              <h3>Prayer of Thanksgiving</h3>
              <p>
                Thank God for His love, mercy, grace, and countless blessings.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Verse */}
      <section className="prayer-verse">
        <div className="container">

          <blockquote>
            "Do not be anxious about anything, but in everything, by prayer
            and petition, with thanksgiving, present your requests to God."
          </blockquote>

          <span>Philippians 4:6</span>

        </div>
      </section>

      {/* Call to Action */}
      <section className="prayer-cta">
        <div className="container">

          <h2>Pray Without Ceasing</h2>

          <p>
            Prayer changes hearts, strengthens faith, and brings us closer to
            God. Make prayer a daily habit and experience His presence.
          </p>

          <button>Join Our Prayer Community</button>

        </div>
      </section>
    </>
  );
}

export default Prayer;