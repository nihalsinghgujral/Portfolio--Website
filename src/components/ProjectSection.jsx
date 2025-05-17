import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, BookOpen, Sun, Moon, Terminal, Rocket } from 'lucide-react';
const projects = [
  {
    "title": "Flaapy-bird",
    "description": "A fun and addictive Flappy Bird clone built using Python and Pygame, perfect for showcasing game development fundamentals.",
    "tags": ["Python" , "Pygame", "Pygame Sprite Module" ,"Audio Files", "Image Assets", "Collision Detection Algorithms"],
    "github": "https://github.com/nihalsinghgujral/Flaapy-bird",
  },
  {
  "title": "Chat-room",
  "description": "A network-based chat application built in C++ that enables real-time communication between server and multiple clients using socket programming.",
  "tags": ["C++", "Socket Programming", "TCP/IP", "Multithreading", "Client-Server Architecture"],
  "github": "https://github.com/nihalsinghgujral/chat-room"
  },
  {
  "title": "Chess Game",
  "description": "Backend for a multiplayer chess game, enabling real-time gameplay, move validation, and game state management. Built to support seamless interactions between players and ensure a smooth gaming experience.",
  "tags": ["Node.js", "Typescript", "WebSocket", "Postgres", "Prisma", "REST API"],
  "github": "https://github.com/nihalsinghgujral/Chess-Game"
  },
  {
  "title": "Algorithm Simulator",
  "description": "A graphical simulator for the A* pathfinding algorithm with customizable heuristics, designed to visualize algorithm behavior and compare performance for better conceptual understanding.",
  "tags": ["C++", "A* Algorithm", "Pathfinding", "Heuristics", "Algorithm Visualization", "SFML"],
  "github": "https://github.com/nihalsinghgujral/A-algorithm-simulator"   
  },
];
const ProjectSec=({isDark})=>{
    return (
      <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-md'}`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`px-3 py-1 rounded-full text-sm ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}
export default ProjectSec;
