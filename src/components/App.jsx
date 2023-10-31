import { createPortal } from "react-dom";
import AccordionParent from "./accordion/accordion-parent";
import SelectButton from "./select-button";
import NavigationMenuST from "./NavigationMenu";


function App() {
  return (
    <>
      {createPortal(<AccordionParent />, document.getElementById("accordion"))}
      {createPortal(<NavigationMenuST />, document.getElementById("nav-menu"))}
      {createPortal(<SelectButton />, document.getElementById("select-button"))}
      {createPortal(
        <AccordionParent />,
        document.getElementById("footer-accordion")
      )}
    </>
  );
}

export default App;
