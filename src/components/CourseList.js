import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CourseList = ({ courses, enrollCourse }) => {
  return (
    <div className="course-list">
      <h2>Available Courses</h2>
      {courses.map(course => (
        <div key={course.id} className="course-item">
          <img src={course.thumbnail} alt={`${course.title} thumbnail`} className="course-thumbnail" />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Status:</strong> {course.enrolled ? (course.completed ? 'Completed' : 'Enrolled') : 'Available'}</p>
            <div className="course-actions">
              {!course.enrolled && (
                <button
                  className="enroll-button"
                  onClick={() => enrollCourse(course.id)}
                >
                  Enroll
                </button>
              )}
              <Link to={`/course/${course.id}`} className="view-details-link">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
