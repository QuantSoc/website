import { useState } from "react";

import './index.less'

import { IoIosSend } from "react-icons/io";


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
            <div>Name *</div>
            <input type="text" name="name" required/>
            <div>Email *</div>
            <input type="email" name="email" required/>
        </div>
        <div>
          <div id="contact-message">
          <div>Message *</div>
          <textarea name="message" required></textarea>
          </div>
          

          <button type="submit">Send</button>
        </div>
        

      </form>
      <span>{result}</span>

    </section>
  );
}

export default ContactForm;