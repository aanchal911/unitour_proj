🧭 NUV Campus Navigator
<div align="center">

Interactive 3D campus navigation and path-finding system built with React + Vite.

Navigate buildings, explore floors, and calculate optimal routes across campus visually.

</div>
📌 Overview

NUV Campus Navigator is an interactive web application designed to help students and visitors easily navigate a university campus.

The application provides:

🗺️ Visual campus exploration
🧭 Smart route calculation between locations
🏢 Building & floor blueprints
📍 Step-by-step navigation guidance
🎯 Quick destination access

It combines modern UI design with graph-based pathfinding to create a smooth navigation experience.

✨ Features
🧭 Pathfinder Navigation
Select starting point and destination
Automatically calculates optimal routes
Displays step-by-step navigation instructions
🏫 Campus Visualization
Interactive campus map
Building highlighting
Outdoor & indoor navigation support
🧱 Blueprint Viewer
Multi-floor building exploration
Floor switching (Basement / Ground / Upper floors)
Room-level interaction
🎮 Interactive Controls
Map rotation & viewing angles
Compass orientation
Dynamic overlays and transitions
⚡ Modern UI
Animated interfaces using Motion
Tailwind-powered styling
Responsive layout
🛠️ Tech Stack
Category	Technology
Frontend	React 19
Build Tool	Vite
Language	TypeScript
Styling	Tailwind CSS
Animation	Motion
Icons	Lucide React
Backend Utilities	Express
AI Integration	Google GenAI SDK
📂 Project Structure
nuv-campus-navigator/
│
├── src/
│   ├── App.tsx          # Main application UI & logic
│   ├── Blueprints.tsx   # Building blueprint renderer
│   ├── data.ts          # Campus nodes & graph data
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
│
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── .env.example
⚙️ Installation & Setup
✅ Prerequisites
Node.js 18+
npm or pnpm
1️⃣ Clone the Repository
git clone <your-repo-url>
cd nuv-campus-navigator
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a file:

.env.local

Add your API key:

GEMINI_API_KEY=your_api_key_here

(See .env.example for reference.)

4️⃣ Run Development Server
npm run dev

App will start at:

http://localhost:3000
📦 Available Scripts
Command	Description
npm run dev	Start development server
npm run build	Build production bundle
npm run preview	Preview production build
npm run clean	Remove build files
npm run lint	TypeScript validation
🧠 How Navigation Works

The navigator uses a node-based graph system:

Campus locations are modeled as nodes.
Connections represent walkable paths.
Pathfinding computes the shortest route.
Results are rendered visually and as instructions.
🎯 Use Cases
New students finding classrooms
Campus visitors navigation
Event wayfinding
Digital campus kiosks
Smart campus applications
🚀 Future Improvements
📱 Mobile gesture navigation
📍 Live GPS positioning
🔊 Voice directions
🌙 Dark/light theme toggle
🧭 Real-time crowd-aware routing
🤝 Contributing

Contributions are welcome!

Fork the repo
Create a feature branch
Commit changes
Open a Pull Request
