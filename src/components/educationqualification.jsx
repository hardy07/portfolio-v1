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
          borderRadius: "15px",
          padding: "20px",
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative", // Ensure the year box is positioned relative to the content box
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1e1e1e",
            color: "#4a5568",
            padding: "8px 15px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            zIndex: "1", // Ensure the year box stays above other content
          }}
        >
          2021 - 2025
        </div>
        <h3 className="vertical-timeline-element-title font-semibold">
          B.Tech Computer Science with Artificial Intelligence
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic", color: "#c7c7c7" }}
        >
          <a href="https://www.amrita.edu/campus/chennai/" target="_blank">
            Amrita Vishwa Vidyapeetham, Chennai
          </a>
        </h4>
        <p>
          Data Structures and Algorithms, Machine Learning, Speech Processing,
          Operating Systems, Computer Networks, DBMS, etc.
        </p>
        <h4 style={{ marginTop: "10px", color: "#00aaff" }}>CGPA: 7.25</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
          borderRadius: "15px",
          padding: "20px",
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative", // Ensure the year box is positioned relative to the content box
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1e1e1e",
            color: "#4a5568",
            padding: "8px 15px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            zIndex: "1", // Ensure the year box stays above other content
          }}
        >
          2020 - 2021
        </div>
        <h3 className="vertical-timeline-element-title font-semibold">
          12th Grade
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic", color: "#c7c7c7" }}
        >
          <a href="https://adityacbse.com/" target="_blank_">
            Aditya Vidyashram, Puducherry
          </a>
        </h4>
        <p>
          English, Physics, Mathematics, Chemistry, Computer Science (Python)
        </p>
        <h4 style={{ marginTop: "10px", color: "#00aaff" }}>
          Percentage: 89.3%
        </h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#1e1e1e",
          color: "#fff",
          borderRadius: "15px",
          padding: "20px",
          backdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          WebkitBackdropFilter: "blur(10px) brightness(110%) saturate(120%)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
          position: "relative", // Ensure the year box is positioned relative to the content box
        }}
        contentArrowStyle={{
          borderRight: "7px solid #1e1e1e",
        }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#1e1e1e",
            color: "#4a5568",
            padding: "8px 15px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            zIndex: "1", // Ensure the year box stays above other content
          }}
        >
          2018 - 2019
        </div>
        <h3 className="vertical-timeline-element-title font-semibold">
          10th Grade
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ fontStyle: "italic", color: "#c7c7c7" }}
        >
          <a href="https://vhsspondy.org/" target="_blank_">
            Vivekanandha Higher Secondary School, Puducherry
          </a>
        </h4>
        <p>Tamil, English, Mathematics, Science, Social</p>
        <h4 style={{ marginTop: "10px", color: "#00aaff" }}>Percentage: 93%</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
      />
    </VerticalTimeline>
  );
};

export default EducationQualifications;
