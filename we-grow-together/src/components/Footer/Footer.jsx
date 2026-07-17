import "../../assets/css/Footer.css";// 


function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-column">
            <h2>We Grow Together</h2>

            <p>
              Growing together through the study of God's Word.
              We are committed to helping believers grow in faith,
              knowledge, and unity through the Scriptures.
            </p>

            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">YT</a>
              <a href="#">IG</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Bible Studies</a></li>
              <li><a href="/">Reading Plan</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>

            <ul>
              <li><a href="/">Prayer Requests</a></li>
              <li><a href="/">Bible Topics</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Scripture</h3>

            <p>
              "Let all things be done decently and in order."
            </p>

            <strong>1 Corinthians 14:40</strong>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} We Grow Together. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;