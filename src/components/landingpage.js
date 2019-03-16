import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing-grid" style={{ background: 'url(flatironsPortrait.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'scroll', transparency: 0.5, backgroundColor: '#fff' }}>
          <div>
            <div className="banner-text">
              <h1>Ryan Doner</h1>
              <h3>Fullstack Developer</h3>
              <hr />

              <p>HTML/CSS | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ryan-doner-95161a8b/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/rdoner" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Email */}
                <a href="mailto:ryanelliotdoner@gmail.com">
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
