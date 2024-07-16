import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import List from "./pages/List";
import Write from "./pages/Write";
import View from "./pages/View";

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/write" element={<Write/>} />
      <Route path="/view" element={<View/>} />
    </Routes>
  </div>;
}

export default App;
