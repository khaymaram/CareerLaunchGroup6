import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import OpenRecipe from './components/OpenRecipe';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/recipe" element={<OpenRecipe />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
