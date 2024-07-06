import React from 'react';
import { Image, Box, useColorModeValue } from '@chakra-ui/react'; // Import Image and Box from Chakra UI
import { Row, Col } from 'react-bootstrap'; // Import Row and Col from react-bootstrap

const LeetcodeStats = () => {
  const username = 'garimataneja'; // Replace with your LeetCode username
  const theme = 'Dark'; // Replace with your preferred theme
  const bgcol = useColorModeValue('gray.10', 'gray.900'); // Adjust background color as needed
  const leetcodeStatsUrl = `https://leetcode-stats.vercel.app/api?username=${username}&theme=${theme}`;

  return (
    <Box id="leetcodestats" py={10} bg={bgcol}>
      <Row className="justify-content-center align-items-center text-center" style={{ textAlign: 'center' }}>
        <Col xs={12} md={6} lg={6}>
          <h1 className="project-heading" style={{ margin: '0 auto',paddingBottom: '20px', fontSize: '2.5rem' }}>Days I <strong className="purple">Code 💻</strong></h1>
          <h6 style={{ margin: '0 auto', paddingBottom: '20px', fontSize: '2.5rem'}}><strong>--LeetCode--</strong></h6>
          <Image src={leetcodeStatsUrl} alt={`${username}'s LeetCode Stats`} style={{ margin: 'auto', display: 'block' }} />
        </Col>
      </Row>
    </Box>
  );
};

export default LeetcodeStats;






