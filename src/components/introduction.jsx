import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg-1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row text-right">
                    <div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 class="intro">Hi! <br />I'm James</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1jGBpDHLRSWmCljJ4WCBL0Cr-3yEXzU1l/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg-1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row text-right">
                    <div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 class="intro">I'm a software consultant</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/jayzandme" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg-1.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row text-right">
                    <div className="col-md-6 col-md-offset-3 col-md-push-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 class="intro">I'm a conference speaker</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.codemash.org/session-details/?id=145851" target="_blank" rel="noopener noreferrer">View My Last Conference Session <i className="icon-head" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
