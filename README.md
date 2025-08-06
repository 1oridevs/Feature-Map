# Feature Map

A modern, interactive feature mapping application for visualizing app features, bugs, systems, and everything in an entire application ecosystem.

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