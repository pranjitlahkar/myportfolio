import React from 'react'
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt"
import { Link } from 'react-router-dom';
import("../css/home.css")

const Home = () => {

    const ParaVariants = {

        init: {
            x: "100vw"
        },
        final: {
            x: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
                when: "beforeChildren"

            }
        }
    }
    const buttonVariants = {

        init: {
            x: "-50"
        },
        final: {
            x: 0,
            transition: {
                delay: 1,
                type: "spring",
                stiffness: 500,
                damping: 15,


            }
        }
    }



    return (
        <div className='mainc'>
            <>
                <motion.div className='homecont'

                    initial={{
                        x: "100vw",
                        backgroundColor: '#ffffff'
                    }}
                    animate={{

                        x: 0,
                        backgroundColor: '#252525'
                    }}
                    transition={{
                        type: "tween",
                        duration: 0.5,
                        when: "beforeChildren",


                    }}
                >
                    <motion.div className="myimg"
                        initial={{

                            x: 0,
                            y: 0,

                        }}
                        whileHover={{

                            y: [-25, 25],
                            x: [-50, 50],
                            originX: 0

                        }}
                        transition={{
                            type: "spring",
                            stiffness: 10,
                            damping: 50
                        }}


                    ><motion.img src={require("../assets/myphoto.png")} alt=""


                        initial={{

                            x: 0,
                            y: 0
                        }}
                        whileHover={{
                            x: [50, -50],
                            y: [25, -25],
                            originX: 0
                        }}
                        transition={{

                            type: "spring",
                            stiffness: 10,
                            damping: 50
                        }}


                        />
                    </motion.div>
                   
                        <motion.div className="para"

                            variants={ParaVariants}
                            initial="init"
                            animate="final"

                        ><Tilt><div className='homecard'><h1> <span>Hey There ,</span> I am Pranjit Lahkar</h1>
                        <p className='ptitle'>A Web Developer from Guwahati, India </p>
                        <p>FRONT-END / BACKEND /WORDPRESS / UI-UX DESIGNER</p>
                        <motion.button className='contactbtn'
                            variants={buttonVariants}

                            initial="init"
                            animate='final'


                            whileHover={{
                                scale: [1.1, 1, 1.1, 1],
                                backgroundColor: "#ff003ccc",
                                border: "2px solid black"

                            }}
                            whileTap={{
                                scale: 0.8

                            }}

                        > <Link to={"/contact"}>Contact Now</Link></motion.button></div></Tilt>
                        </motion.div>
                   
                </motion.div>
                <div className='contbox'>
                    <div className='cont1 cont'>
                        <Link to={"https://www.facebook.com/pranjit.lahkar.12"} target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to={"https://www.instagram.com/pranjit_lahkar63/"} target="_blank">  <i className="fa-brands fa-instagram"></i></Link>
                        <Link to={"https://wa.me/+919678532569?text=Hello"} target="_blank"> <i className="fa-brands fa-whatsapp"></i></Link>
                    </div>

                    <div className='cont3 cont'>
                        <Link to={"mailto:plahkar63@gmail.com?subject=Enter Subject&body=Hello"}><i className="fa-solid fa-envelope"></i></Link>
                        <Link to={"https://www.linkedin.com/in/pranjit-lahkar-140053122/"} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to={"https://github.com/pranjitlahkar"} target="_blank"><i className="fa-brands fa-github"></i></Link>
                    </div>

                </div>
            </>

        </div>
    )
}

export default Home
