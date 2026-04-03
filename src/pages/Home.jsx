import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const credentials = [
    { stat: "3x", label: "NCAA Champion" },
    { stat: "8x", label: "All-American" },
    { stat: "2x", label: "World University Games Gold" },
    { stat: "81%", label: "Team Records Held" }
  ];

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
              Trained by Eddie Reese at Texas. Now teaching the system that turned B swimmers into record-breakers.
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

      {/* Credentials */}
      <section className="credentials section">
        <div className="container">
          <div className="credentials-grid">
            {credentials.map((item, index) => (
              <div key={index} className="credential-card">
                <div className="credential-stat">{item.stat}</div>
                <div className="credential-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="why-different section">
        <div className="container">
          <h2 className="section-title">Why Reykli is Different</h2>
          <p className="section-subtitle">
            Swimming had no skill progression system. So I built one.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Proven System</h3>
              <p>My swimmers held 81% of team records at the club I coached</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Real Results</h3>
              <p>Turned lifetime B swimmers into AA/AAA performers</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Championship Pedigree</h3>
              <p>Learned from Eddie Reese, David Marsh, and Olympic champions</p>
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
