import React, { useState } from "react";
// import './App.css';
import backgroundImage from '../../assets/stars1.jpg';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import { useParallax } from "react-scroll-parallax";

const TimeLine = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const bg=useParallax(
    {
      speed:10
    }
  )
  return (
    <div className="bg " ref={bg.ref} style={{ backgroundRepeat:'repeat'}}>
      <style>
        {`
          /* Apply scale transformation on hover */
          .VerticalTimeline
          {
            overflow: visible;
            z-index: 1;
          }
          .vertical-timeline-element {
            transition: transform 0.3s ease-in-out;
            transform-origin: center bottom;
            transform: scale(1); /* Initial size, can be adjusted as needed */
          }
          .vertical-timeline-element:hover {
            transform: scale(1.1); /* Larger size on hover, adjust the scale factor as needed */
          }
          @media screen and (min-width: 1024px) {
            .VerticalTimeline{
              max-width: 1070px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
            }
            .vertical-timeline-element:hover {
              transform: scale(0.9); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (min-width: 992px){
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 4em 2em 4em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          }
          @media screen and (max-width: 991px) {
            .VerticalTimeline{
              min-width: 1000px;
              margin: auto auto;
              position: relative;
              padding: 2em 4em;
              z-index: 1;
            }
            .vertical-timeline-element {
              position: relative;
              margin: 2em 4em 2em 4em;
          }
            .vertical-timeline-element:hover {
              transform: scale(1.05); /* Larger size on hover, adjust the scale factor as needed */
            }
          } 
          .grad1 {
            content: "";
            width: 500px;
            height: 1000px;
            border-radius: 50%;
            background: rgb(73, 43, 226);
            filter: blur(200px);
            z-index: 10;
            position: absolute;
            left:800px;
            top: 300px; /* Adjust the top position as needed */
          }
          .grad2 {
            content: "";
            width: 500px;
            height: 300px;
            border-radius: 50%;
            background-color: rgb(171, 43, 226);
            filter: blur(200px);
            z-index: 10;
            position: absolute;
            translate: -10px 10px;
            right:800px;
          }     
           
        `}
      </style>
      <div className="outerpart " style={{backgroundImage: `url(${backgroundImage})`}} >
        
      <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
           <div className="grad1">
      
          </div>
          <h3 className="vertical-timeline-element-title">
            OFFICIAL WEBSITE LIVE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">27 June 2023</h4>
          <p>
            Mark your calendars! The official website for our hackathon will go
            live on 27th June 2023, providing all the essential information,
            guidelines, and updates for participants. Get ready to embark on an
            exciting hacking journey!
          </p>
         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            REGISTRATIONS OPENr
          </h3>
          <h4 className="vertical-timeline-element-subtitle">29 June 2023</h4>
          <p>
            It's time to take the first step toward an incredible hacking
            experience. Registrations for our hackathon are now open! Take
            advantage of the opportunity to showcase your skills, collaborate
            with fellow innovators, and compete for exciting prizes. Sign up
            today and secure your spot in this thrilling event.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">THEME REVEAL</h3>
          <h4 className="vertical-timeline-element-subtitle">9 July 2023</h4>
          <p>
            The moment you've been waiting for has arrived! We are thrilled to
            unveil the hackathon's theme. Let your creativity flow as you
            brainstorm innovative ideas within this exciting theme. Abstract
            submission officially begins, giving you a platform to showcase your
            unique approach to problem-solving.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ABSTRACT SUBMISSION STARTS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">11 July 2023</h4>
          <p>
            The anticipation is building! The results of the preliminary round
            of the hackathon will be announced soon. Stay tuned to find out if
            your team has reached the final stage. Prepare yourself for the
            ultimate showdown in the upcoming Uhackathon 4.0 META finale.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            REGISTRATIONS & ABSTRACT SUBMISSION ENDS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            finale. 11 Aug. 2023
          </h4>
          <p>
            Hurry! The clock is ticking. Make sure you complete your
            registration and submit your abstract before the deadline. Don't
            miss out on the chance to demonstrate your skills, tackle real-world
            challenges, and compete against top-notch talent from around the
            globe. Submit your entry to be considered for the preliminary round.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
           <div className="grad2">
      
      </div>
          <h3 className="vertical-timeline-element-title">
            RESULT ANNOUNCEMENT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">18 Aug. 2023</h4>
          <p>
            The anticipation is building! The results of the preliminary round
            of the hackathon will be announced soon. Stay tuned to find out if
            your team has reached the final stage. Prepare yourself for the
            ultimate showdown in the upcoming Uhackathon 4.0 META finale.
          </p>
         
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'rgba(144, 19, 254, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color:'white'
          }}
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          UHACKATHON 4.0 FINALE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          1 & 2 Sept. 2023
          </h4>
          <p>The grand finale of Uhackathon 4.0 META is here! Join us for an electrifying event where the most innovative teams showcase their cutting-edge solutions. Witness the brilliance and ingenuity of participants as they compete for the top spot. Get ready to celebrate the spirit of innovation and excellence in this thrilling finale.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
    </div></div>
  );
};

export default TimeLine;
