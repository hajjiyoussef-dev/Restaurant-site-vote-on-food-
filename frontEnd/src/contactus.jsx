import React, { useState } from 'react';
import './Styles.css';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    try {
      // Send form data to the server
      // Replace the following with your actual API endpoint
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        // Reset the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setFormStatus('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <hr />
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4"><em><b>Contact Us</b></em></h2>
          <div>
            <p><em><b>Contact Information:</b></em></p>
            <p><em><b>Email: example@example.com</b></em></p>
            <p><em><b>Phone: +1 (123) 456-7890 </b></em></p>
            <p><em><b><a href='https://twitter.com/1337FIL' target='_block' style={{ color:'black'}}><i className="bi bi-twitter-x"></i></a><a href='https://www.instagram.com/1337_futureisloading/?hl=en' target='_block' style={{marginLeft:'10px', color:'black'}}><i className="bi bi-instagram"></i></a>
            <a href='https://www.linkedin.com/school/1337-coding-school/' target='_block' style={{marginLeft:'10px', color:'black'}}><i class="bi bi-linkedin"></i></a>
            <a href='https://www.facebook.com/1337FutureIsLoading/' target='_block' style={{marginLeft:'10px', color:'black'}}><i class="bi bi-meta"></i></a></b></em></p>
          </div>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"><em><b>Name</b></em></label>
              <input
                type="text"
                className="form-control  mb-2 bg-light  "
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email"><em><b>Email</b></em></label>
              <input
                type="email"
                className="form-control  bg-light  "
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"><em><b>Message</b></em></label>
              <textarea
                className="form-control  bg-light  "
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {formStatus && <div className={`alert ${formStatus.includes('successfully') ? 'alert-success mt-2' : 'alert-danger mt-2'}`} role="alert"><em>{formStatus}</em></div>}
            <button type="submit" className="btn btn-primary  mb-2 mt-2">
              <em>Submit</em>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
