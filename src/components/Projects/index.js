import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'r','o','j','e','c','t', 's']}
                  idx={15}
                />
              </h1>
              <p>
                Coming soon!
              </p>
            </div>                   
          </div>
          <Loader type="pacman" />
        </>
      )
}

export default Projects
