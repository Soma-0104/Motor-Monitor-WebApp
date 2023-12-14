import React from 'react';
import CircularProgressBar from './pages/CircularProgressBar';
import Sidebar from './pages/Sidebar';

function App() {
  const progressData = [
    { name: 'Voltage', percentage: 75, total:100 },
    { name: 'Current', percentage: 40, total:100  },
    { name: 'RPM', percentage: 90, total:100  },
    { name: 'Torque', percentage: 80, total:100  },
    { name: 'Power', percentage: 65, total:100  },
    { name: 'Temperature', percentage: 90, total:100  },
    { name: 'Humidity', percentage: 95, total:100  },
    // Add more tasks as needed
  ];

  return (
    <div>
      <CircularProgressBar progressData={progressData} />
    </div>
  );
}

export default App;
