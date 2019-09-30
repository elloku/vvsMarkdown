import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App container-fluid">
      <div className = "row">
        <div className = "col-3 bg-danger left-panel">
          <h1>this is left panel</h1>
        </div>
        <div className = "col-9 bg-primary right-panel">
          <h1>this is right panel</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
