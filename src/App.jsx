

import './App.css'
import Header from './Components/Header.jsx'

function App() {

  return (
    <>
    <div id="parent-container">
      <Header/>

      <section id="hero-section">
        <div id="hero-container">
          <div id="intor text and button TODO">

          </div>
          <div id='logo'>
            <img src="./assets/logo.png" alt='Brand Logo'/>
          </div>
        </div>
      </section>

      <section id="experience-section">
        <div className="parallax"></div>
      </section>


    </div>
    </>
  )
}

export default App
