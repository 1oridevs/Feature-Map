import React from 'react'
import { FileText, Zap, Bug, Settings, Database, Globe, Shield } from 'lucide-react'

const Templates = ({ onLoadTemplate }) => {
  const templates = [
    {
      id: 'web-app',
      name: 'Web Application',
      description: 'Basic web application structure with frontend, backend, and database',
      icon: Globe,
      nodes: [
        { id: 'frontend', type: 'feature', position: { x: 100, y: 100 }, data: { label: 'Frontend UI', description: 'React/Vue/Angular frontend', status: 'active', priority: 'high' } },
        { id: 'backend', type: 'system', position: { x: 400, y: 100 }, data: { label: 'Backend API', description: 'Node.js/Python backend', status: 'active', priority: 'high' } },
        { id: 'database', type: 'database', position: { x: 700, y: 100 }, data: { label: 'Database', description: 'PostgreSQL/MongoDB', status: 'active', priority: 'high' } },
        { id: 'auth', type: 'security', position: { x: 250, y: 300 }, data: { label: 'Authentication', description: 'User login and registration', status: 'pending', priority: 'high' } },
        { id: 'deployment', type: 'system', position: { x: 550, y: 300 }, data: { label: 'Deployment', description: 'Docker and CI/CD', status: 'pending', priority: 'medium' } }
      ],
      edges: [
        { id: 'e1', source: 'frontend', target: 'backend' },
        { id: 'e2', source: 'backend', target: 'database' },
        { id: 'e3', source: 'frontend', target: 'auth' },
        { id: 'e4', source: 'backend', target: 'auth' },
        { id: 'e5', source: 'backend', target: 'deployment' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platform',
      description: 'Complete e-commerce system with products, orders, and payments',
      icon: Zap,
      nodes: [
        { id: 'catalog', type: 'feature', position: { x: 100, y: 100 }, data: { label: 'Product Catalog', description: 'Product listing and search', status: 'active', priority: 'high' } },
        { id: 'cart', type: 'feature', position: { x: 350, y: 100 }, data: { label: 'Shopping Cart', description: 'Add/remove items', status: 'active', priority: 'high' } },
        { id: 'checkout', type: 'feature', position: { x: 600, y: 100 }, data: { label: 'Checkout', description: 'Payment processing', status: 'pending', priority: 'high' } },
        { id: 'orders', type: 'system', position: { x: 850, y: 100 }, data: { label: 'Order Management', description: 'Track and manage orders', status: 'pending', priority: 'medium' } },
        { id: 'inventory', type: 'database', position: { x: 250, y: 300 }, data: { label: 'Inventory DB', description: 'Product stock management', status: 'active', priority: 'high' } },
        { id: 'payments', type: 'api', position: { x: 500, y: 300 }, data: { label: 'Payment Gateway', description: 'Stripe/PayPal integration', status: 'pending', priority: 'high' } },
        { id: 'security', type: 'security', position: { x: 750, y: 300 }, data: { label: 'Security', description: 'SSL, fraud detection', status: 'active', priority: 'critical' } }
      ],
      edges: [
        { id: 'e1', source: 'catalog', target: 'cart' },
        { id: 'e2', source: 'cart', target: 'checkout' },
        { id: 'e3', source: 'checkout', target: 'orders' },
        { id: 'e4', source: 'catalog', target: 'inventory' },
        { id: 'e5', source: 'checkout', target: 'payments' },
        { id: 'e6', source: 'checkout', target: 'security' }
      ]
    },
    {
      id: 'mobile-app',
      name: 'Mobile Application',
      description: 'Mobile app with offline support and push notifications',
      icon: Zap,
      nodes: [
        { id: 'mobile-ui', type: 'feature', position: { x: 100, y: 100 }, data: { label: 'Mobile UI', description: 'React Native/Flutter', status: 'active', priority: 'high' } },
        { id: 'api', type: 'api', position: { x: 400, y: 100 }, data: { label: 'REST API', description: 'Backend API endpoints', status: 'active', priority: 'high' } },
        { id: 'database', type: 'database', position: { x: 700, y: 100 }, data: { label: 'Database', description: 'User data and content', status: 'active', priority: 'high' } },
        { id: 'offline', type: 'feature', position: { x: 250, y: 300 }, data: { label: 'Offline Support', description: 'Local storage and sync', status: 'pending', priority: 'medium' } },
        { id: 'notifications', type: 'feature', position: { x: 500, y: 300 }, data: { label: 'Push Notifications', description: 'Firebase/APNS', status: 'pending', priority: 'medium' } },
        { id: 'analytics', type: 'system', position: { x: 750, y: 300 }, data: { label: 'Analytics', description: 'User behavior tracking', status: 'pending', priority: 'low' } }
      ],
      edges: [
        { id: 'e1', source: 'mobile-ui', target: 'api' },
        { id: 'e2', source: 'api', target: 'database' },
        { id: 'e3', source: 'mobile-ui', target: 'offline' },
        { id: 'e4', source: 'api', target: 'notifications' },
        { id: 'e5', source: 'mobile-ui', target: 'analytics' }
      ]
    },
    {
      id: 'bug-tracking',
      name: 'Bug Tracking System',
      description: 'Bug tracking and issue management workflow',
      icon: Bug,
      nodes: [
        { id: 'bug-report', type: 'bug', position: { x: 100, y: 100 }, data: { label: 'Bug Report', description: 'User reports a bug', status: 'active', priority: 'high' } },
        { id: 'triage', type: 'system', position: { x: 350, y: 100 }, data: { label: 'Triage', description: 'Review and categorize', status: 'active', priority: 'medium' } },
        { id: 'investigation', type: 'bug', position: { x: 600, y: 100 }, data: { label: 'Investigation', description: 'Developer investigates', status: 'pending', priority: 'high' } },
        { id: 'fix', type: 'feature', position: { x: 850, y: 100 }, data: { label: 'Fix Implementation', description: 'Code the fix', status: 'pending', priority: 'high' } },
        { id: 'testing', type: 'system', position: { x: 250, y: 300 }, data: { label: 'Testing', description: 'QA testing', status: 'pending', priority: 'medium' } },
        { id: 'deployment', type: 'system', position: { x: 500, y: 300 }, data: { label: 'Deployment', description: 'Deploy to production', status: 'pending', priority: 'high' } },
        { id: 'verification', type: 'bug', position: { x: 750, y: 300 }, data: { label: 'Verification', description: 'Verify fix works', status: 'pending', priority: 'medium' } }
      ],
      edges: [
        { id: 'e1', source: 'bug-report', target: 'triage' },
        { id: 'e2', source: 'triage', target: 'investigation' },
        { id: 'e3', source: 'investigation', target: 'fix' },
        { id: 'e4', source: 'fix', target: 'testing' },
        { id: 'e5', source: 'testing', target: 'deployment' },
        { id: 'e6', source: 'deployment', target: 'verification' }
      ]
    }
  ]

  const handleLoadTemplate = (template) => {
    if (window.confirm(`Load "${template.name}" template? This will replace your current feature map.`)) {
      onLoadTemplate(template.nodes, template.edges)
    }
  }

  return (
    <div className="bg-white border-b border-secondary-200 px-4 py-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-secondary-900">Templates</h3>
        <span className="text-sm text-secondary-600">Quick start with pre-built templates</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => {
          const Icon = template.icon
          return (
            <button
              key={template.id}
              onClick={() => handleLoadTemplate(template)}
              className="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 text-left group"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon className="h-6 w-6 text-primary-600 group-hover:text-primary-700" />
                <h4 className="font-medium text-secondary-900 group-hover:text-primary-700">
                  {template.name}
                </h4>
              </div>
              <p className="text-sm text-secondary-600 mb-3">
                {template.description}
              </p>
              <div className="flex items-center justify-between text-xs text-secondary-500">
                <span>{template.nodes.length} nodes</span>
                <span>{template.edges.length} connections</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Templates 