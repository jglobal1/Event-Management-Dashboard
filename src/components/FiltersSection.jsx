import React from 'react';
import { FiDownload, FiMoreHorizontal, FiSearch, FiChevronDown } from 'react-icons/fi';

const FiltersSection = ({ darkMode }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-start py-4 ${darkMode ? 'text-white' : 'text-[#334155]'}`}>
      {/* Left Side: Search and Filters */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 w-full md:w-auto">
        {/* Search Input with Icon */}
        <div className="relative w-[335px] gap-0 sm:w-full md:w-[200px] mb-2 md:mb-0">
          <FiSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-300' : 'text-gray-400'}`} size={20} />
          <input
            type="text"
            placeholder="Search..."
            className={`w-[330px] text-[14px] border border-gray-300 pl-10 pr-3 py-2 sm:w-full focus:outline-none focus:ring-2 focus:ring-gray-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          />
        </div>

        {/* Dropdown Filters */}
        {['Date', 'Status', 'Name'].map((filter, index) => (
          <span
            key={index}
            className={`border w-[330px] pl-[130px] sm:pl-3 mb-2 sm:w-[88px] flex items-center sm:text-center h-[36px] border-gray-300 px-3 cursor-default ${darkMode ? 'text-white' : 'text-[#334155]'}`}
          >
            {filter} <FiChevronDown className="ml-1" />
          </span>
        ))}

        {/* Displaying Results */}
        <div className={`flex items-center mb-2 sm:mb-1 font-inter text-[14px] font-semibold leading-[20px] text-left md:ml-2 ${darkMode ? 'text-white' : 'text-[#334155]'}`}>
          Displaying 100 results
        </div>
      </div>

      {/* Right Side: Sorting and Export Options */}
      <div className={`flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 gap-2 font-inter text-[14px] font-normal leading-[20px] w-full md:w-auto md:ml-2 ${darkMode ? 'text-white' : 'text-[#334155]'}`}>
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2 text-gray-600">
          <span className={`mr-[157px] sm:mr-1 ${darkMode ? 'text-white' : 'text-gray-600'}`}>Sort:</span>
          <select className={`border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <option>Most Recent</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 gap-[190px] sm:gap-1">
          <button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center">
            <FiMoreHorizontal size={20} />
          </button>

          <button className="p-2 border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center">
            <FiDownload size={20} />
            <span className="ml-2">Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
