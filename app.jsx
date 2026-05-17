import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ConceptCards from './components/ConceptCards/ConceptCards';
import Features from './components/Features/Features';
import GroupBuyingSection from './components/GroupBuyingSection/GroupBuyingSection';
import StakeholderGrid from './components/StakeholderGrid/StakeholderGrid';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import TrustSection from './components/TrustSection/TrustSection';
import FinalCTA from './components/FinalCTA/FinalCTA';
import ContactSection from './components/ContactSection/ContactSection';
import GetStartedModal from './components/GetStartedModal/GetStartedModal';
import ListingsPage from './components/ListingsPage/ListingsPage';

// ScrollToTop component to ensure new pages start at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = ({ openModal }) => (
  <main>
    <Hero onGetStarted={() => openModal('Buyer')} onJoinGroup={() => openModal('Buyer')} />
    <ConceptCards />
    <Features />
    <GroupBuyingSection onRegister={() => openModal('Buyer')} />
    <StakeholderGrid onSelectRole={(role) => openModal(role)} />
    <ProjectShowcase />
    <TrustSection />
    <FinalCTA 
      onExplore={() => openModal('Buyer')} 
      onRegister={() => openModal('Buyer')} 
      onPropose={() => openModal('Partner')} 
    />
    <ContactSection />
  </main>
);

const App = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    interest: 'Buyer'
  });

  const openModal = (interest = 'Buyer') => {
    setModalState({ isOpen: true, interest });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Navbar onGetStarted={() => openModal('Buyer')} />
        
        <Routes>
          <Route path="/" element={<LandingPage openModal={openModal} />} />
          <Route path="/listings" element={<ListingsPage onGetStarted={() => openModal('Buyer')} />} />
        </Routes>
        
        <footer style={{ 
          backgroundColor: '#111', 
          color: '#888', 
          padding: '2.5rem 0 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div className="container">
            <div className="footer-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.4fr 0.8fr 0.8fr', 
              gap: '6rem',
              marginBottom: '2rem',
              alignItems: 'flex-start'
            }}>
              <div className="footer-logo-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="logo-brand footer-logo" style={{ marginBottom: '1.25rem', alignItems: 'center' }}>
                  <div className="logo-main" style={{ color: '#fff', fontSize: '1.8rem', letterSpacing: '0.04em' }}>NOVALAND</div>
                  <div className="logo-sub" style={{ justifyContent: 'center', margin: '2px 0' }}>
                    <span className="line-accent" style={{ width: '45px' }} />
                    <span className="ventures-text" style={{ fontSize: '0.75rem', letterSpacing: '0.3em' }}>VENTURES</span>
                    <span className="line-accent" style={{ width: '45px' }} />
                  </div>
                  <div className="logo-tagline" style={{ marginTop: '0.5rem' }}>Land to Legacy</div>
                </div>
                <p style={{ maxWidth: '420px', fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', margin: '0.5rem 0 0' }}>
                  A technology-led platform enabling transparent land discovery and smarter 
                  group buying through structured collaboration.
                </p>
              </div>
              
              <div>
                <h5 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Platform</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                  <li><a href="#platform" className="hover-white">Verified Opportunities</a></li>
                  <li><a href="#group-buying" className="hover-white">Group Buying</a></li>
                  <li><a href="#collaboration" className="hover-white">Collaboration Marketplace</a></li>
                  <li><a href="#" className="hover-white">Process Support</a></li>
                </ul>
              </div>
              
              <div>
                <h5 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Company</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem' }}>
                  <li><a href="#about" className="hover-white">About Us</a></li>
                  <li><a href="#collaboration" className="hover-white">How it Works</a></li>
                  <li><a href="#" className="hover-white">Trust & Security</a></li>
                  <li><a href="#contact" className="hover-white">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom" style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              fontSize: '0.85rem'
            }}>
              <div>&copy; {new Date().getFullYear()} NovaLand Platform. All rights reserved.</div>
              <div className="footer-links" style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" className="hover-white">Privacy Policy</a>
                <a href="#" className="hover-white">Terms of Participation</a>
              </div>
            </div>
          </div>

          <style jsx>{`
            .hover-white:hover {
              color: white !important;
            }

            @media (max-width: 992px) {
              .footer-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 2.5rem !important;
              }
              .footer-logo-section {
                grid-column: span 2 !important;
                text-align: center !important;
                margin-bottom: 2rem !important;
              }
              .footer-logo-section p {
                margin: 0 auto !important;
              }
            }

            @media (max-width: 480px) {
              .footer-grid {
                grid-template-columns: 1fr !important;
                text-align: center !important;
              }
              .footer-logo-section {
                grid-column: span 1 !important;
              }
              .footer-bottom {
                flex-direction: column !important;
                gap: 1.5rem !important;
                text-align: center !important;
              }
              .footer-links {
                justify-content: center !important;
              }
            }
          `}</style>
        </footer>

        <GetStartedModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          defaultInterest={modalState.interest} 
        />
      </div>
    </Router>
  );
};

export default App;
