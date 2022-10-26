import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import Card from 'react-bootstrap/Card';

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritik Gandhi </span>
            from <span className="purple"> Edmonton, Canada.</span>
            <br />
            {
              "I am a first year graduate student pursuing Masters in Computer Science from University of Alberta, Edmonton, Canada ."
            }
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Competitive Programming
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Chess
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Geopolitics
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If someone else has done it, I can do it too. If no one has, then I can be the first."{" "}
          </p>
          <footer className="blockquote-footer">Soraya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
