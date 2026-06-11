import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Wifi, Users, Clock, Shield, Coffee, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { AnimatedCounter } from '../components/AnimatedCounter';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { PremiumCard } from '../components/PremiumCard';
import PremiumGallery from '../components/PremiumGallery';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div>
      {/* Full-Width Immersive Hero Section */}
      <section 
        onMouseMove={handleMouseMove}
        style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
      >
        {/* Immersive Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, zIndex: -1 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Premium Coworking Space" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(to bottom, rgba(11,11,11,0.3) 0%, rgba(11,11,11,0.85) 100%), radial-gradient(circle, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)', 
            zIndex: 1 
          }} />
        </motion.div>
        
        {/* SERAMINDS Ambient Glow Interaction */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(45, 127, 249, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(229, 57, 80, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 1, pointerEvents: 'none' }} />
        
        {/* Text Content Overlay */}
        <StaggerContainer className="container" delayChildren={0.3} staggerDelay={0.2} style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '5rem' }}>
          
          <StaggerItem>
            <h1 style={{ maxWidth: '1000px', margin: '0 auto 2rem', color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.8)', fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: '300', lineHeight: 1.15 }}>
              Premium Coworking Spaces in Chennai
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <p style={{ maxWidth: '650px', margin: '0 auto 3.5rem', color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', lineHeight: 1.7, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Experience a workspace meticulously designed for entrepreneurs, remote executives, and growing enterprises.
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/book-tour" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Book a Tour</Link>
              <Link to="/plans" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '1rem 2.5rem', fontSize: '1rem', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)' }}>Explore Plans</Link>
            </div>
          </StaggerItem>
          
        </StaggerContainer>


      </section>

      {/* Intro Section - Premium Gallery style */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)', padding: '8rem 0', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '8rem' }}>
            {/* Left: Content */}
            <FadeIn>
              <div style={{ paddingRight: '2rem' }}>
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ width: '20px', height: '1px', background: 'var(--accent-color)' }} />
                  Curated Spaces
                </span>
                <h2 style={{ fontSize: '3rem', marginBottom: '2.5rem', fontWeight: '300', lineHeight: 1.15 }}>A Space For <br/><span style={{ color: 'var(--accent-color)' }}>Visionaries</span></h2>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '2rem', color: 'var(--text-light)' }}>
                  Narkoodu offers a sophisticated, distraction-free environment meticulously designed for entrepreneurs, remote executives, and growing enterprises in Chennai.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '3rem', color: 'var(--text-light)' }}>
                  Experience world-class amenities, a curated community, and a workspace that elegantly reflects the ambition and scale of your business.
                </p>
                <Link to="/about" className="btn btn-outline">Discover Our Story</Link>
              </div>
            </FadeIn>
            
            {/* Right: Premium Gallery */}
            <FadeIn delay={0.2}>
              <PremiumGallery />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section" style={{ padding: '6rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <StaggerContainer className="grid grid-3" style={{ textAlign: 'center' }}>
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="text-accent" style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0' }}>
                  <AnimatedCounter to={10} suffix="k+" />
                </h2>
                <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Sq.ft Workspace</p>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="text-accent" style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0' }}>
                  <AnimatedCounter to={24} suffix="/7" />
                </h2>
                <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Accessibility</p>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 className="text-accent" style={{ fontSize: '3.5rem', margin: '0 0 0.5rem 0' }}>
                  <AnimatedCounter to={50} suffix="+" />
                </h2>
                <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Startups & Teams</p>
              </PremiumCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Narkoodu */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-title" style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>The Narkoodu Standard</span>
              <h2>Elevated Workspaces</h2>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-3" style={{ gap: '2rem' }}>
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <MapPin size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Prime Location</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Strategically situated in Madambakkam, offering prestigious accessibility and convenience.</p>
              </PremiumCard>
            </StaggerItem>
            
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <Wifi size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Enterprise Connectivity</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Uninterrupted, high-speed secure networks designed for modern business demands.</p>
              </PremiumCard>
            </StaggerItem>
            
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <Users size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Curated Network</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Join an exclusive community of founders, executives, and elite professionals.</p>
              </PremiumCard>
            </StaggerItem>
            
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <Clock size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>24/7 Access</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Round-the-clock secure entry, allowing you to work on your own schedule.</p>
              </PremiumCard>
            </StaggerItem>
            
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <Shield size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Executive Privacy</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>A premium, distraction-free environment with enhanced acoustic privacy.</p>
              </PremiumCard>
            </StaggerItem>
            
            <StaggerItem>
              <PremiumCard style={{ padding: '3rem 2.5rem' }}>
                <div className="icon-wrapper" style={{ marginBottom: '2rem' }}>
                  <Coffee size={32} strokeWidth={1} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Artisan Amenities</h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Complimentary premium beverages, concierge services, and sophisticated lounges.</p>
              </PremiumCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Full width image break */}
      <section style={{ height: '60vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Lounge Area" 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </section>

      {/* Membership Preview */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <FadeIn>
            <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>Tailored Memberships</span>
                <h2 style={{ margin: 0 }}>Workspace Options</h2>
              </div>
              <Link to="/plans" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.85rem', color: 'var(--accent-color)' }}>View All Plans</Link>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-3" style={{ gap: '2rem' }}>
            <StaggerItem>
              <PremiumCard style={{ padding: '4rem 3rem', height: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '300' }}>Hot Desk</h3>
                <p style={{ marginBottom: '3rem', minHeight: '80px', color: 'var(--text-light)' }}>Flexible seating in our sophisticated open gallery areas. Perfect for remote executives.</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link to="/contact" className="btn-pill" style={{ width: '100%' }}>
                    Inquire Now <ArrowRight size={16} className="arrow-icon" />
                  </Link>
                </div>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard featured={true} style={{ padding: '4rem 3rem', height: '100%' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span className="preferred-label" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '400', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="preferred-line" style={{ width: '20px', height: '1px' }}></span>
                    Preferred Plan
                  </span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '300', color: '#fff' }}>Dedicated Desk</h3>
                <p style={{ marginBottom: '3rem', minHeight: '80px', color: 'var(--text-light)' }}>Your reserved, personal desk in a shared executive space. Includes lockable storage.</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link to="/contact" className="btn-pill" style={{ width: '100%' }}>
                    Inquire Now <ArrowRight size={16} className="arrow-icon" />
                  </Link>
                </div>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard style={{ padding: '4rem 3rem', height: '100%' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '300' }}>Private Cabin</h3>
                <p style={{ marginBottom: '3rem', minHeight: '80px', color: 'var(--text-light)' }}>Fully furnished enclosed suites offering utmost privacy for focused teams.</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link to="/contact" className="btn-pill" style={{ width: '100%' }}>
                    Inquire Now <ArrowRight size={16} className="arrow-icon" />
                  </Link>
                </div>
              </PremiumCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>Member Perspectives</span>
              <h2>Testimonials</h2>
            </div>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <FadeIn>
            <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>General Inquiries</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FAQAccordion />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <FadeIn>
          <div className="container">
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '2rem' }}>Experience Narkoodu</span>
            <h2 style={{ maxWidth: '800px', margin: '0 auto 3rem', fontWeight: '300' }}>Step into a workspace designed for excellence.</h2>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/book-tour" className="btn btn-primary">Schedule a Private Tour</Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default Home;
