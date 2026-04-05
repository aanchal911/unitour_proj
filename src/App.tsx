/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Map as MapIcon, 
  Navigation, 
  Info, 
  ChevronRight, 
  X, 
  Search, 
  MapPin, 
  Layers,
  ArrowRight,
  RotateCcw,
  Plus,
  Minus,
  Menu,
  Waypoints,
  Layout,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { blockData, NODES, EDGES } from './data';
import { BlueprintRenderer } from './Blueprints';

// --- Dijkstra Algorithm ---
function findShortestPath(startId: string, endId: string) {
  const graph: Record<string, Record<string, number>> = {};
  
  // Build adjacency list
  Object.keys(NODES).forEach(id => graph[id] = {});
  EDGES.forEach(([u, v, w]) => {
    const uStr = u as string;
    const vStr = v as string;
    const wNum = w as number;
    graph[uStr][vStr] = wNum;
    graph[vStr][uStr] = wNum;
  });

  const distances: Record<string, number> = {};
  const previous: Record<string, string | null> = {};
  const queue = new Set<string>();

  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
    queue.add(node);
  });

  distances[startId] = 0;

  while (queue.size > 0) {
    let closestNode: string | null = null;
    queue.forEach(node => {
      if (closestNode === null || distances[node] < distances[closestNode]) {
        closestNode = node;
      }
    });

    if (!closestNode || distances[closestNode] === Infinity) break;
    if (closestNode === endId) break;

    queue.delete(closestNode);

    for (const neighbor in graph[closestNode]) {
      if (queue.has(neighbor)) {
        const alt = distances[closestNode] + graph[closestNode][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = closestNode;
        }
      }
    }
  }

  const path: string[] = [];
  let current: string | null = endId;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path: path[0] === startId ? path : [],
    distance: Math.round(distances[endId] || 0)
  };
}

