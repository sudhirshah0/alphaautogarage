import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { GARAGE_INFO, buildWhatsAppUrl } from '../../data/garageInfo';
import { Button } from '../common/Button';
import './ContactForm.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone';
    if (!formData.message.trim()) errs.message = 'Please enter your message or question';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const messageBody = `*General Inquiry - ${GARAGE_INFO.name}*
---------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}📌 *Topic:* ${formData.subject}
💬 *Message:* ${formData.message}
---------------------------------------`;

    const url = buildWhatsAppUrl(messageBody);
    setWaUrl(url);
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="alpha-contact-success">
        <CheckCircle2 size={48} className="alpha-contact-success__icon" />
        <h4>Message Dispatched!</h4>
        <p>Thank you for reaching out. We have opened WhatsApp with your inquiry.</p>
        <div className="alpha-contact-success__actions">
          <Button href={waUrl} target="_blank" variant="whatsapp" icon={MessageCircle}>
            Reopen WhatsApp
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="alpha-contact-form" onSubmit={handleSubmit} noValidate>
      <div className="alpha-contact-grid">
        <div className="alpha-form-group">
          <label htmlFor="contact-name" className="alpha-form-label">Name *</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`alpha-form-input ${errors.name ? 'alpha-form-input--error' : ''}`}
            required
          />
          {errors.name && <span className="alpha-form-error"><AlertCircle size={14} />{errors.name}</span>}
        </div>

        <div className="alpha-form-group">
          <label htmlFor="contact-phone" className="alpha-form-label">Phone *</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile or WhatsApp number"
            className={`alpha-form-input ${errors.phone ? 'alpha-form-input--error' : ''}`}
            required
          />
          {errors.phone && <span className="alpha-form-error"><AlertCircle size={14} />{errors.phone}</span>}
        </div>

        <div className="alpha-form-group">
          <label htmlFor="contact-email" className="alpha-form-label">Email (Optional)</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="alpha-form-input"
          />
        </div>

        <div className="alpha-form-group">
          <label htmlFor="contact-subject" className="alpha-form-label">Subject</label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="alpha-form-select"
          >
            <option value="General Inquiry">General Question</option>
            <option value="Price Quote Request">Price Quote Request</option>
            <option value="Warranty Question">Warranty Question</option>
            <option value="Accessory Availability">Accessory Availability</option>
            <option value="Towing Assistance">Emergency Towing Assistance</option>
          </select>
        </div>

        <div className="alpha-form-group alpha-form-group--full">
          <label htmlFor="contact-message" className="alpha-form-label">Your Message *</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can our master mechanics assist you today?"
            rows={4}
            className={`alpha-form-textarea ${errors.message ? 'alpha-form-input--error' : ''}`}
            required
          />
          {errors.message && <span className="alpha-form-error"><AlertCircle size={14} />{errors.message}</span>}
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" icon={Send} className="alpha-contact-submit">
        Send Inquiry via WhatsApp
      </Button>
    </form>
  );
};
