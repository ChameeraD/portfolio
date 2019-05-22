/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Internship at 99xTechnologies</a> <span>2019-present</span></h2>
                        <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Undergraduate at University Of Moratuwa</a> <span>2015-Present</span></h2>
                        <p>I'm an undergraduate in Unversity of Moratuwa Faculty of Information Technology. Java, DBMS, Data structures & Algorithms, Networking, Web development,AI, Markating are some key areas of this degree and currently I have a GPA of 3.8</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <i className="fas fa-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Secondary and Higher Education</a> <span>2006-2015</span></h2>
                        <p>I'm a proud Richmondite with 8A s and 1 B for O/L and A B B for A/L from physical science stream.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
