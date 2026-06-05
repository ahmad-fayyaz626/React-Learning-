import Card from "./Components/Card";
import React from "react";
const App = () => {
  const cardData = [
    {
      id: 1,
      name: "John Doe",
      profession: "Frontend Developer",
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      profession: "UI/UX Designer",
      imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Michael Brown",
      profession: "Backend Engineer",
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      profession: "Product Manager",
      imgSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "David Smith",
      profession: "Full Stack Developer",
      imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Jessica Taylor",
      profession: "Digital Marketer",
      imgSrc: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
     {
      cardData.map ((card)=><Card key={card.id} name={card.name} profession={card.profession} imgSrc={card.imgSrc}/>)
     }
    </div>
  );
};

export default App;
