import "./App.css";
import Counter from "./components/Counter/Counter";
import Debounce from "./components/Debounce/Debounce";
import Fetch from "./components/Fetch/Fetch";

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Debounce />
      <Counter />
      <Fetch />
    </>
  );
}

export default App;
