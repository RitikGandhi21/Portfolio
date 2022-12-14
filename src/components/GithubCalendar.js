import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { Row } from 'react-bootstrap';
import GitHubCalendar from 'react-github-calendar';

const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8115b9",
    grade3: "#9a19dc",
    grade2: "#b246ea",
    grade1: "#d292f3",
    grade0: "#ecd9fc",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="RitikGandhi21"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
