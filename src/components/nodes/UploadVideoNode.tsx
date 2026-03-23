"use client";

import { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { BaseNode } from "./BaseNode";
import { Video, UploadCloud } from "lucide-react";

export const UploadVideoNode = memo(({ id, data, selected }: any) => {
  return (
    <BaseNode id={id} data={data} selected={selected} title="Add Video" icon={Video}>
      <label className="text-[10px] text-white/40 font-bold uppercase tracking-widest block mb-1">
        Media Input
      </label>
      <div className="w-full h-32 flex flex-col items-center justify-center border border-dashed border-white/20 rounded-xl hover:border-indigo-400/50 hover:bg-indigo-400/5 transition-all cursor-pointer group bg-black/20">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-indigo-500/10 group-hover:text-indigo-400 text-white/40 transition-colors">
          <UploadCloud size={20} />
        </div>
        <span className="text-xs text-white/50 text-center font-medium group-hover:text-white/80">
          Click to upload video
        </span>
      </div>
      <Handle type="source" position={Position.Right} className="w-3.5 h-3.5 bg-indigo-400 border-2 border-[#1A1A1E] right-[-7px]" />
    </BaseNode>
  );
});
