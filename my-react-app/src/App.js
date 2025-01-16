import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import SummerCamp from './SummerCamp';
import SpringCamp from './SpringCamp';
import Workshops from './Workshops';
import ActivityCarousel from './ActivityCarousel';
import Footer from './Footer';

// Create a Home component for the main page content
function Home() {
  return (
    <>
      <section className="project-description">
        <h2>Project Description</h2>
        <p>
          The BFP Cyber project is an innovative initiative aimed at enhancing
          cybersecurity education and workforce development. This project will
          foster inclusivity, provide accessible pathways into cybersecurity, and
          help bridge the workforce gap, leading to a more diverse and skilled
          cybersecurity workforce.
        </p>
      </section>

      <section className="goals">
        <h2>Goals</h2>
        <p>
          The successful implementation of the BFP Cyber project will have
          far-reaching impacts on cybersecurity education and workforce
          development. By fostering inclusivity and providing accessible pathways,
          the project will bridge the workforce gap and pave the way for a
          diverse and skilled cybersecurity workforce. The partnerships forged
          through this initiative will transcend the university's confines,
          positively influencing cybersecurity training at a regional level,
          creating a cohesive and collaborative cybersecurity community, and
          empowering future-ready professionals to safeguard the digital world
          and protect the nation's critical assets and privacy.
        </p>
      </section>

      <section className="activities">
        <h2>Activities</h2>
        <ActivityCarousel />
      </section>

      <section className="resources">
        <h2>Links & Resources</h2>
        <ul>
          <li><a href="https://www.bgsu.edu/cs">BGSU Computer Science Department</a></li>
        </ul>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Building Future-Ready Professionals in Cybersecurity</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summer-camp" element={<SummerCamp />} />
          <Route path="/spring-camp" element={<SpringCamp />} />
          <Route path="/workshops" element={<Workshops />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;