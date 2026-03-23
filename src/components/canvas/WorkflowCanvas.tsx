"use client";

import { ReactFlow, Controls, Background, MiniMap, BackgroundVariant } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import useStore from '@/store/useStore';
import { TextNode } from '../nodes/TextNode';
import { UploadImageNode } from '../nodes/UploadImageNode';
import { UploadVideoNode } from '../nodes/UploadVideoNode';
import { LLMNode } from '../nodes/LLMNode';
import { CropImageNode } from '../nodes/CropImageNode';
import { ExtractFrameNode } from '../nodes/ExtractFrameNode';

const nodeTypes = {
  textNode: TextNode,
  uploadImageNode: UploadImageNode,
  uploadVideoNode: UploadVideoNode,
  llmNode: LLMNode,
  cropImageNode: CropImageNode,
  extractFrameNode: ExtractFrameNode,
};

export function WorkflowCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  return (
    <div className="w-full h-full relative" style={{ background: '#0F0F11' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        className="react-flow-custom-theme"
      >
        <Background 
          color="#ffffff" 
          gap={24} 
          size={1.5} 
          variant={BackgroundVariant.Dots} 
          style={{ opacity: 0.05 }} 
        />
        <Controls 
          className="bg-[#1A1A1A] border-white/10 rounded-xl overflow-hidden [&>button]:border-white/5 [&>button]:bg-[#1A1A1A] [&>button]:text-white/70"
          showInteractive={false} 
        />
        <MiniMap 
          className="bg-[#18181B] border border-white/5 rounded-xl shadow-2xl overflow-hidden min-w-[200px]"
          nodeColor={(n: any) => n.data?.color || "#27272A"}
          maskColor="rgba(0, 0, 0, 0.6)"
        />
      </ReactFlow>
    </div>
  );
}
