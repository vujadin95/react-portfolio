import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "/src/styles/contact.css";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleFormChange = (e) => {
    console.log(e.target.id);
    let dataProp = e.target.id;
    setData((prevData) => {
      return { ...prevData, [dataProp]: e.target.value };
    });
  };

  return (
    <>
      <form className="submit-message" ref={form} onSubmit={sendEmail}>
        <label className="name-label" htmlFor="name">
          Name
        </label>
        <input
          required
          onChange={(e) => handleFormChange(e)}
          value={data.name}
          type="text"
          name="user_name"
          id="name"
          placeholder="Enter Your Name"
        />
        <label>Email</label>
        <input
          required
          onChange={(e) => handleFormChange(e)}
          value={data.email}
          type="email"
          name="user_email"
          id="email"
          placeholder="Enter Your Email Address"
        />
        <label>Message</label>
        <textarea
          required
          onChange={(e) => handleFormChange(e)}
          value={data.message}
          rows={4}
          id="message"
          name="message"
        />
        <button type="submit">Submit</button>
      </form>
      <div>{import.meta.env.VITE_SECRET}</div>
    </>
  );
};

export default Contact;
