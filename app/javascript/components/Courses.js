import React from "react";
import 'courses.css';

const Courses = ({ courses }) => {
  return (
    <>
      <h1 className="title">Courses</h1>
      <a href="/courses/new" className="subTitle">Add Course</a>
      <br />
      <h2>{ courses.length <= 0 ? "No Courses" : "" }</h2> 
      { courses.map((course) => (
        <div>
          <a href={`/courses/${course.id}`}>{course.name}</a>
        </div>
      ))}
    </>
  )
}

export default Courses;