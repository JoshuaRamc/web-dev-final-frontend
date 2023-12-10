import "./App.css";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchBooks />} />
      </Routes>
    </>
  );
}

export default App;
