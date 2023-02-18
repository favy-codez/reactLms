import React from "react";
import Table from "../components/Table";
import pic1 from "../images/pic1.png";
import pic2 from "../images/girl.jpeg";

function Home() {
  let interns = [
    {
      id: 1,
      img_url: pic1,
      name: "Emmanuel",
      email: "emma@gmail.com",
      phone: "080123",
      total: "100",
      age: "20",
      address: "ifite",
      github: "emma@github.com",
    },
    {
      id: 2,
      img_url: pic2,
      name: "Frank",
      email: "Frank@gmail.com",
      phone: "080123",
      total: "80",
      age: "20",
      address: "ifite",
      github: "emma@github.com",
    },
    {
      id: 3,
      name: "Joy",
      email: "Joy@gmail.com",
      phone: "080123",
      total: "90",
      age: "20",
      address: "ifite",
      github: "emma@github.com",
    },
    {
      id: 4,
      name: "Paul",
      email: "Paul@gmail.com",
      phone: "080123",
      total: "70",
      age: "20",
      address: "ifite",
      github: "emma@github.com",
    },
  ];

  localStorage.setItem("interns", JSON.stringify(interns));

  return (
    <div>
      <Table internsdetails={interns} />
    </div>
  );
}

export default Home;