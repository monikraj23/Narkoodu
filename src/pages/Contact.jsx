import React, { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/admin@seraminds.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact Message from Narkoodu Website"
        })
      });
      if(response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch(error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn duration={0.6}>
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '3rem', marginBottom: '6rem' }}>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>Inquiries</span>
            <h1 style={{ fontWeight: '300' }}>Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '6rem' }}>
            
            {/* Contact Information */}
            <StaggerContainer>
              <StaggerItem>
                <h2 style={{ fontSize: '2rem', fontWeight: '300', marginBottom: '3rem' }}>Get in Touch</h2>
              </StaggerItem>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <StaggerItem>
                  <div>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '0.5rem' }}>Location</span>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Sera+Towers,+W555%2B638,+3rd+St,+Shanthi+Nikethan+Colony,+Sudharsan+Nagar,+Madambakkam,+Chennai,+Tamil+Nadu+600073" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <p style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', lineHeight: 1.8, transition: 'var(--transition)' }} onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                        <strong>Sera Towers</strong><br />
                        W555+638, 3rd St,<br />Shanthi Nikethan Colony, Sudharsan Nagar,<br />Madambakkam, Chennai, Tamil Nadu 600073
                      </p>
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Sera+Towers,+W555%2B638,+3rd+St,+Shanthi+Nikethan+Colony,+Sudharsan+Nagar,+Madambakkam,+Chennai,+Tamil+Nadu+600073" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline" 
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                    >
                      Get Directions
                    </a>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '0.5rem' }}>Direct Line</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <a href="tel:+917200253037" style={{ fontSize: '1.1rem' }}>+91 7200253037</a>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '0.5rem' }}>Electronic Mail</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <a href="mailto:admin@seraminds.com" style={{ fontSize: '1.1rem' }}>admin@seraminds.com</a>
                      <a href="mailto:hr@seraminds.com" style={{ fontSize: '1.1rem' }}>hr@seraminds.com</a>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div>
                    <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-color)', display: 'block', marginBottom: '0.5rem' }}>Operating Hours</span>
                    <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: 1.8 }}>Mon - Sat: 9:00 AM - 8:00 PM<br/>Members possess 24/7 access</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>

            {/* Contact Form */}
            <FadeIn delay={0.3}>
              <div style={{ padding: '4rem 3rem', background: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: '400' }}>Send a Message</h3>
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <p style={{ color: 'var(--accent-color)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Your message has been sent successfully.</p>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="name" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="email" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="subject" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Subject</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="message" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message *</label>
                      <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} style={{ resize: 'none' }}></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', opacity: isSubmitting ? 0.7 : 1 }}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Map Embed */}
          <FadeIn delay={0.4}>
            <div style={{ marginTop: '8rem', height: '450px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Sera+Towers,+W555%2B638,+3rd+St,+Shanthi+Nikethan+Colony,+Sudharsan+Nagar,+Madambakkam,+Chennai,+Tamil+Nadu+600073" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', transition: 'background 0.3s ease', textDecoration: 'none' }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.5)'; e.currentTarget.querySelector('div').style.opacity = '1'; e.currentTarget.querySelector('div').style.transform = 'translateY(0)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; e.currentTarget.querySelector('div').style.opacity = '0'; e.currentTarget.querySelector('div').style.transform = 'translateY(10px)'; }}
              >
                <div style={{ padding: '1rem 2rem', background: 'var(--surface-color)', border: '1px solid var(--accent-color)', borderRadius: '50px', color: '#fff', fontSize: '1rem', fontWeight: '500', opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s ease' }}>
                  Open in Google Maps
                </div>
              </a>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7523171340445!2d80.14781491523414!3d12.898822590906294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f2b84eb4b6f%3A0xc0732df3dfef0052!2sShanthi%20Nikethan%20Colony%2C%20Madambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689255011111!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(95%) contrast(85%) hue-rotate(200deg)', pointerEvents: 'none' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Narkoodu Location"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>
    </FadeIn>
  );
};

export default Contact;
