import "./app.css";
import heroImage from "./assets/hero-meat.jpg";

const highlights = [
  "Fresh mutton prepared for weddings, parties, and large gatherings",
  "Direct supply for restaurants, hotels, and event venues",
  "Reliable delivery across Vijayawada and nearby areas",
];

const offerings = [
  {
    title: "Whole Goat",
    description:
      "Fresh whole goat supply for bulk orders, event kitchens, hotels, and restaurant demand.",
  },
  {
    title: "Curry Size Pieces",
    description:
      "Cleanly cut curry-size mutton pieces prepared for family events, catering, and regular kitchen use.",
  },
  {
    title: "Biryani Cut Pieces",
    description:
      "Well-portioned biryani cuts designed for weddings, parties, and large-batch cooking.",
  },
  {
    title: "Ground Goat",
    description:
      "Fresh ground goat meat for specialty dishes, hotel kitchens, and custom menu requirements.",
  },
];

const steps = [
  "Tell us your event size, preferred cut, and delivery time.",
  "We prepare fresh mutton based on your order requirements.",
  "Your order is packed carefully and delivered on time to your location.",
];

const testimonials = [
  {
    quote:
      "Prakash has become our go-to supplier for weekend rush. The consistency has been excellent.",
    name: "Ravi Kumar",
    role: "Restaurant Owner",
  },
  {
    quote:
      "For catering events, timing matters the most. Their communication and delivery have been reliable.",
    name: "Sandeep Rao",
    role: "Wedding Caterer",
  },
  {
    quote:
      "The quality feels premium without making ordering complicated. That matters a lot to us.",
    name: "Naresh",
    role: "Hotel Kitchen Manager",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-block">
          <span className="eyebrow">Prakash & Sons Co.</span>
          <a className="brand-name" href="#home">
            Fresh Mutton Supply
          </a>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Products</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta-button cta-button--small" href="https://wa.me/919848248406" target="_blank" rel="noreferrer">
          WhatsApp Now
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="section-kicker">Fresh mutton for events and bulk orders</p>
            <h1>Quality mutton supply for weddings, parties, restaurants, and hotels.</h1>
            <p className="hero-text">
              Prakash & Sons Co. specializes in fresh mutton delivery for large gatherings,
              event catering, restaurants, hotels, and custom bulk orders across Vijayawada.
            </p>
            <div className="hero-actions">
              <a className="cta-button" href="https://wa.me/919848248406" target="_blank" rel="noreferrer">
                Order on WhatsApp
              </a>
              <a className="secondary-link" href="tel:+919848248406">
                Call 9848248406
              </a>
            </div>
            <ul className="hero-highlights" aria-label="Business highlights">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <img
                className="hero-image"
                src={heroImage}
                alt="Fresh mutton prepared for bulk supply and event orders"
              />
              <div className="hero-card-content">
                <p className="hero-card-label">Serving Vijayawada, Andhra Pradesh</p>
                <p className="hero-card-metric">Fresh mutton supply with dependable delivery for events and businesses.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-strip" id="about">
          <div>
            <p className="section-kicker">Built on trust</p>
            <h2>Fresh supply, timely delivery, and dependable service for every order.</h2>
          </div>
          <p>
            We help make event planning easier by supplying fresh mutton for weddings,
            parties, large gatherings, restaurants, and hotels. From whole goat to custom
            cuts, we focus on quality, cleanliness, and on-time delivery.
          </p>
        </section>

        <section className="content-section" id="services">
          <div className="section-heading">
            <p className="section-kicker">Our products</p>
            <h2>Fresh mutton options prepared for different cooking needs.</h2>
          </div>
          <div className="card-grid">
            {offerings.map((item) => (
              <article className="feature-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section content-section--accent">
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2>A simple process for smooth event and kitchen supply.</h2>
          </div>
          <div className="steps-list">
            {steps.map((step, index) => (
              <article className="step-card" key={step}>
                <span className="step-number">0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <div className="section-heading">
            <p className="section-kicker">Client feedback</p>
            <h2>Trusted by customers who depend on quality and timing.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="testimonial-quote">"{item.quote}"</p>
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Ready to place a bulk order for your event, restaurant, or hotel?</h2>
            <p>
              Contact Prakash & Sons Co. for whole goat, curry cuts, biryani cuts, and
              ground goat delivery in Vijayawada and surrounding areas.
            </p>
            <p>
              Phone: 9848248406, 8179816920
              <br />
              Email: tinuanandhari@gmail.com
              <br />
              Location: Vijayawada, Andhra Pradesh
            </p>
          </div>
          <div className="contact-actions">
            <a className="cta-button" href="tel:+919848248406">
              Call 9848248406
            </a>
            <a
              className="secondary-link secondary-link--light"
              href="https://wa.me/918179816920"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp 8179816920
            </a>
            <a className="secondary-link secondary-link--light" href="mailto:tinuanandhari@gmail.com">
              tinuanandhari@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
