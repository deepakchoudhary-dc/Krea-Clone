"use client";

import { Activity, Clock, CheckCircle2, ChevronDown, CircleDot, Play, ExternalLink } from 'lucide-react';

const MOCK_HISTORY = [
  { id: 'run-89a1', name: 'Product Kit Gen', status: 'success', time: '2m ago', duration: '14s' },
  { id: 'run-89a0', name: 'Product Kit Gen', status: 'success', time: '1h ago', duration: '18s' },
  { id: 'run-899f', name: 'Prompt Enhancer', status: 'failed', time: '1h ago', duration: '2s' },
  { id: 'run-899e', name: 'Image Outpaint', status: 'success', time: '5h ago', duration: '45s' },
  { id: 'run-899d', name: 'Lora Train Test', status: 'running', time: 'Just now', duration: '2m 14s' },
];

export function SidebarRight() {
  return (
    <aside className="hidden lg:flex w-[300px] flex-none border-l border-[#1C1C1F] bg-[#0A0A0C] flex-col h-full z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="p-5 border-b border-[#1C1C1F] flex items-center justify-between bg-[#0F0F11]">
        <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold flex items-center text-white/50">
          <Activity size={14} className="text-indigo-400 mr-2" />
          History
        </h2>
        <button className="text-white/30 hover:text-white transition-colors">
          <ChevronDown size={14} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* List of workflow runs */}
        <div className="flex flex-col">
          {MOCK_HISTORY.map((run, i) => (
            <div 
              key={run.id}
              className={`p-4 border-b border-[#1C1C1F] hover:bg-[#141417]/50 transition-colors cursor-pointer group flex flex-col gap-2 ${i === 0 ? 'bg-[#141417]/30' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {run.status === 'success' && <CheckCircle2 size={14} className="text-emerald-500" />}
                  {run.status === 'failed' && <CircleDot size={14} className="text-red-500" />}
                  {run.status === 'running' && <Play size={14} className="text-indigo-400 animate-pulse fill-indigo-400" />}
                  <span className="text-[13px] font-medium text-white/90 truncate max-w-[140px] tracking-wide">{run.name}</span>
                </div>
                <button className="opacity-0 group-hover:opacity-100 text-white/30 hover:text-white transition-opacity">
                  <ExternalLink size={13} />
                </button>
              </div>
              
              <div className="flex items-center justify-between text-[11px] text-white/40 pl-6">
                <div className="flex items-center gap-1">
                  <Clock size={10} />
                  <span>{run.time}</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <span>{run.duration}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="p-6 text-center">
            <span className="text-[11px] text-white/30 hover:text-white/60 cursor-pointer transition-colors border-b border-white/10 pb-0.5">Load earlier runs</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
