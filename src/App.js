import './App.css';
import Hello from './hello/Hello';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  
  return (
    <div className="App">
      <nav>
        <a href='./Zach_Tang_resume.pdf' target='blank'>Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className='content'>
        <Hello />

        <Projects />

        <Contact />
      </div>

      <footer>
        Zach Tang
      </footer>
    </div>
  );
}

export default App;
