import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          E-mail: <a href="mailto:bookhubtindia@gmail.com">stem-inspires@gmail.com</a>
        </p>
        <p>
          Instagram: <a href="https://instagram.com/bookk_hubbb">@stem_inspires</a><br />
          Facebook: <a href="https://facebook.com/BookHub">STEM-Inspires</a>
        </p>
      </div>
      <div className="contact-form-container">
        <h3>Having Questions or Feedback? We’d love to hear from you.</h3>
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
          <button type="submit" className="submit-button">Submit</button>
          {submitSuccess && <p className="success">Your message has been sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
