import './App.css';

import Version from './components/Version';

function App() {

  var title = "Project 'Cloud-Autoupdate' v.0.1";

  return (
    <div className="App">
      <header className="App-header">
       <Version title={title} />
      </header>
      <footer>
        <span>Ilya Ovchelupov, 2023</span>
      </footer>
    </div>
  );
}

export default App;
