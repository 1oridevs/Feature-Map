import React, { useRef, useCallback } from 'react'
import { Download, Image, FileText } from 'lucide-react'

const ImageExport = ({ nodes, edges }) => {
  const canvasRef = useRef(null)

  const exportAsPNG = useCallback(async () => {
    try {
      // Create a canvas element
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // Set canvas size (you can adjust this)
      canvas.width = 1920
      canvas.height = 1080
      
      // Fill background
      ctx.fillStyle = '#f8fafc'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw nodes
      nodes.forEach(node => {
        const x = node.position.x
        const y = node.position.y
        
        // Draw node background
        ctx.fillStyle = getNodeColor(node.type)
        ctx.fillRect(x, y, 200, 80)
        
        // Draw node border
        ctx.strokeStyle = getNodeBorderColor(node.type)
        ctx.lineWidth = 2
        ctx.strokeRect(x, y, 200, 80)
        
        // Draw node text
        ctx.fillStyle = '#1f2937'
        ctx.font = '14px Inter, sans-serif'
        ctx.fillText(node.data.label || 'Unnamed Node', x + 10, y + 25)
        
        // Draw status
        ctx.fillStyle = getStatusColor(node.data.status)
        ctx.fillText(node.data.status || 'active', x + 10, y + 45)
        
        // Draw priority
        ctx.fillStyle = getPriorityColor(node.data.priority)
        ctx.fillText(node.data.priority || 'medium', x + 10, y + 65)
      })
      
      // Draw edges
      edges.forEach(edge => {
        const sourceNode = nodes.find(n => n.id === edge.source)
        const targetNode = nodes.find(n => n.id === edge.target)
        
        if (sourceNode && targetNode) {
          const startX = sourceNode.position.x + 100
          const startY = sourceNode.position.y + 40
          const endX = targetNode.position.x + 100
          const endY = targetNode.position.y + 40
          
          // Draw edge line
          ctx.strokeStyle = '#6b7280'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          ctx.lineTo(endX, endY)
          ctx.stroke()
          
          // Draw arrow
          const angle = Math.atan2(endY - startY, endX - startX)
          const arrowLength = 10
          ctx.beginPath()
          ctx.moveTo(endX, endY)
          ctx.lineTo(endX - arrowLength * Math.cos(angle - Math.PI / 6), endY - arrowLength * Math.sin(angle - Math.PI / 6))
          ctx.moveTo(endX, endY)
          ctx.lineTo(endX - arrowLength * Math.cos(angle + Math.PI / 6), endY - arrowLength * Math.sin(angle + Math.PI / 6))
          ctx.stroke()
        }
      })
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'feature-map.png'
        a.click()
        URL.revokeObjectURL(url)
      }, 'image/png')
    } catch (error) {
      console.error('Error exporting as PNG:', error)
    }
  }, [nodes, edges])

  const exportAsSVG = useCallback(() => {
    try {
      // Calculate bounds
      const minX = Math.min(...nodes.map(n => n.position.x))
      const minY = Math.min(...nodes.map(n => n.position.y))
      const maxX = Math.max(...nodes.map(n => n.position.x + 200))
      const maxY = Math.max(...nodes.map(n => n.position.y + 80))
      
      const width = maxX - minX + 100
      const height = maxY - minY + 100
      
      let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`
      svg += `<rect width="100%" height="100%" fill="#f8fafc"/>`
      
      // Add edges first (so they appear behind nodes)
      edges.forEach(edge => {
        const sourceNode = nodes.find(n => n.id === edge.source)
        const targetNode = nodes.find(n => n.id === edge.target)
        
        if (sourceNode && targetNode) {
          const startX = sourceNode.position.x - minX + 100
          const startY = sourceNode.position.y - minY + 40
          const endX = targetNode.position.x - minX + 100
          const endY = targetNode.position.y - minY + 40
          
          svg += `<line x1="${startX}" y1="${startY}" x2="${endX}" y2="${endY}" stroke="#6b7280" stroke-width="2"/>`
          
          // Add arrow
          const angle = Math.atan2(endY - startY, endX - startX)
          const arrowLength = 10
          const arrowX1 = endX - arrowLength * Math.cos(angle - Math.PI / 6)
          const arrowY1 = endY - arrowLength * Math.sin(angle - Math.PI / 6)
          const arrowX2 = endX - arrowLength * Math.cos(angle + Math.PI / 6)
          const arrowY2 = endY - arrowLength * Math.sin(angle + Math.PI / 6)
          
          svg += `<line x1="${endX}" y1="${endY}" x2="${arrowX1}" y2="${arrowY1}" stroke="#6b7280" stroke-width="2"/>`
          svg += `<line x1="${endX}" y1="${endY}" x2="${arrowX2}" y2="${arrowY2}" stroke="#6b7280" stroke-width="2"/>`
        }
      })
      
      // Add nodes
      nodes.forEach(node => {
        const x = node.position.x - minX + 50
        const y = node.position.y - minY + 50
        
        svg += `<rect x="${x}" y="${y}" width="200" height="80" fill="${getNodeColor(node.type)}" stroke="${getNodeBorderColor(node.type)}" stroke-width="2" rx="8"/>`
        svg += `<text x="${x + 10}" y="${y + 25}" font-family="Inter, sans-serif" font-size="14" fill="#1f2937">${node.data.label || 'Unnamed Node'}</text>`
        svg += `<text x="${x + 10}" y="${y + 45}" font-family="Inter, sans-serif" font-size="12" fill="${getStatusColor(node.data.status)}">${node.data.status || 'active'}</text>`
        svg += `<text x="${x + 10}" y="${y + 65}" font-family="Inter, sans-serif" font-size="12" fill="${getPriorityColor(node.data.priority)}">${node.data.priority || 'medium'}</text>`
      })
      
      svg += '</svg>'
      
      // Download SVG
      const blob = new Blob([svg], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'feature-map.svg'
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error exporting as SVG:', error)
    }
  }, [nodes, edges])

  const getNodeColor = (type) => {
    switch (type) {
      case 'feature': return '#dbeafe'
      case 'bug': return '#fecaca'
      case 'system': return '#e9d5ff'
      case 'database': return '#bbf7d0'
      case 'api': return '#fed7aa'
      case 'security': return '#c7d2fe'
      default: return '#f3f4f6'
    }
  }

  const getNodeBorderColor = (type) => {
    switch (type) {
      case 'feature': return '#3b82f6'
      case 'bug': return '#ef4444'
      case 'system': return '#8b5cf6'
      case 'database': return '#22c55e'
      case 'api': return '#f97316'
      case 'security': return '#6366f1'
      default: return '#6b7280'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#059669'
      case 'pending': return '#d97706'
      case 'blocked': return '#dc2626'
      case 'completed': return '#059669'
      default: return '#6b7280'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#dc2626'
      case 'medium': return '#d97706'
      case 'low': return '#059669'
      case 'critical': return '#7c2d12'
      default: return '#6b7280'
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={exportAsPNG}
        className="btn-secondary flex items-center space-x-2"
        title="Export as PNG"
      >
        <Image className="h-4 w-4" />
        <span>PNG</span>
      </button>
      
      <button
        onClick={exportAsSVG}
        className="btn-secondary flex items-center space-x-2"
        title="Export as SVG"
      >
        <FileText className="h-4 w-4" />
        <span>SVG</span>
      </button>
    </div>
  )
}

export default ImageExport 