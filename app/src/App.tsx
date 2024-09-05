import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/Form";
import { Details } from "./components/CardDetails";
// import { Form } from './components/Form';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
