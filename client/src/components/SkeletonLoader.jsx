import React from 'react';
import '../styles/Skeleton.css';

// Text skeleton
export const SkeletonText = ({ lines = 3, width = '100%' }) => {
  return (
    <div style={{ width }}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="skeleton skeleton-text"
          style={{ width: i === lines - 1 ? '80%' : '100%' }}
        />
      ))}
    </div>
  );
};

// Title skeleton with level support
export const SkeletonTitle = ({ level = 'h2' }) => {
  const getTitleClass = () => {
    switch(level) {
      case 'h1':
        return 'skeleton-title-h1';
      case 'h2':
        return 'skeleton-title-h2';
      case 'h3':
        return 'skeleton-title-h3';
      default:
        return 'skeleton-title-h2';
    }
  };

  return (
    <div className={`skeleton skeleton-title ${getTitleClass()}`}>
      <div className="skeleton-title-shimmer" />
    </div>
  );
};

// Avatar/Circle skeleton
export const SkeletonAvatar = () => (
  <div className="skeleton skeleton-avatar" />
);

// Button skeleton
export const SkeletonButton = ({ count = 1 }) => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {[...Array(count)].map((_, i) => (
      <div key={i} className="skeleton skeleton-button" />
    ))}
  </div>
);

// Card skeleton
export const SkeletonCard = () => (
  <div className="skeleton skeleton-card">
    <SkeletonTitle level="h3" />
    <SkeletonText lines={2} />
    <div style={{ marginTop: '1rem' }}>
      <SkeletonTag count={3} />
    </div>
  </div>
);

// Tag skeleton
export const SkeletonTag = ({ count = 3 }) => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    {[...Array(count)].map((_, i) => (
      <div key={i} className="skeleton skeleton-tag" />
    ))}
  </div>
);

// Grid of cards skeleton
export const SkeletonCardGrid = ({ count = 4 }) => (
  <div className="skeleton-grid">
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

// Main component that exports everything
const SkeletonLoader = {
  Text: SkeletonText,
  Title: SkeletonTitle,
  Avatar: SkeletonAvatar,
  Button: SkeletonButton,
  Card: SkeletonCard,
  Tag: SkeletonTag,
  CardGrid: SkeletonCardGrid
};

export default SkeletonLoader;