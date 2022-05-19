import './index.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  
  const nameArray = [' ','O','k', 's', 'a', 'n', 'a']
  const jobArray = ['W', 'e','b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
  const lastnameArray = ['a','l','l','o','u','m']
  useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
  
    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <img
              src={LogoTitle}
              alt=" Web Developer "
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={lastnameArray}
                idx={16}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>Full-stack Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div> 
          <Logo/>        
       </div>
  
      <Loader type="pacman" />
    </>
  )
}
  export default Home 