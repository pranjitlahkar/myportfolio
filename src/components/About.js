import React from 'react'
import { motion } from 'framer-motion'
import Tilt from "react-parallax-tilt"
import { Link } from 'react-router-dom'
import("../css/about.css")

const About = () => {

    const mainVariant = {

        initial: {
            x: "100vw"
        },
        final: {
            x: 0,
            transition: {
                type: "tween",
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5

            }


        }
    }
    const sideVariant = {

        initial: {
            x: "-100vw"
        },
        final: {
            x: 0,
            transition: {
                type: "spring",
                delay: 0.4,
                stiffness: 200,
                damping: 15

            }


        }
    }
    const sideVariantTwo = {

        initial: {
            y: "-100vw"
        },
        final: {
            y: 0,
            transition: {
                type: "spring",
                delay: 0.6,
                stiffness: 200,
                damping: 15

            }


        }
    }


    return (
        <div className="mainc">
           
            <motion.div className='aboutcont'
                variants={mainVariant}
                initial="initial"
                animate="final"
            

            
            > <Tilt tiltReverse={true}
            perspective={2000}
            glareEnable={true}
            glareMaxOpacity={0.20}>
                <motion.div className='texts inner-element'
                    variants={sideVariantTwo}
                    initial="initial"
                    animate="final">
                   
                        <div className="abouthead"></div>
                        <div className="aboutpara">
                            <h3>Hi, my name is Pranjit Lahkar, </h3>
                            <h4>and I am a web developer</h4>
                            <p> with a passion for creating beautiful and functional websites. I discovered my interest in web development during my college days and have been honing my skills ever since. I was fascinated by the ability to create beautiful and functional websites from scratch using just code.</p>
                            <p>My technical skills include proficiency in HTML, CSS, JavaScript, and jQuery. I have experience using popular frameworks such as Bootstrap and React, and I am currently learning Angular.

                                Some of my best projects include a responsive website for a local restaurant, an e-commerce website for a small business, and a weather app that pulls data from a public API.  

                                In addition to my technical skills, I am a creative problem solver and enjoy working in a team environment. </p>
                            <p>If you're interested in working with me, please feel free to contact me at <span className='contspan'><Link to={"mailto:plahkar63@gmail.com?subject=Enter Subject&body=Hello"}>plahkar63@gmail.com.</Link></span>  You can also connect with me on <span className='contspan'> <Link to={"https://www.linkedin.com/in/pranjit-lahkar-140053122/"}>LinkedIn</Link></span> and <span className='contspan'> <Link to={"https://github.com/pranjitlahkar"}>Github</Link></span>. Thank you for taking the time to visit my portfolio website!</p>
                        </div>
                   




                </motion.div> 
                </Tilt>
                <motion.div className='textwithimages'
                    variants={sideVariant}
                    initial="initial"
                    animate="final"
                > 
                        <div className='aboutimg'>
                        <Tilt gyroscope={true}
                    tiltMaxAngleX={45} tiltMaxAngleY={45}
                    perspective={1500}
                    glareEnable={true}
                    glareMaxOpacity={0.20}
                > <img src={require("../assets/aboutbg.jpg")} alt="" /> </Tilt>
                        </div>
                   

                </motion.div>
            </motion.div>
        </div>
    )
}

export default About
