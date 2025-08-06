import React, { useState, useRef } from 'react'
import { Map, Plus, Download, Upload, Settings, Layers, FileText, HelpCircle } from 'lucide-react'
import FeatureMap from './components/FeatureMap'
import Sidebar from './components/Sidebar'
import Toolbar from './components/Toolbar'
import ImageExport from './components/ImageExport'
import SearchFilter from './components/SearchFilter'
import Templates from './components/Templates'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import HelpModal from './components/HelpModal'
import Notification from './components/Notification'
import LoadingSpinner from './components/LoadingSpinner'
import ViewControls from './components/ViewControls'
import StatusBar from './components/StatusBar'
import QuickActions from './components/QuickActions'
import SettingsModal from './components/SettingsModal'
import WelcomeScreen from './components/WelcomeScreen'

function App() {
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])
  const [selectedNode, setSelectedNode] = useState(null)
  const [filteredNodes, setFilteredNodes] = useState([])
  const [showHelp, setShowHelp] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [notification, setNotification] = useState({ isVisible: false, type: 'info', title: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showMinimap, setShowMinimap] = useState(true)
  const [showGrid, setShowGrid] = useState(true)
  const [showSettings, setShowSettings] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [currentTheme, setCurrentTheme] = useState('light')
  const reactFlowRef = useRef(null)

  const handleAddNode = (nodeType) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: 'custom',
      position: { x: 100, y: 100 },
      data: { 
        label: `New ${nodeType}`,
        description: '',
        status: 'active',
        priority: 'medium',
        type: nodeType
      }
    }
    setNodes([...nodes, newNode])
  }

  const handleNodeSelect = (node) => {
    setSelectedNode(node)
  }

  const handleNodeUpdate = (nodeId, updates, duplicatedNode = null) => {
    if (duplicatedNode) {
      setNodes([...nodes, duplicatedNode])
      return
    }
    
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

  const handleDeleteNode = () => {
    if (selectedNode) {
      setNodes(nodes.filter(node => node.id !== selectedNode.id))
      setEdges(edges.filter(edge => edge.source !== selectedNode.id && edge.target !== selectedNode.id))
      setSelectedNode(null)
    }
  }

  const handleSave = () => {
    handleExport()
    showNotification('success', 'Feature map saved successfully!')
  }

  const showNotification = (type, message, title = '') => {
    setNotification({ isVisible: true, type, title, message })
  }

  const hideNotification = () => {
    setNotification({ isVisible: false, type: 'info', title: '', message: '' })
  }

  const handleSelectAll = () => {
    // This would require ReactFlow's selection API
    showNotification('info', 'Select all functionality coming soon!')
  }

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all nodes and connections?')) {
      setNodes([])
      setEdges([])
      setSelectedNode(null)
      showNotification('success', 'All nodes cleared successfully!')
    }
  }

  const handleAutoLayout = () => {
    // Simple auto-layout algorithm
    const newNodes = nodes.map((node, index) => ({
      ...node,
      position: {
        x: (index % 3) * 300 + 100,
        y: Math.floor(index / 3) * 200 + 100
      }
    }))
    setNodes(newNodes)
    showNotification('success', 'Nodes auto-arranged!')
  }

  const handleShuffleLayout = () => {
    const newNodes = nodes.map(node => ({
      ...node,
      position: {
        x: Math.random() * 800 + 100,
        y: Math.random() * 600 + 100
      }
    }))
    setNodes(newNodes)
    showNotification('success', 'Node positions randomized!')
  }

  const handleCopySelected = () => {
    if (selectedNode) {
      navigator.clipboard.writeText(JSON.stringify(selectedNode, null, 2))
      showNotification('success', 'Node copied to clipboard!')
    }
  }

  const handleCutSelected = () => {
    if (selectedNode) {
      navigator.clipboard.writeText(JSON.stringify(selectedNode, null, 2))
      handleDeleteNode()
      showNotification('success', 'Node cut to clipboard!')
    }
  }

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme)
    showNotification('success', `Theme changed to ${theme}!`)
  }

  const handleResetSettings = () => {
    setCurrentTheme('light')
    setShowMinimap(true)
    setShowGrid(true)
    showNotification('success', 'Settings reset to defaults!')
  }

  const handleStartBlank = () => {
    setShowWelcome(false)
    showNotification('info', 'Welcome! Start by adding some nodes.')
  }

  const handleWelcomeTemplate = () => {
    setShowWelcome(false)
    setShowTemplates(true)
  }

  const handleWelcomeImport = () => {
    setShowWelcome(false)
    // Trigger file input
    document.querySelector('input[type="file"]')?.click()
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
            
            <button 
              onClick={() => setShowTemplates(!showTemplates)}
              className="btn-primary flex items-center space-x-2"
            >
              <FileText className="h-4 w-4" />
              <span>Templates</span>
            </button>
            
            <button 
              onClick={() => setShowHelp(true)}
              className="btn-secondary flex items-center space-x-2"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </button>
            
            <button 
              onClick={() => setShowSettings(true)}
              className="btn-secondary flex items-center space-x-2"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
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
          onDeleteNode={handleDeleteNode}
        />
        
        {/* Main Canvas */}
        <div className="flex-1 flex flex-col min-h-0">
          <Toolbar onAddNode={handleAddNode} />
          
          {showTemplates && (
            <Templates onLoadTemplate={handleLoadTemplate} />
          )}
          
          <QuickActions
            onSelectAll={handleSelectAll}
            onClearAll={handleClearAll}
            onAutoLayout={handleAutoLayout}
            onShuffleLayout={handleShuffleLayout}
            onCopySelected={handleCopySelected}
            onCutSelected={handleCutSelected}
            hasSelectedNode={!!selectedNode}
          />
          
          <SearchFilter nodes={nodes} onFilterChange={setFilteredNodes} />
          
          <div className="flex-1 bg-white min-h-0 relative">
            <FeatureMap
              ref={reactFlowRef}
              nodes={filteredNodes.length > 0 ? filteredNodes : nodes}
              edges={edges}
              onNodesChange={setNodes}
              onEdgesChange={setEdges}
              onNodeSelect={handleNodeSelect}
              showMinimap={showMinimap}
              showGrid={showGrid}
            />
            
            <ViewControls
              showMinimap={showMinimap}
              onToggleMinimap={() => setShowMinimap(!showMinimap)}
              showGrid={showGrid}
              onToggleGrid={() => setShowGrid(!showGrid)}
              onZoomIn={() => reactFlowRef.current?.zoomIn()}
              onZoomOut={() => reactFlowRef.current?.zoomOut()}
              onFitView={() => reactFlowRef.current?.fitView()}
            />
          </div>
          
          <StatusBar
            nodes={nodes}
            edges={edges}
            selectedNode={selectedNode}
            filteredNodes={filteredNodes}
          />
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <KeyboardShortcuts
        onAddNode={handleAddNode}
        onDeleteNode={handleDeleteNode}
        onSave={handleSave}
      />

      {/* Help Modal */}
      <HelpModal
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />

      {/* Notification */}
      <Notification
        type={notification.type}
        title={notification.title}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8">
            <LoadingSpinner size="lg" text="Processing..." />
          </div>
        </div>
      )}

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        onResetSettings={handleResetSettings}
      />

      {/* Welcome Screen */}
      {showWelcome && (
        <WelcomeScreen
          onStartBlank={handleStartBlank}
          onLoadTemplate={handleWelcomeTemplate}
          onImportFile={handleWelcomeImport}
        />
      )}
    </div>
  )
}

export default App 