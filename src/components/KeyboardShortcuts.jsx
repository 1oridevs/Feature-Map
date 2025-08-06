import React, { useEffect } from 'react'

const KeyboardShortcuts = ({ onAddNode, onDeleteNode, onUndo, onRedo, onSave }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't trigger shortcuts when typing in input fields
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return
      }

      // Ctrl/Cmd + S: Save
      if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault()
        onSave?.()
      }

      // Delete/Backspace: Delete selected node
      if (event.key === 'Delete' || event.key === 'Backspace') {
        event.preventDefault()
        onDeleteNode?.()
      }

      // Ctrl/Cmd + Z: Undo
      if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
        event.preventDefault()
        onUndo?.()
      }

      // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y: Redo
      if ((event.ctrlKey || event.metaKey) && ((event.shiftKey && event.key === 'z') || event.key === 'y')) {
        event.preventDefault()
        onRedo?.()
      }

      // Number keys for quick node creation
      if (event.key >= '1' && event.key <= '6') {
        const nodeTypes = ['feature', 'bug', 'system', 'database', 'api', 'security']
        const nodeType = nodeTypes[parseInt(event.key) - 1]
        if (nodeType) {
          event.preventDefault()
          onAddNode?.(nodeType)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onAddNode, onDeleteNode, onUndo, onRedo, onSave])

  return null // This component doesn't render anything
}

export default KeyboardShortcuts 