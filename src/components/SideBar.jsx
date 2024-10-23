import React, { useState } from "react";
import {
  FiHome,
  FiCalendar,
  FiFileText,
  FiBell,
  FiMessageSquare,
  FiSettings,
  FiChevronsRight,
  FiChevronsLeft,
  FiUser,
  FiMenu,
  FiX, // Import the close icon
} from "react-icons/fi";
import { MdRecordVoiceOver } from "react-icons/md";
import vector7 from '/src/assets/Vector (7).png';

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  // State for sidebar collapse and visibility
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Control sidebar visibility on mobile

  // Toggle functions for sidebar
  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  const toggleMobileSidebar = () => setIsSidebarVisible((prev) => !prev); // Toggle sidebar on mobile

  // Menu items data
  const menuItems = [
    { name: "Home", icon: <FiHome />, isHome: true },
    { name: "Events", icon: <FiCalendar /> },
    { name: "Speakers", icon: <MdRecordVoiceOver /> },
    { name: "Reports", icon: <FiFileText /> },
    { name: "Notifications", icon: <FiBell />, notificationCount: 3 },
    { name: "Messages", icon: <FiMessageSquare /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div>
      {/* Top bar with Full Logo and Menu Icon */}
      <div className="flex items-center gap-[260px] sm:justify-between p-2 border-b sm:p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-blue-500">Full Logo</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button 
          className="block sm:hidden" // Only show this on mobile screens
          onClick={toggleMobileSidebar}
        >
          <img className="w-4 h-4" src={vector7} alt="icon" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 sm:pl-2 pl-2 h-full shadow-md z-50 transition-all duration-300 
        ${isCollapsed ? "w-20" : "w-[359px] sm:w-[240px]"} 
        ${isSidebarVisible ? "block" : "hidden"} sm:block 
        ${darkMode ? "bg-[#484554] text-[#FCF7FF]" : "bg-white text-gray-900"}`}
      >
        {/* Logo Section with Close Icon for Mobile */}
        <div className={`flex items-center border-b p-4 relative ${isCollapsed ? "justify-center" : "justify-start"}`}>
          {isCollapsed ? (
            <div className="bg-blue-500 w-12 h-5" />
          ) : (
            <span className="font-bold text-blue-500">Full Logo</span>
          )}

          {/* Close Icon for Mobile */}
          <button 
            className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full 
            bg-gray-300 hover:bg-gray-400 sm:hidden" 
            onClick={toggleMobileSidebar}
          >
            <FiX className="text-gray-600 w-3 h-3" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-2 hover:bg-gray-100 ${darkMode ? "hover:bg-gray-800" : ""} 
              ${isCollapsed ? "justify-center" : "justify-start"} 
              ${item.isHome && darkMode ? 'bg-[#8576FF] text-[#FCF7FF]' : ''}`}
            >
              <div className="w-6 h-6">{item.icon}</div>
              {!isCollapsed && (
                <>
                  <span className="ml-4">{item.name}</span>
                  {item.notificationCount && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2">
                      {item.notificationCount}
                    </span>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Collapse Button */}
          <div 
            className={`flex items-center p-2 cursor-pointer hover:bg-gray-100 ${darkMode ? "hover:bg-gray-800" : ""} 
            ${isCollapsed ? "justify-center" : "justify-start"}`} 
            onClick={toggleSidebar}
          >
            <div className="w-6 h-6">
              {isCollapsed ? <FiChevronsRight /> : <FiChevronsLeft />}
            </div>
            {!isCollapsed && <span className="ml-4">Collapse</span>}
          </div>

          {/* Dark Mode Toggle */}
          <div className={`flex items-center p-2 cursor-pointer ${isCollapsed ? "justify-center" : "justify-start"}`} onClick={toggleDarkMode}>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-8 h-4 bg-gray-300 rounded-full relative">
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full transition-all 
                  ${darkMode ? "translate-x-4 bg-gray-800" : ""}`}
                />
              </div>
            </label>
            {!isCollapsed && <span className="ml-4">Dark Mode</span>}
          </div>

          {/* User Profile */}
          <div className={`flex items-center p-2 cursor-pointer ${isCollapsed ? "justify-center" : "justify-start"}`}>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <FiUser className="text-gray-600 w-5 h-5" />
            </div>
            {!isCollapsed && (
              <div className="ml-4">
                <div className="font-semibold">Rudra Devi</div>
                <div className="text-xs text-gray-500">rudra.devi@gmail.com</div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
