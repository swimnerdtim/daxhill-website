import './Programs.css';

function Programs() {
  const programs = [
    {
      name: "Free Butterfly Technique",
      price: "FREE",
      type: "Free Course",
      description: "Essential butterfly techniques taught at the college and high-end club level",
      features: [
        "Club & college level technique",
        "Ages 9+ progression drills",
        "How/why it works explained",
        "Perfect starting point"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    },
    {
      name: "Club Fundamentals",
      price: "$25",
      type: "One-Time Purchase",
      description: "Essential stroke needs for club-level athletes (BB-A time standards)",
      features: [
        "All 4 strokes fundamentals",
        "Ages 7+ skill progressions",
        "Stroke skeleton & timing",
        "Foundation for long-term success"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    },
    {
      name: "Flip a Group: B-to-AA",
      price: "$50",
      type: "One-Time Purchase",
      description: "Calendar-year plan for developing B-performers into AA-performers",
      features: [
        "Full year development timeline",
        "Efficiency & racing technique",
        "Video instructions included",
        "Drill progressions & speed focus"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    },
    {
      name: "Technique Solutions Library",
      price: "$79/mo",
      type: "Monthly Subscription",
      description: "Complete access to all technique solutions across all strokes and skill levels",
      features: [
        "Club, College, World Class & World Record techniques",
        "Living library - updated monthly",
        "1-on-1 lesson reviews",
        "Monthly stroke/race analysis uploads",
        "Techniques for BB through elite level"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: true
    },
    {
      name: "Video Analysis",
      price: "$129",
      type: "One-Time Purchase",
      description: "Personalized stroke and race video analysis with actionable solutions",
      features: [
        "Submit 2 different stroke videos",
        "Drawn-on & voiced-over edits",
        "Specific technique solutions",
        "Guide to Library solutions",
        "Underwater or race footage accepted"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    },
    {
      name: "Goldilocks Zone Training",
      price: "$679",
      type: "One-Time Purchase",
      description: "GOAT coaches' training concepts - the secrets behind all SCY American Records",
      features: [
        "Training philosophies of legends",
        "Goal times & stroke tempo mastery",
        "Strength training integration",
        "Taper control strategies",
        "Race adaptation techniques"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    },
    {
      name: "1-on-1 Online Coaching",
      price: "$679/mo",
      type: "Monthly Subscription",
      description: "Direct coaching with Dax via Zoom - complete performance control",
      features: [
        "Regular Zoom meetings",
        "Full Technique Solutions Library access",
        "Video submission & feedback",
        "Race video analysis",
        "Personalized drill progressions"
      ],
      link: "https://swimnerd.com/shop/dax-hill",
      featured: false
    }
  ];

  return (
    <div className="programs">
      {/* Hero */}
      <section className="programs-hero">
        <div className="container">
          <h1 className="page-title">Choose Your Path</h1>
          <p className="page-subtitle">
            From foundational techniques to elite 1-on-1 coaching. Every program built on the same system that turned B swimmers into record-breakers.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-list section">
        <div className="container">
          {programs.map((program, index) => (
            <div key={index} className={`program-card ${program.featured ? 'featured' : ''}`}>
              {program.featured && <div className="program-badge">Most Popular</div>}
              
              <div className="program-header">
                <div>
                  <h3 className="program-name">{program.name}</h3>
                  <p className="program-type">{program.type}</p>
                </div>
                <div className="program-price">{program.price}</div>
              </div>

              <p className="program-description">{program.description}</p>

              <ul className="program-features">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={program.link} 
                className="btn btn-primary program-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {program.price === "FREE" ? "Get Free Access" : "Purchase Now"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>What's the difference between the Library and 1-on-1 Coaching?</h3>
              <p>
                The Technique Solutions Library is self-paced learning - you get access to all the video progressions 
                and explanations. 1-on-1 Coaching includes the Library PLUS direct feedback on your specific technique 
                via Zoom sessions and video submissions.
              </p>
            </div>

            <div className="faq-item">
              <h3>Will this work for my age/level?</h3>
              <p>
                Yes. The system has progressions for ages 7+ through elite/world record level. Whether you're 
                a parent looking to help your 10-year-old or a college coach working with D1 athletes, there's 
                a pathway designed for you.
              </p>
            </div>

            <div className="faq-item">
              <h3>How is this different from other swim technique programs?</h3>
              <p>
                Most programs teach "what" to do. Reykli teaches the "how" - specific motor skill progressions 
                based on what actually works at the championship level. It's reverse-engineered from Eddie Reese, 
                David Marsh, and Olympic champions, not generic coaching advice.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I cancel my subscription anytime?</h3>
              <p>
                Yes. Both the Technique Solutions Library ($79/mo) and 1-on-1 Coaching ($679/mo) can be 
                canceled at any time with no penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="programs-final-cta section">
        <div className="container">
          <div className="final-cta-box">
            <h2>Not Sure Which Program to Start With?</h2>
            <p>Start with the free butterfly technique course and see how the Reykli system works.</p>
            <a 
              href="https://swimnerd.com/shop/dax-hill" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programs;
