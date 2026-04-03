import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const products = [
    {
      name: "Club Fundamentals",
      price: "$25",
      description: "Essential stroke techniques for BB-A time standards",
      featured: false,
      link: "https://swimnerd.com/shop/dax-hill"
    },
    {
      name: "Technique Solutions Library",
      price: "$79/mo",
      description: "Complete access to all 4 strokes, all skill levels",
      featured: true,
      link: "https://swimnerd.com/shop/dax-hill"
    },
    {
      name: "Video Analysis",
      price: "$129",
      description: "Personalized stroke analysis with actionable feedback",
      featured: false,
      link: "https://swimnerd.com/shop/dax-hill"
    },
    {
      name: "1-on-1 Coaching",
      price: "$679/mo",
      description: "Direct coaching with Dax via Zoom",
      featured: false,
      link: "https://swimnerd.com/shop/dax-hill"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              From NCAA Champion to<br />Your Personal Technique Coach
            </h1>
            <p className="hero-subtitle">
              Trained by Eddie Reese at Texas. Now teaching the system that turns B swimmers into record-breakers.
            </p>
            <div className="hero-cta">
              <a href="https://swimnerd.com/shop/dax-hill" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Browse Programs
              </a>
              <Link to="/about" className="btn btn-secondary">
                Learn My Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Swimmers & Coaches Say</h2>
          <p className="section-subtitle">
            Real results from the Reykli system
          </p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "[Add actual testimonial here - athlete name, club, time improvement]"
              </div>
              <div className="testimonial-author">
                <strong>Athlete Name</strong>
                <span>Club Name • Before/After Times</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "[Add actual testimonial here - coach feedback on system]"
              </div>
              <div className="testimonial-author">
                <strong>Coach Name</strong>
                <span>Team Name • Role</span>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "[Add actual testimonial here - parent perspective on results]"
              </div>
              <div className="testimonial-author">
                <strong>Parent Name</strong>
                <span>Swimmer's Club • Age Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview section">
        <div className="container">
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-subtitle">
            From foundational techniques to elite 1-on-1 coaching
          </p>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className={`product-card ${product.featured ? 'featured' : ''}`}>
                {product.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{product.name}</h3>
                <div className="product-price">{product.price}</div>
                <p>{product.description}</p>
                <a 
                  href={product.link} 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
          
          <div className="products-cta">
            <Link to="/programs" className="btn btn-secondary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Night Swim Section */}
      <section className="night-swim section">
        <div className="container">
          <div className="night-swim-content">
            <div className="night-swim-text">
              <h2>Catch Dax on Night Swim</h2>
              <p>
                Weekly swimming insights, hot takes, and interviews with Elvis Burrows. 
                Breaking down technique, training, and the state of the sport.
              </p>
              <a 
                href="https://nightswimpod.com" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Latest Episode
              </a>
            </div>
            <div className="night-swim-visual">
              <div className="podcast-badge">
                <span className="badge-icon">🎙️</span>
                <span className="badge-text">NEW EPISODES<br/>DAILY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta section">
        <div className="container">
          <div className="newsletter-box">
            <h2>Stay Connected</h2>
            <p>Weekly technique tips, training insights, and exclusive content</p>
            <a 
              href="https://www.reykli.com" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
