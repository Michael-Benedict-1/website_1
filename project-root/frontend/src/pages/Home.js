
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="services">
        <ServiceCard title="AI Consulting" description="Optimize your business with AI-driven strategies." />
        <ServiceCard title="Custom Solutions" description="Tailored AI solutions for your specific needs." />
        <ServiceCard title="Support & Training" description="Comprehensive support and training for your team." />
      </div>
      <TestimonialCarousel />
    </div>
  );
}

export default Home;
                    