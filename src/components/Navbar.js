import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import("../css/navbar.css");

const Navbar = () => {
    const [hamburger, sethamburger] = useState(false);


    const listVariants = {

        init: {
            opacity: 0,
            y: "-100%"
        },
        final: {
            opacity: 1,
            y: 0,
            transition:{
                type:"spring",
                delay:0.3,
                stiffness:500,
                damping:10
            }
        }
    }


    return (
        <div className='navdiv'>
            <motion.nav className='navbar'

                initial={{
                    x: "-100vw",
                    backgroundColor: '#ffffff'
                }}
                animate={{

                    x: 0,
                    backgroundColor: '#252525'
                }}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
            >

                <div className="logo"><span className='mylogo'><Link to={'/'}>Pranjit Lahkar</Link></span></div>
                <div className="navlinks">

                    <AnimatePresence>
                        <motion.ul className={!hamburger ? "navlist" : "hide"}

                            variants={listVariants}
                            initial="init"
                            animate="final"

                        >
                            <li className='navitems'><Link to="/">HOME</Link> </li>
                            <li className='navitems'><Link to={'/about'}>ABOUT</Link></li>
                            <li className='navitems'><Link to={'/skills'}>SKILLS</Link></li>
                            <li className='navitems'><Link to={'/contact'}>CONTACT</Link></li>
                        </motion.ul>
                    </AnimatePresence>


                </div>
                <div className='icons'>
                    <Link to={"https://www.facebook.com/pranjit.lahkar.12"} target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to={"https://www.instagram.com/pranjit_lahkar63/"} target="_blank">  <i className="fa-brands fa-instagram"></i></Link>
                    <Link to={"https://wa.me/+919678532569?text=Hello"}> <i className="fa-brands fa-whatsapp"></i></Link>
                </div>
                <div className='ham' onClick={() => {
                    sethamburger(!hamburger);


                }}>
                    <i className="fa-solid fa-grip-lines"></i>
                </div>

            </motion.nav>
        </div>
    )
}

export default Navbar
