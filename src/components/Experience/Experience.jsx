import React from "react";
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () =>{
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
              <h2>My Experience</h2>
            <div className=" container experience__container">
                <div className="experience__fronend">
                    <h3>Frontend Development</h3>
                  <div className="experience__content">
                      <article className='experience__details'>
                  <BsPatchCheckFill/>
                  <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced </small>
                  </div>

                      </article>
                      <article className='experience__details'>
                          <BsPatchCheckFill/>
                          <div>
                              <h4>Tailwind</h4>
                              <small className='text-light'>Experienced </small>
                          </div>

                      </article>
                      <article className='experience__details'>
                          <BsPatchCheckFill/>
                          <div><h4>CSS</h4>
                              <small className='text-light'>Experienced </small></div>

                      </article>
                      <article className='experience__details'>
                          <BsPatchCheckFill/>
                          <div><h4>Javascript</h4>
                              <small className='text-light'>Experienced </small></div>

                      </article>
                      <article className='experience__details'>
                          <BsPatchCheckFill/>
                          <div>  <h4>React</h4>
                              <small className='text-light'>Experienced </small></div>

                      </article>
                      <article className='experience__details'>
                          <BsPatchCheckFill/>
                          <div><h4>Bootstrap</h4>
                              <small className='text-light'>Experienced </small></div>

                      </article>

                  </div>


                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>  <h4>Java</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div> <h4>Springboot</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>  <h4>Mysql</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>  <h4>NPM</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div> <h4>Php</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill/>
                            <div>  <h4>Node.js</h4>
                                <small className='text-light'>Experienced </small></div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience