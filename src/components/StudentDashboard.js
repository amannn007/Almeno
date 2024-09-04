import React from 'react';
import '../App.css';

const StudentDashboard = ({ courses, markAsCompleted }) => {
  const enrolledCourses = courses.filter(course => course.enrolled);

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <h3>Enrolled Courses</h3>
      <div className="course-list">
        {enrolledCourses.map(course => (
          <div key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
            <img src={course.thumbnail} alt={`${course.title} thumbnail`} className="course-thumbnail" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Status:</strong> {course.completed ? 'Completed' : 'Enrolled'}</p>
              {!course.completed && (
                <button
                  className="mark-completed-button"
                  onClick={() => markAsCompleted(course.id)}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
