import React from "react";
import "../styles/Input.css";
import axios from "axios";

const Input = () => {
  const handleClick = () => {
    document.getElementById("run").innerText = "Processing...";

    var config = {
      method: "post",
      url: "http://localhost:3001/upload",
      data: {
        file: document.getElementById("file").src,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    if (e.target.value === "") return;

    const file = document.querySelector("input[type=file]").files[0];
    document.getElementById("label-id").innerText = file.name;

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = function () {
      const previewImg = document.getElementById("previewImg");
      previewImg.src = reader.result;
      const runButton = document.getElementById("run");
      runButton.style.display = "block";
    };
  };

  return (
    <div>
      <div className="input-box">
        <h3 className="label">Choose any Image: </h3>
        <label htmlFor="file" className="input-button" id="label-id">
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

      <img className="previewImg" id="previewImg" />
      <br />
      <div className="runBox">
        <button
          className="run"
          id="run"
          style={{ display: "none" }}
          onClick={handleClick}
        >
          Run Prediction!
        </button>
      </div>
    </div>
  );
};
export default Input;
