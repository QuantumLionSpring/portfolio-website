import React from "react";
import './footer.css';
import  {FiFacebook} from 'react-icons/fi'
import  {FiLinkedin} from 'react-icons/fi'
import  {FiTwitter} from 'react-icons/fi'
const Footer = () =>{
    return(
       <footer>
           <a href="#">QuantumSpring</a>

           <ul className="permalinks">
               <li><a href="#" >Home</a></li>
               <li><a href="#About" >About</a></li>
               <li><a href="#experience" >Experience</a></li>
               <li><a href="#services" >Services</a></li>
               <li><a href="#portfolio" >Portfolio</a></li>
               <li><a href="#testimonials" >Testimonials</a></li>
               <li><a href="#contact" >Contact</a></li>
           </ul>
           <div className="footer__socials">
               <a href="#"><FiFacebook/></a>
               <a href="#"><FiLinkedin/> </a>
               <a href="#"><FiTwitter/> </a>
           </div>

           <div className="footer__copyright">
               <small>&copy;QuantumSpring Tutorials.All rights reserved.</small>
           </div>
       </footer>

    )
}
export default Footer