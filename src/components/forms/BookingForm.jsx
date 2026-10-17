import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, Car, User, Phone, FileText, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../../data/servicesData';
import { GARAGE_INFO, buildWhatsAppUrl } from '../../data/garageInfo';
import { Button } from '../common/Button';
import './BookingForm.css';

export const BookingForm = ({ preselectedService = '' }) => {
  const [searchParams] = useSearchParams();
  const serviceFromQuery = searchParams.get('service') || preselectedService;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    carYear: '',
    serviceSlug: serviceFromQuery || 'oil-change',
    preferredDate: '',
    preferredTime: '09:00 AM',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppPreviewUrl, setWhatsAppPreviewUrl] = useState('');

  // Synchronize query param service changes
  useEffect(() => {
    if (serviceFromQuery) {
      setFormData((prev) => ({ ...prev, serviceSlug: serviceFromQuery }));
    }
  }, [serviceFromQuery]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.carMake.trim()) newErrors.carMake = 'Vehicle make is required (e.g. BMW)';
    if (!formData.carModel.trim()) newErrors.carModel = 'Vehicle model is required (e.g. 330i)';
    if (!formData.carYear.trim()) {
      newErrors.carYear = 'Year is required';
    } else if (isNaN(formData.carYear) || formData.carYear < 1980 || formData.carYear > 2027) {
      newErrors.carYear = 'Enter a valid year';
    }
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    const selectedServiceObj = SERVICES.find((s) => s.slug === formData.serviceSlug);
    const serviceTitle = selectedServiceObj ? selectedServiceObj.title : formData.serviceSlug;

    // Construct formatted WhatsApp message
    const waMessage = `*New Service Booking Request - ${GARAGE_INFO.name}*
---------------------------------------
👤 *Customer:* ${formData.name}
📞 *Phone:* ${formData.phone}
${formData.email ? `✉️ *Email:* ${formData.email}\n` : ''}🚗 *Vehicle:* ${formData.carYear} ${formData.carMake} ${formData.carModel}
🔧 *Service Requested:* ${serviceTitle}
📅 *Preferred Date:* ${formData.preferredDate}
⏰ *Preferred Time:* ${formData.preferredTime}
${formData.notes ? `📝 *Notes/Symptoms:* ${formData.notes}\n` : ''}---------------------------------------
_Sent via Alpha Auto Garage online booking portal._`;

    const generatedUrl = buildWhatsAppUrl(waMessage);
    setWhatsAppPreviewUrl(generatedUrl);
    setSubmitted(true);

    // Automatically trigger WhatsApp opening in new tab/app
    window.open(generatedUrl, '_blank', 'noopener,noreferrer');
  };

  const timeSlots = [
    '08:30 AM',
    '09:00 AM',
    '10:30 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  if (submitted) {
    return (
      <div className="alpha-booking-success">
        <div className="alpha-booking-success__icon-wrap">
          <CheckCircle2 size={56} className="alpha-booking-success__icon" />
        </div>
        <h3>Booking Request Prepared!</h3>
        <p>
          We have composed your service booking details. If your WhatsApp window did not automatically open,
          tap the button below to confirm your appointment directly with our service dispatchers.
        </p>

        <div className="alpha-booking-success__summary">
          <div><strong>Vehicle:</strong> {formData.carYear} {formData.carMake} {formData.carModel}</div>
          <div><strong>Service:</strong> {SERVICES.find((s) => s.slug === formData.serviceSlug)?.title}</div>
          <div><strong>Requested:</strong> {formData.preferredDate} at {formData.preferredTime}</div>
        </div>

        <div className="alpha-booking-success__actions">
          <Button
            href={whatsAppPreviewUrl}
            target="_blank"
            variant="whatsapp"
            size="lg"
            icon={MessageCircle}
          >
            Open in WhatsApp
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              setSubmitted(false);
              setFormData((prev) => ({
                ...prev,
                preferredDate: '',
                notes: ''
              }));
            }}
          >
            Submit Another Booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="alpha-booking-form" onSubmit={handleSubmit} noValidate>
      {/* Step 1: Customer Details */}
      <div className="alpha-form-section">
        <h4 className="alpha-form-section__title">
          <User size={18} />
          <span>1. Your Contact Information</span>
        </h4>
        <div className="alpha-form-grid alpha-form-grid--2">
          <div className="alpha-form-group">
            <label htmlFor="name" className="alpha-form-label">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Alexander Hayes"
              className={`alpha-form-input ${errors.name ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.name && <span className="alpha-form-error"><AlertCircle size={14} />{errors.name}</span>}
          </div>

          <div className="alpha-form-group">
            <label htmlFor="phone" className="alpha-form-label">Phone / WhatsApp Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 234-5678"
              className={`alpha-form-input ${errors.phone ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.phone && <span className="alpha-form-error"><AlertCircle size={14} />{errors.phone}</span>}
          </div>

          <div className="alpha-form-group alpha-form-group--full">
            <label htmlFor="email" className="alpha-form-label">Email Address (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alex@example.com"
              className="alpha-form-input"
            />
          </div>
        </div>
      </div>

      {/* Step 2: Vehicle Specs */}
      <div className="alpha-form-section">
        <h4 className="alpha-form-section__title">
          <Car size={18} />
          <span>2. Vehicle Specifications</span>
        </h4>
        <div className="alpha-form-grid alpha-form-grid--3">
          <div className="alpha-form-group">
            <label htmlFor="carYear" className="alpha-form-label">Year *</label>
            <input
              type="number"
              id="carYear"
              name="carYear"
              value={formData.carYear}
              onChange={handleChange}
              placeholder="e.g. 2021"
              min="1980"
              max="2027"
              className={`alpha-form-input ${errors.carYear ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.carYear && <span className="alpha-form-error"><AlertCircle size={14} />{errors.carYear}</span>}
          </div>

          <div className="alpha-form-group">
            <label htmlFor="carMake" className="alpha-form-label">Make *</label>
            <input
              type="text"
              id="carMake"
              name="carMake"
              value={formData.carMake}
              onChange={handleChange}
              placeholder="e.g. BMW, Porsche, Audi"
              className={`alpha-form-input ${errors.carMake ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.carMake && <span className="alpha-form-error"><AlertCircle size={14} />{errors.carMake}</span>}
          </div>

          <div className="alpha-form-group">
            <label htmlFor="carModel" className="alpha-form-label">Model *</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              placeholder="e.g. M340i, Macan GTS, RS6"
              className={`alpha-form-input ${errors.carModel ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.carModel && <span className="alpha-form-error"><AlertCircle size={14} />{errors.carModel}</span>}
          </div>
        </div>
      </div>

      {/* Step 3: Service Selection */}
      <div className="alpha-form-section">
        <h4 className="alpha-form-section__title">
          <FileText size={18} />
          <span>3. Select Required Service</span>
        </h4>
        <div className="alpha-form-group">
          <label htmlFor="serviceSlug" className="alpha-form-label">Service Type *</label>
          <select
            id="serviceSlug"
            name="serviceSlug"
            value={formData.serviceSlug}
            onChange={handleChange}
            className="alpha-form-select"
            required
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.slug}>
                {s.title} ({s.priceRange})
              </option>
            ))}
            <option value="other-custom">Other / Custom Inspection</option>
          </select>
        </div>
      </div>

      {/* Step 4: Preferred Date & Time */}
      <div className="alpha-form-section">
        <h4 className="alpha-form-section__title">
          <Calendar size={18} />
          <span>4. Preferred Schedule</span>
        </h4>
        <div className="alpha-form-grid alpha-form-grid--2">
          <div className="alpha-form-group">
            <label htmlFor="preferredDate" className="alpha-form-label">Preferred Date *</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={`alpha-form-input ${errors.preferredDate ? 'alpha-form-input--error' : ''}`}
              required
            />
            {errors.preferredDate && <span className="alpha-form-error"><AlertCircle size={14} />{errors.preferredDate}</span>}
          </div>

          <div className="alpha-form-group">
            <label htmlFor="preferredTime" className="alpha-form-label">Preferred Time Slot *</label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="alpha-form-select"
              required
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="alpha-form-group alpha-form-group--full">
            <label htmlFor="notes" className="alpha-form-label">Additional Symptoms or Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Describe any warning lights, noises, vibration, or specific requests..."
              rows={3}
              className="alpha-form-textarea"
            />
          </div>
        </div>
      </div>

      <div className="alpha-form-footer">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          icon={MessageCircle}
          className="alpha-form-submit-btn"
        >
          Confirm & Send via WhatsApp
        </Button>
        <p className="alpha-form-disclaimer">
          🔒 Your contact details are strictly used to schedule your service. Instant confirmation via WhatsApp.
        </p>
      </div>
    </form>
  );
};
