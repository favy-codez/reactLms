import "./App.css";
import Home from "./pages/Home";
import Interndetail from "./pages/Interndetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interndetail/:id" element={<Interndetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
