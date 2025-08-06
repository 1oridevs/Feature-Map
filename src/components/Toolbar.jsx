import React from 'react'
import { 
  Zap, 
  Bug, 
  Settings, 
  Database, 
  Globe, 
  Shield,
  Plus
} from 'lucide-react'

const Toolbar = ({ onAddNode }) => {
  const nodeTypes = [
    { type: 'feature', label: 'Feature', icon: Zap, color: 'bg-blue-500 hover:bg-blue-600' },
    { type: 'bug', label: 'Bug', icon: Bug, color: 'bg-red-500 hover:bg-red-600' },
    { type: 'system', label: 'System', icon: Settings, color: 'bg-purple-500 hover:bg-purple-600' },
    { type: 'database', label: 'Database', icon: Database, color: 'bg-green-500 hover:bg-green-600' },
    { type: 'api', label: 'API', icon: Globe, color: 'bg-orange-500 hover:bg-orange-600' },
    { type: 'security', label: 'Security', icon: Shield, color: 'bg-indigo-500 hover:bg-indigo-600' },
  ]

  return (
    <div className="bg-white border-b border-secondary-200 px-4 py-3">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-secondary-700 mr-4">Add Node:</span>
        
        {nodeTypes.map(({ type, label, icon: Icon, color }) => (
          <button
            key={type}
            onClick={() => onAddNode(type)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-white text-sm font-medium transition-colors duration-200 ${color}`}
            title={`Add ${label}`}
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </button>
        ))}
        
        <div className="ml-4 pl-4 border-l border-secondary-200">
          <button
            onClick={() => onAddNode('feature')}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            <Plus className="h-4 w-4" />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toolbar 