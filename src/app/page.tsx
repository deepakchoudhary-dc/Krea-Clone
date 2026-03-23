"use client";

import { WorkflowCanvas } from "@/components/canvas/WorkflowCanvas";
import { SidebarLeft } from "@/components/sidebar/SidebarLeft";
import { SidebarRight } from "@/components/sidebar/SidebarRight";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  const isLoaded = true;
  const isSignedIn = true;

  if (!isLoaded) return <div className="flex h-screen items-center justify-center bg-[#0A0A0A] text-white">Loading...</div>;

  return (
    <div className="flex justify-start h-screen w-screen overflow-hidden bg-[#0A0A0A] text-white font-sans">
      {/* Icon Sidebar - Krea Style */}
      <SidebarLeft />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative h-full bg-[#0A0A0A]">
        <TopBar />
        <main className="flex-1 flex flex-row overflow-hidden relative">
          <div className="flex-1 relative h-full rounded-tl-2xl overflow-hidden border-t border-l border-white/10 shadow-2xl bg-[#0F0F11]">
            <WorkflowCanvas />
          </div>
          <SidebarRight />
        </main>
      </div>
    </div>
  );
}
