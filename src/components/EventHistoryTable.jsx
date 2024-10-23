import React, { useState } from 'react';
import FiltersSection from './FiltersSection';
import EventPagination from './EventPagnation';
import Modal from './Modal';
import SortIcon from '/src/assets/sort-down.png';

// Dummy event data
const eventData = [
  { eventName: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
  { eventName: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'Completed' },
  { eventName: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'In Progress' },
  { eventName: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
  { eventName: 'Data Analytics in Business', date: '2024-11-10', speaker: 'Emily White', status: 'Completed' },
  { eventName: 'Sustainable Energy Expo', date: '2024-11-20', speaker: 'Michael Green', status: 'Completed' },
  { eventName: 'Web3 Interfaces Workshop', date: '2024-12-05', speaker: 'David Brown', status: 'Completed' },
  { eventName: 'Cybersecurity for Startups', date: '2024-12-15', speaker: 'Sophia Black', status: 'Completed' },
  { eventName: 'Smart Cities Forum', date: '2024-12-22', speaker: 'Mark Silver', status: 'Completed' },
  { eventName: 'Tech Safari Mixer', date: '2024-12-30', speaker: 'Olivia Johnson', status: 'Completed' },
];

// Status colors for web
const statusColors = {
  Completed: {
    bg: 'bg-[#D1FAE5] text-[#64748B]',
    circle: 'bg-green-600',
  },
  'In Progress': {
    bg: 'bg-[#DBEAFE] text-[#3B82F6]',
    circle: 'bg-blue-600',
  },
};

// Mobile version colors
const mobileStatusColors = {
  Completed: {
    bg: 'bg-[#10B981] text-white font-inter text-sm leading-5 text-left text-[#334155]',
    circle: 'bg-green-600',
  },
  'In Progress': {
    bg: 'bg-[#3B82F6] text-white font-inter text-sm font-normal leading-5 text-left text-[#334155]',
    circle: 'bg-blue-600',
  },
};

const EventHistoryTable = ({ darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Pagination settings
  const rowsPerPage = 10;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = eventData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(eventData.length / rowsPerPage);

  // Toggle function for expanded event
  const toggleExpand = (eventName) => {
    setExpandedEvent(expandedEvent === eventName ? null : eventName);
  };

  // Function to open modal
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div className={`w-full mt-6 px-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-[17px] sm:text-[18px] font-medium">Events History</h2>

      {/* Filters Section */}
      <FiltersSection darkMode={darkMode} />

      {/* Web Version */}
      <div className="hidden sm:block">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-[#F1F5F9] text-[#64748B]'}`}>
                {['Event Name', 'Date', 'Speaker', 'Status'].map((header) => (
                  <th key={header} className="py-4 px-4 border-b text-left font-inter text-[12px] font-semibold leading-[16px]">
                    <div className="flex justify-start items-center group">
                      <span>{header}</span>
                      <img 
                        className="ml-2 w-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        src={SortIcon} 
                        alt="sort icon" 
                      />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentRows.map((event, index) => (
                <tr
                  key={index}
                  className={`cursor-pointer ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                  onClick={() => openModal(event)}
                >
                  <td className="w-[269px] h-[48px] px-4 gap-2 font-inter text-sm font-normal leading-5 text-left">{event.eventName}</td>
                  <td className="w-[269px] h-[48px] px-4 gap-2 font-inter text-sm font-normal leading-5 text-left">{event.date}</td>
                  <td className="w-[269px] h-[48px] px-4 gap-2 font-inter text-sm font-normal leading-5 text-left">{event.speaker}</td>
                  <td className="w-[99px] h-[24px] p-1 px-2 gap-1">
                    <span className={`py-1 px-2 rounded-full font-inter text-xs font-normal leading-4 inline-flex items-center gap-2 ${statusColors[event.status].bg}`}>
                      <span className={`w-[6px] h-[6px] rounded-full ${statusColors[event.status].circle}`}></span>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden">
        {/* Header Row */}
        <div className={`flex w-[324px] h-[48px] ${darkMode ? 'bg-gray-700' : 'bg-[#F1F5F9]'} px-4 py-2 gap-[120px]`}>
          <h1 className="font-inter text-[12px] font-semibold leading-[16px] text-left w-[70px]">Event Name</h1>
          <h1 className="font-inter text-[12px] font-semibold leading-[16px] text-left w-[70px]">Status</h1>
        </div>

        {/* Event Rows */}
        {currentRows.map((event, index) => (
          <div
            key={index}
            className={`w-[324px] ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} mb-2 rounded-lg shadow-sm`}
          >
            {/* Main Row with Expandable Arrow */}
            <div
              className="flex items-center px-4 py-3 cursor-pointer"
              onClick={() => toggleExpand(event.eventName)}
            >
              <h3 className="text-[12px] font-semibold w-[200px]">
                <span className="text-[14px] pr-3">{expandedEvent === event.eventName ? 'v' : '>'}</span>
                {event.eventName}
              </h3>

              <span className={`ml-auto py-1 px-2 rounded-full text-xs ${mobileStatusColors[event.status].bg}`}>
                {event.status}
              </span>
            </div>

            {/* Dropdown Content */}
            {expandedEvent === event.eventName && (
              <div className={`flex justify-between mt-2 px-6 py-2 text-[12px] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className={`w-[40%] h-[20px] leading-[20px] ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Date: {event.date}
                </p>
                <p className={`w-[40%] h-[20px] leading-[20px]`}>
                  Speaker: {event.speaker}
                </p>
              </div>
            )}
          </div>
        ))}

      </div>

      {/* Pagination */}
      <EventPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        darkMode={darkMode}
      />

      {/* Modal */}
      {isModalOpen && selectedEvent && (
        <Modal
          event={selectedEvent}
          closeModal={() => setIsModalOpen(false)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default EventHistoryTable;
