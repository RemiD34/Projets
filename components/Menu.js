import React, { Component } from "react";
import Article from "./Article";

export default class Menu extends Component {
  state = {
    apropos: false,
    formation: false,
    experience: false,
    competences: false,
    certifications: false,
  };

  handleApropos = (e) => {
    this.setState({
      apropos: true,
      formation: false,
      experience: false,
      competences: false,
      certifications: false,
    });
  };

  handleFormation = (e) => {
    this.setState({
      apropos: false,
      formation: true,
      experience: false,
      competences: false,
      certifications: false,
    });
  };

  handleExperience = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: true,
      competences: false,
      certifications: false,
    });
  };

  handleCompetence = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: true,
      competences: false,
      certifications: false,
    });
  };

  handleCertifications = (e) => {
    this.setState({
      apropos: false,
      formation: false,
      experience: false,
      competences: false,
      certifications: true,
    });
  };

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: "blue", width: "500px", height: "400px" }}
      >
        <div className="row">
          <div className="col-sm">
            <Article leState={this.state} />
          </div>
          <div className="col-sm">
            <ul>
              <button onClick={this.handleApropos}>A propos de moi</button>
              <button onClick={this.handleFormation}>Formation</button>
              <button onClick={this.handleExperience}>
                Expérience professionelle
              </button>
              <button onClick={this.handleCompetence}>Compétences</button>
              <button onClick={this.handleCertifications}>
                Certifications
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
