import { FC, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Link, useLocation } from "react-router-dom";

export const NavigationComponent: FC<{
  Item?: ReactNode;
  label?: string;
  showLabel?: boolean;
  link?: string;
}> = ({ Item, label, showLabel, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  

  const baseClasses =
    "flex items-center gap-4 my-1 mx-1 py-1.5 px-4 rounded hover:shadow-md";
  const divClasses = `bg-white text-black my-2 p-3 rounded hover:shadow-md z-10`;

  return (
    <>
      {link ? (
        <Link
          to={link}
          className={`${baseClasses} bg-white text-gray-800 shadow-sm ${
            showLabel && "w-[260px]"
          } ${
            isActive ? "bg-[#1E40AF]  text-white" : "bg-white text-gray-800"
          }`}
        >
          {Item}
          {showLabel && <p className="font-semibold text-md">{label}</p>}
        </Link>
      ) : (
        <div className={`${baseClasses} ${divClasses}`}>
          {Item}
          {showLabel && <p className="font-semibold text-md">{label}</p>}
        </div>
      )}
    </>
  );
};

export const DropDown: FC<{
  Item: ReactNode;
  content: ReactNode;
  setMaximize: (val: boolean) => void;
  maximize: boolean;
}> = ({ content, Item, maximize, setMaximize }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className={`border-1 border-red-400  ${
          maximize ? " w-[250px]" : "w-16"
        }`}
      >
        <AccordionTrigger
          className="no-underline hover:no-underline p-0 font-semibold text-md gap-4"
          onClick={() => {
            if (!maximize) setMaximize(true);
          }}
        >
          {Item}
        </AccordionTrigger>
        {maximize && (
          <AccordionContent className="w-full my-1 px-2 py-1 bg-blue-900">
            {content}
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};
