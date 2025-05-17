import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
const changes = [
    {
      year: "Feb,2024 - Present",
      items: [
        {
          title: "Full time(Ericsson) - Software Enginner 🥳",
          description: "Specializing in the development and optimization of cloud-based solutions, particularly with Google Cloud, utilizing API development methods and web services. Gaining hands-on experience in API integration and deployment to ensure scalable system performance and seamless cloud-based architecture."
        },
        {
          title: "Full time(Ericsson) - Graduate Engineer Trainee 🥳",
          description: "Developing and optimizing cloud-based solutions using Google Cloud, APIs, web services and Gaining hands-on experience in API integration and deployment for scalable system performance."
        },{
          title: "Ericsson - Software Developer Intern 🎉",
          description: "Managed a data lake and deployed SQL queries in GCP BigQuery, upgraded cloud functions for improved performance, automated Pub/Sub services using Python"
        },
        {
          title: "Engineering done 🔥",
          description: "Finished my CS Engineering at Thapar Institute 🎓.Worked on group projects, made incredible friends along the way, and it was an unforgettable journey!"
        }
      ]
    },
    {
      year: "2020",
      items: [
        {
          title: "Covid hit,Got into CS Engineering 💻",
          description: "Joined Thapar Institute of Engineering and Technology, made great friends, and it turned out to be a fun experience."
        },
      ]
    },
    ,
    {
      year: "2019",
      items: [
        {
          title: "Cleared 12th 🎊",
          description: "Got 96%."
        },
      ]
    },{
      year: "2017",
      items: [
        {
          title: "Cleared 10th and chose science afterward 🌟",
          description: "Scored 94% from my alma mater, Sir Padampat Singhania Education Centre, Kanpur—one of the best schools in Kanpur city!"
        },
      ]
    }
  ];
const Experiences=({isDark})=>{
    return (
        <section id="journey" className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Life Path and Experiences</h2>
        {changes.map((change, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{change.year}</h3>
            <ul className="space-y-4">
              {change.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 mt-2 mr-3 rounded-full bg-blue-500"></div>
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    )
}
export default Experiences;
