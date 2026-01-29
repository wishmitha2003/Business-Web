import React from 'react';

const services = [
  { title: 'Web Development', desc: 'Full-stack React/Node.js solutions', price: 'Starting $5K' },
  { title: 'Mobile Apps', desc: 'React Native iOS/Android apps', price: 'Starting $8K' },
  { title: 'DevOps', desc: 'CI/CD, cloud deployment automation', price: 'Starting $3K/mo' },
  { title: 'Consulting', desc: 'Architecture & tech strategy', price: 'Hourly $150' }
];

const Services = () => {
  return (
    <div className="services-page">
      <header>
        <h1>Our Services</h1>
        <p>Professional development solutions tailored for your business</p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <div className="price-tag">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
