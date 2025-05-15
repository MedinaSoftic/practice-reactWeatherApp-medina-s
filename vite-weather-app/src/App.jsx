import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import CityList from './components/CityList';
import CityForecast from './components/CityForecast';

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CityList/>}/>
          <Route path="/forecast/:cityName" element={<CityForecast/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
