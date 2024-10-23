import React, { useState } from "react";

const EventPagination = ({ darkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Total number of pages

  // Handle page click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Navigate to the previous page
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Navigate to the next page
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={`flex w-[375px] sm:flex-col md:flex-row items-center justify-between gap-4 sm:w-full sm:max-w-[1076px] h-auto mt-3 px-4 md:px-0 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      {/* Pagination Controls */}
      <div className="flex items-center ml-[-18px] gap-2 w-[208px] sm:w-full sm:justify-start">
        {/* Previous button */}
        <button
          onClick={handlePrevClick}
          className={`w-9 h-9 flex justify-center items-center rounded-l-[2px] ${currentPage === 1 ? "text-gray-500" : "bg-gray-300 text-gray-700"}`}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={`px-3 py-1 rounded-full text-[14px] ${currentPage === index + 1 ? "bg-purple-500 text-white" : darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-500 hover:bg-gray-100"}`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={handleNextClick}
          className={`w-9 h-9 flex justify-center items-center rounded-r-[2px] ${currentPage === totalPages ? "text-gray-500" : "bg-gray-300 text-gray-700"}`}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L11.586 10l-4.293 4.293a1 1 0 000 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Rows per page dropdown */}
      <div className={`flex items-center space-x-2 w-full justify-center md:justify-end mt-2 md:mt-0 ${darkMode ? 'text-gray-300' : 'text-[#334155]'}`}>
        <span className="hidden sm:inline text-[14px]">Show:</span>
        <select className={`w-24 h-9 border border-gray-200 text-[14px] rounded-md ${darkMode ? 'bg-gray-700 text-gray-300' : 'text-[#334155]'}`}>
          <option>10 rows</option>
          <option>20 rows</option>
          <option>30 rows</option>
        </select>
      </div>
    </div>
  );
};

export default EventPagination;
