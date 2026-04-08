import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: form.name,
      email: form.email,
      message: form.message
    };

    emailjs.send(
      "service_hxvtom9",
      "template_tnr6x3j",
      formData,
      "TN3_SNZoadjQBC8da"
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Failed to send");
      setLoading(false);
    });
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>

      {submitted ? (
        <p style={styles.success}>
            Message received! Check your email.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px"
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "100px"
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  success: {
    color: "green",
    fontWeight: "bold"
  }
};

export default Contact;