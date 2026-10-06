import { useState } from "react";

import './index.less'

import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";



const FALLBACK_ERROR = "Sorry, your message couldn't be sent. Please try again, or email us at unsw.quantsoc@gmail.com.";

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setIsSending(true);
    setResult("Sending....");
    const formData = new FormData(form);

    formData.append("access_key", "019b2d5b-9e3d-472c-9f1f-476f8684fdfa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || FALLBACK_ERROR);
      }
    } catch (error) {
      // Network failure, or the form service returned something that isn't JSON
      console.log("Error", error);
      setResult(FALLBACK_ERROR);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact-section">
        <h1>Contact Us</h1>
        <form onSubmit={onSubmit} id="contact-form-container">
          <div className="contact-input contact-floating-label-group">
            <input type="text" name="name" required/>
            <label className="floating-label">Company/Name</label>
            <FaUser className="contact-input-icon"/>
          </div>
          <br/>
          <div className="contact-input contact-floating-label-group">
            <input type="email" name="email" required/>
            <label className="floating-label">Email</label>
            <IoIosMail id="contact-mail-icon" className="contact-input-icon" />
          </div>
            
          <textarea name="message" placeholder="Message" required></textarea>

          <button type="submit" disabled={isSending}>Submit</button>
      </form>
      <span>{result}</span>
    </section>
  );
}

export default ContactForm;