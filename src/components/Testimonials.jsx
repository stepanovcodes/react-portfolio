import React, { useRef, useEffect} from "react";
import OwlCaraousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const carouselRef = useRef(null);
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  return (
    <section
      className="testimonial-area page-section scroll-to-page"
      id="testimonial"
    >
      {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}

      {/* <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script> */}

      <div className="custom-container">
        <div className="testimonial-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-comment"></i> testimonials
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Trusted by <span>Peers</span>
            </h1>
          </div>
          <div
            className="testimonial-slider-wrap scroll-animation"
            data-aos="fade-up"
          >
            <OwlCaraousel
              className="owl-carousel testimonial-slider owl-theme"
              smartSpeed="450"
              items="1"
              dots={false}
              ref={carouselRef}
              loop= "true"
            >
              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img src="https://uploads-ssl.webflow.com/61e9f3cc0f44f22619551a1e/61f1f9acf3082430587973d4_flame-icon.svg" alt="portfolio"/>
                    <div className="right">
                      <h3>Janelle Springer</h3>
                      <p className="designation">
                      Canada Country Manager of <span>ROGII Canada Ltd.</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    I would highly recommend Alex based on his technical
                    knowledge, in addition to his
                    always-positive and friendly attitude. He is a very
                    conscientious worker who will not leave until the job is
                    done.
                  </p>
                </div>
              </div>

              {/* <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-2.jpg"
                      alt="portfolio"
                    />
                    <div className="right">
                      <h3>Name 2</h3>
                      <p className="designation">
                        Web Developer of <span>Bank Inc</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    “Alex was a real pleasure to work with and we look forward
                    to working with him again. He's definitely the kind of
                    person that you can trust with any project from A-Z.”
                  </p>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-item-inner">
                  <div className="author d-flex align-items-center">
                    <img
                      src="../assets/images/testimonial-3.jpg"
                      alt="portfolio"
                    />
                    <div className="right">
                      <h3>Name 3</h3>
                      <p className="designation">
                        Project Manager of <span>Service Company LLC</span>
                      </p>
                    </div>
                  </div>
                  <p>
                    “Extremely profressional!. Alex is a
                    master of code and he also very creative.”
                  </p>
                </div>
              </div> */}
            </OwlCaraousel>
            <div className="testimonial-footer-nav">
              <div className="testimonial-nav d-flex align-items-center">
                {/* <button className="prev" onClick={handlePrevClick}>
                  <i className="las la-angle-left"></i>
                </button>
                <button className="next" onClick={handleNextClick}>
                  <i className="las la-angle-right"></i>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
