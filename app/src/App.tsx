import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form";
// import { Form } from './components/Form';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
