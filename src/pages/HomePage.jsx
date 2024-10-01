import React, { useState } from "react";
import Mobile from "../Components/Mobile";

function HomePage(props) {
  const [message, setMess] = useState([]);

  return (
    <div>
      <div className="bg-[#1D232A] min-h-screen flex flex-col gap-16 items-center justify-evenly w-full lg:flex-row">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-center">{props.fname}</h1>
          <Mobile name={props.fname} setMess={setMess} message={message} />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white text-center">{props.sname}</h1>
          <Mobile name={props.sname} setMess={setMess} message={message} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
