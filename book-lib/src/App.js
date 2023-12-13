import "./index.css";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./pages/Forum/Forum";
import Conversation from "./components/Conversation/Conversation";
import { BooksContextProvider } from "./apis/BooksContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BooksContextProvider>
      <Navbar />
      <Routes>
		<Route path="/" element= {<Home/>} />
        <Route path="/forums" element={<Forum />} />
        <Route path="/search" element={<SearchBooks />} />
        <Route path="/book/:isbn" element={<Conversation />} />
      </Routes>
    </BooksContextProvider>
  );
}

export default App;
