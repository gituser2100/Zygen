import React, { useState } from 'react';
// import { 
//   TrendingUp, 
// //   Users, 
//   Package, 
//   ShoppingCart, 
//   DollarSign 
// } from '@heroicons/react';

import { ArrowUpIcon, ShoppingCartIcon, CurrencyDollarIcon, StarIcon, UsersIcon } from '@heroicons/react/16/solid';

const MetricCard = ({ icon: Icon, value, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        w-full p-4 rounded-lg bg-white border-l-4 transition-all duration-300 
        hover:shadow-lg hover:scale-105 cursor-pointer
        ${color} 
        ${isHovered ? 'translate-y-[-5px]' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => alert(`More details about ${label}`)}
      >
      <div className="flex items-center">
        <div 
          className={`
            icon w-14 p-3.5 ${color.replace('border-', 'bg-')} 
            text-white rounded-full mr-3 transition-transform 
            ${isHovered ? 'rotate-12' : ''}
          `}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-lg font-bold">{value}</div>
          <div className="text-sm text-black font-semibold">{label}</div>
        </div>
      </div>
      {isHovered && (
        <div className="mt-2 text-xs text-gray-500 opacity-0 animate-fade-in">
          Click for more details
        </div>
      )}
    </div>
  );
};

const CompanyStats = () => {
  const metrics = [
    {
      icon: ArrowUpIcon,
      value: '230k',
      label: 'Sales',
      color: 'border-green-600'
    },
    {
      icon: UsersIcon,
      value: '11,192,210+',
      label: 'User Data Proccessed',
      color: 'border-green-600'
    },
    {
      icon: StarIcon,
      value: '3,456',
      label: 'Products',
      color: 'border-green-600'
    },
    {
      icon: ShoppingCartIcon,
      value: '12,658',
      label: 'Orders',
      color: 'border-green-600'
    },
    {
      icon: CurrencyDollarIcon,
      value: '$102,948,560',
      label: 'Revenue',
      color: 'border-green-600'
    }
  ];

  return (
    <>
        <h2 class="text-4xl mt-2 font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br to-green-500 from-40% via-gray-500 via-10% from-gray-300 uppercase 
    text-center"> 
    Company Statistics
</h2>
    <div className="min-w-screen min-h-1/2 bg-black flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard 
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              color={metric.color}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CompanyStats