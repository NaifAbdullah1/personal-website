import reactLogo from '../assets/react.svg'
import  '../scss/react-logo.scss'

const ReactLogo = () => {
 
    return (
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    )
}

export default ReactLogo;