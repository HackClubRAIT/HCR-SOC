import Aos from "aos";
import React from "react";
import "../css/timeline.css";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <div>
      <section className="timer-section">
        <h1 style={{ textAlign: "center" }} className="timeline-head">Timeline</h1>
        <div className="container">
          <div className="timer-container" >
            <ul className="timer">
              <li className="step"  data-aos="fade-left">
                <span>1</span>
                <div className="content">
                  <h3>
                    15
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;June
                  </h3>
                  <p>Participants and project registration open</p>
                </div>
              </li>
              <li className="step" data-aos="fade-right">
                <span>2</span>
                <div className="content">
                  <h3>
                    10
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;July
                  </h3>
                  <p>
                    Project registration ends and Announcement of selected
                    projects
                  </p>
                </div>
              </li>
              <li className="step" data-aos="fade-left">
                <span>3</span>
                <div className="content">
                  <h3>
                    14
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;July
                  </h3>
                  <p>Participant Registration Ends</p>
                </div>
              </li>
              <li className="step" data-aos="fade-right">
                <span>4</span>
                <div className="content">
                  <h3>
                    15
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;July
                  </h3>
                  <p>Coding period starts!!</p>
                </div>
              </li>

              <li className="step" data-aos="fade-left">
                <span>5</span>
                <div className="content">
                  <h3>
                    30
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;August
                  </h3>
                  <p>End of contribution period</p>
                </div>
              </li>
              <li className="step" data-aos="fade-right">
                <span>6</span>
                <div className="content">
                  <h3>
                    7
                    <sup>
                      <small>th</small>
                    </sup>
                    &nbsp;September
                  </h3>
                  <p>Result Announcement</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
