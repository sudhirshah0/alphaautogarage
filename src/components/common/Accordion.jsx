import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

export const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  id
}) => {
  return (
    <div className={`alpha-accordion-item ${isOpen ? 'alpha-accordion-item--open' : ''}`}>
      <button
        type="button"
        className="alpha-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${id}`}
        id={`accordion-header-${id}`}
      >
        <span className="alpha-accordion-question">{question}</span>
        <ChevronDown className="alpha-accordion-icon" size={20} />
      </button>
      <div
        id={`accordion-body-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className="alpha-accordion-collapse"
        hidden={!isOpen}
      >
        <div className="alpha-accordion-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const Accordion = ({ items = [], allowMultiple = false, className = '' }) => {
  const [openIndices, setOpenIndices] = useState([0]); // First item open by default

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`alpha-accordion ${className}`.trim()}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id || idx}
          id={item.id || idx}
          question={item.question || item.q}
          answer={item.answer || item.a}
          isOpen={openIndices.includes(idx)}
          onToggle={() => toggleItem(idx)}
        />
      ))}
    </div>
  );
};
