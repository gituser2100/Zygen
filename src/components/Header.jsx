import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    {tabName: 'Home', tabLink: '/'}, 
    {tabName: 'About', tabLink: '/about'}, 
    {tabName: 'Contact Us', tabLink: '/contact_us'}, 
    {tabName: 'Blog', tabLink: '/blog'}, 
    {tabName: 'Team', tabLink: '#'}, 
  ];

  useEffect(() => {
    // Update active tab based on current location
    const currentTab = tabs.find(tab => tab.tabLink === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.tabName);
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getTabClasses = (tabName) => {
    const baseClasses = 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 text-xs leading-3 shadow-md rounded font-semibold border border-white';
    return activeTab === tabName 
      ? `${baseClasses} bg-green-600 text-white` 
      : `${baseClasses} bg-gray-50 text-green-700`;
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-gray-700 rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          {/* Logo Section */}
          <Link to={'/'}>
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <svg className="cursor-pointer" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z" fill="green"/>
              </svg>
              <h2 className="font-normal text-2xl leading-6 text-white">Zygen</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-auto space-x-2 justify-end">
            {tabs.map((tab) => (
              <Link key={tab.tabName} to={tab.tabLink}>
                <li
                  className={getTabClasses(tab.tabName)}
                >
                  {tab.tabName}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="block md:hidden w-full mt-5 z-50 mb-10">
          <div 
            onClick={toggleMobileMenu} 
            className="cursor-pointer px-4 py-3 text-white bg-green-600 rounded flex justify-between items-center w-full"
          >
            <svg 
              className={`transform ${isMenuOpen ? 'rotate-180' : ''}`} 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {isMenuOpen && (
            <div className="relative mb-10">
              <ul className="font-normal text-base leading-4 absolute top-2 w-full rounded shadow-md">
                {tabs.map((tab) => (
                  <Link key={tab.tabName} to={tab.tabLink}>
                    <li
                      className={`px-4 py-3 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal ${
                        activeTab === tab.tabName 
                          ? 'bg-green-600 text-white' 
                          : 'text-gray-600 bg-gray-50'
                      }`}
                    >
                      {tab.tabName}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;