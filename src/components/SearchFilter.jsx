import React, { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'

const SearchFilter = ({ nodes, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  const filteredNodes = useMemo(() => {
    return nodes.filter(node => {
      const matchesSearch = searchTerm === '' || 
        node.data.label?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.data.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.data.assignee?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        node.data.tags?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || node.data.status === statusFilter
      const matchesType = typeFilter === 'all' || node.type === typeFilter
      const matchesPriority = priorityFilter === 'all' || node.data.priority === priorityFilter
      
      return matchesSearch && matchesStatus && matchesType && matchesPriority
    })
  }, [nodes, searchTerm, statusFilter, typeFilter, priorityFilter])

  const clearFilters = () => {
    setSearchTerm('')
    setStatusFilter('all')
    setTypeFilter('all')
    setPriorityFilter('all')
  }

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || typeFilter !== 'all' || priorityFilter !== 'all'

  // Get unique values for filters
  const statuses = [...new Set(nodes.map(n => n.data.status).filter(Boolean))]
  const types = [...new Set(nodes.map(n => n.type).filter(Boolean))]
  const priorities = [...new Set(nodes.map(n => n.data.priority).filter(Boolean))]

  React.useEffect(() => {
    onFilterChange(filteredNodes)
  }, [filteredNodes, onFilterChange])

  return (
    <div className="bg-white border-b border-secondary-200 px-4 py-3">
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-secondary-400" />
          <input
            type="text"
            placeholder="Search nodes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          {statuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        {/* Type Filter */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">All Types</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Priority Filter */}
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">All Priorities</option>
          {priorities.map(priority => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center space-x-1 px-3 py-2 text-secondary-600 hover:text-secondary-800 transition-colors"
            title="Clear all filters"
          >
            <X className="h-4 w-4" />
            <span>Clear</span>
          </button>
        )}

        {/* Results Count */}
        <div className="text-sm text-secondary-600">
          {filteredNodes.length} of {nodes.length} nodes
        </div>
      </div>
    </div>
  )
}

export default SearchFilter 