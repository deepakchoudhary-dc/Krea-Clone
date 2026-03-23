"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { Scissors, Video } from "lucide-react";

export const ExtractFrameNode = memo(({ id, data, selected }: any) => {
  return (
    <BaseNode id={id} data={data} selected={selected} title="Extract Frame" icon={Scissors}>
      <div className="flex flex-col gap-3 relative z-10 mb-2">
        <div className="flex items-center gap-2.5 h-[24px] relative bg-white/5 rounded pl-1.5 border border-white/5">
          <Handle type="target" id="video_url" position={Position.Left} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] left-[-16px] absolute" />
          <Video size={13} className="text-indigo-400" />
          <span className="text-xs font-medium text-white/70">Video Source</span>
        </div>
      </div>
      
      <div className="mt-1">
        <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-2">Timestamp / Position</label>
        <input type="text" defaultValue={data.timestamp || "0"} placeholder="e.g. 50% or 10s" className="w-full bg-[#141414] border border-white/10 rounded-lg p-2.5 text-xs text-white/90 focus:border-indigo-500/50 hover:border-white/20 transition-all font-mono" />
      </div>

      <Handle type="source" position={Position.Right} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] right-[-7px]" />
    </BaseNode>
  );
});
