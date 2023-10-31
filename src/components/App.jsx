import { createPortal } from "react-dom";
import AccordionParent from "./accordion/accordion-parent";
import SelectButton from "./select-button";
// import NavigationMenuST from "./NavigationMenu";
import NavigationMenu2 from "./nav2";


function App() {
  return (
    <>
      {createPortal(<AccordionParent />, document.getElementById("accordion"))}
      {/* {createPortal(<NavigationMenuST />, document.getElementById("nav-menu"))} */}
      {createPortal(<NavigationMenu2 />, document.getElementById("nav-menu"))}
      {createPortal(<SelectButton />, document.getElementById("select-button"))}
      {createPortal(
        <AccordionParent />,
        document.getElementById("footer-accordion")
      )}
    </>
  );
}

export default App;
