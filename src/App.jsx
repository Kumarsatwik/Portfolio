import './App.css'
import Header from './Components/header/Header';
import About from './Components/about/About';
import Home from './Components/home/Home';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';
import Qualification from './Components/qualification/Qualification';
import Contact from './Components/contact/Contact';
import Work from './Components/work/Work';
function App() {

  return (
    <>
      <Header />    
      <main className="main">
        <Home/>  
        <About/>
        <Skills/>
        <Services/>
        <Work/>
        <Qualification/>
        <Contact/>
      </main> 
    </>
  )
}

export default App
