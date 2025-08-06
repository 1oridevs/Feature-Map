import React from 'react'
import { Select, Trash2, Layout, Shuffle, Copy, Scissors } from 'lucide-react'

const QuickActions = ({ 
  onSelectAll, 
  onClearAll, 
  onAutoLayout, 
  onShuffleLayout,
  onCopySelected,
  onCutSelected,
  hasSelectedNode
}) => {
  return (
    <div className="bg-white border-b border-secondary-200 px-4 py-2">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-secondary-700 mr-2">Quick Actions:</span>
        
        <button
          onClick={onSelectAll}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-md transition-colors"
          title="Select all nodes"
        >
          <Select className="h-4 w-4" />
          <span>Select All</span>
        </button>
        
        <button
          onClick={onClearAll}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm text-secondary-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
          title="Clear all nodes"
        >
          <Trash2 className="h-4 w-4" />
          <span>Clear All</span>
        </button>
        
        <div className="w-px h-6 bg-secondary-200 mx-2"></div>
        
        <button
          onClick={onAutoLayout}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
          title="Auto-arrange nodes"
        >
          <Layout className="h-4 w-4" />
          <span>Auto Layout</span>
        </button>
        
        <button
          onClick={onShuffleLayout}
          className="flex items-center space-x-1 px-3 py-1.5 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
          title="Randomize node positions"
        >
          <Shuffle className="h-4 w-4" />
          <span>Shuffle</span>
        </button>
        
        <div className="w-px h-6 bg-secondary-200 mx-2"></div>
        
        <button
          onClick={onCopySelected}
          disabled={!hasSelectedNode}
          className={`flex items-center space-x-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
            hasSelectedNode 
              ? 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100' 
              : 'text-secondary-400 cursor-not-allowed'
          }`}
          title="Copy selected node"
        >
          <Copy className="h-4 w-4" />
          <span>Copy</span>
        </button>
        
        <button
          onClick={onCutSelected}
          disabled={!hasSelectedNode}
          className={`flex items-center space-x-1 px-3 py-1.5 text-sm rounded-md transition-colors ${
            hasSelectedNode 
              ? 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100' 
              : 'text-secondary-400 cursor-not-allowed'
          }`}
          title="Cut selected node"
        >
          <Scissors className="h-4 w-4" />
          <span>Cut</span>
        </button>
      </div>
    </div>
  )
}

export default QuickActions 