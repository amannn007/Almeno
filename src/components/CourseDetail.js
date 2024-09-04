import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div className="error-message">Course not found</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <img src={course.thumbnail} alt={`${course.title} thumbnail`} className="course-detail-thumbnail" />
      <div className="course-detail-info">
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Description:</strong> {course.description}</p>
        <p><strong>Status:</strong> {course.status}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
        <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
        <div className="course-syllabus">
          <h4>Syllabus</h4>
          <p>{course.syllabus}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
