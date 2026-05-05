import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/images/foodapp.png';
import IMG2 from '../../assets/images/nextjs.png';
import IMG3 from '../../assets/images/clock3.png';
import IMG4 from '../../assets/images/chart.png';
import IMG5 from '../../assets/images/redux.png';
import IMG6 from '../../assets/images/ecommerce.png';

const data = [
    {
        id:1,
        image:IMG1,
        title:'Food Order Website using React',
        github:'https://github.com/Janani1299/FoodOrder',
        demo:'https://react-demo-22242.firebaseapp.com'
    },
    {
        id:2,
        image:IMG2,
        title:'Sample Website using Nextjs',
        github:'https://github.com/Janani1299/nextjs',
        demo:'https://nextjs-vlec.vercel.app/'
    },
    {
        id:3,
        image:IMG3,
        title:'Make a Real time Clock using React',
        github:'https://github.com/Janani1299/clock',
        demo:'https://janani1299.github.io/clock/'
    },
    {
        id:4,
        image:IMG4,
        title:'Creating Expense Chart using React',
        github:'https://github.com/Janani1299/Expense-chart',
        demo:'https://janani1299.github.io/Expense-chart/'
    },
    {
        id:5,
        image:IMG5,
        title:'Making a Website using Redux',
        github:'https://github.com/Janani1299/redux',
        demo:'https://janani1299.github.io/redux/'
    },
    {
        id:6,
        image:IMG6,
        title:'Ecommerce Website -productdetails page using React',
        github:'https://github.com/Janani1299/FoodOrder',
        demo:'https://react-demo-22242.firebaseapp.com'
    }
]

function Portfolio() {
  return (
    <section id='portfolio'>
       <h5>My Recent Works</h5>
       <h2>Portfolio</h2>

       <div className='container portfolio__container'>
           {
               data.map(({id, image, title, github, demo}) => {
                   return (
                       <article key={id} className='portfolio__item'>
                           <div className='portfolio__item-image'>
                               <img src={image} alt={title} />
                           </div>
                           <h3>{title}</h3>
                           <div className='portfolio__item-cta'>
                               <a href={github} className='btn' target='_blank'>Github</a>
                               <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                           </div>
                       </article>
                   )
               })
           }



           {/* <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article>

           <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article>

           <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article>

           <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article>

           <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article>

           <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={IMG1} alt='foodapp' />
                </div>
                <h3>This is a portfolio item title</h3>
               <div className='portfolio__item-cta'>
                    <a href='https://github.com/Janani1299/FoodOrder' className='btn' target='_blank'>Github</a>
                    <a href='https://react-demo-22242.firebaseapp.com' className=' btn btn-primary' target='_blank' >Live Demo</a>
               </div>
           </article> */}

           

       </div>
    </section>
  )
}

export default Portfolio;
