import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const towers = ['Tower A', 'Tower B', 'Tower C'];
const floors = Array.from({ length: 15 }, (_, i) => 15 - i);
const layouts = [
  { id: 1, type: 'Room', area: '950 sqft', rooms: 2, img: 'https://via.placeholder.com/150' },
  { id: 2, type: 'President Suite', area: '1250 sqft', rooms: 3, img: 'https://via.placeholder.com/150' },
  { id: 3, type: 'Studio', area: '500 sqft', rooms: 1, img: 'https://via.placeholder.com/150' },
  { id: 4, type: 'Penthouse', area: '2000 sqft', rooms: 4, img: 'https://via.placeholder.com/150' },
];

function TowerSelector({ onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {towers.map((tower) => (
        <div
          key={tower}
          className="bg-white shadow hover:shadow-lg transition p-6 rounded cursor-pointer text-center"
          onClick={() => onSelect(tower)}
        >
          <h2 className="text-xl font-semibold">{tower}</h2>
        </div>
      ))}
    </div>
  );
}

function FloorSelector({ tower, onSelect }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Select Floor in {tower}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {floors.map((floor) => (
          <button
            key={floor}
            className="bg-white border hover:bg-blue-100 transition px-4 py-2 rounded shadow-sm"
            onClick={() => onSelect(floor)}
          >
            Floor {floor}
          </button>
        ))}
      </div>
    </div>
  );
}

function LayoutGrid({ tower, floor, onSelect }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Layouts - {tower}, Floor {floor}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {layouts.map((layout) => (
          <motion.div
            key={layout.id}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded overflow-hidden shadow-md cursor-pointer group"
            onClick={() => onSelect(layout)}
          >
            <img src={layout.img} alt="layout" className="w-full h-28 object-cover" />
            <div className="p-2">
              <p className="text-sm font-semibold">{layout.type}</p>
              <p className="text-xs text-gray-500">{layout.area}</p>
              <p className="text-xs text-gray-500">{layout.rooms} Rooms</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LayoutDetail({ layout, tower, floor }) {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Unit Details</h2>
      <img src={layout.img} alt="full layout" className="w-full h-64 object-cover rounded" />
      <div className="mt-4 space-y-2 text-sm">
        <p><strong>Tower:</strong> {tower}</p>
        <p><strong>Floor:</strong> {floor}</p>
        <p><strong>Type:</strong> {layout.type}</p>
        <p><strong>Area:</strong> {layout.area}</p>
        <p><strong>Rooms:</strong> {layout.rooms}</p>
      </div>
    </div>
  );
}

function RealEstateSelectorApp() {
  const [tower, setTower] = useState(null);
  const [floor, setFloor] = useState(null);
  const [layout, setLayout] = useState(null);

  const reset = () => {
    setTower(null);
    setFloor(null);
    setLayout(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Mini Real Estate Floor Selector</h1>
      {!tower ? (
        <TowerSelector onSelect={setTower} />
      ) : !floor ? (
        <FloorSelector tower={tower} onSelect={setFloor} />
      ) : !layout ? (
        <LayoutGrid tower={tower} floor={floor} onSelect={setLayout} />
      ) : (
        <LayoutDetail layout={layout} tower={tower} floor={floor} />
      )}

      {(tower || floor || layout) && (
        <div className="mt-6 text-center">
          <button onClick={reset} className="text-sm text-blue-600 hover:underline">
            Start Over
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RealEstateSelectorApp />} />
      </Routes>
    </Router>
  );
}
