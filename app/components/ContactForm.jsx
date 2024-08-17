"use client";

import { useState,useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_4yjbbyq",
          "template_1fu7k7a",
          formData,
          "h3iwpmilkghvL0iik"
        )
        .then((response) => {
          console.log("Success", response.status, response.text);
          toast.success("Message sent successfully");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log("Failed...", err);
          toast.error("Failed to send message");
        })
        .finally(() => setIsSending(false));
    }
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <Toaster />
      <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100">
        Get in touch
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.name && <p className="text-pink-700">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.email && <p className="text-pink-700">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full appearance-none rounded-lg border border-slate-800 bg-transparent px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
          />
          {errors.message && <p className="text-pink-700">{errors.message}</p>}
        </div>
        <button
          className={`w-full rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:text-teal-800 ${
            isSending ? " cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
