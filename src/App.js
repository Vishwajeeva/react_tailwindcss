import './App.css'; // Global styles including Tailwind
import Header from './components/Header.js'; // Header component
import Hero from './components/Hero.js';
import About from './components/about.js'; // Correct casing
import Projects from './components/projects.js'; // Correct casing
import Resume from './components/resume.js'; // Correct capitalization and name
import Contact from './components/contact.js'; // Correct capitalization
import Footer from './components/footer.js'; // Correct capitalization

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;

