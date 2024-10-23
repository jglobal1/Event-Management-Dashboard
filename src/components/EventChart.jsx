import React from 'react';
import BarChart from './BarChart';
import CarouselSection from './CarouselSection';
import EventHistoryTable from './EventHistoryTable';

const EventChart = ({ darkMode }) => {
  return (
    <div className={`sm:p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <h1
        className={`w-[270px] h-[12px] gap-0 font-inter text-[17px] leading-[12px] py-4 sm:py-0 sm:w-[271px] sm:h-[12px] 
          sm:text-[18px] font-bold mb-4 text-left`}
      >
        Events Registration per Month
      </h1>

      {/* Bar Chart & Carousel Section */}
      <div className="flex flex-col pl-2  lg:flex-row gap-6">
        {/* Bar Chart */}
        <div
          className={`w-[331px] h-[310px] p-[10px_8px_10px_0px] sm:ml-3 sm:mt-1 mb-3 sm:mb-3  border border-gray-100 gap-[8px] 
            border-t   sm:p-6   sm:w-full lg:w-1/2 sm:h-[320px]
            ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}
        >
          <BarChart />
        </div>

        {/* Carousel Section without darkMode styles */}
        <div className="pt-0 pr-5 pb-0 ml-2 gap-2.5 sm:w-full lg:w-1/2 sm:h-[320px]">
          <CarouselSection />
        </div>
      </div>

      {/* Event History Table */}
      <div className="w-full">
      <EventHistoryTable darkMode= {darkMode} />
      </div>
    </div>
  );
};

export default EventChart;
