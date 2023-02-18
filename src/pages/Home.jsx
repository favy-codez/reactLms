import React from "react";
import Table from "../components/Table";
import pic1 from "../images/pic1.png";
import pic2 from "../images/girl.jpeg";

function Home() {
  let interns = [
    {
      id: 1,
      img_url: pic1,
      name: "Favour Obi",
      email: "favour21@gmail.com",
      track: "Frontend",
      total: "90",
      age: "24",
      address: "ifite, Awks",
      github: "emma@github.com",
      task1: 15,
      task2: 17,
      task3: 18,
      task4: 16,
      task5: 19,
    },
    {
      id: 2,
      img_url: pic2,
      name: "Frank Nwosu",
      email: "Frank@gmail.com",
      track: "Frontend",
      total: "76",
      age: "25",
      address: "ifite",
      github: "emma@github.com",
      task1: 18,
      task2: 10,
      task3: 12,
      task4: 16,
      task5: 20,
    },
    {
      id: 3,
      name: "Joy Akin",
      email: "Joy@gmail.com",
      track: "Frontend",
      total: "90",
      age: "20",
      address: "ifite",
      github: "emma@github.com",
    },
    {
      id: 4,
      name: "Paul Per",
      email: "Paul@gmail.com",
      track: "Frontend",
      total: "80",
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
