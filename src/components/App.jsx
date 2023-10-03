import { motion } from "framer-motion";

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
    </>
  );
}

export default App;
