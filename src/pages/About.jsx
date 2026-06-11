import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { PremiumCard } from '../components/PremiumCard';
import { Users, TrendingUp, Lightbulb, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    { title: "Collaboration", desc: "We believe transformative ideas emerge when diverse, brilliant minds converge in a supportive setting.", icon: <Users size={32} strokeWidth={1} /> },
    { title: "Growth", desc: "We provide the structural environment and premium resources necessary for your enterprise to scale gracefully.", icon: <TrendingUp size={32} strokeWidth={1} /> },
    { title: "Innovation", desc: "We continuously refine our offerings to preemptively meet the evolving demands of modern executive professionals.", icon: <Lightbulb size={32} strokeWidth={1} /> },
    { title: "Professionalism", desc: "We strictly maintain a high-caliber, distraction-free atmosphere reflective of corporate excellence.", icon: <Award size={32} strokeWidth={1} /> },
    { title: "Community", desc: "We cultivate an exclusive, supportive network of like-minded, ambitious individuals driving global impact.", icon: <Globe size={32} strokeWidth={1} /> },
  ];

  return (
    <FadeIn duration={0.6}>
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '6rem' }}>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>The Narkoodu Heritage</span>
            <h1 style={{ fontWeight: '300' }}>About Us</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            
            <div style={{ display: 'flex', gap: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
              
              {/* Left Side: Content, Mission, Vision */}
              <FadeIn delay={0.2} style={{ flex: '1 1 500px', paddingRight: '2rem' }}>
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '1.5rem' }}>Our Philosophy</span>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: '300', lineHeight: 1.1 }}>A Vision of <br/>Executive Excellence</h2>
                <div style={{ width: '60px', height: '1px', background: 'var(--accent-color)', marginBottom: '2.5rem' }} />
                
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem', fontWeight: '300', color: 'var(--text-color)' }}>
                  Narkoodu is not merely a coworking space. It is a premier business destination where visionary individuals and expanding enterprises convene to work, collaborate, and prosper.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-light)', marginBottom: '3.5rem' }}>
                  Conceived with the intent of offering an unparalleled, accessible executive environment in Chennai, we deeply comprehend the nuances of modern business. We have curated a setting that not only inspires productivity but also fosters genuine, high-caliber connections.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '1rem' }}>Our Purpose</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '300' }}>Mission</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.8 }}>
                      To engineer an inspiring and elite workspace where professionals and esteemed businesses can seamlessly thrive.
                    </p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '1rem' }}>Our Future</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '300' }}>Vision</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-light)', margin: 0, lineHeight: 1.8 }}>
                      To be established as Chennai's most distinguished corporate coworking institution, recognized for impeccable facilities.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Right Side: Premium Image Area */}
              <FadeIn delay={0.4} style={{ flex: '1 1 500px' }}>
                <div className="premium-card" style={{ padding: 0, height: '700px', position: 'relative' }}>
                  {/* Internal Image */}
                  <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '24px' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Executive Lounge" 
                      className="img-hover-zoom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    {/* Premium Depth Overlay */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />
                  </div>
                </div>
              </FadeIn>

            </div>

            <div>
              <FadeIn>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                  <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>The Foundation</span>
                  <h2 style={{ fontWeight: '300', fontSize: '3rem' }}>Our Core Values</h2>
                </div>
              </FadeIn>
              
              <StaggerContainer 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(6, 1fr)', 
                  gap: '2rem',
                  gridAutoRows: 'minmax(250px, auto)'
                }}
              >
                {/* Bento Grid Layout */}
                <StaggerItem style={{ gridColumn: 'span 4' }}>
                  <PremiumCard style={{ padding: 0 }}>
                    <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                      {values[0].icon}
                    </div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '400', marginBottom: '1rem' }}>{values[0].title}</h3>
                    <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.7 }}>{values[0].desc}</p>
                  </PremiumCard>
                </StaggerItem>
                
                <StaggerItem style={{ gridColumn: 'span 2' }}>
                  <PremiumCard style={{ padding: 0 }}>
                    <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                      {values[1].icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem' }}>{values[1].title}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>{values[1].desc}</p>
                  </PremiumCard>
                </StaggerItem>

                <StaggerItem style={{ gridColumn: 'span 2' }}>
                  <PremiumCard style={{ padding: 0 }}>
                    <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                      {values[2].icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem' }}>{values[2].title}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>{values[2].desc}</p>
                  </PremiumCard>
                </StaggerItem>

                <StaggerItem style={{ gridColumn: 'span 2' }}>
                  <PremiumCard style={{ padding: 0 }}>
                    <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                      {values[3].icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem' }}>{values[3].title}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>{values[3].desc}</p>
                  </PremiumCard>
                </StaggerItem>

                <StaggerItem style={{ gridColumn: 'span 2' }}>
                  <PremiumCard style={{ padding: 0 }}>
                    <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                      {values[4].icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem' }}>{values[4].title}</h3>
                    <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.7 }}>{values[4].desc}</p>
                  </PremiumCard>
                </StaggerItem>

              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default About;
