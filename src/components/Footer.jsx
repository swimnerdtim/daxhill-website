import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>REYKLI</h3>
            <p>Championship technique for every swimmer</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <a href="https://twitter.com/daxhill5" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/in/dax-hill-72093332/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://nightswimpod.com" target="_blank" rel="noopener noreferrer">Night Swim Podcast</a>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <a href="https://swimnerd.com/shop/dax-hill" target="_blank" rel="noopener noreferrer">Browse Programs</a>
            <a href="https://www.reykli.com" target="_blank" rel="noopener noreferrer">Newsletter</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Reykli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
