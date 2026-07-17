import "../../assets/css/contact.css";

function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Whether you have a question,
            prayer request, or would like to join our Bible study,
            please get in touch.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">

        <div className="container contact-grid">

          {/* Left */}

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              We are here to encourage, support, and grow together
              through God's Word.
            </p>

            <div className="info-box">
              <h3>📧 Email</h3>
              <p>info@wegrowtogether.org</p>
            </div>

            <div className="info-box">
              <h3>📱 WhatsApp</h3>
              <p>+27 63 205 8257</p>
            </div>

            <div className="info-box">
              <h3>📍 Location</h3>
              <p>South Africa</p>
            </div>

            <div className="info-box">
              <h3>🕒 Office Hours</h3>
              <p>Monday - Friday</p>
              <p>08:00 - 17:00</p>
            </div>

          </div>

          {/* Right */}

          <div className="contact-form">

            <h2>Send a Message</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Scripture */}

      <section className="contact-verse">

        <div className="container">

          <blockquote>
            "Cast all your anxiety on Him because He cares for you."
          </blockquote>

          <span>1 Peter 5:7</span>

        </div>

      </section>

      {/* CTA */}

      <section className="contact-cta">

        <div className="container">

          <h2>Let's Grow Together</h2>

          <p>
            Join our Bible study community and experience the joy
            of growing in God's Word with believers around the world.
          </p>

          <button>Join Bible Study</button>

        </div>

      </section>

    </>
  );
}

export default Contact;
