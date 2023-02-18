import React from "react";
import { useNavigate } from "react-router-dom";

function Table({ internsdetails }) {
  const navigate = useNavigate();
  function getInternDetail(id) {
    navigate(`/interndetail/${id}`);
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center mt-3">Interns Scoreboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">Track</th>
              <th scope="col">TOTAL SCORE = 100</th>
            </tr>
          </thead>
          <tbody>
            {internsdetails.map((intern) => (
              <tr key={intern.id} onClick={() => getInternDetail(intern.id)}>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.track}</td>
                <td>{intern.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
