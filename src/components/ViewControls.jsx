import React from 'react'
import { Map, Grid, Eye, EyeOff, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

const ViewControls = ({ 
  showMinimap, 
  onToggleMinimap, 
  showGrid, 
  onToggleGrid,
  onZoomIn,
  onZoomOut,
  onFitView
}) => {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-secondary-200 p-2 z-10">
      <div className="flex flex-col space-y-1">
        <button
          onClick={onToggleMinimap}
          className={`p-2 rounded-md transition-colors ${
            showMinimap 
              ? 'bg-primary-100 text-primary-600' 
              : 'text-secondary-600 hover:bg-secondary-100'
          }`}
          title={showMinimap ? 'Hide minimap' : 'Show minimap'}
        >
          {showMinimap ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
        </button>
        
        <button
          onClick={onToggleGrid}
          className={`p-2 rounded-md transition-colors ${
            showGrid 
              ? 'bg-primary-100 text-primary-600' 
              : 'text-secondary-600 hover:bg-secondary-100'
          }`}
          title={showGrid ? 'Hide grid' : 'Show grid'}
        >
          <Grid className="h-4 w-4" />
        </button>
        
        <div className="border-t border-secondary-200 my-1"></div>
        
        <button
          onClick={onZoomIn}
          className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-md transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        
        <button
          onClick={onZoomOut}
          className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-md transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        
        <button
          onClick={onFitView}
          className="p-2 text-secondary-600 hover:bg-secondary-100 rounded-md transition-colors"
          title="Fit to view"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ViewControls 