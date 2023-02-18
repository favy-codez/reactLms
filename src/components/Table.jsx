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
        <h1 className="text-center mt-3">Interns</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Total score</th>
            </tr>
          </thead>
          <tbody>
            {internsdetails.map((intern) => (
              <tr key={intern.id} onClick={() => getInternDetail(intern.id)}>
                <td>{intern.name}</td>
                <td>{intern.email}</td>
                <td>{intern.phone}</td>
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
