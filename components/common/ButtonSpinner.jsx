'use client';

import { SkewLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '5px 25px',
};

const ButtonWithSpinner = ({ loading }) => {
  return (
    <SkewLoader
      color={'#FFF'}
      loading={loading}
      cssOverride={override}
      size={20}
      aria-label='Loading Spinner'
    />
  );
};

export default ButtonWithSpinner;
