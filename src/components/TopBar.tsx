"use client";

import { Play, Share2 } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-16 flex-none bg-[#0A0A0A] flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg tracking-tight text-white/90">Main Workflow</h1>
        <span className="text-white/40 text-xs px-2.5 py-1 rounded-md bg-[#141414] border border-white/5">Auto-saved</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-white/70 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
          <Share2 size={16} /> Share
        </button>
        <button className="bg-white hover:bg-white/90 text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-2">
          <Play size={16} fill="currentColor" className="mr-0.5" /> Run Workflow
        </button>
      </div>
    </header>
  );
}
