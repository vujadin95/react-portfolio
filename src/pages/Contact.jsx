import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "/src/styles/contact.css";

import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [isNameInputFocused, setIsNameInputFocused] = useState(false);
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false);
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("service_jqad06m", "template_xwhhvqn", data, "jSF9WVkwRknZMxdZo")
      .then((response) => {
        setData({ name: "", email: "", message: "" });
        setIsNameInputFocused(false);
        setIsEmailInputFocused(false);
        setStatus("SUCCESS");
      }),
      (error) => {
        console.log("FAILED", error);
      };
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const messageSentText = () => {
    return (
      <div className="message-sent">
        <p>Your message has been submited successfully.</p>
      </div>
    );
  };

  const handleFormChange = (e) => {
    let dataProp = e.target.name;
    setData((prevData) => {
      return { ...prevData, [dataProp]: e.target.value };
    });
  };

  const handleNameInputFocus = (e) => {
    setIsNameInputFocused(true);
  };
  const handleEmailInputFocus = (e) => {
    setIsEmailInputFocused(true);
  };

  return (
    <section className="contact__page">
      {status && messageSentText()}
      <form className="submit-message" onSubmit={sendEmail}>
        <p className="contact__page-desc">
          Please feel free to contact me about anything.
        </p>
        <label className="name-label">
          Name <span>*</span>
        </label>
        <input
          required
          onChange={(e) => handleFormChange(e)}
          value={data.name}
          type="text"
          name="name"
          placeholder="Enter Your Name"
          pattern="^[A-Za-z ]{3,16}$"
          onBlur={handleNameInputFocus}
          focused={isNameInputFocused.toString()}
          className="input-name"
          disabled={status}
        />
        <span className="name-error">
          Your name should be 3-16 characters and shouldn't include any special
          character.
        </span>
        <label>
          Email <span>*</span>
        </label>
        <input
          required
          onChange={(e) => handleFormChange(e)}
          value={data.email}
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          onBlur={handleEmailInputFocus}
          focused={isEmailInputFocused.toString()}
          className="input-email"
          disabled={status}
        />
        <span className="email-error">
          It doesn't look like a real email address to me?
        </span>
        <label>Message</label>
        <textarea
          onChange={(e) => handleFormChange(e)}
          value={data.message}
          rows={4}
          name="message"
          placeholder="Tell me something..."
          disabled={status}
          maxLength={1000}
        />
        <button type="submit" disabled={data.name === "" || data.email === ""}>
          Send <MdKeyboardArrowRight className="send-arrow" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
