import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#1a1a1a] text-[rgba(255,255,255,0.87)] p-6 shadow-sm flex items-center justify-center gap-3 border-b border-[#333] z-10 relative">
      <GraduationCap size={32} className="text-[#646cff]" />
      <h1 className="text-3xl font-bold tracking-tight">Katalog uczestników kursu React</h1>
    </header>
  );
};

export default Header;