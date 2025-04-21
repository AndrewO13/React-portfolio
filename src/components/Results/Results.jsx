import React from 'react';
import './Results.css';

const Results = () => {
  const resultsData = [
    {
      courseCode: 'CSC101',
      courseTitle: 'Essential Hardware and Software Concepts',
      grade: 'A',
      creditUnits: 4
    },
    {
      courseCode: 'CSC102',
      courseTitle: 'Fundamentals of Computing',
      grade: 'C',
      creditUnits: 4
    },
    {
      courseCode: 'CSC103',
      courseTitle: 'Structured Programming',
      grade: 'A',
      creditUnits: 4
    },
    {
      courseCode: 'MAT101',
      courseTitle: 'Discrete Mathematics',
      grade: 'A',
      creditUnits: 3
    },
    {
      courseCode: 'ENG101',
      courseTitle: 'Writing and Study Skills',
      grade: 'A',
      creditUnits: 3
    },
    {
      courseCode: 'REL101',
      courseTitle: 'Understanding the Old Testament',
      grade: 'A',
      creditUnits: 3
    }
  ];

  return (
    <div className="content-section">
      <h2>Year 1 Semester 1 Results</h2>
      <table>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((result, index) => (
            <tr key={index}>
              <td>{result.courseCode}</td>
              <td>{result.courseTitle}</td>
              <td>{result.grade}</td>
              <td>{result.creditUnits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results; 