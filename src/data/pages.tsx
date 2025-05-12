import { ReactElement } from "react";
import { BsColumnsGap, BsPerson } from "react-icons/bs";
import { FaBlog, FaBriefcase, FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export interface NavigationItem {
  title: string;
  url: string;
  icon: ReactElement;
}

/**
 * @description list of pages available to the navigation pane
 */
export default [
  {
    title: "Home",
    url: "/#introduction",
    icon: <FaHome />,
  },
  {
    title: "About",
    url: "/#about",
    icon: <BsPerson />,
  },
  {
    title: "Work History",
    url: "/#work-history",
    icon: <FaBriefcase />,
  },
  {
    title: "Portfolio",
    url: "/#portfolio",
    icon: <BsColumnsGap />,
  },
  {
    title: "Blog",
    url: "/#blog",
    icon: <FaBlog />,
  },
  {
    title: "Contact",
    url: "/#contact",
    icon: <IoIosMail />,
  },
] as NavigationItem[];
