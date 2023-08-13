import "./contact.css";
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsBagPlus } from "react-icons/bs";
import { motion } from 'framer-motion';

import axios from "axios";
import { useState } from "react";
const variants = {
  initial : {
      opacity : 0,
      x : -200
  },
  open : {
    opacity : 1, 
    x : 0,
  },
  transition: {
    delay : .5, 
    type : 'spring',
    stiffness : 230,
    duration : 3,
  },


  initialForm : {
    opacity : 0,
    x : 200
  },
  openForm : {
    opacity : 1, 
    x : 0,
  },
  transition: {
    delay : 1, 
    type : 'spring',
    stiffness : 230,
    duration : 1,
  },

}

export const Contact = () => {

    const [formData, setFormData] = useState({
      username : '',
      email : '',
      subject : '',
      message : ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Send the form data to the Django API using Axios
      axios.post('http://127.0.0.1:8000/form/', formData)
        .then((response) => {
          // Handle successful response (e.g., show a success message)
        })
        .catch((error) => {
          // Handle error (e.g., show an error message)
          console.error('Error sending email:', error);
        });
    };
  

  return (
    <section id="contact">
      <div className="contact_txt">
        <h1>Get in Tocuh</h1>
        <p>
          Let's <span className="text_ch">about ideas</span>
        </p>
      </div>

      <div className="container contact_container">
        <motion.div
        
        variants={variants}
        initial = "initial"
        whileInView= "open"

        className="left">
          <div className="content_form ">
            <div className="round_div">
              <FaRegAddressCard className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Address</h3>
              <p>a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,x,y,z.0,1,2,3,4,5</p>
            </div>
          </div>

          <div className="content_form ">
            <div className="round_div">
              <BiPhoneCall className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Phone</h3>
              <p>+8801819087654</p>
            </div>
          </div>
          <div className="content_form ">
            <div className="round_div">
              <BsBagPlus className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">freelance</h3>
              <p>availabe right now</p>
            </div>
          </div>
          <div className="content_form ">
            <div className="round_div">
              <AiOutlineMail className="form_icon" />
            </div>
            <div className="form_txt">
              <h3 className="text_ch">Email</h3>
              <p>mdzubayerhasan23@gmail.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div

        variants={variants}
        initial = "initialForm"
        whileInView= "openForm"

        className="right">
          <form action="" onSubmit={handleSubmit}>
            <div className="form">
              <div className="form_group">
                <label htmlFor="name">Your full name *</label>
                <input type="text" name="username" value={formData.username}  onChange={handleChange}/>
              </div>
              <div className="form_group">
                <label htmlFor="name">Your email address *</label>
                <input type="email" name="email" value={formData.email}  onChange={handleChange} />
              </div>
              <div className="form_group">
                <label htmlFor="name">Your subject *</label>
                <input type="text" name="subject" value={formData.subject}  onChange={handleChange}/>
              </div>
              <div className="form_group">
                <label htmlFor="name">Your Message *</label>
                <textarea  id="" cols="30" rows="10" name="message" value={formData.message}  onChange={handleChange}></textarea>
              </div>

              <button className="btn"> Send</button>
            </div>
          </form>
        </motion.div>
      </div>

      <footer>
        <div className="social_links">
          <a href="https://github.com">
            <FaGithub className="social_icon" />
          </a>
          <a href="https://github.com">
            <FaLinkedin className="social_icon" />
          </a>
          <a href="https://github.com">
            <FaFacebook className="social_icon" />
          </a>
          <a href="https://github.com">
            <FaTwitter className="social_icon" />
          </a>
        </div>

        <div className="footer_txt">
            <p>© All right reserved by developer <span className="text_ch">Zubayer hasan</span></p>
        </div>
      </footer>
    </section>
  );
};
