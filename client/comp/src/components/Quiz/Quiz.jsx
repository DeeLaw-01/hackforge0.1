import axios from "axios";
import { set } from "date-fns";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Quiz.css";
export default function Quiz() {
  const [category, setCategory] = useState(1);
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(`easy`);
  let { id } = useParams();

  useEffect(() => {
    const setCategoryFromURL = () => {
      console.log("Got inside UseEffect", id);
      setCategory(id);
    };
    setCategoryFromURL();
  }, []);

  const hitAPI = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      console.log(response);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };
  const options = [
    {
      id: 1,
      name: "easy",
    },
    {
      id: 2,
      name: "medium",
    },
    {
      id: 3,
      name: "hard",
    },
  ];

  const handleButtonClick = (value) => {
    setDifficulty(value);
    setSelected(value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  };
  return (
    <>
      <div className="Quizzzz bg-gray-900 h-screen pt-20 text-center font-bold text-white flex flex-col justify-start items-center">
        <h1 className="text-6xl text-white ">Setup Your Quiz</h1>
        <div className="flex flex-col justify-evenly  h-1/2 ">
          <div className="shadow-sm shadow-gray-400 rounded-lg h-[10vh] flex flex-col justify-evenly">
            <p className="text-base">Amount of questions:</p>
            <div>
              <input
                type="number"
                className="text-black w-1/2 text-center"
                max={10}
                min={5}
                onChange={handleAmountChange}
                value={amount}
              />
            </div>
          </div>
          <div className="difii shadow-sm shadow-gray-400 rounded-lg p-4 h-1/3 flex flex-col justify-evenly">
            <p className="text-base">Difficulty:</p>
            <div className="buttons flex gap-6 align-middle items-center justify-center">
              <button
                onClick={() => {
                  handleButtonClick("easy");
                }}
                className={`${
                  selected === "easy" ? "bg-cta-primary" : ""
                } px-4 py-1 rounded-lg`}
              >
                {" "}
                Easy
              </button>
              <button
                className={`${
                  selected === "medium" ? "bg-cta-primary" : ""
                } px-4 py-1 rounded-lg`}
                onClick={() => {
                  handleButtonClick("medium");
                }}
              >
                Medium
              </button>
              <button
                className={`${
                  selected === "hard" ? "bg-cta-primary" : ""
                } px-4 py-1 rounded-lg `}
                onClick={() => {
                  handleButtonClick("hard");
                }}
              >
                Hard
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            hitAPI();
            console.log(difficulty, selected, amount);
          }}
          className="text-white shadow-sm shadow-gray-400 p-6 rounded-3xl w-36"
        >
          CLICK ME{" "}
        </button>
      </div>
    </>
  );
}
