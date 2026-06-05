import React, { useState } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';

const BookTour = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    visitDate: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          _subject: "New Tour Booking Request from Narkoodu Website"
        })
      });
      if(response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', company: '', teamSize: '', visitDate: '', message: '' });
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
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>Experience Narkoodu</span>
            <h1 style={{ fontWeight: '300' }}>Schedule a Private Tour</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ padding: '4rem', background: 'var(--surface-color)', border: '1px solid rgba(255,255,255,0.05)' }}>
            {isSubmitted ? (
              <FadeIn>
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <div style={{ width: '64px', height: '64px', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '1.5rem' }}>
                    ✓
                  </div>
                  <h2 style={{ fontWeight: '300', marginBottom: '1rem' }}>Request Received</h2>
                  <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--text-light)' }}>Our concierge team will contact you shortly to arrange your exclusive walkthrough.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">Schedule Another</button>
                </div>
              </FadeIn>
            ) : (
              <StaggerContainer>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <StaggerItem>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="name" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name *</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="email" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address *</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="phone" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="company" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company Name</label>
                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="teamSize" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Team Size</label>
                        <select id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange} style={{ appearance: 'none', colorScheme: 'dark' }}>
                          <option value="" style={{ color: '#aaa' }}>Select size</option>
                          <option value="1">1 (Individual)</option>
                          <option value="2-5">2 - 5 people</option>
                          <option value="6-10">6 - 10 people</option>
                          <option value="11-20">11 - 20 people</option>
                          <option value="20+">20+ people</option>
                        </select>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="visitDate" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Preferred Date</label>
                        <input type="date" id="visitDate" name="visitDate" value={formData.visitDate} onChange={handleChange} style={{ colorScheme: 'dark' }} />
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="message" style={{ fontWeight: 400, color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Additional Inquiries</label>
                      <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} style={{ resize: 'none' }}></textarea>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                      <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', opacity: isSubmitting ? 0.7 : 1 }}>
                        {isSubmitting ? 'Sending Request...' : 'Submit Request'}
                      </button>
                    </div>
                  </StaggerItem>
                </form>
              </StaggerContainer>
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

export default BookTour;
