import { Toaster } from 'react-hot-toast';

const ToasterConfig = () => {
  return (
    <Toaster
      position='bottom-right'
      reverseOrder={false}
      toastOptions={{
        success: {
          iconTheme: {
            primary: '#0E92FF',
            secondary: 'white',
          },
        },
      }}
    />
  );
};

export default ToasterConfig;
