import React from 'react'
import { motion } from 'framer-motion'
import Tilt from "react-parallax-tilt"
import('../css/skills.css')
const Skills = () => {

    const mainVariant ={

        initial: {
            x:"100vw"
        },
        final:{
            x:0,
            transition:{
                type:"tween",
                duration:0.5,
                when:"beforeChildren",
                staggerChildren:0.5
            }


        }
    }
const sideVariant={
    initial: {
        y:"-100vh",
        opacity:0.5
    },
    final:{
        y:0,
        opacity:1,
        transition:{
            type:"spring",
           stiffness:200,
           damping:15
        }


    }


}
const sideVariantTwo={
    initial: {
        y:"100vh",
        opacity:0.5
    },
    final:{
        y:0,
        opacity:1,
        transition:{
            type:"spring",
           stiffness:200,
           damping:15,
           delay:0.3
        }


    }


}


    return (
        <div className='mainc'>
            <motion.div className='superdiv' 
        
        variants={mainVariant}
        initial="initial"
        animate="final"
        >
            <div className="skillcontainer">
               <Tilt>
               <div className="skillcont">
                    <motion.div className='skillpara'
                    variants={sideVariant}
                    
                    ><p>As a web developer, I possess strong programming skills in languages such as HTML, CSS, and JavaScript. I am proficient in both front-end and back-end development, with experience in content management systems, responsive design, version control systems, and problem-solving. My attention to detail and design ensures that I deliver quality work that is visually appealing, user-friendly, and optimized for search engines.</p></motion.div>
                    <div className='skillimage'><motion.img src={require("../assets/skills.png")} alt="" 
                    
                    initial={{
                        x:"100vw"
                    }}
                    animate={{
                        x:0,
                        opacity:[1,0.5,0,0.5,1,0,1,0,1]
                    }}
                    transition={{
                        duration:5
                    }}
                    exit={{
                        x:0
                    }}
                    
                    /></div>
                </div>
               </Tilt>
                <Tilt> <motion.div className="skillcont" 
                
                variants={sideVariantTwo}
                
                > <p className='exp'>I have a hands on experience with :</p>
                    <div className="skillicons">
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-js"></i></div>
                            <div className='icontitle'>Javascript</div>
                        </div>
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-html5"></i></div>
                            <div className='icontitle'>HTML</div>
                        </div>
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-css3-alt"></i></div>
                            <div className='icontitle'>CSS</div>
                        </div>
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-node-js"></i></div>
                            <div className='icontitle'>NodeJS</div>
                        </div>
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-react"></i></div>
                            <div className='icontitle'>ReactJS</div>
                        </div>
                        <div className='icbox'><div className='brandicons'><i className="fa-brands fa-bootstrap"></i></div>
                            <div className='icontitle'>Bootstrap</div>
                        </div>
                        <div className='icbox'>
                            <div className='brandicons'><i className="fa-brands fa-wordpress"></i></div>
                            <div className='icontitle'>Wordpress</div>
                        </div>
                    </div>
                </motion.div></Tilt>
               
            </div>
        </motion.div>
        </div>
    )
}

export default Skills

