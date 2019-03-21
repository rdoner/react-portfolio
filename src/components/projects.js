import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* this site */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                background: "url(reactPortfolio.png) center / cover"
              }}
            />
            <CardText>
              <h4>This site</h4>
              I built this site using Create React App, React MDL, and React Router v4
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/rdoner/react-portfolio"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                background: "url(Yelpcamp+gif.gif) center / cover"
              }}
            />
            <CardText>
              <h4>YelpCamp</h4>
              This was the first full website that I made as part of The Web Developer Bootcamp by
              Colt Steele. It is a user-sourced directory of campsites with user authentication for
              posting new campsites, making comments, and editing posts. The google maps API is used
              to add a map of the location in the campsite information. YelpCamp was built using
              NodeJS, ExpressJS, MongoDB, mLab, and PassportJS
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/rdoner/YelpCamp-2"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://whispering-dusk-48997.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "250px",
                background: "url(Weather-lookup-gif.gif) center / cover"
              }}
            />
            <CardText>
              <h4>React-Redux Weather App</h4>I built this app as part of the Modern React With
              Redux Course by Stephen Grider. I integrated calls to the open weather maps and google
              maps API's to provide temperature, pressure, and humidity information as well as a map
              of the searched city. The charts were made using the Sparklines library.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/rdoner/WeatherApp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://floating-sea-80662.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                background: "url(BlogApp+gif.gif) center / cover"
              }}
            />
            <CardText>
              <h4>React-Router Blog</h4>I built this blog app to learn how to use the react-router
              library. It makes REST API calls to a blog database. Then, once information has been
              fetched from the database, it uses the redux library to manage the blog data so that
              it is loaded instantaneously.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/rdoner/ReactReduxForm"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://aqueous-hollows-61571.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Android 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "600px",
                background: "url(quizzler.gif) center / cover"
              }}
            />
            <CardText>
              <h4>Quizzler</h4>A quiz game built with Java in Android Studio
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/rdoner/Quizzler-Android"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Android 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "600px",
                background: "url(destini.gif) center / cover"
              }}
            />
            <CardText>
              <h4>Destini</h4>A choose your own adventure game built with Java in Android Studio
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a href="https://github.com/rdoner/destini" rel="noopener noreferrer" target="_blank">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Android 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "600px",
                background: "url(magic8ball.gif) center / cover"
              }}
            />
            <CardText>
              <h4>Magic 8 Ball</h4>A randomized Magic 8 ball app built with Java in Android Studio
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/londonappbrewery/magic-8-ball-android-rdoner"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          {/* <h4 style={{textAlign: 'center', marginBottom: 100}}>
            While taking web and app development courses on Udemy, I documented everything I learned
            as I as a reference for myself and others. Documentation is a crucial step in my
            learning process.
          </h4> */}
          <div className="projects-grid">
            {/* Course 1: Android & Java */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "175px",
                  background: "url(androidCourse.png) center / cover"
                }}
              />
              <CardText>
                <h4>Android & Java App Development</h4>Mobile Android App course including tutorials
                on UI and UX design
              </CardText>
              <CardActions border style={{ textAlign: "center" }}>
                <a
                  href="https://www.udemy.com/android-app-development-with-java/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Udemy</Button>
                </a>
                <a
                  href="https://docs.google.com/document/d/1vBya7rdcY-MJf1kK4Hn4gILRwRg_11F1wiPRL2lq6Gs/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Course Journal</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Course 2: Algorithms */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "175px",
                  background: "url(algorithmsCourse.png) center / cover"
                }}
              />
              <CardText>
                <h4>JavaScript Algorithms & Data Structures</h4>Teaches fundamentals of computer
                science including recursion, sorting, linked lists, trees, graphs, and dynamic
                programming
              </CardText>
              <CardActions border style={{ textAlign: "center" }}>
                <a
                  href="https://www.udemy.com/js-algorithms-and-data-structures-masterclass/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Udemy</Button>
                </a>
                <a
                  href="https://docs.google.com/document/d/1whA-3JfsEDb4AP2TUPgW-vxFX-Il6s7U7rtblxQ-U-0/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Course Journal</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Course 3: Web dev bootcamp */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "175px",
                  background: "url(webDevelopmentCourse.png) center / cover"
                }}
              />
              <CardText>
                <h4>The Web Developer Bootcamp</h4>Fullstack Web Development course teaching HTML,
                CSS, Javascript, NodeJS, and ExpressJS
              </CardText>
              <CardActions border style={{ textAlign: "center" }}>
                <a
                  href="https://www.udemy.com/the-web-developer-bootcamp/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Udemy</Button>
                </a>
                <a
                  href="https://docs.google.com/document/d/1UcgLlQp7UZoT7PpeAXCwIN-fOazYvV6gYsrTlGPGj14/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Course Journal</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            {/* Course 4 React course */}
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "175px",
                  background: "url(reactCourse.png) center / cover"
                }}
              />
              <CardText>
                <h4>Modern React with Redux</h4>Web Development course teaching React and Redux
                along with the React-Router and Redux-Form libraries
              </CardText>
              <CardActions border style={{ textAlign: "center" }}>
                <a
                  href="https://www.udemy.com/react-redux/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Udemy</Button>
                </a>
                <a
                  href="https://docs.google.com/document/d/14z_jpuBIAh89mQJBtJOIn1x6qNKmXgy0579FHo4pSEA/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored>Course Journal</Button>
                </a>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }9
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Web</Tab>
          <Tab>Android</Tab>
          <Tab>Course Journals</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
