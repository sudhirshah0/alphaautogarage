import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export const Lightbox = ({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onIndexChange
}) => {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
  }, [currentIndex, items.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
  }, [currentIndex, items.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="alpha-lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <button
        type="button"
        className="alpha-lightbox-close"
        onClick={onClose}
        aria-label="Close image lightbox"
      >
        <X size={26} />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            className="alpha-lightbox-nav alpha-lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            type="button"
            className="alpha-lightbox-nav alpha-lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <div className="alpha-lightbox-container" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentItem.image}
          alt={currentItem.title || 'Alpha Auto Garage photo'}
          className="alpha-lightbox-img"
        />
        <div className="alpha-lightbox-caption">
          <div className="alpha-lightbox-badge">{currentItem.category}</div>
          <h3 className="alpha-lightbox-title">{currentItem.title}</h3>
          {currentItem.description && (
            <p className="alpha-lightbox-desc">{currentItem.description}</p>
          )}
          <span className="alpha-lightbox-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
