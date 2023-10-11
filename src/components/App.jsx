import { motion } from "framer-motion";
import Accordion01 from "./accordion";
import { createPortal } from "react-dom";

function App() {
  return (
    <>
      <motion.p
        className="text-indigo-400 font-bold"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hello CPS
      </motion.p>
      {createPortal(<Accordion01 />, document.getElementById("accordion"))}
    </>
  );
}

export default App;
