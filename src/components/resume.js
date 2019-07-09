import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                // TODO: Change profile image
                src="techtonicHeadshot.jpg"
                alt="avatar"
                style={{ height: "300px", borderRadius: "50%" }}
              />
            </div>
            {/* TODO: Change all resume info */}
            <h2 style={{ paddingTop: "2em" }}>Ryan Doner</h2>
            <h4 style={{ color: "grey" }}>Front End Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Front end mobile and web developer with a strong desire to pursue excellence and
              continuously improve everyday. Looking to join a collaborative team made up of
              intellectually curious individuals who share a passion for personal development,
              mastering their craft, and who strive for balanced lives.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>3100 22nd St. Boulder, CO</p>
            <h5>Phone</h5>
            <p>(520) 664-6294</p>
            <h5>Email</h5>
            <p>ryanelliotdoner@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>
            <h6 className="skills">
              JavaScript, ReactJS, React Native, Redux, NodeJS, AWS Serverless Stack, AWS Amplify,
              MongoDB, ExpressJS, HTML/CSS, VBA, LabWare LIMS
            </h6>
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Professional Experience</h2>
            <Experience
              startYear={"Sep 2018"}
              endYear={"Current"}
              jobName="Techtonic"
              location={"Boulder, CO"}
              position="Front End Developer"
            >
              <li>
                Constructed React Native mobile app for one of the world’s largest waterpark
                companies.
              </li>
              <li>
                Designed Storybook style guide to ensure consistency across all Android and iOS
                devices.
              </li>
              <li>Created a state management system using redux.</li>
              <li>Integrated Amplitude analytics for tracking in app navigation.</li>
              <li>
                Debugged API timeout errors using Rollbar and created image caching function to fix
                them.
              </li>
              <li>Team lead for a chore coordination app built using MERN stack.</li>
            </Experience>

            <Experience
              position="Software Developer"
              startYear={"Jan 2016"}
              endYear={"June 2016"}
              jobName={"UCANN"}
              jobDescription={"Software Developer"}
              location={"Golden, CO"}
            >
              <li>Contracted to design and implement lab results database using Excel</li>
              <li>
                Designed lab report template in Excel and automated report generation with a VBA
                macro
              </li>
              <li>Produced documentation of database and report template usage</li>
            </Experience>

            <Experience
              position="Software Developer"
              startYear={"Aug 2017"}
              endYear={"June 2018"}
              jobName="RM3 Labs"
              location={"Boulder, CO"}
            >
              <li>
                Developed LIMS lab management software to analyze and report microbiological lab
                data
              </li>
              <li>
                Constructed macros in VBA to pull from Excel and fill data into report templates
              </li>
              <li>
                Automated querying and reporting of sample information to Colorado’s METRC API
              </li>
              <li>
                Composed detailed documentation for LIMS software use following ISO lab compliance
                standards.
              </li>
            </Experience>

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Education</h2>
            <Education
              startYear={"Aug 2011"}
              endYear={"May 2015"}
              schoolName="University of Arizona"
              schoolDescription={
                "Bachelor of Science: Neuroscience and Cognitive Sciences, 2015\nUniversity of Arizona - Tucson\nGPA: 3.78\nGraduate of UofAs McGuire entrepreneurship program"
              }
            >
              <li>Bachelor of Science: Neuroscience and Cognitive Sciences</li>
              <li>GPA: 3.78</li>
              <li>Graduate of UofA's McGuire entrepreneurship program</li>
            </Education>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
