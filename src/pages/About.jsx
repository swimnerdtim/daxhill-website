import './About.css';

function About() {
  const timeline = [
    {
      year: "2009-2012",
      title: "University of Texas",
      description: "3x NCAA Champion under legendary coach Eddie Reese. 8x All-American. 2x World University Games Gold Medalist."
    },
    {
      year: "2014",
      title: "Coaching Begins",
      description: "Started applying knowledge from David Marsh, Eddie Reese, and Olympic teammates. Realized swimming had no structured skill progression system."
    },
    {
      year: "2015",
      title: "System Development",
      description: "Built first iteration of stroke development system by reverse engineering championship technique. Created motor skill progressions."
    },
    {
      year: "2016",
      title: "Proof of Concept",
      description: "Covertly installed system with 9-and-under group. \"Slower\" swimmers started beating the \"faster\" group coached by head coach."
    },
    {
      year: "2017",
      title: "Breakthrough Results",
      description: "Swimmers held 81% of team records and runner-up records. Parents took notice. System validated."
    },
    {
      year: "2018",
      title: "Island of Broken Toys",
      description: "Took on the overlooked kids - lifetime B swimmers. Turned them into AA/AAA performers who started breaking team records."
    },
    {
      year: "2019-Present",
      title: "Reykli Full-Time",
      description: "Left club coaching to help coaches and athletes worldwide reach their full potential through the proven system."
    }
  ];

  const achievements = [
    "3x NCAA Champion (200 FR, 400 FR Relay, 800 FR Relay)",
    "8x All-American at University of Texas",
    "2x World University Games Gold Medalist",
    "7x Big 12 Champion",
    "2012 U.S. Olympic Trials Competitor",
    "Personal Best: 1:32.51 (200y Free)",
    "Trained by Eddie Reese (Hall of Fame Coach)",
    "Fitter & Faster Elite Clinician"
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">The Reykli Story</h1>
          <p className="page-subtitle">
            From NCAA champion to the coach who built a system that turns overlooked swimmers into champions
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="story section">
        <div className="container">
          <div className="story-content">
            <h2>Why I Built Reykli</h2>
            <p>
              When I started coaching in 2014, I had something most coaches don't: direct access to world-class knowledge. 
              I'd been trained by Eddie Reese at Texas, learned from David Marsh, and swam alongside Olympic champions.
            </p>
            <p>
              But I quickly realized something was broken. Swimming had no structured skill progression system. 
              Basketball has shooting drills. Football has route trees. Swimming? Just "swim more."
            </p>
            <p>
              So I reverse-engineered everything I'd learned from the best coaches and swimmers in the world. 
              I broke down championship technique into learnable progressions - specific motor skills that build on each other.
            </p>
            <p>
              The results were immediate. My "slower" 9-and-unders started beating the "fast" group. 
              Then my swimmers held 81% of the team records. Then the "Island of Broken Toys" - 
              lifetime B swimmers that nobody believed in - started dropping AA and AAA times.
            </p>
            <p>
              That's when I knew: this system works for anyone willing to learn it.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline section">
        <div className="container">
          <h2 className="section-title">The Journey</h2>
          <div className="timeline-list">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements section">
        <div className="container">
          <h2 className="section-title">Swimming Resume</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <span className="achievement-check">✓</span>
                <span className="achievement-text">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy section">
        <div className="container">
          <h2 className="section-title">My Coaching Philosophy</h2>
          <div className="philosophy-grid">
            <div className="philosophy-card">
              <h3>Skill &gt; Volume</h3>
              <p>
                Championship performance comes from precise movement patterns, not just swimming harder. 
                Master the motor skills first, then add volume.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Progressions Matter</h3>
              <p>
                You can't skip steps. Each technique builds on the last. The system works because it 
                follows the natural path of motor skill development.
              </p>
            </div>
            <div className="philosophy-card">
              <h3>Evidence-Based</h3>
              <p>
                Everything I teach comes from world-class coaches and Olympic champions. No guesswork. 
                Just proven techniques that work at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Learn the System?</h2>
            <p>From foundational techniques to 1-on-1 coaching, there's a path for every swimmer.</p>
            <a 
              href="https://swimnerd.com/shop/dax-hill" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
