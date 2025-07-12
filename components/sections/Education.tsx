// components/sections/Education.tsx
"use client";

import React from "react";

export const Education = () => {
  return (
    <section className="py-16" id="education">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">M.Tech in Computer Applications</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Indian Institute of Technology (IIT) Delhi, 2013 &mdash; 7.7 CGPA
          </p>
        </li>
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">B.E. Hons. in Computer Science & Engineering</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Rajiv Gandhi Technical University, Bhopal, 2003–2007 &mdash; 79.5%
          </p>
        </li>
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">PG Certificate in Technical Consulting & Project Management</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Consultancy Development Centre, Govt. of India, 2010
          </p>
        </li>
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">SIX SIGMA Green Belt Trained</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Motorola University, 2010
          </p>
        </li>
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">Startup Leadership Program (SLP) Fellow</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            F6S Global, USA, 2017–2018
          </p>
        </li>
        <li className="border p-4 rounded dark:border-gray-700">
          <p className="text-lg font-semibold">International Fellow, Digital Media Zone</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Ryerson University, Canada (2012 & 2016)
          </p>
        </li>
      </ul>
    </section>
  );
};

