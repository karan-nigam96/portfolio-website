import React, { useState } from "react";
import "./contact.css";
import arrow_icon from "../../assets/arrow_icon.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      // Submit the form data to the Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a99d7e07-e98b-45ab-9404-aad90cce310c",
          ...formData,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        // Clear form fields after submission is successful
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error submitting the form");
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="contact-container" id="contact-container">
      <form className="contact-left" onSubmit={handleSubmit}>
        <div className="contact-left-title">
          <h2>Get in touch</h2>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          value="a99d7e07-e98b-45ab-9404-aad90cce310c"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          value={formData.name} // Bind to state
          onChange={handleInputChange} // Update state on input change
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          value={formData.email} // Bind to state
          onChange={handleInputChange} // Update state on input change
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-inputs"
          value={formData.message} // Bind to state
          onChange={handleInputChange} // Update state on input change
          required
        />
        <button type="submit">
          Submit <img src={arrow_icon} alt="arrow icon" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
