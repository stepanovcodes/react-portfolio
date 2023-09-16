import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Languages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/javascript.png" alt="JavaScript" />
                </div>
                <p className="name">JavaScript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/python.png" alt="Python" />
                </div>
                <p className="name">Python</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/html5.png" alt="HTML5" />
                </div>
                <p className="name">HTML5</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/css.png" alt="CSS3n" />
                </div>
                <p className="name">CSS3</p>
              </div>
            </div>
          </div>
          <div className="section-header">
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Libraries</span> & <span>Frameworks</span>
            </h1>
          </div>
          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React.js" />
                </div>
                <p className="name">React.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/node-js.png" alt="Node.js" />
                </div>
                <p className="name">node.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/express.png"  alt="express.js" />
                </div>
                <p className="name">express.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/nextjs.png" width="64px" height="64px" alt="NEXT.js" />
                </div>
                <p className="name">NEXT.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/jquery.png" alt="jQuery" />
                </div>
                <p className="name">jQuery</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/ts-logo-128.png" width="64px" height="64px" alt="TypeScript" />
                </div>
                <p className="name">TypeScript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/express.png"  alt="express.js" />
                </div>
                <p className="name">express.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/nextjs.png" width="64px" height="64px" alt="NEXT.js" />
                </div>
                <p className="name">NEXT.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
