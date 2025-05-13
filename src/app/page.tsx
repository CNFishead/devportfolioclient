import Home from "@/views/home/Home.view";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Austin | Full-Stack Software Engineer & Cloud Developer",
    description:
      "Portfolio of Austin, a full-stack developer with experience in JavaScript, C#, cloud infrastructure, and scalable software systems.",
    keywords: [
      "Austin",
      "Full-Stack Developer",
      "Software Engineer",
      "Next.js",
      "JavaScript",
      "C#",
      "Cloud Development",
      "Web Developer",
      "DevOps",
      "Portfolio",
    ],
    authors: [{ name: "Austin", url: "https://austinhoward.dev" }],
    creator: "Austin",
    metadataBase: new URL("https://austinhoward.dev"),
    openGraph: {
      title: "Austin | Software Engineer Portfolio",
      description:
        "Explore Austin's work as a full-stack software engineer. Featuring projects in modern web development, back-end services, and cloud infrastructure.",
      url: "https://austinhoward.dev",
      siteName: "Austin Howard Dev Portfolio",
      images: [
        {
          url: "/opengraph-image.png", // Optional, recommended
          width: 1200,
          height: 630,
          alt: "Austin's Developer Portfolio Preview",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Austin | Software Engineer Portfolio",
      description:
        "Check out Austin's portfolio for insights into modern full-stack development, scalable backend systems, and clean front-end architecture.",

      images: ["/opengraph-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
