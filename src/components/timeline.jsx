import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer - Chemical Abstracts Service <span>9/2018-present</span>                            
                        </h2>
                        <p>
                        • Develop CAS content REST APIs to allow integration and optimization of business workflows with the
world’s most comprehensive and reliable collection of scientific research information. (∼11 petabytes)
                        </p>
                        <p>
                        • Utilize IAP, an in-house “DB”, for graph search with faceted navigation and top ranked answers.
                        </p>
                        <p>
                          • Presented solution for business and customers to fully utilize API with a stand-alone Spring Boot application.
                        </p>
                        <p>
                          • Manage and deploy VM and container infrastructure with OpenStack and Docker.
                        </p>
                        <p>
                          • Train and support members of the team and determine future work to achieve team and company goals.
                        </p>
                        <p><a className="btn btn-primary btn-learn" href="https://www.cas.org/services/workflow-integration?utm_source=linkedin&utm_medium=cas&utm_term=&utm_content=&utm_campaign=" target="_blank" rel="noopener noreferrer">Related Link<i className="icon-book" /></a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cloud Data Consultant - Cardinal Health <span>2/2018 - 7/2018</span></h2>
                        <p>
                        • Lead developer for Python project used in the data-ingestion pipeline for transferring data from Cardinal
 Health’s newly acquired companies.
                        </p>
                        <p>
                        • Implemented unit testing framework (pytest) to streamline development life cycle.
                        </p>
                        <p>
                        • Setup, maintain, update, and deploy with various AWS services including EC2, S3, Redshift, CloudFormation, Lambda, DynamoDB, CodePipeline, Glue, and Athena.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full Stack Developer - IQ Innovations <span>1/2017 - 2/2018</span></h2>
                        <p>
                        • Feature development and bug fixes for applications used in web and mobile.(ex. adding new item types to
assessments, giving teachers and students more assessment interaction options)
                        </p>
                        <p>
                        • On-call support for releases. Manage release dependencies, branch cuts, and deployments.
                        </p>
                        <p>
                        • Implemented an automated notification system to alert changes to a specific release in our Release management application.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DevOps - Lab-Ally <span>9/2016 - 10/2016</span></h2>
                        <p>
                        • Diagnose and repair build issues to a stable environment to meet company’s release deadline.
                        </p>
                        <p>
                        • Install Jenkins server to allow for building and archiving artifacts automatically, continuous integration, distribution of artifacts, tagging the GitHub repository, and publishing testing reports.
                        </p>
                        <p>
                        • Set up a central Maven repository to eliminate the need to install artifacts manually and locally.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>B.S. Computer Science - Case Western Reserve University <span>5/2016</span></h2>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
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
