import React from 'react';
import Vector from '/src/assets/information.png';
import ArrowUp from '/src/assets/arrow-up-right.png';
import ArrowDown from '/src/assets/Vector (1).png'; // Down arrow image

const SummaryCard = ({ title, value, percentage, isPositive, darkMode }) => {
  // Define styles based on dark mode
  const cardStyles = darkMode 
    ? 'bg-[#36324A] border-gray-700' 
    : 'bg-white border-gray-200';

  const titleColor = darkMode ? 'text-[#ADA9BB]' : 'text-[#64748B]';
  const valueColor = darkMode ? 'text-[#FCF7FF]' : 'text-[#334155]';
  const percentageColor = isPositive ? 'text-[#5EEAD4]' : 'text-[#EF4444]';
  const arrowIcon = isPositive ? ArrowUp : ArrowDown;
  const arrowAltText = isPositive ? 'Arrow Up' : 'Arrow Down';
  
  return (
    <div
      className={`w-[335px] h-[88px] gap-4 rounded-tl-[2px] border-t shadow sm:w-[260px] p-4 sm:flex sm:flex-col rounded-lg
        ${cardStyles} transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus-visible:scale-105 focus-visible:shadow-lg`}
    >
      {/* Title Section */}
      <div className="flex gap-2 items-center">
        <p className={`font-inter text-base font-semibold leading-6 text-left ${titleColor}`}>
          {title}
        </p>
        <img src={Vector} alt="Information Icon" className="h-5 w-5 pt-1" />
      </div>

      {/* Value and Percentage Section */}
      <div className="flex gap-4 items-center">
        {/* Value */}
        <h2 className={`text-[20px] font-bold ${valueColor}`}>
          {value}
        </h2>

        {/* Percentage and Arrow */}
        <div className="flex items-center gap-1">
          <img src={arrowIcon} alt={arrowAltText} className={`h-${isPositive ? '4' : '2'} w-${isPositive ? '4' : '3'} pt-1`} />
          <p className={`text-sm mt-1 ${percentageColor}`}>
            {isPositive ? '+' : '-'}{percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
