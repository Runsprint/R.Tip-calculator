import React, { useEffect, useState } from "react";
import "./App.css";
import iconDollar from "../public/icon-dollar.svg";
import iconPerson from "../public/icon-person.svg";
import logo from "../public/logo.svg";

function App() {
  const [bill, setBill] = useState();
  const [active, setActive] = useState("");
  const buttonsArray = [5, 10, 15, 25, 50];
  const [percent, setPercent] = useState();
  const [custom, setCustom] = useState();
  const [peopleAmount, setpeopleAmount] = useState();
  const [result, setResult] = useState(); //tip
  const [totalSum, setTotalSum] = useState();
  const [right, setRight] = useState(false);
  const [color, setColor] = useState("#00474b");
  const [allState, setAllState] = useState();

  useEffect(() => {
    if (allState) {
      const tipPercent = (Number(bill) * allState) / 100;
      const sumTip = tipPercent / peopleAmount;
      const math = sumTip.toFixed(2);
      setResult(math);

      const total = Number(bill) + tipPercent;
      const deviceSum = total / peopleAmount;
      const mathTotal = deviceSum.toFixed(2);
      setTotalSum(mathTotal);
    }
    if (custom) {
      const tipPercent = (Number(bill) * custom) / 100;
      const sumTip = tipPercent / peopleAmount;
      const math = sumTip.toFixed(2);
      setResult(math);

      const total = Number(bill) + tipPercent;
      const deviceSum = total / peopleAmount;
      const mathTotal = deviceSum.toFixed(2);
      setTotalSum(mathTotal);
    }
  }, [allState, custom]);

  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  const handleCustomChange = (event) => {
    setCustom(event.target.value);
  };

  const handlePeopleAmount = (event) => {
    setpeopleAmount(event.target.value);
  };

  const valueEmpty = () => {
    if (!bill) {
      setRight(true);
    } else {
      setRight(false);
    }
  };

  const handleResetClick = () => {
    setBill("");
    setPercent("");
    setAllState("");
    setpeopleAmount("");
    setResult("");
    setTotalSum("");
  };

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
                    style={right ? { borderColor: "red" } : null}
                    onChange={handleBillChange}
                  />
                  {right && <p className="error1">Can't be zero</p>}
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
                style={allState === item ? { background: "#1e8186" } : null}
                className="percent"
                key={item}
                onClick={(event) => {
                  valueEmpty();
                  setAllState(item);
                }}
              >
                {item + "%"}
              </button>
            ))}
            <input
              type="number"
              min="1"
              max="100"
              value={percent}
              className="custom"
              placeholder="Custom"
              onChange={handleCustomChange}
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
              value={peopleAmount}
              onChange={handlePeopleAmount}
              style={right ? { borderColor: "red" } : null}
            />
            {right && <p className="error1">Can't be zero</p>}
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
              <h2 className="output1">$ {result ? result : "0.00"}</h2>
            </div>
          </div>
          <div className="tip_div">
            <h1 className="total">
              Total <br /> <span className="span2">/ person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output2">$ {totalSum ? totalSum : "0.00"}</h2>
            </div>
          </div>
          <button className="reset" onClick={handleResetClick}>
            RESET
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
