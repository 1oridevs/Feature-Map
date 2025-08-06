import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { 
  Zap, 
  Bug, 
  Settings, 
  Database, 
  Globe, 
  Shield,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react'

const getNodeIcon = (type) => {
  switch (type) {
    case 'feature':
      return <Zap className="h-4 w-4" />
    case 'bug':
      return <Bug className="h-4 w-4" />
    case 'system':
      return <Settings className="h-4 w-4" />
    case 'database':
      return <Database className="h-4 w-4" />
    case 'api':
      return <Globe className="h-4 w-4" />
    case 'security':
      return <Shield className="h-4 w-4" />
    default:
      return <Zap className="h-4 w-4" />
  }
}

const getStatusIcon = (status) => {
  switch (status) {
    case 'active':
      return <CheckCircle className="h-3 w-3 text-green-500" />
    case 'pending':
      return <Clock className="h-3 w-3 text-yellow-500" />
    case 'blocked':
      return <AlertCircle className="h-3 w-3 text-red-500" />
    default:
      return <CheckCircle className="h-3 w-3 text-green-500" />
  }
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'low':
      return 'bg-green-100 text-green-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getNodeColor = (type) => {
  switch (type) {
    case 'feature':
      return 'bg-blue-50 border-blue-200'
    case 'bug':
      return 'bg-red-50 border-red-200'
    case 'system':
      return 'bg-purple-50 border-purple-200'
    case 'database':
      return 'bg-green-50 border-green-200'
    case 'api':
      return 'bg-orange-50 border-orange-200'
    case 'security':
      return 'bg-indigo-50 border-indigo-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}

const CustomNode = ({ data, selected }) => {
  return (
    <div className={`px-4 py-3 shadow-sm rounded-lg border-2 ${getNodeColor(data.type)} ${selected ? 'ring-2 ring-primary-500' : ''}`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3" />
      
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className={`p-2 rounded-lg ${getNodeColor(data.type).replace('bg-', 'bg-').replace('border-', 'bg-')}`}>
            {getNodeIcon(data.type)}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {data.label}
            </h3>
            {getStatusIcon(data.status)}
          </div>
          
          {data.description && (
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {data.description}
            </p>
          )}
          
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(data.priority)}`}>
              {data.priority}
            </span>
            
            {data.assignee && (
              <span className="text-xs text-gray-500">
                @{data.assignee}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <Handle type="source" position={Position.Bottom} className="w-3 h-3" />
    </div>
  )
}

export default memo(CustomNode) 