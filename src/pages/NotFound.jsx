import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, Calendar, AlertOctagon } from 'lucide-react';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="alpha-notfound-page">
      <SEO
        title="404 - Page Not Found | Alpha Auto Garage"
        description="The requested page could not be found. Return to Alpha Auto Garage home or explore our certified services."
      />

      <div className="container alpha-notfound-container">
        <div className="alpha-notfound-icon-wrap">
          <AlertOctagon size={64} className="alpha-notfound-icon" />
        </div>

        <span className="alpha-notfound-code">ERROR 404</span>
        <h1 className="alpha-notfound-title">Looks Like You Took a Detour</h1>
        <p className="alpha-notfound-desc">
          The page or road you are looking for has been moved, closed for maintenance, or doesn't exist.
          Let's get you back on the road safely.
        </p>

        <div className="alpha-notfound-actions">
          <Button to="/" variant="primary" size="lg" icon={Home}>
            Back to Home
          </Button>

          <Button to="/services" variant="secondary" size="lg" icon={Wrench}>
            Explore Services
          </Button>

          <Button to="/book" variant="outline" size="lg" icon={Calendar}>
            Book a Service
          </Button>
        </div>
      </div>
    </div>
  );
};
