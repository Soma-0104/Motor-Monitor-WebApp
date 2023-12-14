import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/CircularProgressBar.css';
import Sidebar from './Sidebar';

const CircularProgressBar = ({ progressData }) => {
  const [progressDetails, setProgressDetails] = useState(progressData.map(() => ({ percentage: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressDetails((prevProgressDetails) =>
        prevProgressDetails.map((progress, index) => {
          const newPercentage =
            progress.percentage < progressData[index].percentage ? progress.percentage + 1 : progress.percentage;

          return { ...progress, percentage: newPercentage };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [progressData]);

  return (
    <div className="flex">
      <Sidebar/>
      <div className="progress-bars-container">
        <div className="progress-bars">
          {progressDetails.map((progress, index) => (
            <div key={index} className="card other-card">
              <div className="card-content">
                <div className="task-name">{progressData[index].name}</div>
                <div className="percentage-info">
                  <CircularProgressbar value={progress.percentage} text={`${progress.percentage}%`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
