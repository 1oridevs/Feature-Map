import React, { useState } from 'react'
import { Map, Plus, Download, Upload, Settings, Layers, FileText } from 'lucide-react'
import FeatureMap from './components/FeatureMap'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import ImageExport from './components/ImageExport'
import SearchFilter from './components/SearchFilter'
import Templates from './components/Templates'

function App() {
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const [selectedNode, setSelectedNode] = useState(null)
  const [filteredNodes, setFilteredNodes] = useState([])

  const handleAddNode = (nodeType) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: nodeType,
      position: { x: 100, y: 100 },
      data: { 
        label: `New ${nodeType}`,
        description: '',
        status: 'active',
        priority: 'medium'
      }
    }
    setNodes([...nodes, newNode])
  }

  const handleNodeSelect = (node) => {
    setSelectedNode(node)
  }

  const handleNodeUpdate = (nodeId, updates) => {
    setNodes(nodes.map(node => 
      node.id === nodeId ? { ...node, data: { ...node.data, ...updates } } : node
    ))
  }

  const handleExport = () => {
    const data = { nodes, edges }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'feature-map.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)
          setNodes(data.nodes || [])
          setEdges(data.edges || [])
        } catch (error) {
          console.error('Error importing file:', error)
        }
      }
      reader.readAsText(file)
    }
  }

  const handleLoadTemplate = (templateNodes, templateEdges) => {
    setNodes(templateNodes)
    setEdges(templateEdges)
    setSelectedNode(null)
  }

  return (
    <div className="h-screen bg-secondary-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-secondary-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Map className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-secondary-900">Feature Map</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <ImageExport nodes={nodes} edges={edges} />
            
            <button
              onClick={handleExport}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>JSON</span>
            </button>
            
            <label className="btn-secondary flex items-center space-x-2 cursor-pointer">
              <Upload className="h-4 w-4" />
              <span>Import</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
            
            <button className="btn-primary flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          selectedNode={selectedNode}
          onNodeUpdate={handleNodeUpdate}
        />
        
        {/* Main Canvas */}
        <div className="flex-1 flex flex-col">
          <Toolbar onAddNode={handleAddNode} />
          <Templates onLoadTemplate={handleLoadTemplate} />
          <SearchFilter nodes={nodes} onFilterChange={setFilteredNodes} />
          <div className="flex-1 bg-white">
            <FeatureMap
              nodes={filteredNodes.length > 0 ? filteredNodes : nodes}
              edges={edges}
              onNodesChange={setNodes}
              onEdgesChange={setEdges}
              onNodeSelect={handleNodeSelect}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 