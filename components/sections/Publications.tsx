// components/sections/ResearchAndPublications.tsx
"use client";

import React, { useState } from "react";

//Type Declarations
type Publication = {
  title: string;
  venue: string;
  year: number;
  type: string;
  link: string;
  bibtex: string;
};

type GroupedPublications = {
  [key: string]: Publication[];
};

const publications = [
  {
    title: "Enhancement of Railway Security – A Concept",
    venue: "National Conference on Recent Issues & Challenges in Knowledge Management and AI, Bhopal",
    year: 2007,
    type: "Conference",
    link: "#",
    bibtex: "@inproceedings{jha2007railway, title={Enhancement of Railway Security – A Concept}, author={Jha, Alok Nikhil}, booktitle={National Conference on Knowledge Management}, year={2007} }"
  },
  {
    title: "Parametric Recommendation Approach for Effective Selection of Books & Resources in Digital Libraries",
    venue: "ICOASCR Conference",
    year: 2013,
    type: "Conference",
    link: "https://hdl.handle.net/123456789/302",
    bibtex: "@inproceedings{jha2013parametric, title={Parametric Recommendation Approach}, author={Jha, Alok Nikhil}, booktitle={ICOASCR}, year={2013} }"
  },
  {
    title: "E-Publishing: A Sustainable, Affordable & Available Digital Service Provisioning for E-Learning",
    venue: "ICOASCR Conference",
    year: 2013,
    type: "Conference",
    link: "https://hdl.handle.net/123456789/302",
    bibtex: "@inproceedings{jha2013epublishing, title={E-Publishing}, author={Jha, Alok Nikhil}, booktitle={ICOASCR}, year={2013} }"
  },
  {
    title: "Inclusion of ICT in Digital Education (Lahaul & Spiti, HP)",
    venue: "IOSR Journal of Humanities and Social Science",
    year: 2014,
    type: "Journal",
    link: "https://www.iosrjournals.org/iosr-jhss/papers/Vol19-issue10/Version-2/E0191023135.pdf",
    bibtex: "@article{jha2014ict, title={Inclusion of ICT in Digital Education}, author={Jha, Alok Nikhil}, journal={IOSR-JHSS}, year={2014} }"
  },
  {
    title: "Recommender System using Data Mining Techniques in E-Learning",
    venue: "International Journal of Computer Applications",
    year: 2015,
    type: "Journal",
    link: "https://www.ijcaonline.org/archives/volume113/number3/19816-1313",
    bibtex: "@article{jha2015recommender, title={Recommender System in E-Learning}, author={Jha, Alok Nikhil}, journal={IJCA}, year={2015} }"
  },
  {
    title: "Semantic Analysis of Context Aware Recommendation Techniques",
    venue: "IOSR Journal of Computer Science",
    year: 2015,
    type: "Journal",
    link: "https://www.iosrjournals.org/iosr-jce/papers/Vol17-issue2/Version-3/C017231623.pdf",
    bibtex: "@article{jha2015semantic, title={Semantic Analysis}, author={Jha, Alok Nikhil}, journal={IOSR-JCE}, year={2015} }"
  },
  {
    title: "Managing Innovation and Alignment to Startup in Academic Setup",
    venue: "ICQRIT Conference",
    year: 2019,
    type: "Conference",
    link: "https://ieeexplore.ieee.org/document/ICQRIT2019",
    bibtex: "@inproceedings{jha2019innovation, title={Managing Innovation}, author={Jha, Alok Nikhil}, booktitle={ICQRIT}, year={2019} }"
  },
  {
    title: "Ontology in Digital Libraries",
    venue: "ICDL Conference, TERI",
    year: 2019,
    type: "Conference",
    link: "https://www.teriin.org/event/international-conference-digital-landscape-2019",
    bibtex: "@inproceedings{jha2019ontology, title={Ontology in Digital Libraries}, author={Jha, Alok Nikhil}, booktitle={ICDL}, year={2019} }"
  },
  {
    title: "Missing Information in Road Accidents",
    venue: "British Medical Journal of Injury Prevention",
    year: 2018,
    type: "Journal",
    link: "https://injuryprevention.bmj.com/content/early/recent",
    bibtex: "@article{jha2018missing, title={Missing Information in Road Accidents}, author={Jha, Alok Nikhil}, journal={BMJ Injury Prevention}, year={2018} }"
  },
  {
    title: "Road Accidents in EU, USA and India",
    venue: "Springer Book Chapter",
    year: 2020,
    type: "Book Chapter",
    link: "https://link.springer.com/book/10.1007/978-981-15-5555-3",
    bibtex: "@incollection{jha2020road, title={Road Accidents in EU, USA and India}, author={Jha, Alok Nikhil}, booktitle={Strategic System Assurance}, year={2020} }"
  }
];

const grouped: GroupedPublications = publications.reduce((acc, pub) => {
  const key = `${pub.type}-${pub.year}`;
  if (!acc[key]) acc[key] = [];
  acc[key].push(pub);
  return acc;
}, {} as GroupedPublications);


export const Publications = () => {
  return (
    <section className="py-16" id="research">
      <h2 className="text-3xl font-bold mb-8">Research & Publications</h2>
      {Object.entries(grouped)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([group, pubs], index) => {
          const [type, year] = group.split("-");
          return (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">
                {type} – {year}
              </h3>
              <ul className="space-y-6">
                {pubs.map((pub, i) => (
                  <li key={i} className="border p-4 rounded dark:border-gray-700">
                    <p className="font-medium text-lg text-gray-800 dark:text-gray-200">{pub.title}</p>
                    <p className="text-sm italic text-gray-500 dark:text-gray-400">{pub.venue}</p>
                    {pub.link !== "#" && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline mr-4 inline-block"
                      >
                        View Publication
                      </a>
                    )}
                    <button
                      onClick={() => {
                        const element = document.createElement("a");
                        const file = new Blob([pub.bibtex], { type: "text/plain" });
                        element.href = URL.createObjectURL(file);
                        element.download = `${pub.title.replace(/[^a-z0-9]/gi, '_')}.bib`;
                        document.body.appendChild(element);
                        element.click();
                      }}
                      className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Download BibTeX
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

    </section>
  );
};

