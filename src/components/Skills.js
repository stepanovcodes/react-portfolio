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
                  <img src="../assets/images/node-js.png" alt="Node.js" />
                </div>
                <p className="name">node.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/express.png" alt="express.js" />
                </div>
                <p className="name">express.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React.js" />
                </div>
                <p className="name">React.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/nextjs.png"
                    width="64px"
                    height="64px"
                    alt="NEXT.js"
                  />
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
                  <img
                    src="../assets/images/ts-logo-128.png"
                    width="64px"
                    height="64px"
                    alt="TypeScript"
                  />
                </div>
                <p className="name">TypeScript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/tailwindcss.svg"
                    height="64px"
                    alt="Tailwind CSS"
                  />
                </div>
                <p className="name">Tailwind CSS</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/bootstrap.png"
                    height="64px"
                    alt="Bootstrap"
                  />
                </div>
                <p className="name">Bootstrap</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/sequelize.png"
                    width="64px"
                    alt="Sequelize"
                  />
                </div>
                <p className="name">Sequelize</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/django.png"
                    width="64px"
                    height="64px"
                    alt="django"
                  />
                </div>
                <p className="name">django</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/auth2.png"
                    height="64px"
                    alt="Auth 2.0"
                  />
                </div>
                <p className="name">Auth 2.0</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  {/* <img src="../assets/images/fluent.png" height="64px" alt="Fluent 2" /> */}
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 16 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17362 0.673779L0.678882 4.86611C0.259079 5.10094 0 5.53796 0 6.01127V24.2645C0 24.7378 0.25908 25.1748 0.678882 25.4096L7.83414 29.4121C8.28326 29.6633 8.84208 29.3459 8.84208 28.8395V20.0839L16.6606 15.7105C17.1131 15.4573 17.1131 14.8185 16.6606 14.5653L8.84208 10.1919L16.6606 5.81844C17.1131 5.56528 17.1131 4.92645 16.6606 4.67328L9.51054 0.673779C9.09635 0.442074 8.58781 0.442074 8.17362 0.673779Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
                <p className="name">Fluent 2</p>
              </div>
            </div>
          </div>
          <div className="section-header">
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Utilities</span>
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
        </div>
      </div>
    </section>
  );
}
