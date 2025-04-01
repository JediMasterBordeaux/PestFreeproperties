import React from 'react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

export const FadeInSection = ({ children, className = '', stagger = false }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {stagger
        ? React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              className: `${child.props.className || ''} stagger-item`,
            })
          )
        : children}
    </div>
  );
}; 