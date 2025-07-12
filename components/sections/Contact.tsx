"use client";

import React, { useState } from "react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16" id="contact">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/moqgzjgj"
        method="POST"
        className="space-y-4 max-w-md"
      >
        <input type="text" name="name" required placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" name="email" required placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea name="message" required placeholder="Your Message" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
        {submitted && <p className="text-green-500">Message sent!</p>}
      </form>
    </section>
  );
};

