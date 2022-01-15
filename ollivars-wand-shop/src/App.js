import logo from './logo.svg';
import './App.css';
import  React  from 'react';
import { Routes, Route } from "react-router-dom";
import wands from './wands';
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import WandsList from './components/WandsList';
import Home from './components/Home';


function App() {
  return (
    <div className="container" class="bg-dark text-light text-center">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/WandsList" element={<WandsList />} />
        <Route path="/WandsList/:wandsaSlug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
