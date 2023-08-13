import './App.css';

import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/nav/nav';
import { Portfolio } from './components/portfolio/portfolio';
import { Resume } from './components/resume/resume';
import { Skills } from './components/skills/skills';

function App() {

  return (
    <>
      <Hero  />
      <Navbar />
      <Skills />
      <About />
      <Portfolio />
      <Resume/>
      <Contact />
    </>
  );
}

export default App;
