import React from 'react'
import { X, Keyboard, Mouse, Download, Upload, Search } from 'lucide-react'

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const shortcuts = [
    { key: 'Ctrl/Cmd + S', description: 'Save feature map' },
    { key: 'Delete/Backspace', description: 'Delete selected node' },
    { key: 'Ctrl/Cmd + Z', description: 'Undo last action' },
    { key: 'Ctrl/Cmd + Shift + Z', description: 'Redo last action' },
    { key: '1-6', description: 'Quick add node types (Feature, Bug, System, Database, API, Security)' },
    { key: 'Drag & Drop', description: 'Create connections between nodes' },
    { key: 'Click node', description: 'Select and edit node properties' },
  ]

  const features = [
    { icon: Download, title: 'Export Options', description: 'Export as PNG, SVG, or JSON' },
    { icon: Upload, title: 'Import', description: 'Import previously saved feature maps' },
    { icon: Search, title: 'Search & Filter', description: 'Find nodes by text, status, type, or priority' },
    { icon: Mouse, title: 'Templates', description: 'Quick start with pre-built templates' },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900">Help & Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-secondary-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Features Overview */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
              <Mouse className="h-5 w-5 mr-2" />
              Features Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <Icon className="h-5 w-5 text-primary-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-secondary-900">{feature.title}</h4>
                      <p className="text-sm text-secondary-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center">
              <Keyboard className="h-5 w-5 mr-2" />
              Keyboard Shortcuts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="font-mono text-sm bg-white px-2 py-1 rounded border">
                    {shortcut.key}
                  </span>
                  <span className="text-sm text-secondary-600">{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Node Types */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Node Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { type: 'Feature', color: 'bg-blue-100 text-blue-800', description: 'New app features and functionality' },
                { type: 'Bug', color: 'bg-red-100 text-red-800', description: 'Issues and bugs that need fixing' },
                { type: 'System', color: 'bg-purple-100 text-purple-800', description: 'System components and infrastructure' },
                { type: 'Database', color: 'bg-green-100 text-green-800', description: 'Database entities and schemas' },
                { type: 'API', color: 'bg-orange-100 text-orange-800', description: 'API endpoints and services' },
                { type: 'Security', color: 'bg-indigo-100 text-indigo-800', description: 'Security features and measures' },
              ].map((nodeType, index) => (
                <div key={index} className="p-3 border border-secondary-200 rounded-lg">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${nodeType.color} mb-2`}>
                    {nodeType.type}
                  </div>
                  <p className="text-sm text-secondary-600">{nodeType.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Getting Started</h3>
            <div className="space-y-3 text-sm text-secondary-600">
              <p>1. <strong>Add nodes:</strong> Use the toolbar buttons or press number keys 1-6 to add different node types</p>
              <p>2. <strong>Connect nodes:</strong> Drag from the bottom handle of one node to the top handle of another</p>
              <p>3. <strong>Edit properties:</strong> Click on any node to edit its properties in the sidebar</p>
              <p>4. <strong>Use templates:</strong> Start with a pre-built template for common scenarios</p>
              <p>5. <strong>Search and filter:</strong> Use the search bar and filters to find specific nodes</p>
              <p>6. <strong>Export your work:</strong> Save as JSON, PNG, or SVG for sharing and documentation</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-secondary-200 bg-secondary-50">
          <button
            onClick={onClose}
            className="w-full btn-primary"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default HelpModal 