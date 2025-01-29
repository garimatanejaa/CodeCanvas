import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import "./TechStackRunner.css"; // Import the CSS file


const topImages = [
    "./images/java.png",
    "./images/C++_logo.png",
    "./images/c.png",
    "./images/react-removebg-preview.png",
    "./images/nodejs.png",
    "./images/nextjs.png",
    "./images/python.png",
    "./images/html-removebg-preview.png",
    "./images/git.png",
    "./images/oracle-removebg-preview.png",
    "./images/css-removebg-preview.png",
    "./images/javascript.png",
    "./images/mongodb.png",
    "./images/mysql.png",
    "./images/oracle-removebg-preview.png",
    "./images/photoshop-removebg-preview.png",
    "./images/qiskit-removebg-preview.png",
    "./images/figma-removebg-preview.png"
];

const bottomImages = [
    "./images/bootstrap.png",
    "./images/javascript.png",
    "./images/mongodb.png",
    "./images/mysql.png",
    "./images/oracle-removebg-preview.png",
    "./images/photoshop-removebg-preview.png",
    "./images/qiskit-removebg-preview.png",
    "./images/figma-removebg-preview.png",
    "./images/python.png",
    "./images/html-removebg-preview.png",
    "./images/git.png",
    "./images/oracle-removebg-preview.png",
    "./images/css-removebg-preview.png",
    "./images/C++_logo.png",
    "./images/c.png",
    "public/images/Matlab_Logo.png",
    "./images/react-removebg-preview.png",
    "./images/nodejs.png",
    "./images/nextjs.png",
    "./images/python.png"
];

const Skills = () => {
    // Dynamic background color based on the theme
    const bgcol = useColorModeValue("gray.10", "gray.900");
    const textColor = useColorModeValue("black", "white");

    return (
        <Box className="runner-wrapper" bg={bgcol} py={10} >
            <Container maxW="container.md">
            {/* Heading */}
            <Heading as="h2" size="xl" fontWeight="bold" color={textColor} mb={5}>
                Tools & Languages
            </Heading>

            {/* Top Runner - Moves Left to Right */}
            <div className="runner-container">
                <motion.div
                    className="runner"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {[...topImages, ...topImages].map((src, index) => ( // Duplicated images for seamless loop
                        <motion.img
                            key={`top-${index}`}
                            src={src}
                            alt="tech icon"
                            className="tech-icon"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    ))}
                </motion.div>
            </div>

            <br />

            {/* Bottom Runner - Moves Right to Left */}
            <div className="runner-container">
                <motion.div
                    className="runner reverse"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {[...bottomImages, ...bottomImages].map((src, index) => ( // Duplicated images for seamless loop
                        <motion.img
                            key={`bottom-${index}`}
                            src={src}
                            alt="tech icon"
                            className="tech-icon"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    ))}
                </motion.div>
            </div>
            </Container>
        </Box>
    );
};

export default Skills;

