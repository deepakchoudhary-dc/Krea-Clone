"use client";

import { memo } from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";

interface BaseNodeProps {
  id: string;
  data: any;
  selected: boolean;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  active?: boolean;
}

export const BaseNode = memo(({ id, selected, title, icon: Icon, children, active = false }: BaseNodeProps) => {
  return (
    <div
      className={clsx(
        "bg-[#1A1A1E] border rounded-[14px] shadow-2xl overflow-visible w-[300px] transition-all backdrop-blur-xl",
        selected ? "border-indigo-500/80 shadow-[0_0_30px_rgba(99,102,241,0.15)]" : "border-white/10",
        active && "animate-pulse border-indigo-500 shadow-[0_0_20px_5px_rgba(99,102,241,0.4)] glow"
      )}
    >
      <div className="px-4 py-3.5 flex items-center gap-2.5 border-b border-white/5 bg-[#1E1E22]/50 rounded-t-[14px]">
        <div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 text-white/70">
           <Icon size={14} strokeWidth={2.5} />
        </div>
        <span className="text-[13px] font-medium text-white/90 tracking-wide">{title}</span>
      </div>
      <div className="p-4 flex flex-col gap-4 relative text-white">
        {children}
      </div>
    </div>
  );
});

BaseNode.displayName = "BaseNode";
