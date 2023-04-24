import React, { useState } from "react";

function TextFrom(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleDownloadlClick = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "my-file.txt";

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    props.showAlert("Text Downloaded", "success");
  };
  const handleDelClick = () => {
    document.querySelector("#mybox").value = " ";
    // props.showAlert("Text Cleared", "danger");
  };

  const copyText = () => {
    let copiedText = document.querySelector("#mybox");
    copiedText.select();
    copiedText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    props.showAlert("copied to Clipboard", "success");

    // setText(copiedText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed ", "success");
  };
  const handleOnChange = (event) => {
    let bg = document.querySelector("#mybox");
    bg.style.backgroundColor = "#edfffd";
    bg.style.border = "2px solid purple";
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="flex-container">
          <button
            className="btn btn-primary mx-2 flex-item"
            onClick={handleUpClick}
            id="btn1"
          >
            Convert into UpperCase
          </button>

          <button
            className="btn btn-info mx-2 btn-color flex-item"
            id="btn2"
            onClick={handleLowClick}
          >
            Convert into LowerCase
          </button>

          <button className="btn btn-success mx-2 flex-item" onClick={copyText}>
            Copy Text
          </button>

          <button
            className="btn btn-dark mx-2 flex-item"
            onClick={handleDownloadlClick}
          >
            Download Text
          </button>

          <button
            className="btn btn-danger mx-2 flex-item"
            onClick={handleDelClick}
          >
            Clear Text
          </button>

          <button
            className="btn btn-warning btn-color mx-2 flex-item"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>

        <div className="container my-3">
          <h2 className="summ">Summary of Your Text</h2>
          <p>Number of words: {text.split(" ").length}</p>
          <p>Number of charecters: {text.length} </p>
          <h2 className="prev">Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the text box above to preview here!"}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextFrom;
