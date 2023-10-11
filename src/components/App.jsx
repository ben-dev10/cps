import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import AccordionParent from "./accordion/accordion-parent";

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
      {createPortal(<AccordionParent />, document.getElementById("accordion"))}
      {/* {createPortal(<Accordion01 />, document.querySelector(".m-accordion"))} */}
    </>
  );
}

export default App;