const NodeMap = ({ route }: { route: { path: string[] } | null }) => {
  return (
    <div className="absolute inset-0 bg-[#050a19] flex flex-col items-center justify-center p-8 overflow-auto custom-scrollbar">
      <div className="w-full max-w-5xl aspect-video bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 font-teko text-4xl text-white/20 tracking-[10px] uppercase">Campus Schematic</div>
        
        <svg viewBox="0 0 1000 600" className="w-full h-full">
          {/* Schematic Buildings */}
          <rect x="50" y="100" width="400" height="150" fill="rgba(74, 158, 255, 0.1)" stroke="#4a9eff" strokeWidth="2" rx="10" />
          <text x="250" y="180" textAnchor="middle" className="fill-[#4a9eff] font-teko text-2xl opacity-50">BLOCK A</text>
          
          <rect x="650" y="150" width="200" height="200" fill="rgba(255, 106, 68, 0.1)" stroke="#ff6a44" strokeWidth="2" rx="10" />
          <text x="750" y="260" textAnchor="middle" className="fill-[#ff6a44] font-teko text-2xl opacity-50">BLOCK B</text>
          
          <rect x="100" y="400" width="250" height="120" fill="rgba(68, 204, 136, 0.1)" stroke="#44cc88" strokeWidth="2" rx="10" />
          <text x="225" y="465" textAnchor="middle" className="fill-[#44cc88] font-teko text-2xl opacity-50">BLOCK C</text>

          {/* Edges */}
          {EDGES.map(([u, v], i) => {
            const nodeU = NODES[u as keyof typeof NODES];
            const nodeV = NODES[v as keyof typeof NODES];
            if (!nodeU || !nodeV) return null;
            
            // Simple mapping for schematic positions
            const getPos = (id: string) => {
              if (id === 'gate1') return { x: 50, y: 300 };
              if (id === 'gate2') return { x: 50, y: 550 };
              if (id === 'c_admission') return { x: 200, y: 420 };
              if (id === 'amphi_g') return { x: 400, y: 350 };
              if (id === 'b_g_lobby') return { x: 650, y: 250 };
              if (id === 'a_g_reception') return { x: 450, y: 200 };
              if (id.startsWith('a_')) return { x: 250, y: 150 };
              if (id.startsWith('b_')) return { x: 750, y: 250 };
              if (id.startsWith('c_')) return { x: 225, y: 460 };
              return { x: 500, y: 300 };
            };
            
            const uStr = u as string;
            const vStr = v as string;
            const p1 = getPos(uStr);
            const p2 = getPos(vStr);
            
            const isPath = route?.path.includes(uStr) && route?.path.includes(vStr) && 
                           Math.abs(route.path.indexOf(uStr) - route.path.indexOf(vStr)) === 1;

            return (
              <line 
                key={i} 
                x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} 
                stroke={isPath ? '#ef4444' : 'rgba(255,255,255,0.1)'} 
                strokeWidth={isPath ? 4 : 1} 
              />
            );
          })}

          {/* Nodes */}
          {Object.entries(NODES).map(([id, node]) => {
             const getPos = (id: string) => {
              if (id === 'gate1') return { x: 50, y: 300 };
              if (id === 'gate2') return { x: 50, y: 550 };
              if (id === 'c_admission') return { x: 200, y: 420 };
              if (id === 'amphi_g') return { x: 400, y: 350 };
              if (id === 'b_g_lobby') return { x: 650, y: 250 };
              if (id === 'a_g_reception') return { x: 450, y: 200 };
              if (id.startsWith('a_')) return { x: 250, y: 150 };
              if (id.startsWith('b_')) return { x: 750, y: 250 };
              if (id.startsWith('c_')) return { x: 225, y: 460 };
              return { x: 500, y: 300 };
            };
            const p = getPos(id);
            const isPath = route?.path.includes(id);
            const isStart = route?.path[0] === id;
            const isEnd = route?.path[route.path.length - 1] === id;

            return (
              <g key={id} transform={`translate(${p.x}, ${p.y})`}>
                <circle 
                  r={isPath ? 8 : 4} 
                  fill={isStart ? '#4a9eff' : isEnd ? '#ef4444' : isPath ? '#ef4444' : 'rgba(255,255,255,0.3)'} 
                  className={isPath ? 'animate-pulse' : ''}
                />
                {(isPath || node.type === 'gate') && (
                  <text y="-15" textAnchor="middle" className={`font-teko text-xs uppercase tracking-widest ${node.type === 'gate' ? 'fill-[#c0392b]' : 'fill-white'}`}>
                    {node.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default function App() {
  // --- State ---
  const [view, setView] = useState<'map' | 'blueprint' | 'nodes'>('map');
  const [sidebarTab, setSidebarTab] = useState<'explorer' | 'pathfinder'>('explorer');
  const [showNavOverlay, setShowNavOverlay] = useState(false);
  const [rx, setRx] = useState(42);
  const [ry, setRy] = useState(0);
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const [activeFloor, setActiveFloor] = useState<Record<string, string>>({
    blockA: 'Ground',
    blockB: 'Ground',
    blockC: 'Ground'
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fromNode, setFromNode] = useState('gate1');
  const [toNode, setToNode] = useState('a_g_ncc');
  const [route, setRoute] = useState<{ path: string[], distance: number } | null>(null);
  const [stars, setStars] = useState<{ id: number, sz: number, top: number, left: number, delay: number, duration: number }[]>([]);

  // --- Refs ---
  const dragRef = useRef({ isDragging: false, sx: 0, sy: 0, srx: 42, sry: 0 });

  // --- Initialization ---
  useEffect(() => {
    const newStars = Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      sz: Math.random() * 2 + 0.4,
      top: Math.random() * 60,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  // --- Handlers ---
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    dragRef.current = {
      isDragging: true,
      sx: e.clientX,
      sy: e.clientY,
      srx: rx,
      sry: ry
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.isDragging) return;
    const dx = e.clientX - dragRef.current.sx;
    const dy = e.clientY - dragRef.current.sy;
    setRy(dragRef.current.sry + dx * 0.38);
    setRx(Math.max(12, Math.min(62, dragRef.current.srx - dy * 0.28)));
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [rx, ry]);

  const resetView = () => {
    setRx(42);
    setRy(0);
  };

  const runPathfinder = () => {
    const result = findShortestPath(fromNode, toNode);
    setRoute(result);
    if (result.path.length > 0) {
      setSidebarTab('pathfinder');
      setSidebarOpen(true);
      const lastNodeId = result.path[result.path.length - 1];
      const lastNode = NODES[lastNodeId as keyof typeof NODES];
      if (lastNode && 'block' in lastNode) {
        setActiveBlock(lastNode.block as string);
        // Map floor code to label (matching blockData keys)
        const floorMap: Record<string, string> = {
          'B': 'Basement',
          'G': 'Ground',
          '1': '1st',
          '2': '2nd',
          '3': '3rd',
          '4': '4th',
          '5': '5th',
          '6': '6th',
          '7': '7th',
          '8': '8th'
        };
        if (lastNode.floor in floorMap) {
          setActiveFloor(prev => ({ ...prev, [lastNode.block as string]: floorMap[lastNode.floor] }));
        }
      }
    }
  };

  const handleRoomClick = (nodeId: string) => {
    setToNode(nodeId);
    runPathfinder();
  };

  const clearPath = () => {
    setRoute(null);
  };

  // --- Render Helpers ---
  const roomTypeLabels: Record<string, string> = {
    lec: 'Lecture Hall',
    lab: 'Laboratory',
    fac: 'Faculty / Staff',
    adm: 'Office / Admin',
    amen: 'Amenity',
    util: 'Utility'
  };

  const roomBorderColors: Record<string, string> = {
    lec: '#4a9eff',
    lab: '#44cc88',
    fac: '#ff8844',
    adm: '#aa66ff',
    amen: '#ff6666',
    util: '#667788'
  };

  return (
    <div className="relative w-full h-screen bg-[#0c1628] overflow-hidden font-sans text-white">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070e1e] via-[#111d38] to-[#0a1520]" />
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.sz}px`,
              height: `${star.sz}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header id="hdr" className="fixed top-0 left-0 right-0 h-[58px] z-50 flex items-center gap-4 px-6 border-b-2 border-[#c0392b] shadow-[0_0_30px_rgba(192,57,43,0.45)] bg-gradient-to-r from-[#c0392b] via-[#14142e] to-[#0c1020]">
        <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center font-teko text-[20px] text-[#c0392b] font-bold shadow-[0_0_16px_rgba(255,255,255,0.25)] shrink-0">
          NU
        </div>
        <div>
          <h1 className="font-teko text-[28px] tracking-[5px] leading-none">NAVRACHANA UNIVERSITY</h1>
          <div className="text-[10px] text-white/45 tracking-[3px] uppercase">Campus Navigator · Vadodara</div>
        </div>
        
        <div className="flex gap-2 ml-4">
          <button 
            onClick={() => {
              setView('map');
              setSidebarTab('explorer');
              setSidebarOpen(true);
              setActiveBlock(null);
            }}
            className={`px-4 py-1 rounded-md font-teko text-[13px] tracking-wider transition-all ${view === 'map' && sidebarTab === 'explorer' ? 'bg-[#c0392b] border-[#c0392b]' : 'bg-white/10 border border-white/20 text-white/75 hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white'}`}
          >
            🗺 3D MAP
          </button>
          <button 
            onClick={() => {
              setView('nodes');
              setActiveBlock(null);
            }}
            className={`px-4 py-1 rounded-md font-teko text-[13px] tracking-wider transition-all ${view === 'nodes' ? 'bg-[#c0392b] border-[#c0392b]' : 'bg-white/10 border border-white/20 text-white/75 hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white'}`}
          >
            📍 NODE MAP
          </button>
          <button 
            onClick={() => {
              setView('blueprint');
              if (!activeBlock) setActiveBlock('blockA');
            }}
            className={`px-4 py-1 rounded-md font-teko text-[13px] tracking-wider transition-all ${view === 'blueprint' ? 'bg-[#c0392b] border-[#c0392b]' : 'bg-white/10 border border-white/20 text-white/75 hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white'}`}
          >
            🏢 BLUEPRINTS
          </button>
          <button 
            onClick={() => {
              setShowNavOverlay(true);
            }}
            className={`px-4 py-1 rounded-md font-teko text-[13px] tracking-wider transition-all ${showNavOverlay ? 'bg-[#c0392b] border-[#c0392b]' : 'bg-white/10 border border-white/20 text-white/75 hover:bg-[#c0392b] hover:border-[#c0392b] hover:text-white'}`}
          >
            🧭 NAVIGATE
          </button>
        </div>

        <div className="ml-auto border border-[#d4a017] text-[#d4a017] bg-[#d4a017]/10 px-4 py-1 rounded-full text-[10px] font-bold tracking-[2px] hidden md:block">
          NAAC A ACCREDITED
        </div>
      </header>

      {/* Sidebar (Google Maps Style) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            className="fixed top-[58px] left-0 bottom-0 w-[360px] md:w-[420px] bg-[#060a16]/95 backdrop-blur-xl border-r border-[#c0392b]/30 z-40 shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-teko text-2xl tracking-widest text-[#4a9eff] flex items-center gap-2">
                {sidebarTab === 'explorer' ? <Layers className="w-5 h-5" /> : <Navigation className="w-5 h-5" />}
                {sidebarTab === 'explorer' ? 'CAMPUS EXPLORER' : 'PATHFINDER'}
              </h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white/50" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {sidebarTab === 'explorer' ? (
                <div className="space-y-6">
                  <section>
                    <h3 className="text-[#c0392b] font-teko text-xl tracking-wider mb-3 border-b border-[#c0392b]/20 pb-1">FLOOR MAPS</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {['blockA', 'blockB', 'blockC'].map(b => (
                        <div key={b} className="space-y-1">
                          <div className="text-[10px] text-white/30 uppercase tracking-[2px] mb-1">{b === 'blockA' ? 'Academic Wing' : b === 'blockB' ? 'SEDA Tower' : 'Admin & Canteen'}</div>
                          <div className="flex flex-wrap gap-1">
                            {Object.keys(blockData[b as keyof typeof blockData].rooms).map(f => (
                              <button
                                key={f}
                                onClick={() => {
                                  setActiveBlock(b);
                                  setActiveFloor({ ...activeFloor, [b]: f });
                                  setView('blueprint');
                                }}
                                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] hover:bg-[#c0392b]/20 hover:border-[#c0392b]/50 transition-all"
                              >
                                {f}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-[#c0392b] font-teko text-xl tracking-wider mb-3 border-b border-[#c0392b]/20 pb-1">LEGEND</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-sm bg-[#c0392b]" />
                        <span className="text-xs text-white/70">Block B — 6-Floor Tower</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-sm bg-[#888]" />
                        <span className="text-xs text-white/70">Block A — Academic Wing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-sm bg-[#7a7470]" />
                        <span className="text-xs text-white/70">Block C — Admin & Canteen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-sm bg-[#1e8fc8]" />
                        <span className="text-xs text-white/70">Pond</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-sm bg-[#5ec86e]" />
                        <span className="text-xs text-white/70">Green Area / Trees</span>
                      </div>
                    </div>
                  </section>

                  <section className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-[#4a9eff] font-teko text-lg mb-2">QUICK TIPS</h4>
                    <ul className="text-[11px] text-white/50 space-y-2 leading-relaxed">
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#4a9eff] mt-1.5 shrink-0" /> Drag map to rotate view</li>
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#4a9eff] mt-1.5 shrink-0" /> Click buildings to explore floors</li>
                      <li className="flex gap-2"><div className="w-1 h-1 rounded-full bg-[#4a9eff] mt-1.5 shrink-0" /> Use "Navigate" for shortest path</li>
                    </ul>
                  </section>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="text-[10px] text-[#4a6a8a] uppercase tracking-widest mb-1 block">STARTING POINT</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4a9eff]" />
                        <select 
                          value={fromNode}
                          onChange={(e) => setFromNode(e.target.value)}
                          className="w-full bg-[#0d1a2a] border border-[#2a4a6a] rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-[#4a9eff] appearance-none"
                        >
                          {Object.entries(NODES).map(([id, node]) => (
                            <option key={id} value={id}>{node.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="w-px h-4 bg-gradient-to-b from-[#4a9eff] to-[#ef4444]" />
                    </div>

                    <div className="relative">
                      <label className="text-[10px] text-[#4a6a8a] uppercase tracking-widest mb-1 block">DESTINATION</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ef4444]" />
                        <select 
                          value={toNode}
                          onChange={(e) => setToNode(e.target.value)}
                          className="w-full bg-[#0d1a2a] border border-[#2a4a6a] rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-[#4a9eff] appearance-none"
                        >
                          {Object.entries(NODES).map(([id, node]) => (
                            <option key={id} value={id}>{node.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button 
                      onClick={runPathfinder}
                      className="w-full bg-[#4a9eff]/20 border border-[#4a9eff] hover:bg-[#4a9eff] hover:text-white text-[#4a9eff] rounded-lg py-3 font-teko text-xl tracking-widest transition-all shadow-lg shadow-[#4a9eff]/10"
                    >
                      FIND SHORTEST PATH
                    </button>
                  </div>

                  {route && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <h4 className="text-[10px] font-bold text-white/30 tracking-[3px] uppercase">DIRECTIONS</h4>
                        <button 
                          onClick={() => setShowNavOverlay(true)}
                          className="p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-[#4a9eff] transition-all"
                          title="View Full Screen"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="p-4 bg-[#c0392b]/10 border border-[#c0392b]/30 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-[#c0392b] font-bold tracking-widest uppercase">ROUTE FOUND</span>
                          <button onClick={clearPath} className="text-[10px] text-white/30 hover:text-white uppercase tracking-tighter">Clear</button>
                        </div>
                        <div className="text-2xl font-teko tracking-wider">~{route.distance} Units</div>
                        <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1">Estimated walk: {Math.ceil(route.distance / 10)} min</div>
                      </div>

                      <div className="space-y-3">
                        {route.path.map((nodeId, idx) => (
                          <div key={idx} className="flex gap-3 items-start group">
                            <div className="flex flex-col items-center shrink-0 mt-1">
                              <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#4a9eff]' : idx === route.path.length - 1 ? 'bg-[#ef4444]' : 'bg-white/20'}`} />
                              {idx < route.path.length - 1 && <div className="w-px h-8 bg-white/10 group-hover:bg-white/20 transition-colors" />}
                            </div>
                            <div className="flex-1 pb-4">
                              <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                {NODES[nodeId as keyof typeof NODES].name}
                              </p>
                              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                                {NODES[nodeId as keyof typeof NODES].floor === 'outside' ? 'Outdoor' : `${NODES[nodeId as keyof typeof NODES].floor} Floor`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Viewport */}
      <main 
        className="w-full h-full cursor-grab active:cursor-grabbing relative overflow-hidden"
        onMouseDown={view === 'map' ? handleMouseDown : undefined}
      >
        {/* Stars Background */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {view === 'blueprint' ? (
          <div className="absolute inset-0 z-10 bg-[#050a19] overflow-auto pt-4 pb-4 px-4 custom-scrollbar">
            <div className="w-full max-w-7xl mx-auto bg-[#0a1a2a] border border-[#4a9eff]/30 rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col">
              {!route ? (
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    {['blockA', 'blockB', 'blockC'].map(b => (
                      <button
                        key={b}
                        onClick={() => setActiveBlock(b)}
                        className={`px-4 md:px-6 py-2 rounded-xl font-teko text-lg md:text-xl tracking-widest transition-all border ${activeBlock === b ? 'bg-[#4a9eff] border-[#4a9eff] text-white shadow-lg shadow-[#4a9eff]/20' : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'}`}
                      >
                        {b === 'blockA' ? 'BLOCK A' : b === 'blockB' ? 'BLOCK B' : 'BLOCK C'}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeBlock && Object.keys(blockData[activeBlock as keyof typeof blockData].rooms).map(f => (
                      <button
                        key={f}
                        onClick={() => setActiveFloor({ ...activeFloor, [activeBlock]: f })}
                        className={`px-3 md:px-4 py-1 rounded-lg font-teko text-xs md:text-sm tracking-widest transition-all border ${activeFloor[activeBlock as string] === f ? 'bg-[#c0392b] border-[#c0392b] text-white' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={clearPath}
                    className="px-6 py-2 bg-[#c0392b] hover:bg-[#a0291b] text-white rounded-xl font-teko text-xl tracking-widest transition-all shadow-lg"
                  >
                    CLEAR ROUTE ×
                  </button>
                </div>
              )}
              
              <div className="flex-1 relative">
                {activeBlock && (
                  <BlueprintRenderer 
                    block={activeBlock.replace('block', '')} 
                    floor={activeFloor[activeBlock]} 
                    fromNode={fromNode} 
                    toNode={toNode} 
                    route={route}
                    onRoomClick={handleRoomClick} 
                  />
                )}
              </div>
            </div>
          </div>
        ) : view === 'nodes' ? (
          <NodeMap route={route} />
        ) : (
          <div className="sc-wrap">
            <div 
              className="sc"
              style={{ transform: `rotateX(${rx}deg) rotateY(${ry}deg)` }}
            >
            <div className="ground" />

            {/* Roads */}
            <div className="road top-[8px] left-[8px] right-[8px] h-[20px] rounded-sm" />
            <div className="road top-[620px] left-[8px] right-[8px] h-[22px] rounded-sm" />
            <div className="road road-v left-[8px] top-[8px] w-[20px] bottom-[8px] rounded-sm" />
            <div className="road road-v right-[8px] top-[8px] w-[20px] bottom-[8px] rounded-sm" />
            <div className="road top-[562px] left-[28px] right-[28px] h-[18px]" />
            
            {/* Sidewalks */}
            <div className="sw left-[390px] top-[90px] w-[10px] h-[380px]" />
            <div className="sw left-[28px] top-[28px] w-[6px] h-[594px]" />
            <div className="sw right-[28px] top-[28px] w-[6px] h-[594px]" />
            <div className="sw top-[28px] left-[28px] right-[28px] h-[6px]" />

            {/* Car Park & Basketball */}
            <div className="park-zone left-[34px] top-[34px] w-[170px] h-[56px]">CAR PARK</div>
            <div className="absolute left-[220px] top-[34px] w-[150px] h-[56px] bg-[#b48232]/20 border-2 border-[#c8963c]/40 rounded-sm z-[3] flex items-center justify-center">
              <span className="font-teko text-[11px] text-[#c8963c]/45 tracking-[2px]">BASKETBALL</span>
            </div>

            {/* Block A */}
            <div className="bld-base left-[30px] top-[92px] w-[510px] h-[155px]" />
            <div 
              onClick={() => setActiveBlock('blockA')}
              className={`bld left-[34px] top-[96px] w-[500px] h-[145px] ${activeBlock === 'blockA' ? 'selected' : ''}`}
            >
              <div className="f-top w-[500px] h-[145px]">
                <div className="absolute top-2 left-3 text-[7px] text-black/50 font-bold uppercase">Academic Wing</div>
                {/* Roof Details */}
                <div className="roof-obj w-8 h-8 left-10 top-10">
                  <div className="roof-obj-top" />
                  <div className="roof-obj-front h-4 top-8" />
                </div>
                <div className="roof-obj w-6 h-6 left-100 top-20">
                  <div className="roof-obj-top" />
                  <div className="roof-obj-front h-3 top-6" />
                </div>
                <div className="roof-obj w-10 h-10 right-20 bottom-10">
                  <div className="roof-obj-top" />
                  <div className="roof-obj-front h-5 top-10" />
                </div>
              </div>
              <div className="f-front w-[500px] h-[72px] top-[145px]" />
              <div className="f-right w-[45px] h-[145px] left-[500px]" />
              <div className="f-right-base w-[45px] h-[72px] left-[500px] top-[145px]" />
              <div className="bld-badge">A</div>
              <div className="bld-lbl">Block A — Academic Wing</div>
            </div>

            {/* Block A West Wing */}
            <div className="bld-base left-[30px] top-[248px] w-[158px] h-[195px]" />
            <div 
              onClick={() => setActiveBlock('blockA')}
              className={`bld left-[34px] top-[252px] w-[148px] h-[185px] ${activeBlock === 'blockA' ? 'selected' : ''}`}
            >
              <div className="f-top w-[148px] h-[185px]">
                <div className="roof-obj w-6 h-6 left-10 top-40">
                  <div className="roof-obj-top" />
                  <div className="roof-obj-front h-3 top-6" />
                </div>
              </div>
              <div className="f-front w-[148px] h-[60px] top-[185px]" />
              <div className="f-right w-[36px] h-[185px] left-[148px]" />
              <div className="f-right-base w-[36px] h-[60px] left-[148px] top-[185px]" />
              <div className="bld-badge !left-8">A</div>
              <div className="bld-lbl !left-10">West Wing</div>
            </div>

            {/* Block C */}
            <div className="bld-base left-[216px] top-[361px] w-[158px] h-[200px]" />
            <div 
              onClick={() => setActiveBlock('blockC')}
              className={`bld bld-c left-[220px] top-[365px] w-[148px] h-[190px] ${activeBlock === 'blockC' ? 'selected' : ''}`}
            >
              <div className="f-top w-[148px] h-[190px] !bg-gradient-to-br !from-[#bebab4] !to-[#9e9a96]">
                <div className="roof-obj w-12 h-12 left-10 top-10 !bg-[#8e8a86]">
                  <div className="roof-obj-top !bg-[#aeaaa4]" />
                  <div className="roof-obj-front h-6 top-12 !bg-[#686260]" />
                </div>
              </div>
              <div className="f-front w-[148px] h-[64px] top-[190px] !bg-gradient-to-b !from-[#787270] !to-[#585250]" />
              <div className="f-right w-[34px] h-[190px] left-[148px] !bg-gradient-to-b !from-[#9a9690] !to-[#6a6660]" />
              <div className="f-right-base w-[34px] h-[64px] left-[148px] top-[190px] !bg-[#525050]" />
              <div className="bld-badge">C</div>
              <div className="bld-lbl">Block C — Admission & Canteen</div>
            </div>

            {/* Block B Tower */}
            <div className="bld-base left-[656px] top-[226px] w-[128px] h-[250px]" />
            <div 
              onClick={() => setActiveBlock('blockB')}
              className={`bld bld-b left-[660px] top-[230px] w-[118px] h-[240px] ${activeBlock === 'blockB' ? 'selected' : ''}`}
            >
              <div className="f-top w-[118px] h-[240px]">
                 <div className="roof-obj w-14 h-14 left-10 top-10 !bg-[#1a1616]">
                  <div className="roof-obj-top !bg-[#2a2424]" />
                  <div className="roof-obj-front h-8 top-14 !bg-[#0a0606]" />
                </div>
              </div>
              <div className="f-front w-[118px] h-[220px] top-[240px]" />
              <div className="f-right w-[36px] h-[240px] left-[118px]" />
              <div className="f-right-base w-[36px] h-[220px] left-[118px] top-[240px]" />
              <div className="bld-badge !top-[-28px]">B</div>
              <div className="bld-lbl">Block B — SEDA Tower</div>
            </div>

            {/* Pond */}
            <div id="pond" className="left-[578px] top-[256px] w-[108px] h-[84px]" />
            <div className="absolute left-[582px] top-[344px] font-teko text-xs text-[#5ac8f5] tracking-[3px]">🔵 POND</div>

            {/* Amphitheatre */}
            <div className="absolute left-[410px] top-[280px] w-[100px] h-[78px] z-[5]">
              <svg viewBox="0 0 100 78" fill="none" width="100" height="78">
                <ellipse cx="50" cy="70" rx="46" ry="10" fill="#2a5030" opacity="0.5"/>
                <path d="M6,70 Q6,14 50,14 Q94,14 94,70" stroke="#5ec86e" strokeWidth="2.5" fill="none" strokeDasharray="5 3"/>
                <path d="M18,70 Q18,26 50,26 Q82,26 82,70" stroke="#4ab85a" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
                <path d="M30,70 Q30,38 50,38 Q70,38 70,70" stroke="#3aa84a" strokeWidth="2" fill="none" strokeDasharray="4 3"/>
                <circle cx="50" cy="65" r="6" fill="#c0392b" opacity="0.7"/>
                <text x="50" y="10" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Teko,sans-serif" letterSpacing="1">AMPHITHEATRE</text>
              </svg>
            </div>

            {/* Trees */}
            {[
              { l: 42, t: 42, w: 18, h: 8 },
              { l: 58, t: 36, w: 14, h: 7 },
              { l: 38, t: 200, w: 16, h: 8 },
              { l: 560, t: 180, w: 16, h: 8 },
              { l: 810, t: 180, w: 18, h: 9 },
              { l: 520, t: 540, w: 17, h: 8 },
              { l: 200, t: 500, w: 18, h: 9 }
            ].map((tree, i) => (
              <div key={i} className="tree" style={{ left: tree.l, top: tree.t }}>
                <div className="tc" style={{ width: tree.w, height: tree.w }} />
                <div className="tt" style={{ height: tree.h }} />
              </div>
            ))}

            {/* Gates */}
            <div className="absolute left-[8px] top-[620px] w-[60px] h-[22px] bg-[#c0392b] border-2 border-[#922b21] z-[40] flex items-center justify-center rounded-sm shadow-lg shadow-[#c0392b]/30">
              <span className="font-teko text-[12px] text-white tracking-[2px]">GATE 1</span>
            </div>
            <div className="absolute right-[8px] top-[620px] w-[60px] h-[22px] bg-[#c0392b] border-2 border-[#922b21] z-[40] flex items-center justify-center rounded-sm shadow-lg shadow-[#c0392b]/30">
              <span className="font-teko text-[12px] text-white tracking-[2px]">GATE 2</span>
            </div>

            {/* Route Visualization on Map */}
            {route && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* This is a simplified representation, in a real app we'd project 3D coordinates */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4adaaa] font-teko text-xl animate-pulse">
                  ROUTE ACTIVE
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      </main>

      {/* Full Screen Navigation Overlay */}
      <AnimatePresence>
        {showNavOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[100] bg-[#050a19] flex flex-col pt-[58px]"
          >
            <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-6 md:p-12 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-teko text-5xl tracking-[10px] text-[#c0392b] uppercase">Pathfinder</h2>
                <button 
                  onClick={() => setShowNavOverlay(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
                >
                  <X className="w-8 h-8 text-white/50" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-xs text-white/30 uppercase tracking-[4px]">Starting Point</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a9eff]" />
                    <select 
                      value={fromNode}
                      onChange={(e) => setFromNode(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-lg outline-none focus:border-[#4a9eff] appearance-none transition-all"
                    >
                      {Object.entries(NODES).map(([id, node]) => (
                        <option key={id} value={id} className="bg-[#0c1628]">{node.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-white/30 uppercase tracking-[4px]">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#ef4444]" />
                    <select 
                      value={toNode}
                      onChange={(e) => setToNode(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-lg outline-none focus:border-[#ef4444] appearance-none transition-all"
                    >
                      {Object.entries(NODES).map(([id, node]) => (
                        <option key={id} value={id} className="bg-[#0c1628]">{node.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  runPathfinder();
                }}
                className="w-full bg-[#c0392b] hover:bg-[#a0291b] text-white rounded-2xl py-5 font-teko text-3xl tracking-[8px] transition-all shadow-2xl shadow-[#c0392b]/20 mb-12 uppercase"
              >
                Calculate Route
              </button>

              <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                {route ? (
                  <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                      <h3 className="text-xs text-white/20 uppercase tracking-[6px]">Step-by-Step Route</h3>
                      <button 
                        onClick={clearPath}
                        className="text-xs text-[#ef4444] hover:underline uppercase tracking-widest"
                      >
                        Clear Route
                      </button>
                    </div>
                    
                    <div className="bg-[#c0392b]/10 border border-[#c0392b]/20 rounded-3xl p-8 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-white/30 uppercase tracking-[4px] mb-2">Total Distance</div>
                        <div className="text-5xl font-teko text-white tracking-[4px]">{route.distance} Units</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/30 uppercase tracking-[4px] mb-2">Estimated Time</div>
                        <div className="text-3xl font-teko text-[#4adaaa] tracking-[2px]">{Math.ceil(route.distance / 10)} mins</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {route.path.map((nodeId, idx) => {
                        const node = NODES[nodeId as keyof typeof NODES];
                        const nextNodeId = route.path[idx + 1];
                        const nextNode = nextNodeId ? NODES[nextNodeId as keyof typeof NODES] : null;
                        
                        return (
                          <div key={idx} className="flex gap-8 group">
                            <div className="flex flex-col items-center">
                              <div className={`w-6 h-6 rounded-full border-4 ${idx === 0 ? 'bg-[#4a9eff] border-[#4a9eff]' : idx === route.path.length - 1 ? 'bg-[#ef4444] border-[#ef4444]' : 'bg-transparent border-white/20'}`} />
                              {idx < route.path.length - 1 && <div className="w-[2px] flex-1 bg-white/10 my-2" />}
                            </div>
                            <div className="pb-8 flex-1">
                              <div className="text-2xl font-teko text-white/90 group-hover:text-white transition-colors tracking-widest uppercase">{node?.name || nodeId}</div>
                              <div className="text-xs text-white/20 uppercase tracking-widest mt-1">
                                {node?.floor === 'outside' ? 'Outdoor Area' : `${node?.floor} Floor`}
                              </div>
                              {nextNode && (
                                <div className="mt-4 flex items-center gap-3 text-[#4a9eff]/60">
                                  <ChevronRight className="w-4 h-4" />
                                  <span className="text-sm uppercase tracking-widest">Proceed to {nextNode.name}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xs text-white/20 uppercase tracking-[6px] mb-6 border-b border-white/5 pb-2">Quick Destinations</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(NODES).filter(([id]) => !id.includes('stair')).map(([id, node]) => (
                        <button
                          key={id}
                          onClick={() => {
                            setToNode(id);
                            runPathfinder();
                          }}
                          className="p-4 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 hover:border-[#4a9eff]/50 transition-all group"
                        >
                          <div className="text-sm font-medium text-white/70 group-hover:text-white">{node.name}</div>
                          <div className="text-[10px] text-white/20 uppercase tracking-widest mt-1">
                            {node.floor === 'outside' ? 'Outdoor' : `${node.floor} Floor`}
                          </div>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Overlay */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {/* Compass */}
        <div className="w-12 h-12 bg-[#0e142c]/90 border border-[#4a9eff]/30 rounded-xl flex items-center justify-center mr-4 shadow-lg overflow-hidden relative">
          <div className="absolute top-1 text-[8px] text-white/40 font-bold">N</div>
          <div 
            className="w-1 h-8 bg-gradient-to-b from-[#c0392b] to-white rounded-full transition-transform duration-300"
            style={{ transform: `rotate(${ry}deg)` }}
          />
        </div>
        
        <button onClick={() => setRy(ry - 15)} className="w-10 h-10 bg-[#0e142c]/90 border border-[#c0392b]/40 rounded-xl flex items-center justify-center hover:bg-[#c0392b]/60 transition-all"><Plus className="w-5 h-5 rotate-45" /></button>
        <button onClick={() => setRx(Math.min(62, rx + 5))} className="w-10 h-10 bg-[#0e142c]/90 border border-[#c0392b]/40 rounded-xl flex items-center justify-center hover:bg-[#c0392b]/60 transition-all"><Minus className="w-5 h-5 rotate-90" /></button>
        <button onClick={resetView} className="w-12 h-12 bg-[#0e142c]/90 border border-[#c0392b]/40 rounded-xl flex items-center justify-center hover:bg-[#c0392b]/60 transition-all shadow-lg"><RotateCcw className="w-6 h-6" /></button>
        <button onClick={() => setRx(Math.max(12, rx - 5))} className="w-10 h-10 bg-[#0e142c]/90 border border-[#c0392b]/40 rounded-xl flex items-center justify-center hover:bg-[#c0392b]/60 transition-all"><Minus className="w-5 h-5 rotate-90" /></button>
        <button onClick={() => setRy(ry + 15)} className="w-10 h-10 bg-[#0e142c]/90 border border-[#c0392b]/40 rounded-xl flex items-center justify-center hover:bg-[#c0392b]/60 transition-all"><Plus className="w-5 h-5 rotate-45" /></button>
      </div>

      {/* Sidebar Toggle Button */}
      {!sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="fixed top-[74px] left-4 w-11 h-11 bg-[#080c1c]/95 backdrop-blur-md border border-[#4a9eff]/20 rounded-xl flex items-center justify-center text-[#4a9eff] hover:bg-[#4a9eff]/10 z-30 transition-all shadow-xl"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Floor Explorer Panel */}
      <AnimatePresence>
        {activeBlock && view !== 'blueprint' && view !== 'nodes' && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-[#050a19]/97 backdrop-blur-2xl border-t-2 border-[#4a9eff] p-6 shadow-[0_-12px_48px_rgba(0,0,0,0.7)] max-h-[65vh] overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
              <div className="flex-1">
                <h2 className="font-teko text-3xl tracking-[3px]" style={{ color: blockData[activeBlock as keyof typeof blockData].color }}>
                  {blockData[activeBlock as keyof typeof blockData].name}
                </h2>
                <p className="text-xs text-white/40 max-w-2xl leading-relaxed">
                  {blockData[activeBlock as keyof typeof blockData].desc}
                </p>
              </div>
              <button 
                onClick={() => setActiveBlock(null)}
                className="px-4 py-2 border border-[#2a4a6a] text-[#6a9aaa] hover:text-[#ff6a6a] hover:border-[#ff6a6a] rounded-lg font-teko text-sm tracking-widest transition-all"
              >
                CLOSE ×
              </button>
            </div>

            <div className="flex gap-2 flex-wrap mb-4">
              {Object.keys(blockData[activeBlock as keyof typeof blockData].rooms).map(floor => (
                <button
                  key={floor}
                  onClick={() => setActiveFloor({ ...activeFloor, [activeBlock]: floor })}
                  className={`px-4 py-1.5 rounded-lg border font-teko text-sm tracking-widest transition-all ${
                    activeFloor[activeBlock] === floor 
                    ? 'bg-[#1a3a5a] border-[#4a9eff] text-[#4a9eff]' 
                    : 'border-[#2a4a6a] text-[#6a9aaa] hover:bg-white/5'
                  }`}
                >
                  {floor === 'Basement' ? '🅱 BASEMENT' : floor === 'Ground' ? 'G FLOOR' : `${floor} FLOOR`}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-hidden relative bg-black/20 rounded-xl">
              {activeBlock && (
                <BlueprintRenderer 
                  block={activeBlock.replace('block', '')} 
                  floor={activeFloor[activeBlock]} 
                  fromNode={fromNode} 
                  toNode={toNode} 
                  route={route}
                  onRoomClick={handleRoomClick} 
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compass */}
      <div className="fixed bottom-20 right-6 w-16 h-16 rounded-full bg-[#060a16]/88 border border-[#c0392b]/40 flex items-center justify-center shadow-2xl z-30">
        <svg viewBox="0 0 44 44" fill="none" width="40" height="40" style={{ transform: `rotate(${-ry}deg)` }}>
          <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
          <polygon points="22,4 25,22 22,20 19,22" fill="#c0392b"/>
          <polygon points="22,40 25,22 22,24 19,22" fill="rgba(255,255,255,.35)"/>
          <text x="22" y="13" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="bold">N</text>
          <text x="22" y="38" textAnchor="middle" fill="rgba(255,255,255,.35)" fontSize="6">S</text>
        </svg>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c0392b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
