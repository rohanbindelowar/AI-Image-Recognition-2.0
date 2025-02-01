import React from "react";
import "../styles/Input.css";

const Input = () => {
  const handleClick = () => {
  };
  const handleChange =(e)=>{

  }
  return (
    <div>
      <div className="input-box">
        <h3 className="label">Choose any Image: </h3>
        <label htmlFor="file" className="input-button">
          Select an Image
        </label>
        <input
          type="file"
          id="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </div>

      <img className="previewImg" />
      <div className="runBox">
        <button className="run" style={{display:"none"}} onClick={handleClick}>Run Prediction!</button>
      </div>
    </div>
  );
};
export default Input;
