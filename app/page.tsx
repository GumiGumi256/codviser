import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Projects from "@/components/Projects";
import Button from "@/components/Button";
import HireUs from "@/components/HireUs";

export default async function Home() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <main className="">
      <Hero />
      <Services />
      <AboutUs />
      <Projects projects={projects} />
      <HireUs />
    </main>
  );
}

export const getProjects = async () => {
  const query = '*[_type == "projects"]';
  const projects = await client.fetch(query);
  return projects;
};
