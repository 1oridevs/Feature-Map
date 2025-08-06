import React from 'react'
import { Edit3, User, Calendar, Tag } from 'lucide-react'

const Sidebar = ({ selectedNode, onNodeUpdate }) => {
  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-r border-secondary-200 p-6">
        <div className="text-center text-secondary-500">
          <Edit3 className="h-12 w-12 mx-auto mb-4 text-secondary-300" />
          <h3 className="text-lg font-medium mb-2">No Node Selected</h3>
          <p className="text-sm">
            Click on a node to view and edit its properties
          </p>
        </div>
      </div>
    )
  }

  const handleChange = (field, value) => {
    onNodeUpdate(selectedNode.id, { [field]: value })
  }

  return (
    <div className="w-80 bg-white border-r border-secondary-200 p-6 overflow-y-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Node Properties
        </h3>
        
        <div className="space-y-4">
          {/* Label */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Label
            </label>
            <input
              type="text"
              value={selectedNode.data.label || ''}
              onChange={(e) => handleChange('label', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter node label"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Description
            </label>
            <textarea
              value={selectedNode.data.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter description"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Status
            </label>
            <select
              value={selectedNode.data.status || 'active'}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="blocked">Blocked</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Priority
            </label>
            <select
              value={selectedNode.data.priority || 'medium'}
              onChange={(e) => handleChange('priority', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>

          {/* Assignee */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Assignee
            </label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-secondary-400" />
              <input
                type="text"
                value={selectedNode.data.assignee || ''}
                onChange={(e) => handleChange('assignee', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter assignee"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Tags
            </label>
            <div className="relative">
              <Tag className="absolute left-3 top-2.5 h-4 w-4 text-secondary-400" />
              <input
                type="text"
                value={selectedNode.data.tags || ''}
                onChange={(e) => handleChange('tags', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter tags (comma separated)"
              />
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Due Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-secondary-400" />
              <input
                type="date"
                value={selectedNode.data.dueDate || ''}
                onChange={(e) => handleChange('dueDate', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Node Info */}
      <div className="border-t border-secondary-200 pt-6">
        <h4 className="text-sm font-medium text-secondary-700 mb-3">Node Info</h4>
        <div className="space-y-2 text-sm text-secondary-600">
          <div className="flex justify-between">
            <span>Type:</span>
            <span className="font-medium capitalize">{selectedNode.type}</span>
          </div>
          <div className="flex justify-between">
            <span>ID:</span>
            <span className="font-mono text-xs">{selectedNode.id}</span>
          </div>
          <div className="flex justify-between">
            <span>Position:</span>
            <span className="font-mono text-xs">
              ({Math.round(selectedNode.position.x)}, {Math.round(selectedNode.position.y)})
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 