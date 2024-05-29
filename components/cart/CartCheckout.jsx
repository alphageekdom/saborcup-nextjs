import { useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

const CartCheckout = ({ onCheckoutToggle }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <div className='p-4 overflow-y-scroll'>
      {/* Disclaimer about the demo nature of the entire checkout */}
      <p className='text-lg text-gray-500 mb-3 font-extrabold'>
        Disclaimer: Demo only. Please do not enter any real personal
        information.
      </p>
      <button
        onClick={onCheckoutToggle}
        className='flex items-center gap-2 mb-3'
      >
        <IoIosArrowRoundBack size={20} className='text-primary' />
        <span className='text-primary font-medium'>Back</span>
      </button>
      <h2 className='text-lg font-semibold text-center'>Checkout</h2>

      <div>
        {/* Address Field */}
        <label
          htmlFor='address'
          className='block text-sm font-medium text-gray-700'
        >
          Address
        </label>
        <input
          type='text'
          id='address'
          name='address'
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
        />

        {/* Email Field */}
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-700 mt-4'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          required
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
        />

        {/* Confirmation for In-store Pickup */}
        <p className='mt-4 text-sm text-gray-600'>
          Please enter your email so we can confirm your order and notify you
          when it{`'`}s ready for in-store pickup.
        </p>

        {/* Payment Options */}
        <div className='mt-4'>
          <label
            htmlFor='payment-method'
            className='block text-sm font-medium text-gray-700'
          >
            Choose a Payment Method:
          </label>
          <select
            id='payment-method'
            name='payment-method'
            required
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
            onChange={handlePaymentMethodChange}
          >
            <option value=''>Select Payment Method</option>
            <option value='creditCard'>Credit Card</option>
            <option value='paypal'>PayPal</option>
            <option value='applePay'>Apple Pay</option>
            <option value='crypto'>Crypto</option>
            <option value='other'>Other</option>
          </select>
        </div>

        {/* Credit Card Information - Conditionally Rendered */}
        {paymentMethod === 'creditCard' && (
          <div>
            <h3 className='text-md font-semibold text-gray-700 mt-4'>
              Credit Card Information
            </h3>
            <input
              type='text'
              placeholder='Card Number'
              id='card-number'
              name='card-number'
              className='mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
              required
            />
            <input
              type='text'
              placeholder='MM/YY'
              id='expiry-date'
              name='expiry-date'
              className='mt-2 block w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
              required
            />
            <input
              type='text'
              placeholder='CVC'
              id='cvc'
              name='cvc'
              className='mt-2 block w-1/3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary'
              required
            />
          </div>
        )}
      </div>

      <button className='mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90'>
        Place Order
      </button>
    </div>
  );
};

export default CartCheckout;
