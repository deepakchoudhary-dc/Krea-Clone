"use client";

import { useState } from 'react';
import { Box, Type, Image as ImageIcon, Video, Crop, Scissors, Home, Layers, Database, Sparkles, Settings, Play, Wand2, MonitorPlay, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import useStore from '@/store/useStore';
import { v4 as uuidv4 } from 'uuid';

const NODE_TYPES = [
  { type: 'textNode', label: 'Text Node', icon: <Type size={16} /> },
  { type: 'uploadImageNode', label: 'Upload Image Node', icon: <ImageIcon size={16} /> },
  { type: 'uploadVideoNode', label: 'Upload Video Node', icon: <Video size={16} /> },
  { type: 'llmNode', label: 'Run Any LLM Node', icon: <Box size={16} /> },
  { type: 'cropImageNode', label: 'Crop Image Node', icon: <Crop size={16} /> },
  { type: 'extractFrameNode', label: 'Extract Frame Node', icon: <Scissors size={16} /> }
];

export function SidebarLeft() {
  const addNode = useStore((state) => state.addNode);
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddNode = (type: string) => {
    addNode({
      id: uuidv4(),
      type,
      position: { x: window.innerWidth / 2 - 150, y: window.innerHeight / 2 - 100 },
      data: { label: type }
    });
  };

  const filteredNodes = NODE_TYPES.filter(nt => nt.label.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex h-full flex-none bg-[#020202]">
      {/* Primary Thin Nav */}
      <aside className="w-14 sm:w-[72px] flex flex-col pt-3 pb-5 border-r border-[#1C1C1F] z-20 shrink-0 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center gap-4 mb-6 pt-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.4)] cursor-pointer hover:scale-105 transition-transform">
            <Layers size={18} className="text-white" />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-3 w-full px-2 mt-4">
          <button className="flex items-center justify-center w-11 h-11 hover:bg-white/5 text-white/50 hover:text-white transition-all rounded-xl hover:scale-105 group">
            <Home size={20} className="shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          </button>
          <button className="flex items-center justify-center w-11 h-11 hover:bg-white/5 text-white/50 hover:text-white transition-all rounded-xl hover:scale-105 group">
            <MonitorPlay size={20} className="shrink-0 text-red-500/80 group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          </button>
          <div className="flex items-center justify-center w-11 h-11 bg-white/10 text-white transition-all rounded-xl cursor-default relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full" />
            <Layers size={20} className="shrink-0 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
          </div>
          <button className="flex items-center justify-center w-11 h-11 hover:bg-white/5 text-white/50 hover:text-white transition-all rounded-xl hover:scale-105 group">
            <Database size={20} className="shrink-0 text-cyan-500/80 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          </button>
        </div>

        <div className="mt-auto flex flex-col items-center gap-3 w-full px-2">
           <button className="flex items-center justify-center w-11 h-11 hover:bg-white/5 text-white/50 hover:text-white transition-all rounded-xl hover:scale-105 group">
            <Settings size={20} className="shrink-0" />
          </button>
        </div>
      </aside>

      {/* Secondary Node Panel (Collapsible) */}
      <aside 
        className={`flex flex-col z-10 shrink-0 bg-[#0C0C0E] border-r border-[#1C1C1F] transition-all duration-300 ease-in-out relative ${isOpen ? 'w-[280px]' : 'w-0 overflow-hidden border-transparent'}`}
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3 top-6 w-6 h-6 border border-[#1C1C1F] bg-[#141417] text-white/50 hover:text-white rounded-full flex items-center justify-center z-50 shadow-md transition-colors"
        >
          {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>

        <div className="min-w-[280px] w-[280px] h-full flex flex-col">
          <div className="px-5 py-6">
            <h2 className="text-lg tracking-tight text-white mb-4 line-clamp-1 font-medium flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-400" /> Elements
            </h2>
            <div className="bg-[#18181B] rounded-xl flex items-center px-3 py-2.5 border border-white/5 shadow-inner focus-within:border-indigo-500/50 transition-colors">
              <Search size={14} className="text-white/40 mr-2 shrink-0" />
              <input 
                type="text" 
                placeholder="Search nodes..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[13px] text-white outline-none placeholder:text-white/30 border-none p-0"
              />
            </div>
          </div>

          <div className="px-3 flex-1 overflow-y-auto pb-4">
            <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] pl-2 mb-3">Quick Access</h3>
            <div className="flex flex-col gap-1">
              {filteredNodes.length > 0 ? filteredNodes.map((nt) => (
                <button
                  key={nt.type}
                  onClick={() => handleAddNode(nt.type)}
                  className="group flex items-center justify-between w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#1C1C1F] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#141417] border border-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#202024] shadow-sm transition-all">
                      {nt.icon}
                    </div>
                    <span className="text-[13px] text-white/60 group-hover:text-white/90 font-medium tracking-wide">{nt.label}</span>
                  </div>
                  <div className="w-6 h-6 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/5 text-white/50 text-sm leading-none font-light shadow-sm transition-opacity">+</div>
                </button>
              )) : (
                <div className="text-white/30 text-xs text-center py-4">No results found</div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Re-open button when collapsed */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="absolute left-[84px] top-6 w-8 h-8 border border-[#1C1C1F] bg-[#141417] text-white/50 hover:text-white rounded-lg flex items-center justify-center z-50 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
