import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Projektek</h2>
        <div className="project-card">
          <h3 className="project-name">Raktár</h3>
          <p className="project-desc">Ez egy raktár weboldal ASP.NET alapon aminek a backendét én írtam. Ez egy webshop oldal</p>
          <p className="project-tech">Technológiák: ASP.NET</p>
          <a
            href="https://github.com/iliasdawee03/raktar"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </a>
        </div>
      </section>

      
  );
}