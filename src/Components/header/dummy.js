import React from 'react';
import img from '../../assets/images/mainimage.jpg'

const Dummy = ()=> {
  return (
    <div id='home' className='container home-container' > 
    <div className='logo'>
        <div className='main-img'>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
        </div>

            <img src='{img}' alt='' />
    </div>
      
    </div>
  )
}

const toggle = document.querySelector('.main-img');
toggle.addEventListener('click', ()=> {
  toggle.classList.toggle('active');
});

export default Dummy;
