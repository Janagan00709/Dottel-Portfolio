import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { CSSProperties } from 'react';

// Services list for selection
const services = [
  { service: 'Web Development' },
  { service: 'Website Upscaling' },
  { service: 'SEO Optimization' },
  { service: 'AR Advertising' },
  { service: 'Business Improvement' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    service: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData((prevData) => ({ ...prevData, service }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        'service_hw1iwnr', // Replace with your EmailJS service ID
        'template_461aco9', // Replace with your EmailJS template ID
        {
          to_name: 'Team DOTTEL',
          from_name: formData.name,
          from_email: formData.email,
          mobile_number: formData.mobile,
          message: formData.message,
          service: formData.service,
        },
        'AJgCaTfK1sSJtvHdN' // Replace with your EmailJS user ID
      );

      console.log('Email successfully sent:', response);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
    >
      <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
        Contact <span className="text-gradient clash-grotesk">us.</span>
      </h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label
            htmlFor="name"
            style={labelStyles}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyles}
          />

          <label htmlFor="email" style={labelStyles}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyles}
          />

          <label htmlFor="mobile" style={labelStyles}>
            Number:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="^\d{10}$"
            title="Please enter a valid 10-digit mobile number"
            style={inputStyles}
          />

          <label htmlFor="services" style={labelStyles}>
            Services:
          </label>
          <div style={serviceSelectorContainerStyles}>
            {services.map((service) => (
              <div
                key={service.service}
                onClick={() => handleServiceChange(service.service)}
                style={{
                  ...serviceButtonStyles,
                  backgroundColor: formData.service === service.service ? '#0070f3' : '#e0e0e0',
                  color: formData.service === service.service ? 'white' : 'black',
                }}
              >
                {service.service}
              </div>
            ))}
          </div>

          <label htmlFor="message" style={labelStyles}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={textareaStyles}
          ></textarea>

          <button type="submit" style={submitButtonStyles}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      ) : (
        <h3 style={{ color: 'white', marginTop: '2rem' }}>Thank you! We will get in touch soon.</h3>
      )}
    </div>
  );
};

export default Contact;

// Styles
const inputStyles: CSSProperties = {
  width: '100%',
  padding: '0.5rem',
  color: 'white',
  marginTop: '0.5rem',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #ccc',
  outline: 'none',
  fontSize: '16px',
  paddingLeft: '10px',
};

const labelStyles: CSSProperties = {
  color: '#f0f0f0',
  fontSize: '18px',
  fontWeight: 999,
  paddingRight: '90%',
};

const serviceSelectorContainerStyles: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
};

const serviceButtonStyles: CSSProperties = {
  padding: '5px 10px',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const textareaStyles: CSSProperties = {
  ...inputStyles,
  height: '100px',
};

const submitButtonStyles: CSSProperties = {
  padding: '0.75rem 1.5rem',
  fontSize: '16px',
  fontWeight: 600,
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: 'black',
};
