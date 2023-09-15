import React from 'react';
//import { useSpring, animated } from 'react-spring';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Upload from './pages/Upload';
import Output from './pages/Output';
import Login from './pages/Login';
import Signup from './pages/Signup';
import InputPage from './pages/InputPage';
import RequireAuth from './RequireAuth'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/upload" element={<RequireAuth><Upload/></RequireAuth>} />
          <Route path="/output" element={<RequireAuth><Output/></RequireAuth>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/input" element={<RequireAuth><InputPage/></RequireAuth>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
