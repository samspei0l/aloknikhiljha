// components/sections/MediaCoverage.tsx
"use client";

import React from "react";

const mediaCoverage = [
  {
    outlet: "India TV",
    title: "Interview about Toilet Finder app",
    link: "https://www.youtube.com/watch?v=g-GreL99vbc&t=6s",
    type: "Video",
    logo: "/logos/indiatv.png",
    featured: false
  },
  {
    outlet: "AajTak",
    title: "News feature on Toilet Finder app",
    link: "https://www.aajtaklite.com/story/822391",
    type: "News Article",
    logo: "/logos/aajtak.png",
    featured: false
  },
  {
    outlet: "Navbharat Times",
    title: "Coverage of new public toilet app for Delhi NCR",
    link: "https://navbharattimes.indiatimes.com/metro/delhi/power-road-and-water-delhi/new-android-app-toilet-finder-to-find-public-toilets-in-delhi-ncr/articleshow/48041938.cms",
    type: "News Article",
    logo: "/logos/nbt.png",
    featured: false
  },
  {
    outlet: "FirstPost",
    title: "From Toilet Finder to tech for differently abled",
    link: "https://www.firstpost.com/tech/news-analysis/from-finding-a-toilet-to-communication-fordifferently-abled-tech-for-social-good-5310991.html",
    type: "Feature Article",
    logo: "/logos/firstpost.png",
    featured: false
  },
  {
    outlet: "mBillionth Award",
    title: "Award for Outstanding Innovation Initiative under Urbanization (ToiFi)",
    link: "https://mbillionth.in/toilet-finder/",
    type: "Award",
    logo: "/logos/mbillionth.png",
    featured: true
  },
  {
    outlet: "Clean India Journal",
    title: "Spotlight on sanitation innovation",
    link: "https://www.cleanindiajournal.com/toilet-finder-coverage/",
    type: "Feature",
    logo: "/logos/cleanindia.png",
    featured: false
  }
];

export const Media = () => {
  return (
    <section className="py-16" id="media">
      <h2 className="text-3xl font-bold mb-8">Media & Coverage</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaCoverage.map((item, index) => (
          <div
            key={index}
            className={`p-4 border rounded shadow-sm dark:border-gray-700 transition ${
              item.featured ? "bg-yellow-100 dark:bg-yellow-900 border-yellow-400" : ""
            }`}
          >
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.outlet} logo`}
                className="w-16 h-16 object-contain mb-2"
              />
            )}
            <h3 className="text-xl font-semibold mb-1">{item.outlet}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1 italic">{item.type}</p>
            <p className="text-gray-800 dark:text-gray-100 mb-2">{item.title}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Source
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

