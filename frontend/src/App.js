import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Upload from './pages/Upload';
import Output from './pages/Output';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/upload" element={ <Upload/>} />
          <Route path="/output" element={<Output/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
