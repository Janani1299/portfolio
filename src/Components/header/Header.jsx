import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/images/januu.png';
import './Header.css';
// import Dummy from './dummy';


const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Janani</h1>
            <h5 className='text-light'>Frontend Developer specializing in React & scalable UI development</h5>
            <CTA/>
            <HeaderSocials/>

            <div className='me'>
                <img src={ME} alt = "me" />
            </div>
            
            <a href="#contact" className='scroll__down'>Scroll Down</a>

           
        </div>
      
    </header>

  
  )
}




export default Header
