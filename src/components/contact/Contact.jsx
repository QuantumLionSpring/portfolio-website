import React from "react";
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bb1g51m', 'template_tzckwyd', form.current, '7EfVu6ZvXmQE6O6cO')
           e.target.reset()

    };


    return(
        <section id='contact'>Contact
        <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

<div className="container contact__container">
    <div className="contactoptions">
<article className="contact__option">
    <MdOutlineMail/>
    <h4>E-mail</h4>
    <h5>kaanergun78@gmail.com</h5>
    <a href="mailto:kaanergun78@gmail.com" target="_blank">Send a message</a>
</article>
        <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>QuantumSpring</h5>
            <a href="#" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>#123344235235</h5>
            <a href="#" target="_blank">Send a message</a>
        </article>
    </div>
    {/*END OF CONTACT*/}
    <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder="Your Full Name" required />
        <input type="email" name='email' placeholder="Your Email" required />
        <textarea name="message"  rows="7" placeholder="Your Message" required ></textarea>
        <button type='submit' className="btn btn-primary">Send Message</button>
    </form>
</div>

        </section>

    )
}
export default Contact