import React from "react";
import "./Quizes.css";
const Quizes = () => {
  return (
    <div>
      <div className="quiz_wrapper">
        <span className="text-primary">Quizes</span>
      </div>
      <br />
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "60px" }}>Example test</p>
        <br />
        <br />
        <br />
        <br />
        <div className="input_wrapper">
          <input type="radio" name="variant" id="birinchi" />
          <label style={{ fontSize: "30px" }} htmlFor="birinchi">
            Birinchi variant
          </label>
        </div>
        <br />
        <div className="input_wrapper">
          <input type="radio" name="variant" id="ikkinchi" />
          <label style={{ fontSize: "30px" }} htmlFor="ikkinchi">
            Ikkinchi variant
          </label>
        </div>
        <br />
        <div className="input_wrapper">
          <input type="radio" name="variant" id="uchinchi" />
          <label style={{ fontSize: "30px" }} htmlFor="uchinchi">
            Uchinchi variant
          </label>
        </div>
        <br />
        <br />
        <br />
        <br />
        <button type="button" className="next_quiz">
          Next
        </button>
      </form>
    </div>
  );
};

export default Quizes;
