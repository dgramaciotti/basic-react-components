import list from "../../data/students";
import React from "react";
import "./List.css";
export default (props) => {
  let listArray = list.map((student) => {
    return (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.grade}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Student</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>{listArray}</tbody>
    </table>
  );
};
