import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <span className="logo-text">REYKLI</span>
            <span className="logo-subtitle">by Dax Hill</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/programs" className="nav-link">Programs</Link>
            <a 
              href="https://swimnerd.com/shop/dax-hill" 
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
