import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Fetch from "./components/Fetch/Fetch";
import Debounce from "./components/Debounce/Debounce";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/fetch">Fetch</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/debounce">Debounce</Link>
      </nav>
      <Routes>
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/debounce" element={<Debounce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
