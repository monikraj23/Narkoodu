import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", label: "Executive Lounge" },
  { src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80", label: "Dedicated Workspace" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80", label: "Open Gallery" },
  { src: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&w=1200&q=80", label: "Meeting Room" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80", label: "Collaboration Area" }
];

const PremiumGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  // Next image for the layered preview
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div style={{ position: 'relative', width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Decorative Background Frame */}
      <div style={{ position: 'absolute', top: '5%', right: '5%', width: '80%', height: '90%', border: '1px solid rgba(212,163,115,0.3)', borderRadius: '24px', zIndex: 0 }} />

      {/* Main Image Container */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '85%', height: '90%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.8)', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt={images[currentIndex].label}
          />
        </AnimatePresence>
        
        {/* Subtle Dark Gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,11,11,0.8) 0%, transparent 40%)', pointerEvents: 'none' }} />
        
        {/* Label inside main image */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '2.5rem' }}>
          <motion.span 
            key={currentIndex + '-label'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-color)' }}
          >
            {images[currentIndex].label}
          </motion.span>
        </div>
      </div>

      {/* Layered Preview Image (Bottom Right overlap) */}
      <div style={{ position: 'absolute', bottom: '0', right: '0', width: '40%', height: '45%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.9)', zIndex: 2, border: '4px solid var(--surface-color)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={nextIndex}
            src={images[nextIndex].src}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
            alt="Next preview"
          />
        </AnimatePresence>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
           <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '0.5rem 1rem', borderRadius: '50px', backdropFilter: 'blur(5px)' }}>Next</span>
        </div>
      </div>

      {/* Controls Container */}
      <div style={{ position: 'absolute', bottom: '-1rem', right: '45%', zIndex: 3, display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '50px', backdropFilter: 'blur(16px)', border: '1px solid rgba(212,163,115,0.2)' }}>
        <button 
          onClick={prevImage}
          style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid transparent', color: '#fff', cursor: 'pointer', transition: 'all 0.3s ease', background: 'transparent' }}
          onMouseOver={(e) => { e.currentTarget.style.border = '1px solid var(--accent-color)'; e.currentTarget.style.color = 'var(--accent-color)'; }}
          onMouseOut={(e) => { e.currentTarget.style.border = '1px solid transparent'; e.currentTarget.style.color = '#fff'; }}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextImage}
          style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid transparent', color: '#fff', cursor: 'pointer', transition: 'all 0.3s ease', background: 'transparent' }}
          onMouseOver={(e) => { e.currentTarget.style.border = '1px solid var(--accent-color)'; e.currentTarget.style.color = 'var(--accent-color)'; }}
          onMouseOut={(e) => { e.currentTarget.style.border = '1px solid transparent'; e.currentTarget.style.color = '#fff'; }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Modern Indicators */}
      <div style={{ position: 'absolute', bottom: '-4rem', left: '0', display: 'flex', gap: '0.5rem' }}>
        {images.map((_, idx) => (
          <div 
            key={idx} 
            style={{ 
              width: idx === currentIndex ? '30px' : '10px', 
              height: '2px', 
              background: idx === currentIndex ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.4s ease',
              borderRadius: '2px'
            }} 
          />
        ))}
      </div>

    </div>
  );
};

export default PremiumGallery;
