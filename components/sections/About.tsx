"use client";

import React from "react";

export const About = () => {
  return (
    <section className="py-16" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300">
        I'm Alok Nikhil Jha, a seasoned innovation and startup ecosystem leader with 13+ years of experience across
        startup incubation, academic innovation, policy consulting, and digital transformation. Currently serving
        as the Chief Operating Officer at IIITD Innovation & Incubation Center, I’ve helped raise over ₹14.5 Cr
        in startup funding and mentored 30+ ventures.
      </p>
      <div className="mt-4">
        <a href="mailto:alok.nikhil@gmail.com" className="text-blue-500 underline mr-4">
          alok.nikhil@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/aloknikhil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn Profile
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="ml-4 bg-blue-600 text-white px-3 py-1 rounded shadow"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};
