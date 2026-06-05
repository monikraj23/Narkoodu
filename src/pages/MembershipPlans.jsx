import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { PremiumCard } from '../components/PremiumCard';
import { Check } from 'lucide-react';

const MembershipPlans = () => {
  return (
    <FadeIn duration={0.6}>
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '1rem' }}>Tailored Experiences</span>
            <h1 style={{ fontWeight: '300', fontSize: '4rem' }}>Membership Plans</h1>
            <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: 'var(--text-light)', fontSize: '1.1rem' }}>
              Select the optimal environment for your professional growth. Whether you require flexible access or a dedicated executive suite, our plans cater to uncompromising standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <StaggerContainer className="grid grid-3" style={{ gap: '2rem', alignItems: 'center' }}>
            
            {/* Hot Desk */}
            <StaggerItem>
              <PremiumCard style={{ padding: '4rem 3rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '0.5rem' }}>Hot Desk</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', minHeight: '60px' }}>
                  Flexible seating within our sophisticated open gallery areas.
                </p>
                
                <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '300' }}>Custom</span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-light)', marginLeft: '0.5rem' }}>/mo</span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem', color: 'var(--text-light)' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Flexible seating access</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Enterprise-grade internet</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Artisan beverages</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Access to premium lounges</li>
                </ul>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Inquire Now</Link>
              </PremiumCard>
            </StaggerItem>

            {/* Dedicated Desk - Featured */}
            <StaggerItem>
              <PremiumCard featured={true} style={{ padding: '5rem 3rem', transform: 'scale(1.05)', zIndex: 10 }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ color: 'var(--accent-color)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '400', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '30px', height: '1px', background: 'var(--accent-color)' }}></span>
                    Preferred Plan
                  </span>
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '0.5rem', color: '#fff' }}>Dedicated Desk</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', minHeight: '60px' }}>
                  Your reserved, personal workstation in a shared executive environment.
                </p>
                
                <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '300' }}>Custom</span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-light)', marginLeft: '0.5rem' }}>/mo</span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem', color: 'var(--text-light)' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Fixed desk & ergonomic chair</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Secure storage pedestal</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> 24/7 access to premises</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Meeting room credits</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Priority event access</li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Inquire Now</Link>
              </PremiumCard>
            </StaggerItem>

            {/* Private Cabin */}
            <StaggerItem>
              <PremiumCard style={{ padding: '4rem 3rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '400', marginBottom: '0.5rem' }}>Private Cabin</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', minHeight: '60px' }}>
                  Fully furnished, acoustically treated enclosed executive suites.
                </p>
                
                <div style={{ margin: '2rem 0', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: '300' }}>Custom</span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-light)', marginLeft: '0.5rem' }}>/mo</span>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem', color: 'var(--text-light)' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Fully enclosed private office</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Premium furnishings & fixtures</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Corporate branding on door</li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><Check size={18} color="var(--accent-color)" /> Custom interior layouts</li>
                </ul>
                <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Inquire Now</Link>
              </PremiumCard>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
    </FadeIn>
  );
};

export default MembershipPlans;
