import { client } from "@/sanity/lib/client";
import Projects from "@/components/Projects";

export const revalidate = 3600 // revalidate the data at most every hour
 

export default async function Portfolio() {

  const projects = await getProjects();

  return (
    <div className="max-container  my-20">
      <Projects projects={projects} />
    </div>
  );
}

const getProjects = async () => {
  const query = '*[_type == "projects"]';
  const projects = await client.fetch(query);
  return projects;
};
