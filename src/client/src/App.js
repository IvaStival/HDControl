import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";

import LocList from "./components/hds/LocList";
import HdList from "./components/hds/HdList";
import HdCreate from "./components/hds/HdCreate";

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<LocList/>}/>
            <Route path="/hds" element={<HdList/>}/>
            <Route path="/hds/new" element={<HdCreate/>}/>
          </Routes> 
      </BrowserRouter>
    </div>
    );
}

export default App;
