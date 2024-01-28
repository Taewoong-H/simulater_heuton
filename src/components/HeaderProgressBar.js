import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './HeaderProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setProgress(getProgressValue(pathname));
  }, [location]);

  const getProgressValue = (pathname) => {
    switch (pathname) {
      case '/':
        return 0;
      case '/select_goal':
        return 30;
      case '/basic_question_1':
        return 60;
      case '/scenario_b':
        return 100;
      default:
        return 0;
    }
  };

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
