import React from 'react';
import { NODES, blockData } from './data';

interface BlueprintProps {
  fromNode: string;
  toNode: string;
  route: { path: string[], distance: number } | null;
  onRoomClick: (nodeId: string) => void;
}

const getRoomClass = (nodeId: string, fromNode: string, toNode: string, route: { path: string[], distance: number } | null) => {
  if (fromNode === nodeId) return 'path-start';
  if (toNode === nodeId) return 'path-end';
  if (route?.path.includes(nodeId)) return 'path-mid';
  return '';
};

export const BlockABasement = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>BASEMENT</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute bottom-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top" style={{ width: '400px', height: '200px' }}></div>
    <div className="l-structure-main" style={{ height: '700px' }}></div>

    <div 
      onClick={() => onRoomClick('a_b_cafe')}
      className={`box cursor-pointer transition-all ${getRoomClass('a_b_cafe', fromNode, toNode, route)}`} 
      style={{ top:'110px', left:'50px', width:'150px', height:'120px', background:'rgba(232, 245, 233, 0.05)', borderColor: '#81c784' }}
    >
      <div className="absolute top-1 left-2 text-[8px] opacity-30">A-B-01</div>
      TROPICAL CAFE
    </div>
    
    <div 
      onClick={() => onRoomClick('a_b_sports')}
      className={`box cursor-pointer transition-all ${getRoomClass('a_b_sports', fromNode, toNode, route)}`} 
      style={{ top:'110px', left:'210px', width:'140px', height:'120px', background:'rgba(255, 243, 224, 0.05)', borderColor: '#ffb74d' }}
    >
      <div className="absolute top-1 left-2 text-[8px] opacity-30">A-B-02</div>
      SPORTS ROOM
    </div>

    <div 
      onClick={() => onRoomClick('a_b_qlab')}
      className={`box cursor-pointer transition-all ${getRoomClass('a_b_qlab', fromNode, toNode, route)}`} 
      style={{ top:'110px', left:'360px', width:'180px', height:'120px', background:'rgba(225, 245, 254, 0.05)', border: '2px solid #38bdf8' }}
    >
      <div className="absolute top-1 left-2 text-[8px] opacity-30">A-B-03</div>
      Q-LAB (A-001)
    </div>

    <div style={{ position:'absolute', top:'110px', right:'110px', width:'150px' }}>
      <div style={{ display:'flex', gap:'10px', justifyContent:'center' }}>
        <div className="l-box">L1</div><div className="l-box">L2</div>
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair_b')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair_b', fromNode, toNode, route)}`} 
      style={{ top:'280px', right:'330px', width:'130px', height:'45px' }}
    >
      STAIR 1
    </div>

    <div className="parking-area" style={{ position:'absolute', top:'350px', left:'400px', width:'400px', height:'500px', border: '2px dashed #475569', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(245, 245, 245, 0.02)', color:'#475569', fontWeight:'bold', fontSize:'24px' }}>
      TWO-WHEELER PARKING
    </div>

    <div className="parking-area" style={{ position:'absolute', top:'250px', left:'50px', width:'250px', height:'600px', border: '2px dashed #475569', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(245, 245, 245, 0.02)', color:'#475569', fontWeight:'bold', transform: 'rotate(-5deg)' }}>
      TWO-WHEELER PARKING
    </div>

    <div 
      onClick={() => onRoomClick('a_stair_b')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair_b', fromNode, toNode, route)}`} 
      style={{ bottom:'120px', right:'90px', width:'100px', height:'40px' }}
    >
      STAIR 2
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockAGround = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>GROUND FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute bottom-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top"></div>
    <div className="l-structure-main"></div>

    <div onClick={() => onRoomClick('a_g_ncc')} className={`box cursor-pointer transition-all ${getRoomClass('a_g_ncc', fromNode, toNode, route)}`} style={{ left: '50px', top: '110px', width: '140px', height: '140px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-G-01</div>
      NCC OFFICE
    </div>
    <div onClick={() => onRoomClick('a_g_lab')} className={`box cursor-pointer transition-all ${getRoomClass('a_g_lab', fromNode, toNode, route)}`} style={{ left: '195px', top: '110px', width: '180px', height: '140px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-G-02</div>
      LAB EEE & MECH
    </div>
    
    <div style={{ position: 'absolute', top: '110px', right: '110px', width: '150px' }}>
      <div className="wc-box">WASHROOM</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className="l-box">L1</div><div className="l-box">L2</div>
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair3_g')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_g', fromNode, toNode, route)}`} 
      style={{ top: '280px', left: '330px', width: '130px', height: '45px' }}
    >
      STAIR 3
    </div>
    <div onClick={() => onRoomClick('a_g_maggie')} className={`box cursor-pointer transition-all ${getRoomClass('a_g_maggie', fromNode, toNode, route)}`} style={{ top: '350px', left: '400px', width: '140px', height: '80px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-G-03</div>
      MAGGIE & COFFEE
    </div>
    
    <div onClick={() => onRoomClick('a_g_sitting')} className={`box cursor-pointer transition-all ${getRoomClass('a_g_sitting', fromNode, toNode, route)}`} style={{ top: '480px', left: '410px', width: '110px', height: '320px', borderRightWidth: '4px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-G-04</div>
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-12 bg-[#38bdf8]/20 border border-[#38bdf8]" />
      SITTING AREA
    </div>

    <div style={{ position: 'absolute', top: '820px', left: '410px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div className="l-box">L3</div><div className="l-box">L4</div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair1_g')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_g', fromNode, toNode, route)}`} 
      style={{ top: '480px', right: '90px', width: '100px', height: '40px', transform: 'rotate(-15deg)' }}
    >
      STAIR 1
    </div>
    <div onClick={() => onRoomClick('a_g_library')} className={`box cursor-pointer transition-all ${getRoomClass('a_g_library', fromNode, toNode, route)}`} style={{ top: '550px', right: '100px', width: '90px', height: '220px', borderLeftWidth: '4px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-G-05</div>
      LIBRARY
    </div>
    <div 
      onClick={() => onRoomClick('a_stair2_g')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_g', fromNode, toNode, route)}`} 
      style={{ top: '820px', right: '90px', width: '100px', height: '40px', transform: 'rotate(-15deg)' }}
    >
      STAIR 2
    </div>

    <div onClick={() => onRoomClick('a_g_pond')} className={`box outdoor-box cursor-pointer transition-all ${getRoomClass('a_g_pond', fromNode, toNode, route)}`} style={{ bottom: '50px', left: '60px', width: '160px', height: '100px' }}>
      <div className="absolute inset-2 border border-dashed border-[#4ade80]/30 rounded-lg" />
      POND
    </div>
    <div onClick={() => onRoomClick('a_g_tea')} className={`box outdoor-box cursor-pointer transition-all ${getRoomClass('a_g_tea', fromNode, toNode, route)}`} style={{ bottom: '50px', left: '420px', width: '220px', height: '90px', fontSize: '18px' }}>
      <div className="absolute top-1 right-2 text-[10px] opacity-40">SERVICE</div>
      TEA POST
    </div>
    
    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA1st = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>1ST FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top"></div>
    <div className="l-structure-main"></div>

    <div onClick={() => onRoomClick('a_1_office')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_office', fromNode, toNode, route)}`} style={{ top: '110px', left: '50px', width: '250px', height: '150px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-01</div>
      UNI OFFICE / CONF A125
    </div>
    <div onClick={() => onRoomClick('a_1_conf2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_conf2', fromNode, toNode, route)}`} style={{ top: '110px', left: '360px', width: '180px', height: '70px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-02</div>
      CONF ROOM 2
    </div>
    
    <div style={{ position: 'absolute', top: '110px', right: '110px', width: '150px' }}>
      <div className="wc-box">WASHROOM</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className="l-box">L1</div><div className="l-box">L2</div>
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair3_1')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_1', fromNode, toNode, route)}`} 
      style={{ top: '280px', left: '330px', width: '120px', height: '40px' }}
    >
      STAIR 3
    </div>
    <div onClick={() => onRoomClick('a_1_raman')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_raman', fromNode, toNode, route)}`} style={{ top: '350px', left: '420px', width: '120px', height: '100px', background: 'rgba(245, 245, 245, 0.02)' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-03</div>
      RAMAN LAB
    </div>
    <div onClick={() => onRoomClick('a_1_spec')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_spec', fromNode, toNode, route)}`} style={{ top: '460px', left: '420px', width: '120px', height: '60px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-04</div>
      SPECTROSCOPY
    </div>

    <div style={{ position: 'absolute', bottom: '150px', left: '410px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div className="l-box">L3</div><div className="l-box">L4</div>
    </div>

    <div onClick={() => onRoomClick('a_1_fac_sos')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_fac_sos', fromNode, toNode, route)}`} style={{ top: '720px', right: '100px', width: '120px', height: '60px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-05</div>
      FACULTY SOS
    </div>
    <div onClick={() => onRoomClick('a_1_a110')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_1_a110', fromNode, toNode, route)}`} style={{ bottom: '40px', left: '450px', width: '300px', height: '100px', background: 'rgba(245, 245, 245, 0.02)' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-1-06</div>
      A110 RESEARCH LAB
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

// Add more floors as needed...
// For brevity, I'll implement a few more and then a generic one or placeholders if needed.
// But I'll try to get the most important ones.

export const BlockA2nd = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>2ND FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top"></div>
    <div className="l-structure-main"></div>

    <div onClick={() => onRoomClick('a_2_fac_sbl')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_fac_sbl', fromNode, toNode, route)}`} style={{ top: '110px', left: '50px', width: '220px', height: '180px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-2-01</div>
      A214 FACULTY SBL
    </div>
    
    <div style={{ position: 'absolute', top: '110px', right: '110px', width: '150px' }}>
      <div className="wc-box">WASHROOM</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className="l-box">L1</div><div className="l-box">L2</div>
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair3_2')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_2', fromNode, toNode, route)}`} 
      style={{ top: '310px', left: '330px', width: '130px', height: '45px' }}
    >
      STAIR 3
    </div>
    
    <div style={{ position: 'absolute', top: '380px', left: '380px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <div onClick={() => onRoomClick('a_2_208')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_208', fromNode, toNode, route)}`} style={{ position: 'relative', width: '160px', height: '40px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-02</div>
        A208 LEC HALL
      </div>
      <div onClick={() => onRoomClick('a_2_207')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_207', fromNode, toNode, route)}`} style={{ position: 'relative', width: '160px', height: '40px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-03</div>
        A207 COMP LAB
      </div>
      <div onClick={() => onRoomClick('a_2_223')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_223', fromNode, toNode, route)}`} style={{ position: 'relative', width: '160px', height: '40px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-04</div>
        A223 LEC HALL
      </div>
      <div onClick={() => onRoomClick('a_2_225')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_225', fromNode, toNode, route)}`} style={{ position: 'relative', width: '160px', height: '40px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-05</div>
        A225 LEC HALL
      </div>
    </div>

    <div style={{ position: 'absolute', top: '240px', right: '120px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <div onClick={() => onRoomClick('a_2_201')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_201', fromNode, toNode, route)}`} style={{ position: 'relative', width: '180px', height: '35px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-06</div>
        A201 SERVER
      </div>
      <div onClick={() => onRoomClick('a_2_202')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_202', fromNode, toNode, route)}`} style={{ position: 'relative', width: '180px', height: '35px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-2-07</div>
        A202 LAB COMP
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair1_2')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_2', fromNode, toNode, route)}`} 
      style={{ top: '420px', right: '90px', width: '100px', height: '40px' }}
    >
      STAIR 1
    </div>
    <div 
      onClick={() => onRoomClick('a_stair2_2')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_2', fromNode, toNode, route)}`} 
      style={{ bottom: '120px', right: '90px', width: '100px', height: '40px' }}
    >
      STAIR 2
    </div>
    <div onClick={() => onRoomClick('a_2_206')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_2_206', fromNode, toNode, route)}`} style={{ bottom: '40px', left: '500px', width: '250px', height: '80px' }}>
      <div className="absolute top-2 left-2 text-[8px] opacity-30">A-2-08</div>
      A206 LEC HALL
    </div>
    
    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA3rd = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>3RD FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top" style={{ width: '350px' }}></div>
    <div className="l-structure-main"></div>

    <div className="stair" style={{ top: '110px', left: '20px', width: '45px', height: '80px', writingMode: 'vertical-rl' }}>STAIR 4</div>
    <div onClick={() => onRoomClick('a_3_phy')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_phy', fromNode, toNode, route)}`} style={{ top: '100px', left: '65px', width: '140px', height: '80px', background: 'rgba(243, 229, 245, 0.02)', borderColor: '#ce93d8' }}>
      <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-01</div>
      A316 PHY LAB
    </div>
    <div onClick={() => onRoomClick('a_3_fac')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_fac', fromNode, toNode, route)}`} style={{ top: '190px', left: '65px', width: '200px', height: '80px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
      <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-02</div>
      A313 FACULTY ROOM SET
    </div>

    <div onClick={() => onRoomClick('a_3_chem1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_chem1', fromNode, toNode, route)}`} style={{ top: '100px', left: '220px', width: '80px', height: '50px' }}>
      <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-03</div>
      A317 CHEM LAB
    </div>
    <div onClick={() => onRoomClick('a_3_chem_inst')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_chem_inst', fromNode, toNode, route)}`} style={{ top: '130px', left: '310px', width: '120px', height: '90px', background: 'rgba(255, 243, 224, 0.02)', borderColor: '#ffb74d' }}>
      <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-04</div>
      A318 CHEM INSTRUMENTATION
    </div>
    <div className="box" style={{ top: '225px', left: '330px', width: '80px', height: '40px', fontSize: '9px' }}>COFFEE MACHINE</div>
    
    <div className="box" style={{ top: '100px', right: '190px', width: '80px', height: '60px' }}>CHEM LAB</div>
    <div style={{ position: 'absolute', top: '100px', right: '40px', width: '140px' }}>
      <div className="wc-box">WASHROOM</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <div className="l-box">L1</div><div className="l-box">L2</div>
      </div>
    </div>

    <div 
      onClick={() => onRoomClick('a_stair3_3')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_3', fromNode, toNode, route)}`} 
      style={{ top: '280px', left: '310px', width: '130px', height: '55px', borderRadius: '30px' }}
    >
      STAIR 3
    </div>
    
    <div style={{ position: 'absolute', top: '650px', left: '360px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <div onClick={() => onRoomClick('a_3_career')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_career', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '50px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-05</div>
        A312 CAREER DEV CELL
      </div>
      <div onClick={() => onRoomClick('a_3_lifesci')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_lifesci', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '50px', background: 'rgba(232, 245, 233, 0.02)', borderColor: '#81c784' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-06</div>
        A311 LIFE SCI LAB
      </div>
      <div style={{ marginTop: '20px' }}>
        <div className="l-box" style={{ marginBottom: '5px' }}>L3</div>
        <div className="l-box">L4</div>
      </div>
    </div>

    <div style={{ position: 'absolute', top: '300px', right: '60px', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
      <div 
        onClick={() => onRoomClick('a_stair1_3')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_3', fromNode, toNode, route)}`} 
        style={{ position: 'relative', width: '110px', height: '45px', marginBottom: '5px' }}
      >
        STAIR 1
      </div>
      <div onClick={() => onRoomClick('a_3_comp')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_comp', fromNode, toNode, route)}`} style={{ position: 'relative', width: '150px', height: '45px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-07</div>
        A303 COMP LAB
      </div>
      <div onClick={() => onRoomClick('a_3_server')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_server', fromNode, toNode, route)}`} style={{ position: 'relative', width: '150px', height: '60px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-08</div>
        A301 SERVER ROOM / A302 CABIN
      </div>
      <div onClick={() => onRoomClick('a_3_conf')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_conf', fromNode, toNode, route)}`} style={{ position: 'relative', width: '150px', height: '50px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-09</div>
        A304 CONFERENCE ROOM
      </div>
      <div onClick={() => onRoomClick('a_3_lifesci2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_lifesci2', fromNode, toNode, route)}`} style={{ position: 'relative', width: '150px', height: '45px', background: 'rgba(232, 245, 233, 0.02)', borderColor: '#81c784' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-10</div>
        A305 LIFE SCI LAB
      </div>
      <div onClick={() => onRoomClick('a_3_chem2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_chem2', fromNode, toNode, route)}`} style={{ position: 'relative', width: '150px', height: '45px' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-11</div>
        A306 CHEM LAB
      </div>
      <div onClick={() => onRoomClick('a_3_fac2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_fac2', fromNode, toNode, route)}`} style={{ position: 'relative', width: '180px', height: '65px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
        <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-12</div>
        A307 FACULTY SET ROOM
      </div>
      <div 
        onClick={() => onRoomClick('a_stair2_3')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_3', fromNode, toNode, route)}`} 
        style={{ position: 'relative', width: '120px', height: '45px', marginTop: '10px' }}
      >
        STAIR 2
      </div>
    </div>

    <div onClick={() => onRoomClick('a_3_chem3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_3_chem3', fromNode, toNode, route)}`} style={{ bottom: '40px', right: '150px', width: '160px', height: '70px' }}>
      <div className="absolute top-1 left-1 text-[7px] opacity-30">A-3-13</div>
      A310 CHEM LAB
    </div>
    
    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA4th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>4TH FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="l-structure-top" style={{ width: '350px' }}></div>
    <div className="l-structure-main"></div>

    <div className="stair" style={{ top: '110px', left: '20px', width: '45px', height: '80px', writingMode: 'vertical-rl' }}>STAIR 4</div>
    <div onClick={() => onRoomClick('a_4_civil1')} className={`box civil-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_civil1', fromNode, toNode, route)}`} style={{ top: '100px', left: '120px', width: '100px', height: '60px' }}>A418 CIVIL LAB</div>
    <div onClick={() => onRoomClick('a_4_civil2')} className={`box civil-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_civil2', fromNode, toNode, route)}`} style={{ top: '100px', left: '230px', width: '100px', height: '60px' }}>A419 CIVIL LAB</div>
    
    <div onClick={() => onRoomClick('a_4_comp')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_comp', fromNode, toNode, route)}`} style={{ top: '170px', left: '120px', width: '100px', height: '50px' }}>A416 COMP LAB</div>
    <div onClick={() => onRoomClick('a_4_civil3')} className={`box civil-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_civil3', fromNode, toNode, route)}`} style={{ top: '170px', left: '230px', width: '100px', height: '50px' }}>A415 CIVIL LAB</div>
    <div onClick={() => onRoomClick('a_4_mech1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_mech1', fromNode, toNode, route)}`} style={{ top: '170px', left: '340px', width: '80px', height: '50px' }}>A414 MECH LAB</div>
    
    <div 
      onClick={() => onRoomClick('a_stair3_4')}
      className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_4', fromNode, toNode, route)}`} 
      style={{ top: '230px', left: '220px', width: '110px', height: '50px' }}
    >
      STAIR 3
    </div>

    <div style={{ position: 'absolute', top: '80px', left: '450px', display: 'flex', gap: '5px' }}>
      <div onClick={() => onRoomClick('a_4_res_chem')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_res_chem', fromNode, toNode, route)}`} style={{ width: '70px', height: '40px', fontSize: '9px', position: 'relative' }}>A421 RESEARCH (CHEM)</div>
      <div onClick={() => onRoomClick('a_4_res_phy')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_res_phy', fromNode, toNode, route)}`} style={{ width: '70px', height: '40px', fontSize: '9px', position: 'relative' }}>A422 RESEARCH (PHY)</div>
      <div className="box" style={{ width: '60px', height: '30px', position: 'relative' }}>A423 WOMAN ROOM</div>
      <div className="wc-box" style={{ width: '100px', fontSize: '9px', position: 'relative' }}>WASHROOM (A424 STORE)</div>
      <div className="l-box" style={{ width: '30px', height: '30px', lineHeight: '30px', position: 'relative' }}>L1</div>
      <div className="l-box" style={{ width: '30px', height: '30px', lineHeight: '30px', position: 'relative' }}>L2</div>
    </div>

    <div style={{ position: 'absolute', top: '290px', left: '410px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div onClick={() => onRoomClick('a_4_res_civil')} className={`box civil-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_res_civil', fromNode, toNode, route)}`} style={{ width: '160px', height: '70px', position: 'relative' }}>A413 RESEARCH LAB (CIVIL)</div>
      <div onClick={() => onRoomClick('a_4_mech2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_mech2', fromNode, toNode, route)}`} style={{ width: '140px', height: '60px', position: 'relative' }}>A412 MECH LAB</div>
      <div onClick={() => onRoomClick('a_4_mech3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_mech3', fromNode, toNode, route)}`} style={{ width: '140px', height: '80px', position: 'relative' }}>A411 MECH ENG LAB</div>
      <div onClick={() => onRoomClick('a_4_mech4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_mech4', fromNode, toNode, route)}`} style={{ width: '140px', height: '70px', position: 'relative' }}>A410 MECH ENG LAB</div>
      <div className="box" style={{ width: '120px', height: '40px', fontSize: '10px', position: 'relative' }}>STORE ROOM</div>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div className="l-box">L3</div>
        <div className="l-box">L4</div>
      </div>
    </div>

    <div style={{ position: 'absolute', top: '150px', right: '60px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-end' }}>
      <div 
        onClick={() => onRoomClick('a_stair1_4')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_4', fromNode, toNode, route)}`} 
        style={{ position: 'relative', width: '120px', height: '45px' }}
      >
        STAIR 1
      </div>
      <div onClick={() => onRoomClick('a_4_eee1')} className={`box eee-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_eee1', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '100px' }}>A402 EEE</div>
      <div onClick={() => onRoomClick('a_4_eee2')} className={`box eee-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_eee2', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '50px' }}>A403 EEE</div>
      <div onClick={() => onRoomClick('a_4_eee3')} className={`box eee-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_eee3', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '80px' }}>A404 EEE LAB</div>
      <div onClick={() => onRoomClick('a_4_eee4')} className={`box eee-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_eee4', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '80px' }}>A405 EEE LAB</div>
      <div onClick={() => onRoomClick('a_4_eee5')} className={`box eee-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_eee5', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '60px' }}>A406 EEE LAB</div>
      <div 
        onClick={() => onRoomClick('a_stair2_4')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_4', fromNode, toNode, route)}`} 
        style={{ position: 'relative', width: '120px', height: '45px', marginTop: '10px' }}
      >
        STAIR 2
      </div>
    </div>

    <div style={{ position: 'absolute', bottom: '50px', left: '450px', display: 'flex', gap: '30px' }}>
      <div onClick={() => onRoomClick('a_4_bms1')} className={`box bms-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_bms1', fromNode, toNode, route)}`} style={{ width: '140px', height: '70px', position: 'relative' }}>A408 BMS LAB 1</div>
      <div onClick={() => onRoomClick('a_4_bms2')} className={`box bms-lab cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_bms2', fromNode, toNode, route)}`} style={{ width: '140px', height: '70px', position: 'relative' }}>A407 BMS LAB 2</div>
      <div onClick={() => onRoomClick('a_4_fac')} className={`box fac-room cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_4_fac', fromNode, toNode, route)}`} style={{ width: '140px', height: '60px', position: 'relative' }}>A409 FACULTY ROOM</div>
    </div>
    
    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA5th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>5TH FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="wing-left" style={{ height: '320px' }}>
      <div className="box" style={{ width: '100%', height: '100%', fontSize: '22px', background: 'rgba(255, 255, 255, 0.02)' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">A-5-AUD</div>
        AUDITORIUM
      </div>
    </div>
    <div className="main-block-L">
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '140px' }}>
        <div className="wc-box">WASHROOM</div>
        <div className="lift-row"><div className="l-box">L1</div><div className="l-box">L2</div></div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair3_5')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_5', fromNode, toNode, route)}`} 
        style={{ top: '20px', left: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 3
      </div>
      <div 
        onClick={() => onRoomClick('a_stair1_5')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_5', fromNode, toNode, route)}`} 
        style={{ top: '180px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 1
      </div>
      <div 
        onClick={() => onRoomClick('a_stair2_5')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_5', fromNode, toNode, route)}`} 
        style={{ bottom: '100px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 2
      </div>
      <div onClick={() => onRoomClick('a_5_506')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_5_506', fromNode, toNode, route)}`} style={{ top: '150px', left: '30px', width: '150px', height: '100px' }}>
        <div className="absolute top-2 left-2 text-[8px] opacity-30">A-5-01</div>
        CASE 506
      </div>
      <div onClick={() => onRoomClick('a_5_507')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_5_507', fromNode, toNode, route)}`} style={{ top: '280px', left: '30px', width: '150px', height: '100px' }}>
        <div className="absolute top-2 left-2 text-[8px] opacity-30">A-5-02</div>
        507
      </div>
      <div onClick={() => onRoomClick('a_5_501')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_5_501', fromNode, toNode, route)}`} style={{ top: '150px', right: '30px', width: '140px', height: '180px' }}>
        <div className="absolute top-2 left-2 text-[8px] opacity-30">A-5-03</div>
        501-505
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA6th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>6TH FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="straight-layout">
      <div className="box" style={{ top: '10px', left: '10px', width: '150px', height: '30px', background: 'rgba(255, 255, 255, 0.02)' }}>LAB</div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '140px' }}>
        <div className="wc-box">W/C</div>
        <div className="lift-row"><div className="l-box">L1</div><div className="l-box">L2</div></div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair3_6')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_6', fromNode, toNode, route)}`} 
        style={{ top: '70px', left: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 3
      </div>
      <div 
        onClick={() => onRoomClick('a_stair1_6')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_6', fromNode, toNode, route)}`} 
        style={{ top: '130px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 1
      </div>
      <div onClick={() => onRoomClick('a_6_staff')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_staff', fromNode, toNode, route)}`} style={{ top: '140px', left: '10px', width: '130px', height: '350px', fontSize: '18px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">A-6-STAFF</div>
        STAFF ROOM
      </div>
      <div style={{ position: 'absolute', bottom: '140px', left: '10px' }}><div className="l-box" style={{ marginBottom: '4px' }}>L3</div><div className="l-box">L4</div></div>
      <div style={{ position: 'absolute', top: '200px', right: '10px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
        <div onClick={() => onRoomClick('a_6_601')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_601', fromNode, toNode, route)}`} style={{ position: 'relative', width: '120px', height: '50px' }}>601</div>
        <div onClick={() => onRoomClick('a_6_602')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_602', fromNode, toNode, route)}`} style={{ position: 'relative', width: '120px', height: '70px' }}>602</div>
        <div onClick={() => onRoomClick('a_6_603')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_603', fromNode, toNode, route)}`} style={{ position: 'relative', width: '120px', height: '60px' }}>603</div>
        <div onClick={() => onRoomClick('a_6_604')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_604', fromNode, toNode, route)}`} style={{ position: 'relative', width: '120px', height: '40px' }}>604</div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair2_6')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_6', fromNode, toNode, route)}`} 
        style={{ bottom: '140px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 2
      </div>
      <div onClick={() => onRoomClick('a_6_605')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_6_605', fromNode, toNode, route)}`} style={{ bottom: '10px', left: '10px', width: '576px', height: '80px', fontSize: '32px' }}>
        <div className="absolute top-2 left-2 text-[12px] opacity-30">A-6-05</div>
        605
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA7th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>7TH FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="straight-layout">
      <div className="box" style={{ top: '10px', left: '10px', width: '180px', height: '50px', background: 'rgba(255, 255, 255, 0.02)' }}>LAB</div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '140px' }}>
        <div className="wc-box">W/C</div>
        <div className="lift-row"><div className="l-box">L1</div><div className="l-box">L2</div></div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair3_7')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_7', fromNode, toNode, route)}`} 
        style={{ top: '90px', left: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 3
      </div>
      <div 
        onClick={() => onRoomClick('a_stair1_7')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_7', fromNode, toNode, route)}`} 
        style={{ top: '140px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 1
      </div>
      <div onClick={() => onRoomClick('a_7_staff')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_staff', fromNode, toNode, route)}`} style={{ top: '180px', left: '10px', width: '150px', height: '220px', fontSize: '18px', background: 'rgba(255, 253, 231, 0.02)', borderColor: '#fff176' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">A-7-STAFF</div>
        STAFF ROOM
      </div>
      <div style={{ position: 'absolute', bottom: '140px', left: '10px' }}><div className="l-box" style={{ marginBottom: '4px' }}>L3</div><div className="l-box">L4</div></div>
      <div style={{ position: 'absolute', top: '190px', right: '10px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
        <div onClick={() => onRoomClick('a_7_server')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_server', fromNode, toNode, route)}`} style={{ position: 'relative', width: '140px', height: '45px' }}>SERVER ROOM</div>
        <div onClick={() => onRoomClick('a_7_701')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_701', fromNode, toNode, route)}`} style={{ position: 'relative', width: '90px', height: '40px' }}>701</div>
        <div onClick={() => onRoomClick('a_7_702')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_702', fromNode, toNode, route)}`} style={{ position: 'relative', width: '90px', height: '40px' }}>702</div>
        <div onClick={() => onRoomClick('a_7_703')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_703', fromNode, toNode, route)}`} style={{ position: 'relative', width: '90px', height: '40px' }}>703</div>
        <div onClick={() => onRoomClick('a_7_704')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_704', fromNode, toNode, route)}`} style={{ position: 'relative', width: '90px', height: '40px', border: '2px solid red' }}>704</div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair2_7')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_7', fromNode, toNode, route)}`} 
        style={{ bottom: '140px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 2
      </div>
      <div onClick={() => onRoomClick('a_7_705')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_7_705', fromNode, toNode, route)}`} style={{ bottom: '10px', left: '10px', width: '576px', height: '90px', fontSize: '32px' }}>
        <div className="absolute top-2 left-2 text-[12px] opacity-30">A-7-05</div>
        705
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockA8th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page">
    <div className="header"><div>8TH FLOOR</div><div>BLOCK A</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#38bdf8]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#38bdf8]" />
    </div>

    <div className="straight-layout">
      <div onClick={() => onRoomClick('a_8_tinker')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_tinker', fromNode, toNode, route)}`} style={{ top: '10px', left: '10px', width: '200px', height: '50px', background: 'rgba(255, 255, 255, 0.02)' }}>TINKERER'S LAB</div>
      <div style={{ position: 'absolute', top: '10px', right: '10px', width: '140px' }}>
        <div className="wc-box">W/C</div>
        <div className="lift-row"><div className="l-box">L1</div><div className="l-box">L2</div></div>
      </div>
      <div 
        onClick={() => onRoomClick('a_stair3_8')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair3_8', fromNode, toNode, route)}`} 
        style={{ top: '80px', left: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 3
      </div>
      <div 
        onClick={() => onRoomClick('a_stair1_8')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair1_8', fromNode, toNode, route)}`} 
        style={{ top: '150px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 1
      </div>
      <div onClick={() => onRoomClick('a_8_psych')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_psych', fromNode, toNode, route)}`} style={{ top: '150px', left: '10px', width: '120px', height: '45px' }}>PSYCH LAB</div>
      <div onClick={() => onRoomClick('a_8_counsel')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_counsel', fromNode, toNode, route)}`} style={{ top: '200px', left: '10px', width: '120px', height: '65px' }}>COUNSELLING (809)</div>
      <div onClick={() => onRoomClick('a_8_nif')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_nif', fromNode, toNode, route)}`} style={{ top: '270px', left: '10px', width: '120px', height: '180px', fontSize: '24px' }}>NIF</div>
      <div onClick={() => onRoomClick('a_8_801')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_801', fromNode, toNode, route)}`} style={{ top: '210px', right: '10px', width: '90px', height: '40px' }}>801</div>
      <div onClick={() => onRoomClick('a_8_802')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_802', fromNode, toNode, route)}`} style={{ top: '260px', right: '10px', width: '90px', height: '40px' }}>802</div>
      <div onClick={() => onRoomClick('a_8_803')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_803', fromNode, toNode, route)}`} style={{ top: '310px', right: '10px', width: '90px', height: '40px' }}>803</div>
      <div onClick={() => onRoomClick('a_8_804')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_804', fromNode, toNode, route)}`} style={{ top: '360px', right: '10px', width: '90px', height: '40px' }}>804</div>
      <div style={{ position: 'absolute', bottom: '140px', left: '10px' }}><div className="l-box" style={{ marginBottom: '4px' }}>L3</div><div className="l-box">L4</div></div>
      <div 
        onClick={() => onRoomClick('a_stair2_8')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('a_stair2_8', fromNode, toNode, route)}`} 
        style={{ bottom: '140px', right: '-2px', width: '75px', height: '35px' }}
      >
        STAIR 2
      </div>
      <div onClick={() => onRoomClick('a_8_805')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('a_8_805', fromNode, toNode, route)}`} style={{ bottom: '10px', left: '10px', width: '576px', height: '90px', fontSize: '32px' }}>
        <div className="absolute top-2 left-2 text-[12px] opacity-30">A-8-05</div>
        805
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockBBasement = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>BASEMENT</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_b')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_b', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative', borderColor: '#ff6a44', color: '#ff6a44', background: 'rgba(255, 106, 68, 0.05)' }}
      >
        STAIR (B)
      </div>
    </div>
    <div className="b-main-wing" style={{ borderColor: '#ff6a44' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '40px' }}>
        <div onClick={() => onRoomClick('b_b_workshop')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_b_workshop', fromNode, toNode, route)}`} style={{ height: '200px', borderColor: '#ff6a44' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-B-01</div>
          WORKSHOP
        </div>
        <div onClick={() => onRoomClick('b_b_music')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_b_music', fromNode, toNode, route)}`} style={{ height: '200px', borderColor: '#ff6a44' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-B-02</div>
          MUSIC ROOM
        </div>
        <div onClick={() => onRoomClick('b_b_stationery')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_b_stationery', fromNode, toNode, route)}`} style={{ height: '100px', borderColor: '#ff6a44' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-B-03</div>
          STATIONERY SHOP
        </div>
        <div className="box" style={{ height: '100px', borderStyle: 'dashed', borderColor: '#475569', color: '#475569' }}>PARKING AREA</div>
      </div>
    </div>
  </div>
);

export const BlockB1st = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>1ST FLOOR (1)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_1')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_1', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (1)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', padding: '40px' }}>
        <div onClick={() => onRoomClick('b_1st_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_1st_1', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-1-01</div>
          SEDA STAFF ROOM
        </div>
        <div onClick={() => onRoomClick('b_1st_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_1st_2', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-1-02</div>
          CLASSROOM B-101
        </div>
        <div onClick={() => onRoomClick('b_1st_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_1st_3', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-1-03</div>
          CLASSROOM B-102
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockB2nd = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>2ND FLOOR (2)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_2')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_2', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (2)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '40px' }}>
        <div onClick={() => onRoomClick('b_2nd_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_2nd_1', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-2-01</div>
          CLASSROOM B-201
        </div>
        <div onClick={() => onRoomClick('b_2nd_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_2nd_2', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-2-02</div>
          CLASSROOM B-202
        </div>
        <div onClick={() => onRoomClick('b_2nd_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_2nd_3', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-2-03</div>
          CLASSROOM B-203
        </div>
        <div onClick={() => onRoomClick('b_2nd_4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_2nd_4', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-2-04</div>
          CLASSROOM B-204
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockB3rd = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>3RD FLOOR (3)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_3')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_3', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (3)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '40px' }}>
        <div onClick={() => onRoomClick('b_3rd_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_3rd_1', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-3-01</div>
          CLASSROOM B-301
        </div>
        <div onClick={() => onRoomClick('b_3rd_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_3rd_2', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-3-02</div>
          CLASSROOM B-302
        </div>
        <div onClick={() => onRoomClick('b_3rd_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_3rd_3', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-3-03</div>
          CLASSROOM B-303
        </div>
        <div onClick={() => onRoomClick('b_3rd_4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_3rd_4', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-3-04</div>
          CLASSROOM B-304
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockB4th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>4TH FLOOR (4)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_4')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_4', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (4)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '40px' }}>
        <div onClick={() => onRoomClick('b_4th_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_4th_1', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-4-01</div>
          CLASSROOM B-401
        </div>
        <div onClick={() => onRoomClick('b_4th_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_4th_2', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-4-02</div>
          CLASSROOM B-402
        </div>
        <div onClick={() => onRoomClick('b_4th_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_4th_3', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-4-03</div>
          CLASSROOM B-403
        </div>
        <div onClick={() => onRoomClick('b_4th_4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_4th_4', fromNode, toNode, route)}`} style={{ height: '150px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-4-04</div>
          CLASSROOM B-404
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockB5th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>5TH FLOOR (5)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_5')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_5', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (5)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '30px' }}>
        <div onClick={() => onRoomClick('b_5th_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_1', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-01</div>
          B.ED CLASSROOM 1
        </div>
        <div onClick={() => onRoomClick('b_5th_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_2', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-02</div>
          B.ED CLASSROOM 2
        </div>
        <div onClick={() => onRoomClick('b_5th_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_3', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-03</div>
          BAJMC CLASSROOM 1
        </div>
        <div onClick={() => onRoomClick('b_5th_4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_4', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-04</div>
          BAJMC CLASSROOM 2
        </div>
        <div onClick={() => onRoomClick('b_5th_5')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_5', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-05</div>
          SLSE STAFF ROOM
        </div>
        <div onClick={() => onRoomClick('b_5th_6')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_5th_6', fromNode, toNode, route)}`} style={{ height: '100px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-5-06</div>
          SLSE CLASSROOM
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockB6th = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>6TH FLOOR (6)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_6')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_6', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (6)
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '30px' }}>
        <div onClick={() => onRoomClick('b_6th_1')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_6th_1', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-6-01</div>
          CLASSROOM B-601
        </div>
        <div onClick={() => onRoomClick('b_6th_2')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_6th_2', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-6-02</div>
          CLASSROOM B-602
        </div>
        <div onClick={() => onRoomClick('b_6th_3')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_6th_3', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-6-03</div>
          CLASSROOM B-603
        </div>
        <div onClick={() => onRoomClick('b_6th_4')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_6th_4', fromNode, toNode, route)}`} style={{ height: '120px' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-6-04</div>
          CLASSROOM B-604
        </div>
        <div onClick={() => onRoomClick('b_6th_5')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_6th_5', fromNode, toNode, route)}`} style={{ height: '120px', gridColumn: 'span 2' }}>
          <div className="absolute top-2 left-2 text-[8px] opacity-30">B-6-05</div>
          STUDIO
        </div>
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockBGenericFloor = ({ floor, rooms, fromNode, toNode, route, onRoomClick }: BlueprintProps & { floor: string, rooms: string[] }) => (
  <div className="block-b-page">
    <div className="header"><div>{floor.toUpperCase()}</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick(`b_stair_${floor.charAt(0)}`)}
        className={`stair cursor-pointer transition-colors ${getRoomClass(`b_stair_${floor.charAt(0)}`, fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR
      </div>
      <div className="wc-box" style={{ height: '60px', position: 'relative', marginTop: '10px' }}>W/C</div>
    </div>
    <div className="b-main-wing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', padding: '30px' }}>
        {rooms.map((room, idx) => {
          const [name, type] = room.split('|');
          const nodeId = `b_${floor.toLowerCase().replace(' floor', '')}_${idx + 1}`; // Rough mapping
          return (
            <div 
              key={idx}
              onClick={() => onRoomClick(nodeId)}
              className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass(nodeId, fromNode, toNode, route)}`}
              style={{ height: rooms.length > 4 ? '120px' : '180px' }}
            >
              <div className="absolute top-2 left-2 text-[8px] opacity-30">B-{floor.charAt(0)}-{idx+1}</div>
              {name}
            </div>
          );
        })}
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockBGround = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="block-b-page">
    <div className="header"><div>GROUND FLOOR (G)</div><div>BLOCK B</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#ff6a44]" />
      <div className="absolute left-[160px] top-[100px] bottom-[100px] w-px bg-[#ff6a44]" />
    </div>

    <div className="b-sidebar">
      <div 
        onClick={() => onRoomClick('b_stair_g')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('b_stair_g', fromNode, toNode, route)}`} 
        style={{ height: '80px', position: 'relative' }}
      >
        STAIR (G)
      </div>
      <div className="box" style={{ height: '120px', position: 'relative', background: 'rgba(255, 249, 196, 0.05)', borderColor: '#fff176' }}>
        <div className="absolute top-2 left-2 text-[8px] opacity-30">B-G-01</div>
        BLOCK B LOBBY
      </div>
    </div>
    <div className="b-main-wing">
      <div onClick={() => onRoomClick('b_g_workshop')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('b_g_workshop', fromNode, toNode, route)}`} style={{ top: '50px', left: '50px', width: '450px', height: '500px', fontSize: '24px' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">B-G-02</div>
        WORKSHOP ROOM
      </div>
    </div>
    
    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockCBasement = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page" style={{ minHeight: '600px' }}>
    <div className="header"><div>BASEMENT</div><div>BLOCK C</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#10b981]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#10b981]" />
    </div>

    <div className="straight-layout" style={{ width: '750px', height: '450px', borderStyle: 'solid', background: 'rgba(255, 255, 255, 0.02)', borderColor: '#10b981' }}>
      <div className="header" style={{ border: 'none', color: '#10b981', opacity: 0.6 }}>CANTEEN & SERVICES</div>

      <div onClick={() => onRoomClick('c_canteen')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('c_canteen', fromNode, toNode, route)}`} style={{ top: '50px', left: '50px', width: '400px', height: '300px', fontSize: '24px', background: 'rgba(255, 243, 224, 0.05)', borderColor: '#ffb74d' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">C-B-01</div>
        CANTEEN AREA
      </div>

      <div onClick={() => onRoomClick('c_kitchen')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('c_kitchen', fromNode, toNode, route)}`} style={{ top: '50px', right: '50px', width: '200px', height: '150px' }}>
        <div className="absolute top-2 left-2 text-[8px] opacity-30">C-B-02</div>
        KITCHEN
      </div>

      <div 
        onClick={() => onRoomClick('c_stair_b')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('c_stair_b', fromNode, toNode, route)}`} 
        style={{ bottom: '20px', right: '50px', width: '150px', height: '60px', borderColor: '#10b981', color: '#10b981' }}
      >
        STAIR C1
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const BlockCGround = ({ fromNode, toNode, route, onRoomClick }: BlueprintProps) => (
  <div className="floor-page" style={{ minHeight: '600px' }}>
    <div className="header"><div>GROUND FLOOR</div><div>BLOCK C</div></div>
    
    {/* Architectural Guidelines */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-[100px] left-[40px] right-[40px] h-px bg-[#10b981]" />
      <div className="absolute left-[350px] top-[100px] bottom-[100px] w-px bg-[#10b981]" />
    </div>

    <div className="straight-layout" style={{ width: '750px', height: '450px', borderStyle: 'solid', background: 'rgba(255, 255, 255, 0.02)', borderColor: '#10b981' }}>
      <div className="header" style={{ border: 'none', color: '#10b981', opacity: 0.6 }}>ADMIN & ADMISSION CELL</div>

      <div onClick={() => onRoomClick('c_admission')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('c_admission', fromNode, toNode, route)}`} style={{ top: '50px', left: '50px', width: '300px', height: '250px', fontSize: '20px' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">C-G-01</div>
        ADMISSION CELL
      </div>

      <div onClick={() => onRoomClick('c_admin')} className={`box cursor-pointer hover:bg-blue-50 transition-colors ${getRoomClass('c_admin', fromNode, toNode, route)}`} style={{ top: '50px', right: '50px', width: '300px', height: '250px', fontSize: '20px' }}>
        <div className="absolute top-4 left-4 text-[10px] opacity-30">C-G-02</div>
        ADMIN BLOCK
      </div>

      <div 
        onClick={() => onRoomClick('c_stair_g')}
        className={`stair cursor-pointer transition-colors ${getRoomClass('c_stair_g', fromNode, toNode, route)}`} 
        style={{ bottom: '20px', left: '50px', width: '150px', height: '60px', borderColor: '#10b981', color: '#10b981' }}
      >
        STAIR C1
      </div>
    </div>

    {/* Scale Bar */}
    <div className="absolute bottom-4 right-4 flex items-center gap-2">
      <div className="w-20 h-1 bg-[#334155] relative">
        <div className="absolute left-0 top-0 w-px h-2 bg-[#334155]" />
        <div className="absolute right-0 top-0 w-px h-2 bg-[#334155]" />
      </div>
      <span className="text-[8px] text-[#475569]">10m</span>
    </div>
  </div>
);

export const SchematicMap = ({ route }: { route: { path: string[] } }) => {
  const startNodeId = route.path[0];
  const endNodeId = route.path[route.path.length - 1];
  const startNode = NODES[startNodeId as keyof typeof NODES];
  const endNode = NODES[endNodeId as keyof typeof NODES];

  return (
    <div className="schematic-container custom-scrollbar">
      <div className="schematic-frame">
        <div className="schematic-label">ROUTE SCHEMATIC</div>
        
        <svg viewBox="0 0 800 400" className="w-[90%] h-auto max-h-[60vh]">
          {/* Grid lines inside SVG */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Curved Path Line */}
          <path 
            d="M 120 150 C 250 150, 300 350, 450 300 S 600 220, 680 250" 
            stroke="#38bdf8" 
            strokeWidth="4" 
            fill="none" 
            strokeLinecap="round"
            style={{ 
              strokeDasharray: 1000, 
              strokeDashoffset: 1000,
              animation: 'draw 2.5s ease-out forwards',
              filter: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))'
            }}
          />
          
          {/* Start Node (Diamond) */}
          <g transform="translate(120, 150)">
            <rect x="-20" y="-20" width="40" height="40" fill="#020617" stroke="#38bdf8" strokeWidth="2" transform="rotate(45)" />
            <circle r="5" fill="#c0392b" />
            <text x="-10" y="-40" textAnchor="middle" className="font-teko text-[40px] fill-white font-bold uppercase tracking-widest">
              {startNode?.name?.split(' ')[0] || 'START'}
            </text>
          </g>
 
          {/* End Node (Diamond) */}
          <g transform="translate(680, 250)">
            <rect x="-20" y="-20" width="40" height="40" fill="#020617" stroke="#38bdf8" strokeWidth="2" transform="rotate(45)" />
            <circle r="5" fill="#c0392b" />
            <text x="40" y="10" textAnchor="start" className="font-teko text-[60px] fill-white font-bold uppercase leading-none tracking-widest">
              {endNode?.name?.split(' ')[0] || 'GATE'}
              <tspan x="40" dy="45" className="text-[40px] opacity-50">{endNode?.name?.split(' ')[1] || '1'}</tspan>
            </text>
          </g>
        </svg>
      </div>

      <div className="path-sequence-row">
        {route.path.map((nodeId, idx) => (
          <React.Fragment key={nodeId}>
            <div className="path-box">
              {NODES[nodeId as keyof typeof NODES]?.name || nodeId}
            </div>
            {idx < route.path.length - 1 && (
              <div className="path-box-arrow">➔</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const BlueprintRenderer = ({ block, floor, fromNode, toNode, route, onRoomClick }: { block: string, floor: string, fromNode: string, toNode: string, route: { path: string[], distance: number } | null, onRoomClick: (nodeId: string) => void }) => {
  const [showSchematic, setShowSchematic] = React.useState(false);
  let content = null;
  
  // Normalize floor name to match blockData keys
  const f = floor.toLowerCase().replace(' floor', '');
  const floorKey = f.charAt(0).toUpperCase() + f.slice(1); // e.g. '1st', 'Ground', 'Basement'

  if (showSchematic && route) {
    content = <SchematicMap route={route} />;
  } else if (block === 'A') {
    if (f === 'basement') content = <BlockABasement fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === 'ground') content = <BlockAGround fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '1st') content = <BlockA1st fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '2nd') content = <BlockA2nd fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '3rd') content = <BlockA3rd fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '4th') content = <BlockA4th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '5th') content = <BlockA5th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '6th') content = <BlockA6th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '7th') content = <BlockA7th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '8th') content = <BlockA8th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
  } else if (block === 'B') {
    if (f === 'basement') content = <BlockBBasement fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === 'ground') content = <BlockBGround fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '1st') content = <BlockB1st fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '2nd') content = <BlockB2nd fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '3rd') content = <BlockB3rd fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '4th') content = <BlockB4th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '5th') content = <BlockB5th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === '6th') content = <BlockB6th fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else {
      // Use generic floor for Block B 1st-6th
      const rooms = blockData.blockB.rooms[floorKey as keyof typeof blockData.blockB.rooms] || [];
      content = <BlockBGenericFloor floor={f} rooms={rooms} fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    }
  } else if (block === 'C') {
    if (f === 'basement') content = <BlockCBasement fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
    else if (f === 'ground') content = <BlockCGround fromNode={fromNode} toNode={toNode} route={route} onRoomClick={onRoomClick} />;
  }
  
  if (!content) {
    content = (
      <div className="flex flex-col items-center justify-center h-[600px] border-2 border-dashed border-white/5 rounded-3xl bg-white/[0.02]">
        <div className="w-16 h-16 border-4 border-white/10 border-t-[#38bdf8] rounded-full animate-spin mb-6" />
        <div className="font-teko text-3xl text-white/40 tracking-[8px] uppercase">Architectural Data Pending</div>
        <div className="text-[10px] text-white/20 uppercase tracking-widest mt-2">Floor: {block}-{floor} · System: Pathfinder v2.0</div>
      </div>
    );
  }

  return (
    <div className="blueprint-container custom-scrollbar">
      {route && (
        <div className="flex justify-center mb-8 gap-4">
          <button 
            onClick={() => setShowSchematic(false)}
            className={`px-6 py-2 rounded-xl font-teko text-lg tracking-[4px] transition-all border-2 uppercase ${!showSchematic ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
          >
            Floor Plan
          </button>
          <button 
            onClick={() => setShowSchematic(true)}
            className={`px-6 py-2 rounded-xl font-teko text-lg tracking-[4px] transition-all border-2 uppercase ${showSchematic ? 'bg-[#38bdf8]/20 border-[#38bdf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]' : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'}`}
          >
            Route Schematic
          </button>
        </div>
      )}
      <div className="scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100 transition-transform origin-top">
        {content}
      </div>
    </div>
  );
};
