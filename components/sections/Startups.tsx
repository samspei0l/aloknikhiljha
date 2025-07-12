// components/sections/Startups.tsx
"use client";

import React from "react";

const startups = [
  {
    name: "ToiFi",
    description:
      "A mobile app ‘Toilet Finder’ in the domain of SDG health goals and urban development. Launched in 2014. Used in 91 countries with approx. 7 lakh toilets in database. Campaigns: ‘Donate a Pad’ for menstrual awareness & ‘Disaster Relief Kit’ for women in Kerala, Meghalaya & Uttarakhand.",
    link: "https://play.google.com/store/apps/details?id=com.apprevelations.indiantoiletfinder"
  },
  {
    name: "TickZo",
    description:
      "Intelligent event ticket booking engine. Funded by DMZ, Toronto (USD 9000). Launched in Canada, originated from India. Enabled global event recommendations and booking.",
    link: "https://goo.gl/MqQSCa"
  },
  {
    name: "Trishulam",
    description:
      "Women-centric safety app created post-Nirbhaya case. Enables smart emergency response through mobile sensors. Recognized at Manthan Awards 2013 & FICCI Innovation Awards.",
    link: "https://goo.gl/q44UF6"
  },
  {
    name: "Farmer Friend",
    description:
      "An app that helps farmers find ‘friends’ (peers) in the same district/block. Identified by Govt. of India to aid in farming cooperation and knowledge sharing."
  },
  {
    name: "Parking Spot Finder",
    description:
      "Assists users in locating vehicle parking space. Targeted to customers in Saudi Arabia. Designed for efficient space management."
  },
  {
    name: "Map IT",
    description:
      "Indoor mapping and assistive navigation tool developed to help blind individuals walk independently in institutions."
  },
  {
    name: "ApparelMedia Labs",
    description:
      "Innovation space behind products like Knowledge Cup (smart education tool) and Smart Jacket (integrated with sensors). Launched as basic utility tech in 2014."
  },
  {
    name: "Byosphere",
    description:
      "Device designed to produce oxygen indoors. Promotes healthy air quality at home. Recognized at M2M Conference (2016–2017)."
  },
  {
    name: "Data Hands",
    description:
      "Gesture recognition system to help speech- and hearing-impaired people communicate with others. Mentored the project. Featured in innovation showcases.",
    link: "https://goo.gl/rEE5Zz"
  },
  {
    name: "AppRevelations",
    description:
      "Mentorship initiative to support student entrepreneurs. Helped launch basic utility apps under guidance."
  },
  {
    name: "PeopleEasy.com",
    description:
      "Served as strategic advisor for the startup. Focused on simplifying people-focused services."
  },
  {
    name: "EnglishOnClick",
    description:
      "EdTech startup focused on language education through technology. Advised the team. (Active: Dec 2009 – May 2011)"
  }
];

export const Startups = () => {
  return (
    <section className="py-16" id="startups">
      <h2 className="text-3xl font-bold mb-8">Startups</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{startup.description}</p>
            {startup.link && (
              <a
                href={startup.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

