import React, { useEffect, useState } from "react";
import "./Quizes.css";
import { GrNext } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import applause from "../../assets/applause.gif";
import sad from "../../assets/sad-1.gif";

const Quizes = () => {
  const [quizData, setQuizData] = useState([]);
  const [quizNumber, setQuizNumber] = useState(0);
  const [modal, setModal] = useState(false);
  const [currentVariant, setCurrentVariant] = useState();
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/quizs/all", {
      method: "GET",
      headers: {
        token: localStorage.getItem("authorization"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode) {
          window.location = "/login";
        }
        setQuizData(data);
      });
  }, []);
  function getCorrectAnswers() {
    return allAnswers.filter((e, i) => quizData[i].correct_variant == e).length;
  }
  return (
    <div>
      <div className="quiz_wrapper">
        <span className="text-primary">
          Question {quizNumber + 1}-{quizData.length}
        </span>
      </div>
      {quizData[0] && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "60px" }}>{quizData[quizNumber].title}</p>
          <br />
          <br />
          <div className="input_wrapper">
            <button
              id="birinchi"
              className={currentVariant === 0 ? "active" : ""}
              onClick={() => {
                setCurrentVariant(0);
              }}
            >
              <p>{quizData[quizNumber].variant_1}</p>
            </button>
          </div>
          <br />
          <div className="input_wrapper">
            <button
              id="ikkinchi"
              className={currentVariant === 1 ? "active" : ""}
              onClick={() => {
                setCurrentVariant(1);
              }}
            >
              <p>{quizData[quizNumber].variant_2}</p>
            </button>
          </div>
          <br />
          <div className="input_wrapper">
            <button
              id="uchinchi"
              className={currentVariant === 2 ? "active" : ""}
              onClick={() => {
                setCurrentVariant(2);
              }}
            >
              <p>{quizData[quizNumber].variant_3}</p>
            </button>
          </div>
          <br />
          <div className="input_wrapper">
            <button
              id="tortinchi"
              className={currentVariant === 3 ? "active" : ""}
              onClick={() => {
                setCurrentVariant(3);
              }}
            >
              <p>{quizData[quizNumber].variant_4}</p>
            </button>
          </div>
          <br />
          <br />
          <br />
          <button
            type="button"
            className="next_quiz"
            onClick={() => {
              if (![0, 1, 2, 3].includes(currentVariant)) {
                return alert("Iltimos birorta bir variant belgilang");
              }
              setAllAnswers((prev) => [...prev, currentVariant + 1]);
              setCurrentVariant(null);
              if (quizData?.length === quizNumber + 1) {
                setModal(true);
              } else {
                setQuizNumber((prev) => prev + 1);
              }
            }}
          >
            {quizNumber + 2 === quizData.length ? (
              <>
                Next
                <GrNext />
              </>
            ) : (
              <>
                Finish
                <AiOutlineCheck />
              </>
            )}
          </button>
        </div>
      )}
      {modal && (
        <div className="modal_wrapper">
          <img
            src={getCorrectAnswers() === 0 ? sad : applause}
            alt=""
            style={{ width: "300px" }}
          />
          <br />
          <h4>
            You got {getCorrectAnswers()} out of {quizData.length} correct
          </h4>
          <br />
          <button
            className="resetButtom"
            onClick={() => {
              setQuizNumber(0);
              setAllAnswers([]);
              setModal(false);
            }}
          >
            Reset
            <VscDebugRestart style={{ color: "white" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizes;
