import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <h4>{this.props.position}</h4>
          <div style={{marginLeft: 20}}>
            <p>
              {this.props.startYear} - {this.props.endYear}
            </p>
            <p>{this.props.location}</p>
          </div>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "25px" }}>{this.props.jobName}</h4>
          <ul>{this.props.children}</ul>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
