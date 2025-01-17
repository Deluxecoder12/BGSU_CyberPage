import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import bgsuLogo from './images/bgsu-logo-rev.svg';
import footerbg from './images/footer-background.jpg';
import SummerCamp from './components/SummerCamp/SummerCamp';
import SpringCamp from './components/SpringCamp/SpringCamp';
import Workshops from './components/Workshops/Workshops';
import Goals from './components/Goals/Goals';
import ActivityCarousel from './components/ActivityCarousel/ActivityCarousel';
import Resources from './components/Resources/Resources';
import ProjectDescription from './components/ProjectDescription/ProjectDescription';

// Create a Home component for the main page content
function Home() {
  return (
    <>
      <section className="project-description">
        <ProjectDescription />
      </section>

      <section className="goals">
        <Goals/>
      </section>

      <section className="activities">
        <ActivityCarousel />
      </section>

      <section className="resources">
        <Resources />
      </section>
    </>
  );
}

// Header component
function Header() {
  return (
    <header className="page-header">
      <div className="header-top">
        <img className="bgsu-logo" src={bgsuLogo} alt="BGSU"/>
        <div className="separator">|</div>
        <div className="title">
          <span className="title-large">Building Future-Ready Professionals</span>
        </div>
      </div>

      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-shortcuts">
            {/* Nav elements */}
          </div>
        </div>
      </nav>
    </header>
  );
}

// Footer component
function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="footer-main" style={{backgroundImage: `url(${footerbg})`}}>
        <div className="footer-container">
          {/* Left Column */}
          <div className="footer-brand">
            <img className="bgsu-logo" src={bgsuLogo} alt="BGSU"/>
            <div className="university-info">
              <p>Bowling Green State University</p>
              <p>Bowling Green, Ohio</p>
              <p>43403-0001</p>
              <a href="tel:419-372-2531" className="phone-link">419-372-2531</a>
            </div>
            <a href="/make-a-gift" className="make-gift-link">Make A Gift 🎁</a>
          </div>

          {/* Middle Column */}
          <div className="footer-links">
            <div className="links-column">
              <a href="/accessibility">Accessibility including events</a>
              <a href="/academics">Academics</a>
              <a href="/a-z">A-Z Links</a>
              <a href="/directory">Campus Directory</a>
              <a href="/consumer">Consumer Information</a>
            </div>
            <div className="links-column">
              <a href="/employment">Employment</a>
              <a href="/faculty">Faculty/Staff</a>
              <a href="/firelands">Firelands</a>
              <a href="/libraries">Libraries</a>
              <a href="/media">Media Resources</a>
            </div>
            <div className="links-column">
              <a href="/nondiscrimination">Nondiscrimination</a>
              <a href="/parents">Parents and Families</a>
              <a href="/students">Students</a>
              <a href="/tech">Technology Support</a>
              <a href="/title-ix">Title IX Resources</a>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="contrast-toggle">
            <button 
              className="toggle-btn"
            >
              <span className="toggle-icon">🌓</span>
              Toggle High Contrast
            </button>
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="footer-report">
        <div className="report-container">
          <div className="report-content">
            <h3>SEE IT. HEAR IT. REPORT IT.</h3>
            <p>It is the responsibility of each person within the university community to take action when an issue or concern arises.</p>
          </div>
          <a href="/report" className="report-button">
            Report concerns or information of alleged misconduct
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summer-camp" element={<SummerCamp />} />
            <Route path="/spring-camp" element={<SpringCamp />} />
            <Route path="/workshops" element={<Workshops />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>

  );
}

export default App;