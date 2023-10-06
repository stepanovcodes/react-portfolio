import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
import Pageloader from './Pageloader'
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  // create state to hold about data
  const [projects, setProjects] = useState(null);

  // create function to make api call
  const getProjectsData = async () => {
    // make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setProjects(data);
    // console.log(data[0].image)
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
    getProjectsData();
  }, []);

  const loaded = () => (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a href={projects[0].image} data-lightbox="example-1">
                    <img src={projects[0].image} alt="Portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href={projects[0].git} target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                      <a href={projects[0].live} target="_blank" rel="noreferrer">Live</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href={projects[0].live} target="_blank" rel="noreferrer">{projects[0].name}:</a>
                  <span> Next.js, Express, node.js, PostgreSQL, Mapbox GL JS</span>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href={projects[1].image} data-lightbox="example-1">
                    <img src={projects[1].image} alt="portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href={projects[1].git} target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                      <a href={projects[1].live} target="_blank" rel="noreferrer">Live</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href={projects[1].live} target="_blank" rel="noreferrer">{projects[1].name}:</a>
                  <span> EJS, Express, Node.js, MongoDB, OpenAI</span>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href={projects[2].image} data-lightbox="example-1">
                    <img src={projects[2].image} alt="portfolio" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href={projects[2].git} target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                      <a href={projects[2].live} target="_blank" rel="noreferrer">Live</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href={projects[2].live} target="_blank" rel="noreferrer">{projects[2].name}:</a>
                  <span> HTML, CSS, JavaScript, Bootstrap</span>
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );

  const loading = () => (
    <Pageloader/>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded() : loading();
}
