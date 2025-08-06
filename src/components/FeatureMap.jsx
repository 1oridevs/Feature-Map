import React, { useCallback, forwardRef, useImperativeHandle } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'
import CustomNode from './CustomNode'

const nodeTypes = {
  custom: CustomNode,
}

const FeatureMap = forwardRef(({ 
  nodes: initialNodes, 
  edges: initialEdges, 
  onNodesChange: onNodesChangeProp, 
  onEdgesChange: onEdgesChangeProp, 
  onNodeSelect,
  showMinimap = true,
  showGrid = true
}, ref) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  const onNodeClick = useCallback((event, node) => {
    onNodeSelect(node)
  }, [onNodeSelect])

  // Sync with parent component
  React.useEffect(() => {
    setNodes(initialNodes)
  }, [initialNodes, setNodes])

  React.useEffect(() => {
    setEdges(initialEdges)
  }, [initialEdges, setEdges])

  React.useEffect(() => {
    onNodesChangeProp(nodes)
  }, [nodes, onNodesChangeProp])

  React.useEffect(() => {
    onEdgesChangeProp(edges)
  }, [edges, onEdgesChangeProp])

  // Expose ReactFlow methods to parent component
  useImperativeHandle(ref, () => ({
    zoomIn: () => {
      // This would need to be implemented with ReactFlow's zoom API
    },
    zoomOut: () => {
      // This would need to be implemented with ReactFlow's zoom API
    },
    fitView: () => {
      // This would need to be implemented with ReactFlow's fitView API
    }
  }))

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
                       {showMinimap && (
                 <MiniMap
                   nodeStrokeColor={(n) => {
                     if (n.type === 'input') return '#0041d0'
                     if (n.type === 'output') return '#ff0072'
                     return '#1a192b'
                   }}
                   nodeColor={(n) => {
                     if (n.type === 'input') return '#0041d0'
                     if (n.type === 'output') return '#ff0072'
                     return '#fff'
                   }}
                 />
               )}
               {showGrid && <Background variant="dots" gap={12} size={1} />}
      </ReactFlow>
    </div>
  )
}

export default FeatureMap 