import { ReactElement } from "react";
import { BsColumnsGap, BsPerson } from "react-icons/bs";
import { FaBlog, FaBriefcase, FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export interface NavigationItem {
  title: string;
  url: string;
  icon: ReactElement;
  tooltip: string;
  anchorId: string;
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
    anchorId: 'introduction'
  },
  {
    title: "About",
    url: "/#about",
    icon: <BsPerson />,
    tooltip: "About",
    anchorId: 'aboutme'
  },
  {
    title: "Work History",
    url: "/#work-history",
    icon: <FaBriefcase />,
    tooltip: "Work History",
    anchorId: 'work-history'
  },
  {
    title: "Portfolio",
    url: "/#portfolio",
    icon: <BsColumnsGap />,
    tooltip: "Projects",
    anchorId: 'portfolio'
  },
  {
    title: "Blog",
    url: "/#blog",
    icon: <FaBlog />,
    tooltip: "Featured Blogs",
    anchorId: 'blog'
  },
  {
    title: "Connect",
    url: "/#cta",
    icon: <IoIosMail />,
    tooltip: "Lets Connect",
    anchorId: 'cta'
  },
] as NavigationItem[];
