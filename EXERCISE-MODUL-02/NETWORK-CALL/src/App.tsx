import { Routes, Route } from "react-router";
import Home from "./assets/components/Users";
import Header from "./assets/components/Header";
import Register from "./assets/components/Register";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
