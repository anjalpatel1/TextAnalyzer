import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
// eslint-disable-next-line
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import * as React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    //alert is basically an object which can be set.
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing!!';
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!!';
      // }, 1700);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils" Home="HomePage"/> */}
      {/* <Navbar />     */}
      {/* <BrowserRouter> */}
      <Navbar
        title="Text Analyzer"
        aboutText="About"
        Home="HomePage"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3"/>
      {/* <> */}
        {/* <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        /> */}
        {/* <Alert alert={alert} /> */}
        <div className="container my-4" mode={mode}/>
          {/* <Routes>
            
            <Route exact path="/about" element={<About/>}></Route>
            <Route
              exact path="/" */}
              {/* element={ */}
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
          {/* //     } */}
          {/* //   </Route> */}
          {/* // </Routes> */}
        {/* // </div> */}
    {/* // </> */}
        {/* <About /> */}
      {/* // </div> */}
      {/* </BrowserRouter> */}
     </>
  );
}

export default App;
