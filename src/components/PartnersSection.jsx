
import React from 'react';
import { BuildingLibraryIcon, GlobeAmericasIcon, RocketLaunchIcon, BriefcaseIcon, ArchiveBoxArrowDownIcon, ShieldExclamationIcon } from '@heroicons/react/16/solid';

const PartnersSection = () => {
  // Array of partner icons with optional hover text
  const partners = [
    { icon: BuildingLibraryIcon, name: "Tech Innovations Inc." },
    { icon: GlobeAmericasIcon, name: "Global Solutions" },
    { icon: RocketLaunchIcon, name: "Startup Accelerator" },
    { icon: BriefcaseIcon, name: "Business Dynamics" },
    { icon: ArchiveBoxArrowDownIcon, name: "Strategic Partners" },
    { icon: ShieldExclamationIcon, name: "Enterprise Group" }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase 
    text-center">
            Our Trusted Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver innovative solutions 
            and drive meaningful progress.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center items-center group"
              title={partner.name}
            >
              <partner.icon 
                className="text-gray-600 
                           w-16 h-16 
                           transition-all 
                           duration-300 
                           group-hover:text-green-500 
                           group-hover:pointer-events-auto
                           group-hover:scale-110
                           group-hover:cursor-pointer
                           "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;