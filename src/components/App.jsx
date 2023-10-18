import { createPortal } from "react-dom";
import AccordionParent from "./accordion/accordion-parent";
import SelectButton from "./select-button";

function App() {
  return (
    <>
      {createPortal(<AccordionParent />, document.getElementById("accordion"))}
      {createPortal(<SelectButton />, document.getElementById("select-button"))}
      {createPortal(
        <AccordionParent />,
        document.getElementById("footer-accordion")
      )}
    </>
  );
}

export default App;
