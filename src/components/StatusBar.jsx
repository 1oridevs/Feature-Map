import React from 'react'
import { Info, Users, Calendar, Tag } from 'lucide-react'

const StatusBar = ({ nodes, edges, selectedNode, filteredNodes }) => {
  const getNodeTypeCount = () => {
    const counts = {}
    nodes.forEach(node => {
      const type = node.data.type || 'unknown'
      counts[type] = (counts[type] || 0) + 1
    })
    return counts
  }

  const getStatusCount = () => {
    const counts = {}
    nodes.forEach(node => {
      const status = node.data.status || 'active'
      counts[status] = (counts[status] || 0) + 1
    })
    return counts
  }

  const nodeTypeCounts = getNodeTypeCount()
  const statusCounts = getStatusCount()
  const isFiltered = filteredNodes.length > 0 && filteredNodes.length !== nodes.length

  return (
    <div className="bg-white border-t border-secondary-200 px-4 py-2 text-sm text-secondary-600">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Node Count */}
          <div className="flex items-center space-x-2">
            <Info className="h-4 w-4" />
            <span>
              {isFiltered ? `${filteredNodes.length}/${nodes.length}` : nodes.length} nodes
            </span>
          </div>

          {/* Edge Count */}
          <div className="flex items-center space-x-2">
            <span>{edges.length} connections</span>
          </div>

          {/* Node Types */}
          <div className="flex items-center space-x-3">
            {Object.entries(nodeTypeCounts).map(([type, count]) => (
              <span key={type} className="capitalize">
                {type}: {count}
              </span>
            ))}
          </div>

          {/* Status Summary */}
          <div className="flex items-center space-x-3">
            {Object.entries(statusCounts).map(([status, count]) => (
              <span key={status} className="capitalize">
                {status}: {count}
              </span>
            ))}
          </div>
        </div>

        {/* Selected Node Info */}
        {selectedNode && (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-secondary-500">Selected:</span>
              <span className="font-medium text-secondary-900">
                {selectedNode.data.label}
              </span>
            </div>
            
            {selectedNode.data.assignee && (
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{selectedNode.data.assignee}</span>
              </div>
            )}
            
            {selectedNode.data.dueDate && (
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{selectedNode.data.dueDate}</span>
              </div>
            )}
            
            {selectedNode.data.tags && (
              <div className="flex items-center space-x-1">
                <Tag className="h-3 w-3" />
                <span>{selectedNode.data.tags}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default StatusBar 