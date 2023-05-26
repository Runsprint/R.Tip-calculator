import React, { useState } from "react";
import "./App.css";
import iconDollar from "../public/icon-dollar.svg";
import iconPerson from "../public/icon-person.svg";
import logo from "../public/logo.svg";

function App() {
  const [bill, setBill] = useState("");
  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  const buttonsArray = ["5%", "10%", "15%", "25%", "50%"];
  const [percent, setPercent] = useState(0);
  const [custom, setCustom] = useState("");
  const [peopleAmount, setpeopleAmount] = useState("");
  const [result, setResult] = useState("$0.00");
  const [totalSum, setTotalSum] = useState("$0.00");

  // const handleResetClick = () => {
  //   debugger;
  //   setBill(0);
  //   setpeopleAmount(null);
  //   setPercent(0);
  //   setResult("$0.00");
  //   setTotalSum("$0.00");
  //   console.log("Something");
  // };
  return (
    <>
      <h1 className="title">
        SPLI
        <br />
        TER
      </h1>
      <main>
        <div className="for_row">
          <div className="main-div">
            <div className="second">
              <div className="first">
                <img src={iconDollar} alt="Logo" className="logoDolar" />
                <h1 className="bill">Bill</h1>

                <label>
                  <input
                    className="bill_input"
                    type="number"
                    min={1}
                    placeholder={0}
                    value={bill}
                    onChange={handleBillChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="tip_h1">Select Tip %</h1>
          </div>
          <div className="buttons">
            {buttonsArray.map((item) => (
              <button
                className="percent"
                onClick={(event) => {
                  setPercent(parseInt(item));
                  if (peopleAmount != 0 && bill != 0) {
                    const tip = ((parseInt(item) / 100) * bill) / peopleAmount;
                    setResult(tip.toFixed(2));
                    // const total = bill + tip * peopleAmount;
                    // setTotalSum(total.toFixed(2));
                  }
                }}
                // style={{
                //   backgroundColor: clickedButton === item ? "black" : "initial",
                //   color: clickedButton === item ? "white" : "initial",
                // }}
              >
                {item}
              </button>
            ))}
            <input
              type="number"
              min="1"
              max="100"
              className="custom"
              placeholder="Custom"
              onChange={(event) => {
                setPercent(event.target.value);
                if (peopleAmount != 0 && bill != 0) {
                  const tip = ((custom / 100) * bill) / peopleAmount;
                  setResult(tip.toFixed(2));
                  // const total = bill + tip * peopleAmount;
                  // setTotalSum(total.toFixed(2));
                }
              }}
            />
          </div>

          <div className="num_people">
            <img src={iconPerson} alt="Logo" className=" logo" />
            <h2 className="cant">Can’t be zero</h2>
            <h1 className="numb_people">Number of People</h1>

            <input
              className="people_input"
              type="number"
              placeholder="0"
              min="0"
              onChange={(event) => {
                setpeopleAmount(event.target.value);
              }}
            />
            <div className="inputwrapper"> </div>
          </div>
        </div>
        <div className="last_div">
          <div className="tip_div">
            <h1 className="amount">
              Tip Amount <br /> <span className="span1">/person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output1">$ {result}</h2>
            </div>
          </div>
          <div className="tip_div">
            <h1 className="total">
              Total <br /> <span className="span2">/ person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output2">${totalSum}</h2>
            </div>
          </div>
          {/* <button className="reset" onClick={handleResetClick}>
            RESET
          </button> */}
        </div>
      </main>
    </>
  );
}

export default App;
