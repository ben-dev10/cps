import { createPortal } from "react-dom";
import AccordionParent from "./accordion/accordion-parent";
import SelectButton from "./select-button";
import NavigationMenuST from "./NavigationMenu";
import Gallery from "./Gallery";

function App() {
  return (
    <>
      {createPortal(<AccordionParent />, document.getElementById("accordion"))}
      {createPortal(<NavigationMenuST />, document.getElementById("nav-menu"))}
      {createPortal(<SelectButton />, document.getElementById("select-button"))}
      {createPortal(<Gallery />, document.getElementById("gallery"))}
      {createPortal(
        <AccordionParent />,
        document.getElementById("footer-accordion")
      )}
    </>
  );
}

export default App;
