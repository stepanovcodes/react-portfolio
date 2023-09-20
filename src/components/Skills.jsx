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
                  <img src="../assets/images/css.png" alt="CSS3" />
                </div>
                <p className="name">CSS3</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/sql.png" width="64px" alt="SQL" />
                </div>
                <p className="name">SQL</p>
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
                  <img src="../assets/images/cli.png" width="64px" alt="CLI" />
                </div>
                <p className="name">CLI</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/git.png" width="64px" alt="Git" />
                </div>
                <p className="name">Git</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/github.png"
                    width="64px"
                    alt="GitHub"
                  />
                </div>
                <p className="name">GitHub</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/mongodb.png"
                    height="64px"
                    alt="MongoDB"
                  />
                </div>
                <p className="name">MongoDB</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/postgresql.png"
                    width="64px"
                    alt="PostgreSQL"
                  />
                </div>
                <p className="name">PostgreSQL</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/postman.png"
                    width="64px"
                    alt="Postman"
                  />
                </div>
                <p className="name">Postman</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 320"
                    width="64"
                    height="64"
                  >
                    <path
                      d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </div>
                <p className="name">openAI API</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/restapi.webp"
                    height="64px"
                    alt="REST API"
                  />
                </div>
                <p className="name">REST API</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/jira.png"
                    width="64px"
                    alt="Jira"
                  />
                </div>
                <p className="name">Jira</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/confluence.png"
                    width="64px"
                    alt="Confluence"
                  />
                </div>
                <p className="name">Confluence</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/figma.png"
                    alt="Figma"
                  />
                </div>
                <p className="name">Figma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
