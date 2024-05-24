import React from 'react';
import PropTypes from 'prop-types';

const TwoColumnSection = ({
  children,
  reverseOnMobile = false,
  className = '',
}) => {
  return (
    <section className={`container mx-auto px-4 py-28 ${className}`}>
      <div
        className={`flex flex-col md:flex-row items-center gap-8 ${
          reverseOnMobile ? 'md:flex-row-reverse' : ''
        }`}
      >
        {children}
      </div>
    </section>
  );
};

TwoColumnSection.propTypes = {
  children: PropTypes.node.isRequired,
  reverseOnMobile: PropTypes.bool,
  className: PropTypes.string,
};

export default TwoColumnSection;
