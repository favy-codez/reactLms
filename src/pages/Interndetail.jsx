import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Interndetail() {
  const [inertnDetail, setInternDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const interns = JSON.parse(localStorage.getItem("interns"));

  function checkIntern(id) {
    return id;
  }

  useEffect(() => {
    interns.filter((intern) => {
      if (intern.id === Number(id)) {
        setInternDetail(intern);
      }
    });
  }, []);

  console.log(inertnDetail);

  return (
    <div className="internDetail">
      <div className="nav">
      <h2 className="dashboard">Dashboard</h2>
      <p>Dashboard => {inertnDetail.name}'s profile</p>
      </div>
      

      <div className="d-flex align-center">
        <img src={inertnDetail.img_url} alt="" />
        <div className="container-2">
          <h2 className="text-1">Name : {inertnDetail.name}</h2>
          <h2 className="text-1">Email : {inertnDetail.email}</h2>
          <h2 className="text-1">Track: Frontend</h2>
        </div>
      </div>

      <table className="intern-one">
      <tr>
        <th scope="col">Task1</th>
        <th scope="col">Task2</th>
        <th scope="col">Task3</th>
        <th scope="col">Task4</th>
        <th scope="col">Task5</th>
        <th scope="col">Total</th>
      </tr>
      <tr>
        <td>{inertnDetail.task1}</td>
        <td>{inertnDetail.task2}</td>
        <td>{inertnDetail.task3}</td>
        <td>{inertnDetail.task4}</td>
        <td>{inertnDetail.task5}</td>
        <td>{inertnDetail.total}</td>
      </tr>
      </table>
    </div>
  );
}

export default Interndetail;
