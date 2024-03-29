// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar.component";
import Payments from "./components/payouts/payouts.component";
function App() {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" Component={Payments} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
