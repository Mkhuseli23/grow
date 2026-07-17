import "../../assets/css/ReadingPlan.css";

function ReadingPlan() {
  return (
    <>
      {/* Hero */}
      <section className="reading-hero">
        <div className="container">
          <h1>Bible Reading Plan</h1>
          <p>
            Develop the habit of reading God's Word every day and grow closer
            to Christ one chapter at a time.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="reading-intro">
        <div className="container">
          <h2>Why Read the Bible Daily?</h2>

          <p>
            Reading the Bible each day strengthens our faith, renews our minds,
            and helps us understand God's will for our lives. Consistency in
            God's Word produces spiritual growth and wisdom.
          </p>
        </div>
      </section>

      {/* Reading Plan */}
      <section className="reading-plan">
        <div className="container">

          <h2>This Week's Reading</h2>

          <div className="reading-grid">

            <div className="reading-card">
              <h3>Monday</h3>
              <h4>Genesis 1 - 3</h4>
              <p>God's creation and the beginning of mankind.</p>
            </div>

            <div className="reading-card">
              <h3>Tuesday</h3>
              <h4>Genesis 4 - 6</h4>
              <p>Cain and Abel, the spread of sin, and Noah.</p>
            </div>

            <div className="reading-card">
              <h3>Wednesday</h3>
              <h4>Genesis 7 - 9</h4>
              <p>The flood and God's covenant with Noah.</p>
            </div>

            <div className="reading-card">
              <h3>Thursday</h3>
              <h4>Genesis 10 - 12</h4>
              <p>The Tower of Babel and the call of Abraham.</p>
            </div>

            <div className="reading-card">
              <h3>Friday</h3>
              <h4>Genesis 13 - 15</h4>
              <p>God's promises to Abraham.</p>
            </div>

            <div className="reading-card">
              <h3>Saturday</h3>
              <h4>Genesis 16 - 18</h4>
              <p>God remains faithful to His promises.</p>
            </div>

            <div className="reading-card">
              <h3>Sunday</h3>
              <h4>Psalm 23 & John 3</h4>
              <p>Reflect on God's love and salvation.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="reading-verse">
        <div className="container">

          <blockquote>
            "Blessed is the one whose delight is in the law of the Lord,
            and who meditates on His law day and night."
          </blockquote>

          <span>Psalm 1:2</span>

        </div>
      </section>

      {/* CTA */}
      <section className="reading-cta">
        <div className="container">

          <h2>Stay Consistent</h2>

          <p>
            One chapter a day can change your life. Let God's Word become part
            of your daily walk with Christ.
          </p>

          <button>Start Today's Reading</button>

        </div>
      </section>
    </>
  );
}

export default ReadingPlan;