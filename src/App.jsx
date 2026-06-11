import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Amenities from './pages/Amenities';
import MembershipPlans from './pages/MembershipPlans';
import Gallery from './pages/Gallery';
import BookTour from './pages/BookTour';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Global Ambient Background */}
      <div className="global-ambient">
        <div className="ambient-blue"></div>
        <div className="ambient-red"></div>
      </div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/plans" element={<MembershipPlans />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book-tour" element={<BookTour />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
