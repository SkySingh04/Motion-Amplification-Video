import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Upload from './pages/Upload';
import Output from './pages/Output';
import Login from './pages/Login';
import Signup from './pages/Signup';
import InputPage from './pages/InputPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/upload" element={ <Upload/>} />
          <Route path="/output" element={<Output/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/input" element={<InputPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;