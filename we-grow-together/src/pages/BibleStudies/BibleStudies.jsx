import "../../assets/css/BibleStudies.css";

function BibleStudies() {
  return (
    <>
      {/* Hero Section */}
      <section className="bible-hero">
        <div className="container">
          <h1>Bible Studies</h1>
          <p>
            Study God's Word chapter by chapter and grow in faith, wisdom,
            and understanding together.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bible-intro">
        <div className="container">
          <h2>Study the Scriptures</h2>

          <p>
            Our Bible studies are designed to help believers understand God's
            Word in its context and apply its teachings to everyday life.
            Whether you are a new believer or have walked with Christ for many
            years, we invite you to grow with us through careful study of the
            Scriptures.
          </p>
        </div>
      </section>

      {/* Bible Studies */}
      <section className="study-list">
        <div className="container">

          <div className="study-card">
            <h3>The Gospel of John</h3>
            <p>
              Discover who Jesus Christ is through one of the most powerful
              books in the Bible.
            </p>

            <button>Start Study</button>
          </div>

          <div className="study-card">
            <h3>Book of Romans</h3>
            <p>
              Learn about salvation, grace, faith, and the righteousness of
              God through Paul's letter to the Romans.
            </p>

            <button>Start Study</button>
          </div>

          <div className="study-card">
            <h3>Growing in Faith</h3>
            <p>
              Strengthen your relationship with Christ by learning how to walk
              by faith every day.
            </p>

            <button>Start Study</button>
          </div>

          <div className="study-card">
            <h3>The Life of David</h3>
            <p>
              Explore the victories, failures, and faith of one of the Bible's
              greatest kings.
            </p>

            <button>Start Study</button>
          </div>

          <div className="study-card">
            <h3>Prayer in the Bible</h3>
            <p>
              Learn how biblical prayer transforms lives and strengthens our
              relationship with God.
            </p>

            <button>Start Study</button>
          </div>

          <div className="study-card">
            <h3>The Fruit of the Spirit</h3>
            <p>
              Understand how the Holy Spirit produces Christ-like character in
              every believer.
            </p>

            <button>Start Study</button>
          </div>

        </div>
      </section>

      {/* Verse */}
      <section className="study-verse">
        <div className="container">

          <blockquote>
            "All Scripture is given by inspiration of God, and is profitable
            for doctrine, for reproof, for correction, for instruction in
            righteousness."
          </blockquote>

          <span>2 Timothy 3:16</span>

        </div>
      </section>

      {/* Call To Action */}
      <section className="study-cta">
        <div className="container">
          <h2>Grow Together in God's Word</h2>

          <p>
            Join our Bible study community and discover the richness of God's
            Word alongside believers from around the world.
          </p>

          <button>Join Our Bible Study</button>
        </div>
      </section>
    </>
  );
}

export default BibleStudies;