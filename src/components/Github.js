import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row, Col } from 'react-bootstrap'; // Import Col from react-bootstrap

function Github() {
  return (
    <Row className="justify-content-center align-items-center"  style={{ textAlign: 'center' }}>
      <Col xs={12} md={6} lg={6}>
        <h1 className="project-heading" style={{ margin: '0 auto', paddingBottom: '20px', fontSize: '2.5rem'}}>  Days I <strong className="purple">Code 💻</strong>
        </h1>
        <GitHubCalendar
          username="garimatanejaa" // Replace with your GitHub username
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
          style={{ margin: '0 auto' }} // Center the calendar horizontally
        />
      </Col>
    </Row>
  );
}

export default Github;
