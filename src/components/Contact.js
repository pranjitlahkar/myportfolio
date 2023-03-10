import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from "react-parallax-tilt"
import { Link } from 'react-router-dom'
import("../css/contact.css")

const Contact = () => {

    const [form , setForm] =useState({
        fullname:"",
        email:"",
        phone:"",
        message:""
    })

    const onSubmit = async(e) => {
        e.preventDefault()
     
        const { fullname , email , phone , message  } = form

        if (fullname && email && phone && message) {


            const response = await fetch(`${process.env.REACT_APP_FIREBASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',

                },
                body: JSON.stringify({ fullname, email, phone, message })

            });

            if (response) {
                alert("Form Submitted Successfuly");
                setForm({ fullname: "", email: "", phone: "", message: "" })
            } else {
                alert("Please Fill The Form")
            }
        } else {
            alert("Please Fill The Form")
        }

    }

    const onChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    }



    const boxVariants = {
        start: {
            x: "100vw",
            opacity: 0
        },
        end: {
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                when: "beforeChildren",
                duration: 0.5,
                staggerChildren: 0.5
            }
        }
    }
    const childVariants = {
        start: {
            y: "100vh",
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }


    }
    const secondVariants = {

        start: {
            y: "-100vh",
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }




    }


    return (
        <div className="mc">
           
            
            
            
            <motion.div className='container'

            variants={boxVariants}
            initial="start"
            animate="end"
            transition="transition"
            exit={{
                x: 0
            }}

        >
            <div className='formbox'>
                <motion.div className='formpara'

                    variants={childVariants}

                >
                    <div className="frmpr">
                        <p>Lets Talk Something About Your Project</p>
                        <p>& Work Together</p>
                    </div>
                    <div className="contimg">
                        <motion.img src={require("../assets/contact (2).png")} alt=""

                            initial={{
                                scale: 1,
                                opacity: 1
                            }}
                            whileHover={
                                {
                                    scale: [1, 0.8, 0.6, 0.4, 0.2, 0.1, 0.2, 0.4, 0.6, 0.8, 1, 1.1],
                                    opacity: [1, 0, 0.6, 0.5, 0.8, 0, 1, 1, 0, 1],
                                    originX: 0,

                                }
                            }
                            transition={{
                                type: "tween",
                                duration: 1.5
                            }}

                            exit={
                                {
                                    scale: 1,
                                    opacity: 1,

                                }}

                        />
                    </div>
                </motion.div>
                <Tilt><motion.div className='formmain'

variants={secondVariants}
>
<h2>Drop me a Message</h2>
<h3>I'd love to hear from you</h3>

<form className='contactform' onSubmit={onSubmit}>

    <div className="inputs name"><input type="text" name='fullname'  value={form.fullname}  onChange={onChange} placeholder='Fullname ' /></div>
    <div className='inputs mail'><input type="email" name='email'  value={form.email} onChange={onChange} placeholder='E-mail' /></div>
    <div className='inputs phone'><input type="number" name='phone' value={form.phone} onChange={onChange} placeholder='Mobile no' /></div>
    <div className="inputs message"><input type="text" name='message' value={form.message} onChange={onChange} placeholder='Your message' /></div>
    <div className="inputs buttn"><motion.button className='submitbtn' type='submit'

        whileHover={{
            scale: [1.1, 1, 1.1, 1],
            backgroundColor: "#be3455"


        }}
        whileTap={{
            scale: 0.8

        }}

    >Send Message</motion.button></div>

</form>
</motion.div></Tilt>
                
            </div>
            <motion.div

                initial={{
                    x: "100vw"
                }}
                animate={{
                    x: 0
                }}
                transition={{
                    type: "spring",
                    delay: 1.5,
                    duration: 0.5
                }}


            >
                <div className="last">
                    <div className='followhead'><p>FOLLOW ME:</p>
                    </div>
                    <div className='follow'>
                        <div className="contbuttoncont">
                            <Link to={"https://wa.me/+919678532569?text=Hello"} target="_blank">
                                <motion.div className='icondiv whatsdiv'

                                    whileHover={{
                                        rotateY: 360,
                                        borderRadius: "50%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 10,

                                    }}

                                ><i className="fa-brands fa-whatsapp"></i>
                                </motion.div>

                            </Link>

                            <Link to={"https://www.facebook.com/pranjit.lahkar.12"} target="_blank">
                                <motion.div className='icondiv fbdiv' whileHover={{
                                    rotateY: 360,
                                    borderRadius: "50%",
                                    scale: 0.8
                                }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 10,

                                    }}><i className="fa-brands fa-facebook"></i>
                                </motion.div>
                            </Link>


                            <Link to={"https://www.instagram.com/pranjit_lahkar63/"} target="_blank">
                                <motion.div className='icondiv instadiv'
                                    whileHover={{
                                        rotateY: 360,
                                        borderRadius: "50%",
                                        scale: 0.8
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 10,

                                    }}><i className="fa-brands fa-instagram"></i>
                                </motion.div>
                            </Link>


                        </div>


                    </div>



                </div>
            </motion.div>

        </motion.div>

        <div className='buttbox'>
                <motion.button
                
                whileHover={{scale:1.1,
                   backgroundColor:"#000000",
                   border:"1px solid green"
                }}
                transition={{
                   repeat:3
                }}
                    
                
                className='contpagebtn'><Link to={"tel:+919678532569"}>Call</Link> </motion.button>
                <motion.button className='contpagebtn'
                whileHover={{scale:1.1,
                    backgroundColor:"#000000",
                    border:"1px solid red"
                 }}
                 transition={{
                    repeat:3,
                    duration:0.2

                 }}
                ><Link to={"mailto:plahkar63@gmail.com?subject=Enter Subject&body=Hello"}>Send Email</Link></motion.button>
            </div>

        </div>
    )
}

export default Contact
