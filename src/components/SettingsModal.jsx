import React, { useState } from 'react'
import { X, Settings, Palette, Sliders, Save, RotateCcw } from 'lucide-react'
import ThemeSelector from './ThemeSelector'

const SettingsModal = ({ isOpen, onClose, currentTheme, onThemeChange, onResetSettings }) => {
  const [activeTab, setActiveTab] = useState('theme')

  if (!isOpen) return null

  const tabs = [
    { id: 'theme', name: 'Theme', icon: Palette },
    { id: 'preferences', name: 'Preferences', icon: Sliders }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-secondary-200">
          <div className="flex items-center space-x-3">
            <Settings className="h-6 w-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-secondary-900">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-secondary-600" />
          </button>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-48 border-r border-secondary-200 bg-secondary-50">
            <div className="p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        isActive
                          ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-500'
                          : 'text-secondary-600 hover:bg-secondary-100'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {activeTab === 'theme' && (
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Choose Theme</h3>
                <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Preferences</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Auto-save interval (minutes)
                    </label>
                    <select className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="1">1 minute</option>
                      <option value="5">5 minutes</option>
                      <option value="10">10 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="0">Disabled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Default node type
                    </label>
                    <select className="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option value="feature">Feature</option>
                      <option value="bug">Bug</option>
                      <option value="system">System</option>
                      <option value="database">Database</option>
                      <option value="api">API</option>
                      <option value="security">Security</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="auto-connect"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <label htmlFor="auto-connect" className="text-sm text-secondary-700">
                      Auto-connect nodes when dragging
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="show-labels"
                      defaultChecked
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <label htmlFor="show-labels" className="text-sm text-secondary-700">
                      Show node labels by default
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="snap-to-grid"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                    />
                    <label htmlFor="snap-to-grid" className="text-sm text-secondary-700">
                      Snap nodes to grid
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-secondary-200">
                  <button
                    onClick={onResetSettings}
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-secondary-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Reset to defaults</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-secondary-200 bg-secondary-50">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-secondary-600 hover:text-secondary-900 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="btn-primary flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal 