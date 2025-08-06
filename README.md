# 🗺️ Feature Map

> **A modern, interactive feature mapping application for visualizing app features, bugs, systems, and everything in an entire application ecosystem.**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Feature Map** is a powerful, web-based tool designed to help developers, product managers, and teams visualize and manage the complete architecture of their applications. Create beautiful, interactive flowcharts that map out features, bugs, systems, databases, APIs, and security components with ease.

## ✨ Features

### 🎯 **Interactive Flowcharts**
- **Drag & Drop Interface**: Intuitive node creation and connection
- **Real-time Editing**: Edit node properties instantly
- **Multiple Node Types**: Features, Bugs, Systems, Databases, APIs, Security
- **Smart Connections**: Visual relationships between components

### 🖼️ **Export & Import**
- **PNG Export**: High-quality image export for documentation
- **SVG Export**: Scalable vector graphics for presentations
- **JSON Import/Export**: Save and share your feature maps
- **Template System**: Pre-built templates for common scenarios

### 🔍 **Advanced Search & Filter**
- **Text Search**: Search across labels, descriptions, assignees, tags
- **Status Filtering**: Filter by active, pending, blocked, completed
- **Type Filtering**: Filter by node types
- **Priority Filtering**: Filter by priority levels
- **Real-time Results**: Instant filtering with result counts

### 🎨 **Modern UI/UX**
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Theme**: Beautiful, accessible interface
- **Keyboard Shortcuts**: Power user shortcuts for efficiency
- **Help System**: Comprehensive help and documentation

### 📋 **Rich Node Properties**
- **Labels & Descriptions**: Detailed node information
- **Status Tracking**: Active, Pending, Blocked, Completed
- **Priority Levels**: Low, Medium, High, Critical
- **Assignees**: Team member assignment
- **Tags**: Custom categorization
- **Due Dates**: Timeline management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/feature-map.git
cd feature-map
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 🎮 Usage

### Creating Your First Feature Map

1. **Add Nodes**: Use the toolbar buttons or press number keys 1-6 to add different node types
2. **Connect Nodes**: Drag from the bottom handle of one node to the top handle of another
3. **Edit Properties**: Click on any node to edit its properties in the sidebar
4. **Use Templates**: Start with a pre-built template for common scenarios
5. **Search and Filter**: Use the search bar and filters to find specific nodes
6. **Export Your Work**: Save as JSON, PNG, or SVG for sharing and documentation

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save feature map |
| `Delete/Backspace` | Delete selected node |
| `Ctrl/Cmd + Z` | Undo last action |
| `Ctrl/Cmd + Shift + Z` | Redo last action |
| `1-6` | Quick add node types |
| `Drag & Drop` | Create connections |
| `Click node` | Select and edit properties |

### Node Types

| Type | Icon | Color | Description |
|------|------|-------|-------------|
| **Feature** | ⚡ | Blue | New app features and functionality |
| **Bug** | 🐛 | Red | Issues and bugs that need fixing |
| **System** | ⚙️ | Purple | System components and infrastructure |
| **Database** | 🗄️ | Green | Database entities and schemas |
| **API** | 🌐 | Orange | API endpoints and services |
| **Security** | 🛡️ | Indigo | Security features and measures |

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Project Structure

```
src/
├── components/
│   ├── FeatureMap.jsx       # Main flowchart component
│   ├── CustomNode.jsx       # Custom node component
│   ├── Sidebar.jsx          # Node properties sidebar
│   ├── Toolbar.jsx          # Node creation toolbar
│   ├── ImageExport.jsx      # PNG/SVG export functionality
│   ├── SearchFilter.jsx     # Search and filter system
│   ├── Templates.jsx        # Pre-built templates
│   ├── KeyboardShortcuts.jsx # Keyboard navigation
│   └── HelpModal.jsx        # Help and documentation
├── App.jsx                  # Main app component
├── main.jsx                # React entry point
└── index.css               # Global styles
```

## 🎯 Use Cases

### For Developers
- **System Architecture**: Map out your application's architecture
- **Feature Planning**: Plan new features and their dependencies
- **Bug Tracking**: Visualize bug workflows and dependencies
- **API Documentation**: Document API relationships and flows

### For Product Managers
- **Feature Roadmaps**: Create visual feature roadmaps
- **Dependency Management**: Understand feature dependencies
- **Team Coordination**: Assign features to team members
- **Stakeholder Communication**: Share visual representations

### For Teams
- **Onboarding**: Help new team members understand the system
- **Documentation**: Create living documentation of your application
- **Planning**: Plan sprints and releases visually
- **Collaboration**: Share and discuss feature maps

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ReactFlow](https://reactflow.dev/) - Interactive flowchart library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [Vite](https://vitejs.dev/) - Fast build tool

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/feature-map/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/feature-map/discussions)
- **Email**: support@featuremap.dev

---

**Made with ❤️ by the Feature Map Team**

## Features

- 🎯 **Interactive Flowcharts**: Create beautiful, interactive flowcharts using ReactFlow
- 🏷️ **Multiple Node Types**: Support for features, bugs, systems, databases, APIs, and security components
- 📝 **Rich Node Properties**: Add descriptions, status, priority, assignees, tags, and due dates
- 🔄 **Real-time Editing**: Edit node properties in real-time through the sidebar
- 📤 **Export/Import**: Export your feature maps as JSON and import them back
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🖱️ **Drag & Drop**: Intuitive drag and drop interface for creating connections

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd feature-map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

### Adding Nodes

1. Use the toolbar buttons to add different types of nodes:
   - **Feature**: New app features
   - **Bug**: Issues and bugs
   - **System**: System components
   - **Database**: Database entities
   - **API**: API endpoints
   - **Security**: Security features

2. Click on a node to select it and edit its properties in the sidebar

### Creating Connections

1. Drag from the bottom handle of one node to the top handle of another node
2. Connections will automatically be created between the nodes

### Editing Node Properties

1. Click on any node to select it
2. Use the sidebar to edit:
   - Label
   - Description
   - Status (Active, Pending, Blocked, Completed)
   - Priority (Low, Medium, High, Critical)
   - Assignee
   - Tags
   - Due Date

### Exporting and Importing

- **Export**: Click the "Export" button to download your feature map as a JSON file
- **Import**: Click the "Import" button to upload a previously exported JSON file

## Node Types

| Type | Icon | Color | Description |
|------|------|-------|-------------|
| Feature | ⚡ | Blue | New app features and functionality |
| Bug | 🐛 | Red | Issues and bugs that need fixing |
| System | ⚙️ | Purple | System components and infrastructure |
| Database | 🗄️ | Green | Database entities and schemas |
| API | 🌐 | Orange | API endpoints and services |
| Security | 🛡️ | Indigo | Security features and measures |

## Status Types

- **Active**: Currently being worked on
- **Pending**: Waiting to be started
- **Blocked**: Blocked by dependencies or issues
- **Completed**: Finished and deployed

## Priority Levels

- **Low**: Nice to have, low impact
- **Medium**: Standard priority
- **High**: Important, high impact
- **Critical**: Must have, blocking other work

## Tech Stack

- **React 18**: Modern React with hooks
- **ReactFlow**: Interactive flowchart library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Vite**: Fast build tool and dev server

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Project Structure

```
src/
├── components/
│   ├── FeatureMap.jsx    # Main flowchart component
│   ├── CustomNode.jsx    # Custom node component
│   ├── Sidebar.jsx       # Node properties sidebar
│   └── Toolbar.jsx       # Node creation toolbar
├── App.jsx               # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] Image export functionality
- [ ] Collaboration features
- [ ] Templates and presets
- [ ] Advanced filtering and search
- [ ] Version history
- [ ] Real-time collaboration
- [ ] Integration with project management tools 