import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mapa from "./Mapa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Mapa</h1>
        <Mapa />
      </div>
    </>
  );
}

export default App;
