import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, 
  MagnifyingGlassIcon, ArrowUpCircleIcon, CurrencyDollarIcon, WalletIcon, Cog8ToothIcon, MegaphoneIcon, RocketLaunchIcon, GlobeAmericasIcon } from '@heroicons/react/16/solid';

  
const FAQSection = () => {
  // State for managing which sections are open
  const [openSections, setOpenSections] = useState({
    shipping: false,
    returns: false,
    exchange: false,
    tracking: false
  });

  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // FAQ data with sections
  const faqData = [
    {
      id: 'shipping',
      title: 'Why we do what we do?',
      content: 'We aim to empower businesses to leverage data for smarter, faster, and more effective decision-making. We believe in the transformative power of data to drive growth and innovation. Companies often collect vast amounts of data but lack the expertise to use it effectively. We aim to bridge this gap.'
    },
    {
      id: 'returns',
      title: 'Who is this for?',
      content: 'This service is designed for businesses and organizations looking to: \nMake data-driven decisions.\nGain competitive advantages by uncovering insights from their data.\n'
    },
    {
      id: 'exchange',
      title: 'What makes us different?',
      content: 'We tailor our solutions to meet the unique needs of each client. Our team has expertise in advanced analytics, machine learning, and industry-specific challenges.'
    },
    {
      id: 'tracking',
      title: 'What we do with customer user data',
      content: 'We gather and clean data provided by clients to ensure its quality and usability. We apply advanced techniques like statistical analysis, machine learning, and AI to derive insights.'
    }
  ];

  // Toggle section open/close
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(faq => 
    faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <h2 className="font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
        Frequently Asked Questions
      </h2>
      
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div>
          <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12">
            Here are few of the most frequently asked questions by our valuable customers
          </p>
        </div>
        
        <div className="border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full">
          <input 
            placeholder="Search" 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search" 
            className="dark:bg-transparent dark:text-gray-400 dark:placeholder-gray-400 lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4" 
          />
          <MagnifyingGlassIcon className="cursor-pointer text-gray-600 dark:text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className="md:w-5/12 lg:w-4/12 w-full">
          <img 
            src="/api/placeholder/500/600" 
            alt="FAQ Illustration" 
            className="w-full md:block hidden" 
          />
          <img 
            src="/api/placeholder/500/600" 
            alt="FAQ Illustration" 
            className="w-full md:hidden block" 
          />
        </div>
        
        <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {filteredFAQs.map((faq, index) => (
            <React.Fragment key={faq.id}>
              <div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">
                    {faq.title}
                  </h3>
                  <button 
                    aria-label="Toggle FAQ" 
                    className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    onClick={() => toggleSection(faq.id)}
                  >
                    {openSections[faq.id] ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {openSections[faq.id] && (
                  <p className="font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12">
                    {faq.content}
                  </p>
                )}
              </div>
              
              {index < filteredFAQs.length - 1 && (
                <hr className="my-7 bg-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};


const AboutDetails = () => {
  // Array of about details with icons and content
  const [activeSection, setActiveSection] = useState(null);

  const aboutSections = [
    { 
      icon: CurrencyDollarIcon, 
      title: "Our Vision", 
      description: "Our vision is to be the indispensable partner for businesses seeking data-driven transformation.",
      achievement: "We are now partners with over 1500 companys world wide, and we look forward to partnering with you"
    },
    { 
        icon: ArrowUpCircleIcon, 
        title: "Our Mission", 
        description: "Our mission is to empower businesses with data-driven insights. We believe that every organization, regardless of size or industry, deserves to leverage the power of data to achieve its full potential. Our vision is to be the leading provider of data-driven solutions, helping businesses thrive in an increasingly data-driven world.    ",
      achievement: "We've been able to reduce over 83% of companies (partners) risks by 79%"
    },
    // You can add more sections here if needed
  ];

  return (
    <section className="py-16 bg-black p-4">
      <div className="container mx-auto px-4 max-w-4xl">
        {aboutSections.map((section, index) => (
          <div 
            key={index}
            className={`
              group 
              transition-all 
              duration-300 
              hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] 
              rounded-lg 
              mb-8 
              ${activeSection === index ? 'ring-2 ring-green-500' : ''}
            `}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="flex items-center mb-8">
              <section.icon 
                className={`
                  w-12 h-12 
                  ${activeSection === index ? 'text-green-500' : 'text-green-600'}
                  mr-4 
                  transition-all 
                  duration-300 
                  group-hover:scale-110
                `} 
              />
              <h2 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-blue-300 uppercase text-center">
                {section.title}
              </h2>
            </div>
            
            <div className="bg-gray-900 shadow-lg rounded-lg p-8">
              <p className="text-lg text-white leading-relaxed">
                {section.description}
              </p>
              
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-50 italic">
                  {section.achievement}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const AboutSummary = () => {
  return (
    <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-black">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-white">What We Do</h2>
          <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px" 
            viewBox="0 0 100 60" 
            className="mx-auto h-[35px]"
          >
            <circle 
              cx="50.1" 
              cy="30.4" 
              r="5" 
              className="stroke-green-500 fill-transparent stroke-2"
            />
            <line 
              x1="55.1" 
              y1="30.4" 
              x2="100" 
              y2="30.4" 
              className="stroke-green-500 stroke-2"
            />
            <line 
              x1="45.1" 
              y1="30.4" 
              x2="0" 
              y2="30.4" 
              className="stroke-green-500 stroke-2"
            />
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising & Content for your business.
          </p>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {[
            { 
              icon: CurrencyDollarIcon,
              title: "Data Monetisation",
              description: "Turn your customers data into revenue generating asset so other organisations can benefit"
            },
            { 
              icon: (GlobeAmericasIcon),
              title: "Social Content",
              description: "This is a wider card with supporting text below as a natural content."
            },
            { 
              icon: MegaphoneIcon,
              title: "Creative ads",
              description: "This is a wider card with supporting text below as a natural content."
            },
            { 
              icon: RocketLaunchIcon,
              title: "Brand Identity",
              description: "Making your brand stand out with our cuttin edge tool."
            },
            { 
              icon: WalletIcon,
              title: "Budget & Marketing",
              description: "Our plans are affordable and tailored to suit any kind of business model"
            },
            { 
              icon: Cog8ToothIcon,
              title: "Optimize production",
              description: "We provide you with data and predictive analysis to make production more efficient"
            }
          ].map((service, index) => (
            <div 
              key={service.title} 
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
            >
              <div className="py-8 px-12 mb-12 bg-gray-900 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-green-200 rounded">
                <service.icon className="text-green-700 mb-4 w-12 h-12" />
                <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};






const About = () => {
  return (
    <>
        <h1 className='text-4xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase 
    text-center'>About Us</h1>
    <AboutDetails />
    <AboutSummary />
    <FAQSection />
    </>
  )
}

export default About