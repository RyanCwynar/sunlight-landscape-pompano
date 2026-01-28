export default function Home() {
  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io">Learn More</a>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-icon">☀️</span>
            <span>Sunlight Landscape</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#areas">Areas</a>
          </div>
          <a href="tel:9549415079" className="nav-cta">Call (954) 941-5079</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>South Florida&apos;s Trusted Lawn Care Experts</h1>
          <p>Professional landscaping, lawn maintenance & tree services throughout Broward, Palm Beach & Miami-Dade Counties. 100% Satisfaction Guaranteed.</p>
          <div className="hero-buttons">
            <a href="tel:9549415079" className="btn btn-primary">📞 (954) 941-5079</a>
            <a href="#services" className="btn btn-secondary">View Services</a>
          </div>
          <div className="trust-badges">
            <span>✓ 100% Satisfaction Guarantee</span>
            <span>✓ No Contracts Required</span>
            <span>✓ Free Estimates</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Lawn Care & Landscaping Services</h2>
          <p className="section-subtitle">Complete property care for residential & commercial properties</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Lawn Mowing</h3>
              <p>Professional lawn mowing and edging to keep your property looking pristine year-round.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧪</div>
              <h3>Fertilization & Weed Control</h3>
              <p>Custom lawn care programs with nutrients for a healthy, lush South Florida lawn.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💧</div>
              <h3>Sprinkler System Repair</h3>
              <p>Expert irrigation repair and maintenance from the leading service company in the area.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌺</div>
              <h3>Landscape Maintenance</h3>
              <p>Protect your landscaping investment with professional maintenance services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌳</div>
              <h3>Tree & Bush Trimming</h3>
              <p>Keep your trees healthy, strong, and beautiful with expert trimming services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🪓</div>
              <h3>Tree Removal & Stump Grinding</h3>
              <p>Storm damage cleanup, tree removal, and complete stump grinding services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Trust Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Sunlight Landscape?</h2>
              <p>We&apos;re a superior lawn care service company that strives to serve our customers with top-notch service and quality. We service the Tri-County area and specialize in both commercial and residential properties.</p>
              <ul className="benefits-list">
                <li>🏆 100% Satisfaction Guarantee or Your Money Back</li>
                <li>📋 No Long-Term Contracts Required</li>
                <li>💰 Free, No-Obligation Estimates</li>
                <li>🕐 Open 7 Days a Week</li>
                <li>👷 Licensed & Insured Professionals</li>
              </ul>
              <a href="tel:9549415079" className="btn btn-primary">Get Your Free Quote</a>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🌴</span>
                <p>Professional Landscaping Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="areas">
        <div className="container">
          <h2>Cities We Service</h2>
          <p className="section-subtitle">Proudly serving communities across South Florida</p>
          <div className="areas-grid">
            <div className="area-badge">Pompano Beach</div>
            <div className="area-badge">Boca Raton</div>
            <div className="area-badge">Ft. Lauderdale</div>
            <div className="area-badge">Coral Springs</div>
            <div className="area-badge">Deerfield Beach</div>
            <div className="area-badge">Coconut Creek</div>
            <div className="area-badge">Delray Beach</div>
            <div className="area-badge">Hollywood</div>
            <div className="area-badge">Boynton Beach</div>
            <div className="area-badge">Margate</div>
            <div className="area-badge">Sunrise</div>
            <div className="area-badge">Tamarac</div>
            <div className="area-badge">Lighthouse Point</div>
            <div className="area-badge">Lauderdale By The Sea</div>
            <div className="area-badge">North Lauderdale</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready for a Beautiful Lawn?</h2>
          <p>Contact us today for your free, no-obligation estimate!</p>
          <div className="cta-buttons">
            <a href="tel:9549415079" className="btn btn-light">📞 Call (954) 941-5079</a>
          </div>
          <div className="contact-info">
            <p>📍 901 E Sample Rd Z1, Pompano Beach, FL 33064</p>
            <p>🕐 Open Monday - Sunday: 7:30 AM - 5:30 PM</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo">☀️ Sunlight Landscape</span>
              <p>South Florida&apos;s premier lawn care and landscaping company. Serving Broward, Palm Beach & Miami-Dade Counties.</p>
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p>📞 (954) 941-5079</p>
              <p>📍 901 E Sample Rd Z1<br/>Pompano Beach, FL 33064</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Sunlight Landscape. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          var params = new URLSearchParams(window.location.search);
          var ref = params.get('ref');
          if (ref) {
            var img = new Image();
            img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
          }
        })();
      `}} />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #16a34a;
          --primary-dark: #15803d;
          --accent: #f59e0b;
          --dark: #1f2937;
          --light: #f9fafb;
          --gray: #6b7280;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: var(--dark);
          line-height: 1.6;
        }

        /* Demo Banner */
        .demo-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: var(--accent);
          color: white;
          text-align: center;
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          z-index: 1001;
        }
        .demo-banner a { color: white; text-decoration: underline; }

        /* Navigation */
        nav {
          position: fixed;
          top: 36px;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 0.75rem 2rem;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
          text-decoration: none;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-cta {
          background: var(--primary);
          color: white !important;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
          white-space: nowrap;
        }

        .nav-cta:hover {
          background: var(--primary-dark);
        }

        /* Buttons */
        .btn {
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-dark);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
        }

        .btn-secondary:hover {
          background: var(--primary);
          color: white;
        }

        .btn-light {
          background: white;
          color: var(--primary);
        }

        .btn-light:hover {
          background: var(--light);
        }

        /* Hero Section */
        .hero {
          padding: 10rem 2rem 5rem;
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          text-align: center;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: var(--dark);
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--gray);
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .trust-badges {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          color: var(--gray);
          font-size: 0.9rem;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Sections */
        section {
          padding: 5rem 0;
        }

        section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: var(--gray);
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        /* Services */
        .services {
          background: white;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: var(--light);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: var(--primary-dark);
        }

        .service-card p {
          color: var(--gray);
          font-size: 0.95rem;
        }

        /* About */
        .about {
          background: var(--light);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          text-align: left;
          font-size: 2.25rem;
        }

        .about-text p {
          color: var(--gray);
          margin-bottom: 1.5rem;
        }

        .benefits-list {
          list-style: none;
          margin-bottom: 2rem;
        }

        .benefits-list li {
          padding: 0.5rem 0;
          font-size: 1.05rem;
        }

        .about-image {
          display: flex;
          justify-content: center;
        }

        .image-placeholder {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          width: 100%;
          height: 400px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .image-placeholder span {
          font-size: 6rem;
          margin-bottom: 1rem;
        }

        /* Areas */
        .areas {
          background: white;
        }

        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .area-badge {
          background: var(--light);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 500;
          color: var(--dark);
          transition: all 0.3s;
        }

        .area-badge:hover {
          background: var(--primary);
          color: white;
        }

        /* CTA */
        .cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          text-align: center;
        }

        .cta h2 {
          color: white;
        }

        .cta p {
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          margin-bottom: 2rem;
        }

        .contact-info {
          opacity: 0.9;
        }

        .contact-info p {
          margin: 0.5rem 0;
        }

        /* Footer */
        footer {
          background: var(--dark);
          color: white;
          padding: 3rem 0 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-bottom: 2rem;
        }

        .footer-brand .logo {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-brand p {
          opacity: 0.7;
          max-width: 400px;
        }

        .footer-contact h4 {
          margin-bottom: 1rem;
        }

        .footer-contact p {
          opacity: 0.7;
          margin-bottom: 0.5rem;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 1.5rem;
          text-align: center;
          opacity: 0.5;
          font-size: 0.9rem;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .demo-banner {
            font-size: 0.7rem;
            padding: 0.4rem 0.75rem;
          }

          nav {
            top: 28px;
            padding: 0.5rem 1rem;
          }

          .logo {
            font-size: 0.95rem;
          }

          .logo-icon {
            font-size: 1.25rem;
          }

          .nav-links {
            display: none;
          }

          .nav-cta {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }

          .hero {
            padding: 8rem 1.5rem 4rem;
            min-height: auto;
          }

          .hero h1 {
            font-size: 1.75rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            padding: 0.875rem 1.5rem;
            width: 100%;
            max-width: 280px;
            text-align: center;
          }

          .trust-badges {
            flex-direction: column;
            gap: 0.75rem;
          }

          section {
            padding: 3rem 0;
          }

          section h2 {
            font-size: 1.75rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text h2 {
            text-align: center;
          }

          .image-placeholder {
            height: 250px;
          }

          .image-placeholder span {
            font-size: 4rem;
          }

          .areas-grid {
            gap: 0.75rem;
          }

          .area-badge {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  );
}
