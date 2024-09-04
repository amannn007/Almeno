import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import StudentDashboard from './components/StudentDashboard';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/courses.json'); // Fetch data from JSON file in public directory
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Add `enrolled` and `completed` fields to each course
        const coursesWithStatus = data.courses.map(course => ({
          ...course,
          enrolled: false,
          completed: false,
        }));
        setCourses(coursesWithStatus);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError(error.message);
      }
    };

    fetchCourses();
  }, []);

  const enrollCourse = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, enrolled: true } : course
    ));
  };

  const markAsCompleted = (courseId) => {
    setCourses(courses.map(course =>
      course.id === courseId ? { ...course, completed: true } : course
    ));
  };

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Course Management System</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Student Dashboard</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CourseList courses={courses} enrollCourse={enrollCourse} />} />
            <Route path="/course/:id" element={<CourseDetail courses={courses} />} />
            <Route path="/dashboard" element={<StudentDashboard courses={courses} markAsCompleted={markAsCompleted} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
