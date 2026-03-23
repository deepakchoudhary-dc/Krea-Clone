import { create } from 'zustand';
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';

export type AppNode = Node;

const initialNodes: AppNode[] = [
  { id: 'upload-image', type: 'uploadImageNode', position: { x: 50, y: 50 }, data: { label: 'Upload Product Photo' } },
  { id: 'crop-image', type: 'cropImageNode', position: { x: 450, y: 50 }, data: { x_percent: 10, y_percent: 10, width_percent: 80, height_percent: 80 } },
  { id: 'text-sys', type: 'textNode', position: { x: 50, y: 350 }, data: { text: 'You are a professional marketing copywriter. Generate a compelling one-paragraph product description.' } },
  { id: 'text-user', type: 'textNode', position: { x: 50, y: 550 }, data: { text: 'Product: Wireless Bluetooth Headphones. Features: Noise cancellation, 30-hour battery, foldable design.' } },
  { id: 'llm-1', type: 'llmNode', position: { x: 800, y: 250 }, data: { label: 'Product Desc LLM' } },
  { id: 'upload-video', type: 'uploadVideoNode', position: { x: 50, y: 800 }, data: { label: 'Upload Demo Video' } },
  { id: 'extract-frame', type: 'extractFrameNode', position: { x: 450, y: 800 }, data: { timestamp: '50%' } },
  { id: 'text-convergence', type: 'textNode', position: { x: 800, y: 650 }, data: { text: 'You are a social media manager. Create a tweet-length marketing post based on the product image and video frame.' } },
  { id: 'llm-convergence', type: 'llmNode', position: { x: 1200, y: 500 }, data: { label: 'Final Summary LLM' } }
];

const initialEdges: Edge[] = [
  { id: 'e1', source: 'upload-image', target: 'crop-image', targetHandle: 'image_url', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e2', source: 'text-sys', target: 'llm-1', targetHandle: 'system_prompt', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e3', source: 'text-user', target: 'llm-1', targetHandle: 'user_message', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e4', source: 'crop-image', target: 'llm-1', targetHandle: 'images', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e5', source: 'upload-video', target: 'extract-frame', targetHandle: 'video_url', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e6', source: 'llm-1', target: 'llm-convergence', targetHandle: 'user_message', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e7', source: 'extract-frame', target: 'llm-convergence', targetHandle: 'images', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e8', source: 'crop-image', target: 'llm-convergence', targetHandle: 'images', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
  { id: 'e9', source: 'text-convergence', target: 'llm-convergence', targetHandle: 'system_prompt', animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } }
];

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  addNode: (node: AppNode) => void;
  updateNodeData: (id: string, data: any) => void;
};

const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes: NodeChange<AppNode>[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge({ ...connection, animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } }, get().edges),
    });
  },
  addNode: (node: AppNode) => {
    set({ nodes: [...get().nodes, node] });
  },
  updateNodeData: (id: string, data: any) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          node.data = { ...node.data, ...data };
        }
        return node;
      }),
    });
  },
}));

export default useStore;
