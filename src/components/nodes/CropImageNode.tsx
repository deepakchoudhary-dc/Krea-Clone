"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { Crop, ImageIcon } from "lucide-react";

export const CropImageNode = memo(({ id, data, selected }: any) => {
  return (
    <BaseNode id={id} data={data} selected={selected} title="Crop Image" icon={Crop}>
      <div className="flex flex-col gap-3 relative z-10 mb-2">
        <div className="flex items-center gap-2.5 h-[24px] relative bg-white/5 rounded pl-1.5 border border-white/5">
          <Handle type="target" id="image_url" position={Position.Left} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] left-[-16px] absolute" />
          <ImageIcon size={13} className="text-indigo-400" />
          <span className="text-xs font-medium text-white/70">Image Source</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">X (%)</label>
          <input type="number" defaultValue={data.x_percent || 0} className="w-full bg-[#141414] border border-white/10 rounded-lg p-2 text-xs text-white/90 focus:border-indigo-500/50 hover:border-white/20 transition-all text-center font-mono" />
        </div>
        <div className="relative">
          <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">Y (%)</label>
          <input type="number" defaultValue={data.y_percent || 0} className="w-full bg-[#141414] border border-white/10 rounded-lg p-2 text-xs text-white/90 focus:border-indigo-500/50 hover:border-white/20 transition-all text-center font-mono" />
        </div>
        <div className="relative">
          <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">W (%)</label>
          <input type="number" defaultValue={data.width_percent || 100} className="w-full bg-[#141414] border border-white/10 rounded-lg p-2 text-xs text-white/90 focus:border-indigo-500/50 hover:border-white/20 transition-all text-center font-mono" />
        </div>
        <div className="relative">
          <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">H (%)</label>
          <input type="number" defaultValue={data.height_percent || 100} className="w-full bg-[#141414] border border-white/10 rounded-lg p-2 text-xs text-white/90 focus:border-indigo-500/50 hover:border-white/20 transition-all text-center font-mono" />
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] right-[-7px]" />
    </BaseNode>
  );
});
