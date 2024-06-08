
import { AnimatedCard } from "./ui/animated-card";

interface Project {
  _id: string;
  image: {
    asset: { _ref: string; _type: "reference" };
  };
  name: string;
  website: string;
}

const Projects = ({ projects, title }: { projects: Project[], title:string }) => {
  const firstWord = title.includes('recent') ? 'Our Recent' : '';
  
  return (
    <section className="max-container padding-container font-sans">
       <h2 className="bold-40 lg:bold-60 mt-8 text-gray-50 text-center my-5 md:my-10">
              {firstWord.length > 0 ? firstWord : 'Our'} <span className="text-green-50"> {title.split(' ')[1]}</span>
            </h2>
     
          
           
         
          <ul className="flex justify-center items-center flex-wrap">
            {projects.map((project) => (
              
              <AnimatedCard project={project} key={project._id} />
              
            ))}
       </ul>
    </section>
  );
};

export default Projects;

