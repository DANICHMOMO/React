import React, { useState } from 'react';
import { User, GraduationCap, Users } from 'lucide-react';
import Header from './components/Header';
import ParticipantDetails from './components/ParticipantDetails';
import { participantsData } from './data/participants';
import Sidebar from './components/Sidebar'


export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedParticipant = participantsData.find(p => p.id === selectedId);

  return (
    <div className="flex h-screen w-full bg-[#242424] text-[rgba(255,255,255,0.87)] font-sans overflow-hidden">
      <aside className="w-80 lg:w-96 flex-shrink-0 bg-[#1a1a1a] border-r border-[#333] flex flex-col z-20">
        <div className="p-6 border-b border-[#333] flex items-center gap-4 bg-[#1a1a1a]">
          <div className="p-3 bg-[#242424] rounded-full border border-[#444]">
            <Users size={28} className="text-[#646cff]" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Uczestnicy <span className="text-gray-500 font-normal">({participantsData.length})</span></h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {participantsData.map((participant) => (
            <Sidebar 
              key={participant.id} 
              participant={participant} 
              isSelected={selectedId === participant.id}
              onSelect={() => setSelectedId(participant.id)}
            />
          ))}
        </div>
      </aside>
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-20 flex items-start justify-center">
          <div className="w-full max-w-4xl">
            <ParticipantDetails participant={selectedParticipant} />
          </div>
        </div>
      </main>
    </div>
  );
}
