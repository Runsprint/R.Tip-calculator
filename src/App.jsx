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
  if (peopleAmount != 0 && bill != 0) {
    const tip = (persent / 100) * custom;
    console.log(tip);
  }
  return (
    <>
      <h1 className="title">
        SPLI
        <br />
        TER
      </h1>
      <main>
        <div className="main-div">
          <div className="second">
            <div className="first">
              <h1 className="bill">Bill</h1>
              <label>
                <img src={iconDollar} alt="Logo" className="logoDolar" />

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
              onClick={() => {
                setPercent(parseInt(item));
              }}
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
            }}
          />
        </div>

        <div className="num_people">
          <h2 className="cant">Can’t be zero</h2>
          <h1 className="numb_people">Number of People</h1>
          <img src={iconPerson} alt="Logo" className="logoDolar" />
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

        <div className="last_div">
          <div className="tip_div">
            <h1 className="amount">
              Tip Amount <br /> <span className="span1">/person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output1">$0.00</h2>
            </div>
          </div>
          <div className="tip_div">
            <h1 className="total">
              Total <br /> <span className="span2">/ person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output2">$0.00</h2>
            </div>
          </div>
          <button className="reset">RESET</button>
        </div>
      </main>
    </>
  );
}

export default App;
