import { useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uitz63d", // from EmailJS
        "template_ni35tbo", // from EmailJS
        form.current,
        "IOmeTvJRIjc8GzX4v"   // from EmailJS
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid contact-section">
      <h1>Contact Us</h1>
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" required />
          </div>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" required />
          </div>
          {/* Subject */}
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name="subject" className="form-control" required />
          </div>
          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea name="message" className="form-control" rows={4} required />
          </div>
          {/* Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
