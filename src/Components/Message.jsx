import React from "react";

function Message(props) {
  return (
    <div>
      <div className="w-full mb-4" dir={props.isUserMessage ? "rtl" : "ltr"}>
        <p className="text-gray-400 mx-[1.4rem]">{props.greenName}</p>
        <div
          className={`talk_bubble ${
            props.isUserMessage
              ? "green_bubble mr-[1.4rem] bg-[#134D37]"
              : "gray_bubble ml-[1.4rem] bg-[#222627]"
          }`}
        >
          <div className="talk_text break-words">
            <p>{props.greenMess}</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1 mx-[1.4rem]">{props.time}</p>
      </div>
    </div>
  );
}

export default Message;
