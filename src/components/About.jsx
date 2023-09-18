import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Every great product begins with an even{" "}
              <span>better user story</span>
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            Since embarking on my journey as a product owner almost 3 years ago,
            I've successfully launched three software products across 5
            countries. I collaborated with skilled agile teams, including
            developers, QA specialists, designers, and business analysts, to
            create innovative digital solutions for the Oil & Gas industry. I
            couldn't help but work diligently to hone my abilities and expand my
            proficiency into the realm of full stack development. My demeanor
            exudes quiet confidence, I possess a natural curiosity, and I am
            dedicated to refining my skills by tackling technical challenges one
            at a time
          </p>
        </div>
      </div>
    </section>
  );
}
