import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  const faqs = [
    { question: "What are your operating hours?", answer: "Our concierge and front desk operate from Mon-Sat, 9:00 AM to 8:00 PM. However, members enjoy 24/7 secure access to the premises." },
    { question: "How do meeting room bookings work?", answer: "Meeting rooms can be reserved seamlessly via our member portal. Dedicated Desk and Private Cabin members receive monthly complimentary credits." },
    { question: "Can I customize my Private Cabin?", answer: "Absolutely. We offer tailored interior layouts and corporate branding options for our enclosed suites to reflect your company's identity." },
    { question: "What networking opportunities exist?", answer: "We host exclusive member-only events, executive roundtables, and networking mixers designed to foster genuine high-level connections." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, index) => (
        <div key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <button 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ width: '100%', textAlign: 'left', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '400', color: openIndex === index ? 'var(--accent-color)' : 'var(--text-color)', transition: 'color 0.3s' }}>
              {faq.question}
            </h4>
            <span style={{ color: 'var(--accent-color)', fontSize: '1.5rem', transition: 'transform 0.4s', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>
              +
            </span>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ paddingBottom: '1.5rem', margin: 0, color: 'var(--text-light)' }}>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
