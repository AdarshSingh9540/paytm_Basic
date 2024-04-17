import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
