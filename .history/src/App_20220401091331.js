import React from 'react';
import './App.css';
import WebcamCapture from './features/WebcamCapture';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/test" element="WASSUP DICKQUAD" />
        <Route path="/" element={<WebcamCapture />} />
      </Routes>
    </div>
  );
}

export default App;
