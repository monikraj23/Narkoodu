import React from 'react';
import { Layers, Car, Wifi, Snowflake, Zap, Archive, ShieldCheck, MapPin, Coffee, Printer, CupSoda, Clock } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import { PremiumCard } from '../components/PremiumCard';

const Amenities = () => {
  const amenities = [
    { icon: <Layers size={36} strokeWidth={1} />, title: 'Vibrant Open Spaces', desc: 'Aesthetically designed lounges for collaborative synergy.' },
    { icon: <Car size={36} strokeWidth={1} />, title: 'Ample Parking', desc: 'Secure 2 and 4-wheeler parking for members and guests.' },
    { icon: <Wifi size={36} strokeWidth={1} />, title: 'High-Speed Internet', desc: 'Enterprise-grade, uninterrupted connectivity.' },
    { icon: <Snowflake size={36} strokeWidth={1} />, title: 'Central Air-Conditioning', desc: 'Climate-controlled environments for optimal comfort.' },
    { icon: <Zap size={36} strokeWidth={1} />, title: 'DG Power Backup', desc: '100% power redundancy ensuring zero downtime.' },
    { icon: <Archive size={36} strokeWidth={1} />, title: 'Dedicated Storage', desc: 'Secure, private lockers and filing solutions.' },
    { icon: <ShieldCheck size={36} strokeWidth={1} />, title: 'Safety & Security', desc: '24/7 CCTV surveillance and controlled access.' },
    { icon: <MapPin size={36} strokeWidth={1} />, title: 'Prime Proximity', desc: 'Located near elite cafes and business hubs.' },
    { icon: <Coffee size={36} strokeWidth={1} />, title: 'Cafeteria Facilities', desc: 'Premium dining and breakout areas.' },
    { icon: <Printer size={36} strokeWidth={1} />, title: 'Complimentary Printing', desc: 'State-of-the-art secure printing stations.' },
    { icon: <CupSoda size={36} strokeWidth={1} />, title: 'Premium Beverages', desc: 'Artisan coffee and assorted teas on the house.' },
    { icon: <Clock size={36} strokeWidth={1} />, title: '24×7 Access', desc: 'Round-the-clock entry for ultimate flexibility.' }
  ];

  return (
    <FadeIn duration={0.6}>
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="section-title" style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span style={{ fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', display: 'block', marginBottom: '1rem' }}>The Narkoodu Standard</span>
            <h1 style={{ fontWeight: '300' }}>Premium Amenities</h1>
            <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: 'var(--text-light)', fontSize: '1.1rem' }}>
              Experience an unparalleled suite of services designed specifically to elevate your executive workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <StaggerContainer className="grid grid-3" style={{ gap: '2.5rem' }}>
            {amenities.map((item, index) => (
              <StaggerItem key={index}>
                <PremiumCard style={{ padding: 0 }}>
                  <div className="icon-wrapper" style={{ color: 'var(--accent-color)', marginBottom: '2rem' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', margin: '0 0 1rem 0', fontWeight: '400', color: 'var(--text-color)' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{item.desc}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </FadeIn>
  );
};

export default Amenities;
