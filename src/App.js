import React from 'react'
import Header from '../src/components/header/header'
import Home from '../src/components/home/home'
import About from '../src/components/About/about_me'
import Services from '../src/components/services/services'
import Projects from '../src/components/Projects/projects'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Header/>
    <section id="home">
      <Home/>
    </section>
    <section id="about_me">
      <About/>
    </section>
    <section id="services">
      <Services/>
    </section>
    <section id="projects">
      <Projects/>
    </section>
    <Footer/>
    </>
  );
}

export default App;
