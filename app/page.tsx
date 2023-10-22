import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import { client } from "@/sanity/lib/client";
import Projects from "@/components/Projects";
import HireUs from "@/components/HireUs";

export default async function Home() {

  const projects = await getProjects();
  
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Projects projects={projects} />
      <HireUs />
    </main>
  );
}

const getProjects = async () => {
  const query = '*[_type == "projects"]';
  const projects = await client.fetch(query);
  return projects;
};
