import React, { useState } from 'react';
import { User, Users } from 'lucide-react';

const ParticipantDetails = ({ participant }) => {
  if (!participant) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[500px] bg-[#1a1a1a] rounded-2xl border-2 border-dashed border-[#333] text-gray-500">
        <Users size={64} className="mb-4 text-[#333]" />
        <p className="text-lg text-[rgba(255,255,255,0.6)]">Wybierz uczestnika z paska bocznego</p>
      </div>
    );
  }

  const isTeacher = participant.role === 'nauczyciel';

  return (
    <div className={`p-10 rounded-2xl border shadow-sm transition-all duration-300 animate-in fade-in zoom-in-95 ${
      isTeacher ? 'bg-[#1a1a1a] border-[#61dafb]/50' : 'bg-[#1a1a1a] border-[#333]'
    }`}>
      <div className="flex items-center gap-6 mb-8 border-b border-[#333] pb-8">
        <div className={`p-6 rounded-full shadow-sm ${isTeacher ? 'bg-[#61dafb]/10 text-[#61dafb]' : 'bg-[#646cff]/10 text-[#646cff]'}`}>
          <User size={64} />
        </div>
        <div>
          <h2 className={`text-5xl tracking-tight ${isTeacher ? 'font-extrabold text-[#61dafb]' : 'font-bold text-[rgba(255,255,255,0.87)]'}`}>
            {participant.firstName} {participant.lastName}
          </h2>
          <div className="mt-4">
            <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest ${
              isTeacher ? 'bg-[#61dafb]/20 text-[#61dafb]' : 'bg-[#646cff]/20 text-[#646cff]'
            }`}>
              {participant.role}
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid gap-8">
        <div>
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
            {isTeacher ? 'Numer Legitymacji' : 'Numer Indeksu'}
          </h4>
          <p className="text-2xl font-medium text-[rgba(255,255,255,0.87)] bg-[#242424] inline-block px-5 py-3 rounded-lg border border-[#444] shadow-sm">
            {participant.identifier}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Opis i informacje</h4>
          <p className="text-xl text-[rgba(255,255,255,0.7)] leading-relaxed bg-[#242424] p-6 rounded-xl border border-[#444] shadow-sm">
            {participant.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantDetails;