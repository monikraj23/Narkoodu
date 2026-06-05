import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'The Grand Reception' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'Open Gallery Workspace' },
    { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'Executive Boardroom' },
    { src: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'Private Suites' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'The Artisan Café' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', title: 'Collaboration Lounges' },
  ];

  return (
    <FadeIn duration={0.6}>
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '6rem' }}>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>Visual Journey</span>
            <h1 style={{ fontWeight: '300' }}>Gallery</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <StaggerContainer className="grid grid-2" style={{ gap: '6rem 4rem' }}>
            {images.map((img, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  initial="rest" 
                  whileHover="hover" 
                  animate="rest"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', cursor: 'pointer' }}
                >
                  <div style={{ overflow: 'hidden', position: 'relative' }}>
                    <motion.img 
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      src={img.src} 
                      alt={img.title} 
                      style={{ width: '100%', height: '450px', objectFit: 'cover' }} 
                    />
                    <motion.div 
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))',
                        pointerEvents: 'none'
                      }}
                    />
                    <motion.div
                      variants={{
                        rest: { opacity: 0, y: 20 },
                        hover: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{
                        position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', pointerEvents: 'none'
                      }}
                    >
                      <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '400', letterSpacing: '0.05em', color: '#fff' }}>{img.title}</h3>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </FadeIn>
  );
};

export default Gallery;
