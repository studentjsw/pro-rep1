import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
import Skill from './components/skills/Skill';

function App() {
  return (
    <div className="App">
      <>
      
      <Header/>
      <Nav/>
      <About/>
      <Skill/>
      <Qualification/>
      <Projects/>
      <Contact/>
      <Footer/>
      
      
      </>
    </div>
  );
}

export default App;
