import React from "react";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import TeamCard from "./TeamCard/TeamCard";

const Team = () => {
  const team = [
    {
      id: 1,
      img: img1,
      post: "Engine Expert",
      title: "Car Engine Plug",
    },
    {
      id: 2,
      img: img2,
      post: "Engine Expert",
      title: "Car Engine Plug",
    },
    {
      id: 3,
      img: img3,
      post: "Engine Expert",
      title: "Car Engine Plug",
    },
  ];
  return (
    <div className="text-center my-20">
      <p className="text-xl text-orange-500 font-bold">Team</p>
      <h3 className="text-4xl font-bold my-3">Meet Our Team</h3>
      <p>
        the majority have suffered alteration in some form, by injected humour,{" "}
        <br /> or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            team.map(t=> <TeamCard key={t.id} t={t}></TeamCard>)
        }
      </div>
    </div>
  );
};

export default Team;
