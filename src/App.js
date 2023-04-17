// import logo from './logo.svg';
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#011121";
      document.body.style.color = "white";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";


    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("white mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
  
    }
  };

  return (
    <>

          {/* <Navbar/> */}
              {/* 
          <BrowserRouter>
            <Navbar
              title="TextUtils"
              mode={mode}
              toggleMode={toggleMode}
              aboutText="About"
            />
            <Alert alert={alert} />
            <div className="container my-3">
              <Routes>
                <Route exact path="/about" element={<About mode={mode} />} />
                  <Route
                  exact
                  path="/"
                  element= { <TextForm showAlert={showAlert}  heading="Enter The Text To Analyze Below" mode={mode} />
                  }
                />
              </Routes>
            </div>
          </BrowserRouter> */}
            <Navbar
              title="TextUtils"
              mode={mode}
              toggleMode={toggleMode}
              aboutText="About"
            />
        <Alert alert={alert} />
         <div className="container my-3">
     
        <TextForm showAlert={showAlert}  heading="Enter The Text To Analyze Below" mode={mode}/>
        </div>
        </>
  );
}

export default App;
