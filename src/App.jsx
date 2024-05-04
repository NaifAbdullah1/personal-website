

import './App.css'
import Header from './Components/Header.jsx'

function App() {

  return (
    <>
    <div id="parent-container">
      <Header/>

      <section id="hero-section">
        <div id="hero-container">{/*Hero content here*/}</div>
      </section>

      <section id="experience-section">
        <div className="parallax"></div>
      </section>


    </div>
    </>
  )
}

export default App
