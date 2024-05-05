import { useEffect, useState } from "react";
import "../css/loading-screen.css"
import PropTypes from "prop-types"

const Loading = ({ onComplete }) => {
    const [fadeState, setFadeState] = useState('fade-out')

    useEffect(() => {
        // After 1 second, fade the logo in
        const fadeLogoInTimer = setTimeout(() => {
            setFadeState('fade-in')
        }, 1000);

        // After 3 seconds, fade out the logo and call onComplete to continue to the site
        const fadeLogoOutTimer = setTimeout(() => {
            setFadeState('fade-out')
            setTimeout(onComplete, 1000) // 1 sec for fade-out
        }, 3000)

        return () => {
            clearTimeout(fadeLogoInTimer)
            clearTimeout(fadeLogoOutTimer)
        }
    }, [onComplete])

    return (
        <div className={`loading-container ${fadeState}`}> 
            <img src="./assets/logo.png" alt='Loading Screen Logo' className="loading-logo"/>
        </div>
    )

    
}

Loading.propTypes = {
    onComplete: PropTypes.func.isRequired, // Indicate that 'onComplete' is required and is a function
}

export default Loading;