import React from 'react';
import SummaryCard from './SummaryCard';
import EventChart from './EventChart';
import BottomNavigation from './BottomNagivation'; // Corrected typo in import

const SummaryDashboard = ({ darkMode }) => {
  const data = [
    { title: "Total Events", value: "100,000", percentage: "5.0", isPositive: true },
    { title: "Active Speakers", value: "25", percentage: "-5.0", isPositive: false },
    { title: "Total Registrations", value: "300", percentage: "5.0", isPositive: true },
    { title: "Total Revenue", value: "$500,000", percentage: "5.0", isPositive: true },
  ];

  return (
    <div className={`md:p-12 min-h-screen md:pl-[268px] ${darkMode ? 'bg-[#484554]' : 'bg-gray-50'}`}>
      {/* Dashboard Header */}
      <h1 className={`mt-9 sm:mt-[-75px] ml-6 sm:ml-0 h-[20px] gap-0 font-inter text-[17px] mb-2 font-normal leading-[20px] text-left sm:text-[22px] sm:w-[400px] sm:font-semibold sm:mb-6 ${darkMode ? 'text-[#FCF7FF]' : 'text-gray-900'}`}>
        Welcome! Here's your summary
      </h1>

      {/* Summary Cards Grid */}
      <div className="ml-6 sm:ml-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            isPositive={item.isPositive}
            darkMode={darkMode}  
          />
        ))}
      </div>

      {/* Event Chart Section */}
      <div className={`ml-4 sm:p-1 rounded-lg shadow-md ${darkMode ? 'bg-[#6A6676]' : 'bg-white'}`}>
        <EventChart darkMode={darkMode} /> {/* Pass darkMode to EventChart if needed */}
      </div>

      {/* Bottom Navigation */}
      <div>
        <BottomNavigation darkMode={darkMode} /> {/* Pass darkMode to BottomNavigation if needed */}
      </div>
    </div>
  );
};

export default SummaryDashboard;
