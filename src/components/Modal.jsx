import React from 'react';
import { FiX } from 'react-icons/fi'; // Importing the close icon
import avatar from '/src/assets/AvatarGroup.png'; // Placeholder avatar

const Modal = ({ show, onClose, event, onEdit, onDelete, onMarkComplete }) => {
  // Return null if the modal is not shown or no event is selected
  if (!show || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 ml-[-50px] max-w-lg w-[335px] sm:w-[440px] h-auto sm:h-[380px] rounded-[2px_0_0_0] relative">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          {/* Event Name */}
          <h2 className="font-inter text-[18px] font-semibold leading-[28px] text-left w-full sm:w-[352px] h-[28px]">
            {event.eventName}
          </h2>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-300 hover:bg-gray-200 transition-colors"
          >
            <FiX className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Event Date */}
        <p className="mb-1 font-inter text-[14px] font-normal leading-[20px] text-left text-[#64748B]">
          {event.date}
        </p>

        {/* Event Description */}
        <p className="mb-4 mt-6 font-inter text-[14px] font-normal leading-[20px] text-left text-[#334155]">
          Event Description
        </p>

        {/* Speakers Section */}
        <div className="mb-4">
          {event.speakers && event.speakers.length > 0 ? (
            <div className="flex flex-wrap mt-2">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center mr-4 mb-4">
                  <img
                    src={speaker.avatar} // Avatar URL from the speaker object
                    alt={speaker.name}
                    className="w-10 h-10 rounded-full border border-gray-300 mb-1"
                  />
                  <p className="text-[12px]">{speaker.name}</p> {/* Adjusted font size for mobile */}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center">
              <img
                src={avatar} // Placeholder icon for no speakers
                alt="No speakers"
                className="rounded-full w-[80px] h-[32px] mr-2"
              />
            </div>
          )}
        </div>

        {/* Number of Attendees */}
        <p className="mb-[55px] font-inter text-[14px] font-normal leading-[20px] text-left text-[#334155]">
          {event.attendees} 3 Guest Speakers: Speaker name A, Speaker name B, Speaker name C.
          <br /> 300 Attendees
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-y-0 mt-4">
          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="w-[287px] text-center sm:w-[58px] h-[36px] gap-2 sm:mr-16 font-inter text-[14px] font-normal leading-[20px] bg-white border border-gray-200 rounded hover:bg-gray-100"
          >
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={onDelete}
            className="w-[287px] text-center sm:w-[75px] h-[36px] text-[14px] py-2 px-4 gap-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>

          {/* Mark as Completed Button */}
          <button
            onClick={onMarkComplete}
            className="w-[287px] text-center sm:w-auto px-4 py-2 font-inter text-[14px] font-normal leading-[20px] bg-green-500 text-white rounded hover:bg-green-600"
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
