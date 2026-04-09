import { useState } from "react";
import emailjs from "@emailjs/browser";
import Field from "../components/Field";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_hxvtom9",
        "template_tnr6x3j",
        form,
        "TN3_SNZoadjQBC8da"
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>

      {submitted ? (
        <p className="success">
          Message received! Check your email.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="form">

          <Field
            label="Name"
            value={form.name}
            onChange={(value) =>
              setForm({ ...form, name: value })
            }
          />

          <Field
            label="Email"
            value={form.email}
            onChange={(value) =>
              setForm({ ...form, email: value })
            }
          />

          <textarea
            className="input"
            placeholder="Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}