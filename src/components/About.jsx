import React from "react";
import "../styles/About.css";
import "../styles/Skills.css";

const skills = [
  "C (kezdő)",
  "Java (kezdő)",
  "C# (haladó)",
  "Webfejlesztés (kezdő-haladó)",
  "Adatbázis-kezelés (kezdő)"
];

export default function AboutSkills() {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h2 className="about-title">Rólam</h2>
        <p className="about-text">
          Programtervező informatikus szakos hallgató vagyok a Pannon Egyetemen, jelenleg a 4. félévemet végzem. Már középiskolában, a Jedlik Ányos Informatikai Technikumban megkezdtem informatikai tanulmányaimat, ahol elsajátítottam a programozás és adatbázis-kezelés alapjait. Itt ismerkedtem meg többek között a C# és Java nyelvekkel.
        </p>
        <p className="about-text">
          Különösen érdekel a backend fejlesztés és az adatkezelés, ezen a területen szeretném tovább mélyíteni a tudásomat. Szeretek új technológiákat tanulni, és fontos számomra az önfejlesztés.
        </p>
        <p className="about-text">
          Szabadidőmben szívesen hallgatok zenét, játszom videojátékokkal, vagy sportolok — rendszeresen járok edzőterembe is.
        </p>
        <div className="skills-section" id="skills">
          <h2 className="skills-title">Képességek</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}