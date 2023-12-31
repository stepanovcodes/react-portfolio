import React from "react";
import { useState, useEffect } from "react";
import Pageloader from './Pageloader'
import CV from '../assets/stepanov-cv.pdf'

export default function Lsb() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <img src={about.logo} width="128" heaight="36" alt="Logo" />
        <span className="designation">
          Full Stack Developer & Product Owner
        </span>
      </div>
      <img className="me" src={about.headshot} alt="Me" />
      <h2 className="email">{about.email}</h2>
      <h2 className="address">Based in {about.location}</h2>
      <p className="copyright">&copy; 2023 Alex Stepanov</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://www.linkedin.com/in/aleksandr-stepanov/" target="_blank" rel="noreferrer">
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/stepanovcodes/" target="_blank" rel="noreferrer">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href={CV} className="theme-btn" target="_blank" rel="noreferrer">
        <i className="las la-file"></i> Download CV
      </a>
    </div>
  );

  const loading = () => (
    <Pageloader/>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : loading();
}
