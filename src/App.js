import React, { useState } from 'react';
import Land from './comp/land/Land';
import './App.css';
import Sidebar from './comp/Sidebar';
import UpBar from './comp/Upbar';
import { Timeline } from '@mui/icons-material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import  'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import TimeLine from './comp/timeline/Timeline';
import Timer from './comp/timer/timermain';


const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className='bg-black' >
      
      <UpBar />
      <Land />
      
      
    </div>
  );
};

export default App;
