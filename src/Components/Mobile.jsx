import React, { useState } from "react";
import Message from "./Message";

function Mobile(props) {
  const [border, setBorder] = useState("border-[#454447]");

  const [text, setText] = useState("");

  function borderClicked() {
    const newBorder =
      border === "border-[#454447]" ? "border-[#7480FE]" : "border-[#454447]";
    setBorder(newBorder);
  }

  const sendMass = () => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      user: props.name,
      mess: text,
      time: timestamp,
    };

    props.setMess([...props.message, newMessage]);

    setText("");
  };

  return (
    <div>
      <div
        onClick={borderClicked}
        className={`bg-black border-solid border-4 rounded-3xl hover:border-[#7480FE] ${border} p-4 w-screen h-screen lg:w-[344px] lg:h-[600px] transition`}
      >
        <div
          className="relative h-full w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/3d/4d/a0/3d4da0ac8d094bdbe920e17de5962557.jpg)",
          }}
        >
          <div className="h-[90%] overflow-x-scroll">
            {props.message.map((i, index) => {
              if (i.mess != "") {
                return (
                  <Message
                    key={index}
                    greenName={i.user}
                    greenMess={i.mess}
                    isUserMessage={i.user === props.name}
                    time={i.time}
                  />
                );
              }
            })}
          </div>

          <div className="absolute bottom-0 max-h-[5rem] w-full flex items-center gap-2">
            <textarea
              type="text"
              placeholder="Write a message"
              className="input input-bordered w-full bg-[#1D232A] text-white border border-solid border-[#454447] resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>

            <button
              onClick={sendMass}
              className="bg-[#29BC63] p-4 rounded-full transition hover:bg-[#29df75]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="white"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
