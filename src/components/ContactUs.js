import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Call me, beep me:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><a href={resumeData.linkedinId}>LinkedIn</a>
                </h4>
              </div>
              <div className="widget">
                <h4><a href={resumeData.imagebaseurl}>Gmail</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}