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
    <div>
      <h2>Name: {inertnDetail.name}</h2>
      <p>Age: {inertnDetail.age}</p>
      <img src={inertnDetail.img_url} alt="" />
    </div>
  );
}

export default Interndetail;
