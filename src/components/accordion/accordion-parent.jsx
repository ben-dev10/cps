/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import AccordionChild from "./accordion-child";

const AccordionParent = () => (
  <AccordionRoot type="single" defaultValue="item-1" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <b>Product</b>
      </AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>
        <b>Company</b>
      </AccordionTrigger>
      <AccordionContent>
        Yes. It&apos;s unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>
        <b>Support</b>
      </AccordionTrigger>
      <AccordionContent>
        <b>Call Support</b>
        <div className="accordion-container w-[100%]">
          <AccordionChild />
        </div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
);

const AccordionRoot = styled(Accordion.Root, {
  // borderRadius: 6,
  width: "100%",
  backgroundColor: mauve.mauve6,
  // boxShadow: `0 2px 10px ${blackA.blackA2}`,
});

const AccordionItem = styled(Accordion.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${mauve.mauve12}`,
  },
});

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  )
);

const StyledHeader = styled(Accordion.Header, {
  all: "unset",
  display: "flex",
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 1px 0 ${mauve.mauve6}`,
  // eslint-disable-next-line no-dupe-keys
  backgroundColor: "white",
  "&:hover": { backgroundColor: mauve.mauve2 },
});

const StyledChevron = styled(ChevronDownIcon, {
  color: violet.violet10,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: mauve.mauve11,
  backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", {
  padding: "15px 20px",
});

export default AccordionParent;
