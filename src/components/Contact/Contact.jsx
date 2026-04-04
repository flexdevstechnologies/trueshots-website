// src/components/Contact/Contact.jsx
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "ce67fa95-6173-483e-9037-52ce8935d368");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("Thank you! We'll get back to you shortly.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-wrapper fade-in">
      <div className="contact-header">
        <h2 className="contact-title glow-gold">Inquire With Us</h2>
        <p className="contact-subtitle drift-fade">
          Let's create timeless memories together. Reach out for bookings or inquiries.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Column: Contact Info */}
        <div className="contact-info fade-up">
          <h3>Contact Information</h3>
          <p>Feel free to reach out to us through any of the following methods:</p>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>trueshotsphotography3@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 8870763304 , 8148337487 , 9150569854</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Chennai ,Bengaluru & Hosur</span>
          </div>

          <div className="social-links">
            <a href="https://www.instagram.com/true_shots_4/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="https://www.facebook.com/share/1NYMg7Z1Ff/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-container fade-up delay-100">
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* ✅ ONLY CHANGE: Sets the email subject received in Gmail */}
            <input type="hidden" name="subject" value="New Enquiry - Trueshots" />

            <div className="form-group">
              <input type="text" name="name" className="contact-input" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" className="contact-input" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" name="mobile" className="contact-input" placeholder="Mobile Number" required />
            </div>

            <div className="form-group">
              <textarea name="message" className="contact-textarea" placeholder="Tell us about your event..." rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-btn">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="status-text">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;