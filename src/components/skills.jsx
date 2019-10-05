import React, { Component } from "react";

export default class skills extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Specialty</span>
                <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
            </div>
            <div className="row">
              {/*<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<p>I guess this is the phase where we are shine , right :)</p>
						</div>*/}
              <h2 className="colorlib-heading animate-box">
                {" "}
                Web Development{" "}
              </h2>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>MEAN Stack</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-1"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <h3>ASP .NET Core</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-2"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>HTML5 , CSS3 & Bootstrap</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-3"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <h3>Node JS</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-4"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="colorlib-heading animate-box"> Databases</h2>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>MY SQL</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-5"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="progress-wrap">
                  <h3>MS SQL</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-6"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="progress-wrap">
                  <h3>Mongo DB</h3>
                  <div className="progress">
                    <div
                      className="progress-bar color-7"
                      role="progressbar"
                      aria-valuenow=""
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
