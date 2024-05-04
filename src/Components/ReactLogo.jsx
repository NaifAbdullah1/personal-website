import reactLogo from '../assets/react.svg'
import  '../css/react-logo.css'

const ReactLogo = () => {
 
    return (
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    )
}

export default ReactLogo;