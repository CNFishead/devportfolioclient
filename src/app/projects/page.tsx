// app/projects/page.tsx
import Projects from "@/views/projects/Projects.view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Austin's Portfolio",
  description: "Explore all of Austin's development projects, case studies, and open-source contributions.",
  openGraph: {
    title: "Projects | Austin's Portfolio",
    description: "Explore all of Austin's development projects, case studies, and open-source contributions.",
    type: "website",
    url: "https://austinhoward.dev/projects",
    images: [
      {
        url: "/opengraph-projects.png",
        width: 1200,
        height: 630,
        alt: "Austin's Portfolio Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <Projects />; // The actual component will be in a client-side view (like `Projects.view.tsx`)
}
