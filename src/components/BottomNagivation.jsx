import { useState } from 'react';
import EventPagination from './EventPagnation';
import { FiUser, FiCalendar, FiSpeaker, FiFileText } from 'react-icons/fi'; // Importing necessary icons
import speaker from '/src/assets/speaker.png'
import home from '/src/assets/home.png'

const BottomNavigation = ({ darkMode }) => {
    const [active, setActive] = useState('Home');

    const navItems = [
        { name: 'Home', icon:home},
        { name: 'Events', icon: <FiCalendar className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-500'}`} /> }, // Events icon
        { name: 'Speakers', icon: speaker}, // Speakers icon
        { name: 'Reports', icon: <FiFileText className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-500'}`} /> }, // Reports icon
        { name: 'Profile', icon: <FiUser className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-500'}`} /> }, // Profile icon
    ];

    return (
        <div className={`w-[375px] h-[98px] gap-0 bottom-0 left-0 mt-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-500'} shadow-md sm:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => setActive(item.name)}
                        className={`flex flex-col items-center justify-center text-sm relative ${
                            active === item.name ? 'text-indigo-600' : ''
                        }`}
                    >
                        {active === item.name && item.name !== 'Home' && (
                            <div className="absolute -top-1 w-8 h-1 rounded-full bg-indigo-500"></div>
                        )}
                        {/* Display the icon directly if it's a React component */}
                        {typeof item.icon === 'string' ? (
                            <img
                                src={item.icon}
                                alt={item.name}
                                className={`w-6 h-6 mt-2 
                                    ${active === item.name ? 'opacity-100' : 'opacity-60'}
                                    ${darkMode ? 'filter brightness-150' : ''}`} // Adjust icon brightness for dark mode
                            />
                        ) : (
                            item.icon // Render the React component directly
                        )}
                        <span className="mt-1">{item.name}</span>
                        {item.name === 'Home' && active === 'Home' && (
                            <div className="absolute -top-1 w-8 h-1 rounded-full bg-indigo-500"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BottomNavigation;
