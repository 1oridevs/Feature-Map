import React from 'react'
import { Map, Plus, FileText, Download, Sparkles, ArrowRight } from 'lucide-react'

const WelcomeScreen = ({ onStartBlank, onLoadTemplate, onImportFile }) => {
  const quickStarts = [
    {
      icon: Plus,
      title: 'Start Blank',
      description: 'Create a new feature map from scratch',
      action: onStartBlank,
      color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
    },
    {
      icon: FileText,
      title: 'Use Template',
      description: 'Choose from pre-built templates',
      action: onLoadTemplate,
      color: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
    },
    {
      icon: Download,
      title: 'Import File',
      description: 'Load an existing feature map',
      action: onImportFile,
      color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
    }
  ]

  const tips = [
    'Use keyboard shortcuts (1-6) to quickly add different node types',
    'Drag from node handles to create connections',
    'Click on nodes to edit their properties in the sidebar',
    'Use the search bar to find specific nodes',
    'Export your work as PNG, SVG, or JSON for sharing'
  ]

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white bg-opacity-20 rounded-xl">
              <Map className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome to Feature Map</h1>
              <p className="text-primary-100 mt-1">Create beautiful, interactive feature maps for your applications</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Start */}
            <div>
              <h2 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary-600" />
                Quick Start
              </h2>
              
              <div className="space-y-3">
                {quickStarts.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={index}
                      onClick={item.action}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center space-x-4 ${item.color}`}
                    >
                      <Icon className="h-6 w-6" />
                      <div className="text-left">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm opacity-80">{item.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 ml-auto" />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Tips */}
            <div>
              <h2 className="text-xl font-semibold text-secondary-900 mb-4">Quick Tips</h2>
              
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-secondary-700">{tip}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-2">What you can do:</h3>
                <ul className="text-sm text-primary-700 space-y-1">
                  <li>• Create interactive flowcharts with drag & drop</li>
                  <li>• Add rich properties to nodes (status, priority, assignee)</li>
                  <li>• Search and filter nodes by various criteria</li>
                  <li>• Export as images or JSON for documentation</li>
                  <li>• Use pre-built templates for common scenarios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-secondary-200 text-center">
            <p className="text-sm text-secondary-600">
              Ready to start mapping your features? Choose an option above or{' '}
              <button
                onClick={onStartBlank}
                className="text-primary-600 hover:text-primary-700 font-medium underline"
              >
                start with a blank canvas
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeScreen 