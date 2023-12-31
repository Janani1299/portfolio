import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

function Experience() {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                <small className='text-light' style={{display:'flex'}}>Experienced</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>ReactJS</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Material UI</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        {/* End of frontend */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Mongodb</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>ExpressJS</h4>
                <small className='text-light'>Basic</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            {/* <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Node</h4>
                <small className='text-light'>Intermediate</small>
            </article> */}

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience;
