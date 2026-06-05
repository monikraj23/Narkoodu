import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "Narkoodu has completely transformed how our executive team operates remotely. The acoustic privacy and high-end amenities are unmatched in Chennai.",
      author: "Rahul Sharma",
      role: "Founder, TechNova"
    },
    {
      text: "An impeccably designed space that reflects the prestige of our brand. The curated community events have been instrumental in our regional growth.",
      author: "Priya Patel",
      role: "Managing Director, Apex Consulting"
    },
    {
      text: "The perfect synergy of hospitality and productivity. Every detail, from the artisan coffee to the enterprise-grade network, is executed flawlessly.",
      author: "Arun Kumar",
      role: "Regional Head, Global Corp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Slower than 5s as requested
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', height: '250px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <p style={{ fontSize: '1.25rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-color)', fontWeight: '300' }}>
            "{testimonials[currentIndex].text}"
          </p>
          <h4 style={{ margin: 0, fontWeight: '400', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{testimonials[currentIndex].author}</h4>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{testimonials[currentIndex].role}</span>
        </motion.div>
      </AnimatePresence>
      
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        {testimonials.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{ 
              width: '40px', height: '2px', 
              background: currentIndex === idx ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
              transition: 'var(--transition)'
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
