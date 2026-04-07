<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>NUV Campus Navigator</title>

  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: auto;
      padding: 20px;
      background: #fafafa;
      color: #222;
    }

    h1, h2, h3 {
      color: #0f172a;
    }

    code {
      background: #f1f5f9;
      padding: 3px 6px;
      border-radius: 5px;
    }

    pre {
      background: #0f172a;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      overflow-x: auto;
    }

    .center {
      text-align: center;
    }

    .badge {
      display: inline-block;
      padding: 6px 10px;
      background: #2563eb;
      color: white;
      border-radius: 6px;
      margin: 4px;
      font-size: 14px;
    }

    img.preview {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      margin: 20px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    th, td {
      padding: 10px;
      text-align: left;
    }

    th {
      background: #f1f5f9;
    }
  </style>
</head>

<body>

<div class="center">

<h1>🧭 NUV Campus Navigator</h1>

<p>
Interactive 3D campus navigation and path-finding system built with
<strong>React + Vite</strong>.
</p>

<span class="badge">React</span>
<span class="badge">Vite</span>
<span class="badge">TypeScript</span>
<span class="badge">Tailwind CSS</span>

</div>

<hr/>

<h2>🎬 Demo Preview</h2>

<p class="center">
<!-- Replace with your GIF -->
<img class="preview" src="preview.gif" alt="NUV Campus Navigator Demo GIF"/>
</p>

<hr/>

<h2>📌 Overview</h2>

<p>
<strong>NUV Campus Navigator</strong> is an interactive web application that helps
students and visitors easily navigate a university campus using visual maps
and intelligent route calculation.
</p>

<ul>
  <li>🗺️ Interactive campus exploration</li>
  <li>🧭 Smart pathfinding between locations</li>
  <li>🏢 Building and floor blueprints</li>
  <li>📍 Step-by-step navigation</li>
</ul>

<hr/>

<h2>✨ Features</h2>

<h3>🧭 Pathfinder Navigation</h3>
<ul>
  <li>Select start and destination points</li>
  <li>Automatic shortest-path calculation</li>
  <li>Navigation instructions</li>
</ul>

<h3>🏫 Campus Visualization</h3>
<ul>
  <li>Interactive campus map</li>
  <li>Building highlighting</li>
  <li>Indoor & outdoor navigation</li>
</ul>

<h3>🎮 Interactive UI</h3>
<ul>
  <li>Animated transitions</li>
  <li>Compass orientation</li>
  <li>Responsive design</li>
</ul>

<hr/>

<h2>🛠️ Tech Stack</h2>

<table>
<tr><th>Category</th><th>Technology</th></tr>
<tr><td>Frontend</td><td>React 19</td></tr>
<tr><td>Build Tool</td><td>Vite</td></tr>
<tr><td>Language</td><td>TypeScript</td></tr>
<tr><td>Styling</td><td>Tailwind CSS</td></tr>
<tr><td>Animation</td><td>Motion</td></tr>
<tr><td>Backend Utilities</td><td>Express</td></tr>
<tr><td>AI Integration</td><td>Google GenAI SDK</td></tr>
</table>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
nuv-campus-navigator/
│
├── src/
│   ├── App.tsx
│   ├── Blueprints.tsx
│   ├── data.ts
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── vite.config.ts
├── package.json
└── .env.example
</pre>

<hr/>

<h2>⚙️ Installation</h2>

<h3>1️⃣ Clone Repository</h3>

<pre>
git clone &lt;your-repo-url&gt;
cd nuv-campus-navigator
</pre>

<h3>2️⃣ Install Dependencies</h3>

<pre>
npm install
</pre>

<h3>3️⃣ Setup Environment Variables</h3>

<pre>
GEMINI_API_KEY=your_api_key_here
</pre>

<h3>4️⃣ Run Development Server</h3>

<pre>
npm run dev
</pre>

<p>Open: <code>http://localhost:3000</code></p>

<hr/>

<h2>🧠 How Navigation Works</h2>

<ol>
  <li>Campus locations are modeled as nodes.</li>
  <li>Paths connect walkable routes.</li>
  <li>Shortest-path algorithm computes navigation.</li>
  <li>Results render visually and as instructions.</li>
</ol>

<hr/>

<h2>🚀 Future Improvements</h2>

<ul>
  <li>📱 Mobile gesture navigation</li>
  <li>📍 Live GPS positioning</li>
  <li>🔊 Voice directions</li>
  <li>🌙 Dark mode</li>
</ul>

<hr/>

<h2>🤝 Contributing</h2>

<ol>
  <li>Fork the repository</li>
  <li>Create a feature branch</li>
  <li>Commit changes</li>
  <li>Open a Pull Request</li>
</ol>

<hr/>

<h2>📄 License</h2>

<p>MIT License</p>

<hr/>

<div class="center">
<p><strong>Built with ❤️ by Aanchal</strong></p>
</div>

</body>
</html>
