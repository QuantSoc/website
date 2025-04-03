import { useState } from "react";

import './index.less'

import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";



const ContactForm = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "019b2d5b-9e3d-472c-9f1f-476f8684fdfa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact-section">
        <h1>Contact Us</h1>
        <form onSubmit={onSubmit} id="contact-form-container">
        <div id="contact-details">
        <br/>
          <div className="contact-input contact-floating-label-group">
            <input type="text" name="name" required/>
            <label class="floating-label">Name *</label>

            <FaUser className="contact-input-icon"/>
          </div>
          <br/>
          <div className="contact-input contact-floating-label-group">
            <input type="email" name="email" required/>
            <label class="floating-label">Email *</label>

            <IoIosMail id="contact-mail-icon" className="contact-input-icon" />
          </div>
            
            
        </div>
        <div>
          <br/>
          <div id="contact-message">
          <textarea name="message" placeholder="Message" required></textarea>
          {/* <label class="floating-label">Message *</label> */}
          </div>
          

          <button type="submit">Send</button>
        </div>
        

      </form>
      <span>{result}</span>

    </section>
  );
}

export default ContactForm;