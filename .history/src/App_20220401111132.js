import React from 'react';
import './App.css';
import Preview from './Preview'
import WebcamCapture from './WebcamCapture';
import {Routes, Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/preview" element={<Preview/>} />
        <Route path="/" element={<WebcamCapture />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
