"use client";

import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { BaseNode } from './BaseNode';
import { Type } from 'lucide-react';

export const TextNode = memo(({ id, data, selected }: any) => {
  return (
    <BaseNode id={id} data={data} selected={selected} title="Text Prompts" icon={Type}>
      <div className="flex flex-col gap-2">
        <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block">
          Input Prompt
        </label>
        <textarea
          className="w-full bg-[#141414] border border-white/10 rounded-lg p-3 text-xs text-white/90 resize-none focus:outline-none focus:border-indigo-500/50 min-h-[90px] placeholder:text-white/20 transition-all font-mono leading-relaxed"
          placeholder="Enter prompt..."
          defaultValue={data.text || ""}
        />
      </div>
      <Handle 
        type="source" 
        position={Position.Right} 
        className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] right-[-7px]" 
      />
    </BaseNode>
  );
});
