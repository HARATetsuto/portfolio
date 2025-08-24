import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Check the input fields are filled
    const formData = new FormData(form.current);
    const name= formData.get("name");
    const email= formData.get("email");
    const message= formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill in the fields!");
      return;
    }
    
    const confirmed = window.confirm(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nSend this message?`
    );

    if (!confirmed) {
      // Cancel the process if canceled
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert(`FAILED... ${error.text}`);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact</h2>

      <form ref={form} onSubmit={sendEmail}>

        <div className="contact-container-above">
          <label>Name</label>
          <input type="text" name="name" />

          <label>Your Email</label>
          <input type="email" name="email" />
        </div>

        <div className="contact-container-bottom">
          <label>Message</label>
          <textarea name="message" />
        </div>

        <input type="hidden" name="time" value={new Date().toISOString()} />

        <input type="submit" value="Send" id="contact-send-btn" />
      </form>
    </section>
  )
}

export default Contact;