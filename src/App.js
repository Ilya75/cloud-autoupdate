import './App.css';

import Version from './components/Version';

function App() {

  var title = "Project 'Cloud-Auto-update' v.1.0.0";

  return (
    <div className="App">
      <header className="App-header">
       <Version title={title} />
      </header>
    </div>
  );
}

export default App;
