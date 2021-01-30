import React from 'react'
import './App.css';
import Upload from './components/Upload';


function App() {
  return (
    <div className="App">
      <b><p className="display-3 font-weight-bold shadow">File Sharing Application</p></b>
      <Upload/>
      <div className="image-vector"></div>
      <div className="toast">Sample message</div>
    </div>
  );
}

export default App;
