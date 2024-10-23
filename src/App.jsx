import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SummaryDashboard from './components/SummaryDashboard';
import Sidebar from './components/SideBar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  

  return (
    <div className={darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}>
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SummaryDashboard darkMode={darkMode} />
    </div>
  );
};

export default App;
