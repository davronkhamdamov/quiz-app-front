import React, { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { BiSend } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Quizzes.css";

const Quizzes = () => {
  const [variant, setVariant] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function submitData(e) {
    e.preventDefault();
    if (variant === 0) return toastify("warning", "Select the correct variant");
    fetch(process.env.REACT_APP_BASE_URL + "/quizs/create", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.quiz_title.value,
        variant_1: e.target.first_variant.value,
        variant_2: e.target.second_variant.value,
        variant_3: e.target.third_variant.value,
        variant_4: e.target.fourth_variant.value,
        correct_variant: variant,
      }),
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("authorization"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          window.location = "/login";
        }
        if (data.message === "Quiz successfully created") {
          setIsModalOpen(true);
        }
      });
  }
  function toastify(type, message) {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <div>
      <div className="quizzes">
        <form onSubmit={submitData} className="new_quiz">
          <label htmlFor="quiz_title">Quiz title</label>
          <br />
          <input
            id="quiz_title"
            type="text"
            placeholder="Your quiz title"
            name="quiz_title"
            required
          />
          <div className="variant_wrapper">
            <p>Your variants</p>
            <div className="variants">
              <div className="currrent_variant" onClick={() => setVariant(1)}>
                {variant === 1 ? (
                  <ImCheckboxChecked />
                ) : (
                  <ImCheckboxUnchecked />
                )}
              </div>
              <input
                id="first_variant"
                type="text"
                placeholder="First variant"
                name="first_variant"
                required
              />
            </div>
            <div className="variants">
              <div className="currrent_variant" onClick={() => setVariant(2)}>
                {variant === 2 ? (
                  <ImCheckboxChecked />
                ) : (
                  <ImCheckboxUnchecked />
                )}
              </div>
              <input
                id="second_variant"
                name="second_variant"
                type="text"
                placeholder="Second variant"
                required
              />
            </div>
            <div className="variants">
              <div className="currrent_variant" onClick={() => setVariant(3)}>
                {variant === 3 ? (
                  <ImCheckboxChecked />
                ) : (
                  <ImCheckboxUnchecked />
                )}
              </div>
              <input
                id="third_variant"
                name="third_variant"
                type="text"
                placeholder="Third variant"
                required
              />
            </div>
            <div className="variants">
              <div className="currrent_variant" onClick={() => setVariant(4)}>
                {variant === 4 ? (
                  <ImCheckboxChecked />
                ) : (
                  <ImCheckboxUnchecked />
                )}
              </div>
              <input
                id="fourth_variant"
                name="fourth_variant"
                type="text"
                placeholder="Fourth variant"
                required
              />
            </div>
          </div>
          <button className="submit_quiz">
            Send
            <BiSend />
          </button>
        </form>
        <div style={{ marginTop: "100px" }}>
          <p style={{ textAlign: "center" }}>
            Note: Please send meaningful quiz !
          </p>
        </div>
      </div>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {isModalOpen && (
          <div className="quiz_modal">
            <h2>
              Your quiz has been sent to admin, admin will confirm it soon
            </h2>
            <button onClick={() => setIsModalOpen(false)}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
