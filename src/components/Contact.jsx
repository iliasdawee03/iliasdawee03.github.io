import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
    <div className="contact-card">
      <h2 className="contact-title">Kapcsolat</h2>
      <p className="contact-desc">
        Írj nekem bátran e-mailben vagy kövess a GitHubon!
      </p>
      <div className="contact-list">
        <div className="contact-row">
          <span className="contact-label">Email:</span>
          <a href="mailto:iliasdavid@gmail.com" className="contact-link email">
            iliasdavid@gmail.com
          </a>
        </div>
        <div className="contact-row">
          <span className="contact-label">Github:</span>
          <a
            href="https://github.com/iliasdawee03"
            className="contact-link github"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iliasdawee03
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}