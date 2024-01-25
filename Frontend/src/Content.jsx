import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Content() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get("htto://localhost:8081")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-3">
      <Link to={"/create"}>
        <button type="button" class="btn btn-primary m-2">
          Add +
        </button>
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data) => (
            <tr key={data}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <button type="button" class="btn btn-primary"></button>update
              </td>
              <td>
                <button type="button" class="btn btn-danger"></button>Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
