import "./index.css";
import { Route, Routes } from "react-router-dom";
import SearchLibrary from "./components/Search/SearchLibrary";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./pages/Forum/Forum";
import Conversation from "./pages/Conversation/Conversation";
import { BooksContextProvider } from "./apis/BooksContext";
import Home from "./pages/Home/Home";
import Edit from "./pages/Edit/Edit";

function App() {
  return (
    <BooksContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forums" element={<Forum />} />
        <Route path="/search" element={<SearchLibrary />} />
        <Route path="/book/:isbn" element={<Conversation />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BooksContextProvider>
  );
}

export default App;
