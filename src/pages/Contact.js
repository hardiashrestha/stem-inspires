import React, { useState } from 'react';
import './Contact.css';
import { FaInstagram, FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            access_key: 'd6f39e39-986a-4965-8266-62efec8c3fb0', 
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          })
        });
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setFormErrors({});
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setSubmitError('Error sending message. Please try again later.');
        console.error(error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <div className="social-icons">
          <a href="mailto:steminpires.volunteergmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/stem.inspires/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/stem-inspires-nj" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href='https://discord.gg/Wd9MTkAd' target='_blank' rel='noopener noreferrer'>
            <FaDiscord />
          </a>
        </div>
        <h3>Having Questions or Feedback?</h3>
        <h4> We’d love to hear from you!</h4>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {formErrors.subject && <p className="error">{formErrors.subject}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formErrors.message && <p className="error">{formErrors.message}</p>}
            </div>
          <button type="submit" className="submit-button">Send Message</button>

          {submitSuccess && (
            <p style={{ color: 'green' }}>Thanks! Your response has been submitted.</p>
          )}
          
          {submitError && <p className="error">{submitError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
