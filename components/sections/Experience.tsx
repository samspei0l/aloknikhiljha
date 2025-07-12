"use client";

import React from "react";

const roles = [
  {
    title: "COO – IIITD Innovation & Incubation Center",
    period: "Jan 2018 – Present",
    summary:
      "Led operations, fundraising, startup mentorship, and ecosystem development; raised over ₹14.5 Cr and supported 30+ startups.",
  },
  {
    title: "Consultant (ICT) – Ministry of Agriculture, Govt. of India",
    period: "2014 – 2016",
    summary:
      "Managed e-Governance projects across agriculture sector, developed mobile/web apps, coordinated with states and NIC.",
  },
  {
    title: "Faculty – Cluster Innovation Centre, University of Delhi",
    period: "2013 – 2014",
    summary:
      "Taught B.Tech and M.Sc. students, established funded Technology Business Incubator and entrepreneurship curriculum.",
  },
  {
    title: "Business Analyst – Adobe / Wipro",
    period: "2007 – 2013",
    summary:
      "Worked on enterprise product development, pre/post-sales engineering, and analytics for clients in finance and tech.",
  },
];

export const Experience = () => {
  return (
    <section className="py-16" id="experience">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-6">
        {roles.map((role, index) => (
          <div key={index} className="p-4 border dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold">{role.title}</h3>
            <p className="text-sm text-gray-500">{role.period}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{role.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
