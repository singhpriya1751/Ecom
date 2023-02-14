import React from "react";

function Contact() {
  return (
    <>
      <h2 className="heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7013.0361424696375!2d77.
        08645957333728!3d28.494056859130914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x390d19382985d7d1%3A0xb03bedc65fe6f2b2!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%
        2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v16763049455
        21!5m2!1sen!2sin"
        width="600"
        height="450"
        title="my frame"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="" method="Post" className="contact-inputs">
            <input
              type={Text}
              placeholder="Enter the username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type={Text}
              placeholder="Enter your email"
              name="email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>
            <input type={"submit"} value="send" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
