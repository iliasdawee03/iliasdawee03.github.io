import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const sections = [
  { id: "hero", label: "Főoldal" },
  { id: "about", label: "Rólam" },
  { id: "projects", label: "Projektek" },
  { id: "contact", label: "Kapcsolat" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      let found = false;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollMiddle >= top && scrollMiddle < bottom) {
            setActive(section.id);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActive(sections[sections.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={active === section.id ? "active" : ""}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}