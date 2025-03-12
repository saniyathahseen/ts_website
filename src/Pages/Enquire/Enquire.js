import React, { useState } from "react";
import "./Enquire.css";
import img3 from "./../../Assets/Images/enquire/1.jpg"

const Enquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    spauseName: '',
    spausePhoneNumber: '',
    venue: '',
    location: '',
    weddingDate: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: '',
      spauseName: '',
      spausePhoneNumber: '',
      venue: '',
      location: '',
      weddingDate: '',
      message: ''
    });
  };
  // Generate WhatsApp message URL
  const getWhatsAppLink = () => {
    const phoneNumber = "7994716667"; // Replace with your WhatsApp number
    const text = `Hello, I am ${formData.fullName}. My spouse's name is ${formData.spauseName}, and their contact number is ${formData.spausePhoneNumber}. We are planning our wedding at ${formData.venue},${formData.location} on ${formData.weddingDate}. Additional details: ${formData.message}.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="canvas">
      <center>
        <div className="card mb-3 text-center sqs-image-shape-container-element has-aspect-ratio" style={{ maxWidth: "50rem", margin: "30px" }}>
          <img style={{ maxWidth: "50rem", maxHeight: "30rem" }} className="card-img-top mx-auto" src={img3} alt={"enquire"} ></img>
        </div>
        <div className="sqs-block html-block sqs-block-html" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-56a7681dc647ad6b8c447b47">
          <div className="sqs-block-content">
            <div className="sqs-html-content">
              <h2 style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                <strong>Email: teamshadowonline@gmail.com</strong><br /><br />
              </h2>
              <p style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }} className="">You can draft an email to us on the above mentioned address, <br />or can send us the details by filling the form below.<br /><br />Thank you!</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <h2>Send us an enquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name<span>*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="spauseName">Spause Name<span>*</span></label>
              <input
                type="text"
                id="spauseName"
                name="spauseName"
                value={formData.spauseName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="spausePhoneNumber">Spause Phone Number</label>
              <input
                type="tel"
                id="spausePhoneNumber"
                name="spausePhoneNumber"
                value={formData.spausePhoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="venue">Venue<span>*</span></label>
              <input
                type="text"
                id="venue"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location<span>*</span></label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="weddingDate">Wedding Date<span>*</span></label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="button" className="whatsapp-btn">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" aria-hidden="true"></i> Chat on WhatsApp
              </a>
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Enquiry;
