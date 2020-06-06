import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <p>Juliette Hirigoyen</p>
        </header>

        <div className="Menu">
          <div class="table">
            <ul id="horizontal-list">
              <li><a href="/animation">Animation</a></li>
              <li>  •  </li>
              <li><a href="/characters">Characters</a></li>
              <li>  •  </li>
              <li><a href="/environments">Environments</a></li>
              <li>  •  </li>
              <li><a href="/projects">Project</a></li>
              <li>  •  </li>
              <li><a href="/sketches">Sketches</a></li>
            </ul>
          </div>
      </div>

        <Route path="/animation" component={IndexPage} />
        <Route path="/characters" component={AboutPage} />
        <Route path="/environments" component={IndexPage} />
        <Route path="/projects" component={AboutPage} />
        <Route path="/sketches" component={IndexPage} />
      </Router>


    </div>
  );
}


const IndexPage = () => {
  return (
    <p>Home Page</p>
  );
};

const AboutPage = () => {
  return (
    <p>About Page</p>
  );
};


export default App;
