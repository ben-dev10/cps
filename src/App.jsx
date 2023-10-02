import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Framer motion component */}
      <motion.h1 initial={{ y: -100 }} animate={{ y: 0 }}>
        <p className="text-purple-400">Vite + React</p>
      </motion.h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
