import React from "react";
import './about.css';
import  Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () =>{
    return(
        <section id='about'>About
<h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                <img src={Me} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>0-1 Years Working</small>

                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>??</small>

                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+</small>

                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet consequatur enim hic iure quae quasi quis ratione veniam, voluptatum? Ab accusamus amet consequatur eveniet, harum impedit numquam pariatur, placeat quia quisquam ratione repudiandae temporibus tenetur ullam unde? Dolore eos impedit laboriosam maiores officiis perferendis possimus rem repellendus temporibus voluptas?
                    </p>
                    <a href="#contact" className='btn btn-primary'> Let's Talk</a>

                </div>


            </div>
        </section>
    )
}
export default About