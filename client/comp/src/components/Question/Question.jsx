import React from "react";
import "./Question.css";
import DynamicQuestion from "./DynamicQuestion";
function Question() {
  let data = {
    results: [
      {
        type: "multiple",
        difficulty: "easy",
        category: "General Knowledge",
        question: "What is the profession of Elon Musk&#039;s mom, Maye Musk?",
        correct_answer: "Model",
        incorrect_answers: ["Professor", "Biologist", "Musician"],
      },
    ],
  };
  console.log(data.results[0].incorrect_answers);
  return (
    <>
      <div className="Question">
        <div className="QuesImage"></div>
        <div className="Quesmain bg-gray-900">
          <form action="">
            <input type="radio" id="correct" name="options" value="correct" />
              <input type="radio" id="incorrect1" name="options" value="HTML" />
               {" "}
            <input type="radio" id="incorrect2" name="options" value="CSS" />   
            <input
              type="radio"
              id="incorrect3"
              name="options"
              value="JavaScript"
            />
             
          </form>
          <DynamicQuestion question={data.results[0].question}>
            <label
              htmlFor="correct"
              className=" my-hover  w-1/4 h-[90%] flex justify-center items-center text-white rounded-full border-2 border-white hover:bg-cta-primary hover:text-black"
            >
              {" "}
              {data.results[0].correct_answer}
            </label>

            <label
              htmlFor="incorrect1"
              className=" my-hover  w-1/4 h-[90%] flex justify-center items-center text-white rounded-full border-2 border-white hover:bg-cta-primary hover:text-black"
            >
              {" "}
              {data.results[0].incorrect_answers[0]}
            </label>

            <label
              htmlFor="incorrect2"
              className=" my-hover  w-1/4 h-[90%] flex justify-center items-center text-white rounded-full border-2 border-white hover:bg-cta-primary hover:text-black"
            >
              {" "}
              {data.results[0].incorrect_answers[1]}
            </label>
            <label
              htmlFor="incorrect3"
              className=" my-hover  w-1/4 h-[90%] flex justify-center items-center text-white rounded-full border-2 border-white hover:bg-cta-primary hover:text-black"
            >
              {" "}
              {data.results[0].incorrect_answers[2]}
            </label>
          </DynamicQuestion>
        </div>
      </div>
    </>
  );
}

export default Question;
