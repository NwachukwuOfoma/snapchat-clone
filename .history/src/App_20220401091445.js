import React from 'react';
import './App.css';
import WebcamCapture from './features/WebcamCapture';
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/test" element="WASSUP DICKQUAD" />
        <Route path="/" element={<WebcamCapture />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
