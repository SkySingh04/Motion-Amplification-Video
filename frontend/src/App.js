import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Output from './pages/Output';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/output" element={Output} />
=======
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/output" element={<Output/>} />
>>>>>>> upstream/master
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
