import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationQualifications = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
          borderRadius: "20px", // Adjust border-radius for rounded corners
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)", // for Safari
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // optional shadow
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        date="2021 - 2025"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h1 className="vertical-timeline-element-title font-semibold">
          B.Tech Computer Science with Artificial Intelligence
        </h1>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic" }}
        >
          Amrita Vishwa Vidyapeetham, Chennai
        </h4>
        <p>
          Data Structures and Algorithms, Machine learning, Speech Processing,
          Operating Systems, Computer Networks, DBMS, etc.
        </p>
        <h1>CGPA: 7.2</h1>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
          borderRadius: "20px", // Adjust border-radius for rounded corners
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)", // for Safari
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // optional shadow
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        date="2020 - 2021"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h1 className="vertical-timeline-element-title font-semibold">
          12th Grade
        </h1>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic" }}
        >
          Aditya Vidyashram, Puducherry
        </h4>
        <p>
          English, Physics, Mathematics, Chemistry, Computer Science(Python)
        </p>
        <h1>Percentage: 89.3%</h1>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
          borderRadius: "20px", // Adjust border-radius for rounded corners
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)", // for Safari
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)", // optional shadow
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        date="2018 - 2019"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h1 className="vertical-timeline-element-title font-semibold">
          10th Grade
        </h1>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic" }}
        >
          Vivekanandha Higher Secondary School, Puducherry
        </h4>
        <p>Tamil, English, Mathematics, Science, Social</p>
        <h1>Percentage: 93%</h1>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default EducationQualifications;
