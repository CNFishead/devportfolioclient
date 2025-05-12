import { ReactElement } from "react";
import { BsColumnsGap, BsPerson } from "react-icons/bs";
import { FaBlog, FaBriefcase, FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export interface NavigationItem {
  title: string;
  url: string;
  icon: ReactElement;
  tooltip: string;
}

/**
 * @description list of pages available to the navigation pane
 */
export default [
  {
    title: "Home",
    url: "/#introduction",
    icon: <FaHome />,
    tooltip: "Home",
  },
  {
    title: "About",
    url: "/#about",
    icon: <BsPerson />,
    tooltip: "About",
  },
  {
    title: "Work History",
    url: "/#work-history",
    icon: <FaBriefcase />,
    tooltip: "Work History",
  },
  {
    title: "Portfolio",
    url: "/#portfolio",
    icon: <BsColumnsGap />,
    tooltip: "Projects",
  },
  {
    title: "Blog",
    url: "/#blog",
    icon: <FaBlog />,
    tooltip: "Featured Blogs",
  },
  {
    title: "Contact",
    url: "/#contact",
    icon: <IoIosMail />,
    tooltip: "Message Me",
  },
] as NavigationItem[];
