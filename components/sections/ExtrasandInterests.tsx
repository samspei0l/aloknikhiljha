// components/sections/ExtrasAndInterests.tsx
"use client";

import React from "react";

export const ExtrasAndInterests = () => {
  return (
    <section className="py-16" id="extras">
      <h2 className="text-3xl font-bold mb-8">Extracurricular Activities & Interests</h2>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Extracurricular Activities</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>MHRD IIC Incubation Expert for NSUT</li>
          <li>Atal Mentor of Change</li>
          <li>Speaker at forums on Women Empowerment and Entrepreneurship Education</li>
          <li>Campaigns on Women Sanitation and Awareness</li>
          <li>Mentorship for various startups and innovation programs</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Interests</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Problem solving and counseling</li>
          <li>People interaction and mentoring</li>
          <li>Curating new ideas and implementing them</li>
          <li>Debating and writing</li>
          <li>Traveling to explore diverse cultures</li>
        </ul>
      </div>
    </section>
  );
};
