'use client';
import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({
  loading,
  color = '#0A93FE',
  size = 150,
  margin = '100px auto',
}) => {
  return (
    <div className='flex justify-center items-center' style={{ margin }}>
      <ClipLoader
        color={color}
        loading={loading}
        size={size}
        aria-label='Loading Spinner'
      />
    </div>
  );
};

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.string,
};

export default Spinner;
