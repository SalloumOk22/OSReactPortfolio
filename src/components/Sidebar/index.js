import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from  '../../assets/images/logo-s1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
   <div className='nav-bar'>
       <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = "logo" />
       </Link>
       <nav>
            <NavLink exact="true" 
            activeclassname="active" 
            to="/">
                <FontAwesomeIcon icon={faHome} 
                color = "#4d4d4e"/>
            </NavLink>
            <NavLink  
            activeclassname="active" 
            className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} 
                color = "#4d4d4e"/>
            </NavLink>
            <NavLink  
            activeclassname="active" 
            className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} 
                color = '#4d4d4e'/>
            </NavLink>
            <NavLink  
            activeclassname="active" 
            className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} 
                color = '#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://linkedin.com/in/oksana-salloum-b0a551235'>
                    <FontAwesomeIcon icon={faLinkedin} 
                    color='#4d4d4e' />
                </a>
            </li>
        </ul>
       
        <ul>
            <li>
                <a target="_blank" 
                rel='noreferrer' 
                href='https://github.com/SalloumOk'>
                    <FontAwesomeIcon icon={faGithub} 
                    color='#4d4d4e' />
                </a>
            </li>
        </ul>
   </div>

    )


export default Sidebar