import React from "react";
import Table from "../components/Table";
import pic1 from "../images/pic1.png";
import pic2 from "../images/girl.jpeg";
import boy1 from "../images/boy1.jpeg";
import boy3 from "../images/boy3.jpeg";
import girl from "../images/girl.jpeg";
import girl2 from "../images/girl2.jpeg";
import girl3 from "../images/girl3.jpeg";
import girl4 from "../images/girl4.jpeg";


function Home() {
  let interns = [
    {
      id: 1,
      img_url:girl,
      name: "Favour Obi",
      email: "favour21@gmail.com",
      track: "Frontend",
      total: "95",
      age: "24",
      state: "Awka",
      github: "favour2022@github.com",
      task1: 18,
      task2: 19,
      task3: 18,
      task4: 20,
      task5: 20,
    },
    {
      id: 2,
      img_url: boy1,
      name: "Frank Nwosu",
      email: "Franknozak@gmail.com",
      track: "Frontend",
      total: "91",
      age: "20",
      state: "Lagos",
      github: "emma@github.com",
      task1: 20,
      task2: 20,
      task3: 15,
      task4: 16,
      task5: 20,
    },
    {
      id: 3,
      img_url: girl2,
      name: "Joy Akin",
      email: "Joyakin@gmail.com",
      track: "Frontend",
      total: "90",
      age: "29",
      state: "Ogun",
      github: "joyakincode@github.com",
      task1: 18,
      task2: 19,
      task3: 17,
      task4: 16,
      task5: 20,
    },
    {
      id: 4,
      img_url: boy3,
      name: "Paul Per",
      email: "Paulper@gmail.com",
      track: "Frontend",
      total: "80",
      age: "19",
      state: "Enugu",
      github: "paul4678@github.com",
      task1: 10,
      task2: 19,
      task3: 15,
      task4: 16,
      task5: 20,
    },
    {
      id: 5,
      img_url: pic1,
      name: "Chidalu Etuk",
      email: "chidalu1234@gmail.com",
      track: "Frontend",
      total: "80",
      age: "29",
      state: "ifite",
      github: "chidalu2002@github.com",
      task1: 18,
      task2: 10,
      task3: 16,
      task4: 16,
      task5: 20,
    },
    {
      id: 6,
      img_url: pic2,
      name: "Nse Francis",
      email: "nse@gmail.com",
      track: "Frontend",
      total: "70",
      age: "20",
      state: "Enugu",
      github: "nse2022@github.com",
      task1: 18,
      task2: 10,
      task3: 12,
      task4: 16,
      task5: 20,
    },
    {
      id: 7,
      img_url: girl3,
      name: "Annie Ezechukwu",
      email: "annie@gmail.com",
      track: "Frontend",
      total: "65",
      age: "27",
      state: "Lagos",
      github: "annie5050@github.com",
      task1: 12,
      task2: 10,
      task3: 12,
      task4: 16,
      task5: 15,
    },
    {
      id: 8,
      img_url: girl4,
      name: "Chinaza Eze",
      email: "chinaza90@gmail.com",
      track: "Frontend",
      total: "50",
      age: "23",
      state: "Anambra",
      github: "chinaza78@github.com",
      task1: 10,
      task2: 13,
      task3: 8,
      task4: 7,
      task5: 12,
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
