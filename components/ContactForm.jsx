import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError('Please fill out all fields.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Message failed');
      }

      setNotification('Message sent successfully. Thank you!');
      // Clear form fields after successful submission if needed
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setNotification('');
      }, 3000);

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting message:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-sm font-semibold mb-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            disabled={loading}
            className='w-full px-4 py-2 border-b border-white bg-transparent text-white  focus:outline-none focus:border-white'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-semibold mb-1'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            disabled={loading}
            className='w-full px-4 py-2 border-b border-white bg-transparent text-white  focus:outline-none focus:border-white focus:bg-black'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='subject' className='block text-sm font-semibold mb-1'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
            disabled={loading}
            className='w-full px-4 py-2 border-b border-white bg-transparent text-white  focus:outline-none focus:border-white'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-semibold mb-1'>
            Message
          </label>
          <textarea
            type='text'
            id='message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            placeholder='Message'
            disabled={loading}
            className='w-full px-4 py-2 border-b border-white bg-transparent text-white  focus:outline-none focus:border-white'
          ></textarea>
        </div>
        <button
          type='submit'
          disabled={loading}
          className='bg-[#0A93FE] hover:bg-[#0877cc]  text-white font-bold py-2 px-10 rounded-md text-xl shadow-lg w-full'
        >
          Send
        </button>
      </form>
      {notification && <div>{notification}</div>}
    </>
  );
};

export default ContactForm;
