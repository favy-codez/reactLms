import React from "react";
import { Link } from "react-router-dom";

function Table({ internsdetails }) {
  console.log(internsdetails);
  return (
    <div>
      <div className="container">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Total score</th>
        </tr>
        <tr className="data">
          {internsdetails.map((intern) => (
            <Link to={`interndetail/${intern.id}`} key={intern.id}>
              <td>{intern.name}</td>
              <td>{intern.email}</td>
              <td>{intern.phone}</td>
              <td>{intern.total}</td>
            </Link>
          ))}
        </tr>
      </table>
      </div>
    </div>
  );
}

export default Table;
