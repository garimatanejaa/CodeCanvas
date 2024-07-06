import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row, Col,} from 'react-bootstrap';
import { Box, useColorModeValue } from '@chakra-ui/react';
 // Import Col from react-bootstrap

function Github() {
  const bgcol = useColorModeValue('gray.10', 'gray.900'); 
  return (
    <Box id="leetcodestats" py={10} bg={bgcol}>
    <Row className="justify-content-center align-items-center"  style={{ textAlign: 'center' }}>
      <Col xs={12} md={6} lg={6}>
        <h6 style={{ margin: '0 auto', paddingBottom: '20px', fontSize: '2.5rem'}}><strong>--GitHub--</strong></h6>
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
    </Box>
  );
}

export default Github;
