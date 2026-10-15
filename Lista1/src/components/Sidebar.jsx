import React from 'react';
import { User } from 'lucide-react';

const Sidebar = ({ participant, isSelected, onSelect }) => {
  const isTeacher = participant.role === 'nauczyciel';

  const baseClasses = "flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200 border";
  const teacherClasses = isSelected 
    ? "bg-[#2a2a2a] border-[#61dafb] shadow-sm" 
    : "bg-[#1a1a1a] border-[#444] hover:border-[#61dafb]";
  const studentClasses = isSelected 
    ? "bg-[#2a2a2a] border-[#646cff] shadow-sm" 
    : "bg-[#1a1a1a] border-[#333] hover:border-[#646cff]";

  return (
    <div 
      className={`${baseClasses} ${isTeacher ? teacherClasses : studentClasses}`}
      onClick={onSelect}
    >
      <div className={`p-2 rounded-full flex-shrink-0 ${isTeacher ? 'bg-[#61dafb]/10 text-[#61dafb]' : 'bg-[#646cff]/10 text-[#646cff]'}`}>
        <User size={20} />
      </div>
      <div className="overflow-hidden">
        <h3 className={`font-medium truncate ${isTeacher ? 'text-[#61dafb] font-bold' : 'text-[rgba(255,255,255,0.87)]'}`}>
          {participant.firstName} {participant.lastName}
        </h3>
        <span className="text-xs uppercase tracking-wider text-gray-400">{participant.role}</span>
      </div>
    </div>
  );
};

export default Sidebar;
