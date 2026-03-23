"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { Sparkles, Settings2, Image as ImageIcon, MessageSquare } from "lucide-react";

export const LLMNode = memo(({ id, data, selected }: any) => {
  return (
    <BaseNode id={id} data={data} selected={selected} title="Gemini LLM" icon={Sparkles}>
      {/* Inputs Section */}
      <div className="flex flex-col gap-3 relative z-10">
        <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">Connections</label>
        
        <div className="flex items-center gap-2.5 h-[24px] relative bg-white/5 rounded pl-1.5 border border-white/5">
          <Handle type="target" id="system_prompt" position={Position.Left} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] left-[-16px] absolute" />
          <Settings2 size={13} className="text-indigo-400" />
          <span className="text-xs font-medium text-white/70">System Prompt</span>
        </div>
        
        <div className="flex items-center gap-2.5 h-[24px] relative bg-white/5 rounded pl-1.5 border border-white/5">
          <Handle type="target" id="user_message" position={Position.Left} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] left-[-16px] absolute" />
          <MessageSquare size={13} className="text-indigo-400" />
          <span className="text-xs font-medium text-white/70">User Instruction</span>
        </div>

        <div className="flex items-center gap-2.5 h-[24px] relative bg-white/5 rounded pl-1.5 border border-white/5">
          <Handle type="target" id="images" position={Position.Left} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] left-[-16px] absolute" />
          <ImageIcon size={13} className="text-indigo-400" />
          <span className="text-xs font-medium text-white/70">Vision Context</span>
        </div>
      </div>

      <div className="mt-2">
        <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-2">Model</label>
        <select className="bg-[#141414] border border-white/10 text-white/90 text-xs rounded-lg p-2 focus:outline-none focus:border-indigo-500/50 w-full hover:border-white/20 transition-all cursor-pointer">
          <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
          <option value="gemini-2.5-pro">Gemini 2.5 Pro</option>
        </select>
      </div>

      <Handle type="source" position={Position.Right} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] right-[-7px]" />
      
      {data.result && (
        <div className="mt-3 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-xs text-indigo-100 font-mono leading-relaxed">
          {data.result}
        </div>
      )}
    </BaseNode>
  );
});
