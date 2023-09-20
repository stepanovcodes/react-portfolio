import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume{" "}
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education & <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2023</span>
              <h2>Software Engineering Immersive Fellow</h2>
              <p>General Assembly</p>
              <h2>Software Product Management Specialization</h2>
              <p>University of Alberta</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021 - 2023</span>
              <h2>Software Product Owner</h2>
              <p>ROGII Canada Ltd. - Calgary, AB</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2019 - 2021</span>
              <h2>Technical Sales</h2>
              <p>Adaga Solutions Ltd. - Calgary, AB</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2019</span>
              <h2>Bachelor of Applied Technology in Petroleum Engineering</h2>
              <p>Southern Alberta Insitute of Technology</p>
            </div>
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2012</span>
              <h2>Master of Science in Petroleum Engineering</h2>
              <p>Heriot-Watt University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
