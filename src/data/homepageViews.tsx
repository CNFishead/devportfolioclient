import Introduction from "@/views/home/introduction/Introduction.component";
import { FaBlog, FaHome } from "react-icons/fa";
import styles from "../views/home/Home.module.scss";
import { BsBriefcase, BsColumnsGap, BsPerson } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { ReactElement } from "react";
import AboutMe from "@/views/home/aboutMe/AboutMe.component";
import WorkHistory from "@/views/home/workHistory/WorkHistory.view";
import Portfolio from "@/views/home/portfolio/Porfolio.view";
import Blog from "@/views/home/blog/Blog.view";

export interface Views {
  _id: number;
  title: string;
  description: string;
  link: string;
  component?: ReactElement;
  icon: ReactElement;
  tooltip: string;
}

/**
 * @description: Holds the json data for the views that go on the homepage
 *
 */
export default [
  {
    _id: 1,
    title: "Introduction",
    description: "A brief introduction of the developer",
    link: "introduction",
    icon: <FaHome className={styles.icon} />,
    component: <Introduction />,
    tooltip: "Introduction",
  },
  {
    _id: 2,
    title: "About Me",
    description: "A brief description of the developer",
    link: "aboutme",
    icon: <BsPerson className={styles.icon} />,
    component: <AboutMe />,
    tooltip: "About",
  },
  {
    _id: 3,
    title: "Work History",
    description: "Developer work history",
    link: "work-history",
    icon: <BsBriefcase className={styles.icon} />,
    component: <WorkHistory />,
    tooltip: "About",
  },
  {
    _id: 4,
    title: "Portfolio",
    description: "Developer portfolio",
    link: "portfolio",
    icon: <BsColumnsGap className={styles.icon} />,
    component: <Portfolio />,
    tooltip: "About",
  },
  {
    _id: 5,
    title: "Blog Posts",
    description: "Blog posts that are featured on the homepage",
    link: "blog",
    icon: <FaBlog className={styles.icon} />,
    component: <Blog />,
    tooltip: "Blog",
  },
  {
    _id: 6,
    title: "Contact Me",
    description: "Contact the developer",
    link: "contact",
    icon: <IoIosMail className={styles.icon} />,
    // component: <ContactForm />,
    tooltip: "Contact",
  },
] as Views[];
