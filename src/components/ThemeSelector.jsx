import React from 'react'
import { Palette, Sun, Moon, Monitor } from 'lucide-react'

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'light', name: 'Light', icon: Sun, description: 'Clean light theme' },
    { id: 'dark', name: 'Dark', icon: Moon, description: 'Easy on the eyes' },
    { id: 'auto', name: 'Auto', icon: Monitor, description: 'Follows system' },
    { id: 'blue', name: 'Blue', icon: Palette, description: 'Professional blue' },
    { id: 'green', name: 'Green', icon: Palette, description: 'Nature inspired' },
    { id: 'purple', name: 'Purple', icon: Palette, description: 'Creative purple' }
  ]

  return (
    <div className="bg-white border border-secondary-200 rounded-lg shadow-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Palette className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-secondary-900">Theme</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme) => {
          const Icon = theme.icon
          const isActive = currentTheme === theme.id
          
          return (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                isActive
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-secondary-200 hover:border-primary-300 hover:bg-secondary-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                <Icon className={`h-4 w-4 ${isActive ? 'text-primary-600' : 'text-secondary-500'}`} />
                <span className="font-medium">{theme.name}</span>
              </div>
              <p className="text-xs text-secondary-600">{theme.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ThemeSelector 