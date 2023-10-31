import { HOSTING_FEATURES } from "@/constants";


const HostingPackages = () => {
    return (
      <>
       
          {HOSTING_FEATURES.map((feature) => (
            <div key={feature.hostingPackage}>
              <HostingPackage
                hostingPackage={feature.hostingPackage}
                description={feature.description}
                price={feature.price}
                features={feature.features}
              />
            </div>
          ))}
        
      </>
    );
  };
  

type HostingProps = {
  
  hostingPackage: string;
  description: string;
  price?: string;
  features: string[];
};

const HostingPackage = ({ hostingPackage, description, price, features}: HostingProps) => {
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-50 rounded-lg  shadow  xl:p-8 bg-gray-800">
      <h3 className="mb-4 bold-32 font-semibold capitalize">{hostingPackage}</h3>
      <p className="font-light text-gray-50 regular-20">{description}</p>
      <div className="flex justify-center items-baseline my-8">
      {price && <span className="mr-2 text-5xl font-extrabold">{price}</span>}
      {price && <span className="text-gray-50">/year</span>}
      </div>
      <ul className="mb-8 space-y-4 text-left">
        {features.map((item) => (
          <li className="flex items-center space-x-3" key={item}>
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HostingPackages;
