import React from 'react';
import { Link } from 'react-router-dom';
import { BRANDS } from '../../data/brandsData';
import { ChevronRight } from 'lucide-react';
import './BrandMarquee.css';

export const BrandMarquee = () => {
  return (
    <div className="alpha-brand-strip">
      <div className="container alpha-brand-strip__container">
        <div className="alpha-brand-strip__header">
          <span className="alpha-brand-strip__label">Dedicated Factory Care For:</span>
          <Link to="/brands" className="alpha-brand-strip__all">
            <span>Explore All 10 Brands</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="alpha-brand-strip__grid">
          {BRANDS.map((brand) => (
            <Link to="/brands" key={brand.id} className="alpha-brand-strip__item">
              <span className="alpha-brand-strip__name">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
