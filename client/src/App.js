
import './App.css';
import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Display from './components/Display';
import Detail from './pages/Detail';
function App () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        <Route path ='/results' element={<Detail />} />
          <Route path ='/games/:id' element={<Display/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
