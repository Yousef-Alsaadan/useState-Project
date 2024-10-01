import React, { useState } from "react";
import HomePage from "./HomePage";

function LogPage() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [startChat, setStartChat] = useState(false);

  const handleStartChat = () => {
    if (name1.trim() && name2.trim()) {
      setStartChat(true);
    }
  };

  if (startChat) {
    return <HomePage fname={name1} sname={name2} />;
  }
  return (
    <div>
      <div className="bg-[#1D232A] min-h-screen flex flex-col gap-8 items-center w-full pt-8">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">First account</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-[#1D232A] text-white border border-solid border-[#454447]"
            onChange={(e) => setName1(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">second account</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs bg-[#1D232A] text-white border border-solid border-[#454447]"
            onChange={(e) => setName2(e.target.value)}
          />
        </label>

        <button
          onClick={handleStartChat}
          className="bg-[#29BC63] text-white p-4 w-full max-w-xs rounded-full transition hover:bg-[#29df75]"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}

export default LogPage;
