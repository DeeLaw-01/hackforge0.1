import React from "react";
import { LuAlarmClock } from "react-icons/lu";
import "./Question.css";
function DynamicQuestion(props) {
  return (
    <>
      <div className="DynamicQuestions">
        <div className="timer text-white">
          <LuAlarmClock size={47} />
          <div className="countdown text-2xl">
            {" "}
            <h1 className="text-5xl">00:00</h1>
          </div>
        </div>
        <div className="problem">
          <div className="pbquest  border-2 rounded-full border-white text-white text-3xl shadow-md shadow-blue-800">
            <h1>{props.question}</h1>
          </div>
        </div>
        <div className="answers  flex flex-col justify-evenly">
          <div className="ansrow1 w-full h-[30%]  flex items-center justify-evenly">
            {props.children[0]}
            {props.children[1]}
          </div>
          <div className="ansrow2 w-full h-[30%]  flex items-center justify-evenly">
            {props.children[2]}
            {props.children[3]}
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicQuestion;
