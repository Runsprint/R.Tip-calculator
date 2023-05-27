import React, { useEffect, useState } from "react";
import "./App.css";
import iconDollar from "../public/icon-dollar.svg";
import iconPerson from "../public/icon-person.svg";
import logo from "../public/logo.svg";

function App() {
  const [bill, setBill] = useState(0);
  const [active, setActive] = useState("");
  const buttonsArray = ["5%", "10%", "15%", "25%", "50%"];
  const [percent, setPercent] = useState();
  // const [custom, setCustom] = useState();
  const [peopleAmount, setpeopleAmount] = useState(0);
  const [result, setResult] = useState(); //tip
  const [totalSum, setTotalSum] = useState();
  const [color, setColor] = useState("#00474b");
  const [allState, setAllState] = useState(0);
  console.log(result);
  // useEffect(() => {
  //   if (percent && peopleAmount !== 0 && bill !== 0) {
  //     const tip = ((percent / 100) * bill) / peopleAmount;
  //     setResult(tip.toFixed(2));
  //   }
  // }, [percent]);

  useEffect(() => {
    if (peopleAmount !== 0 && bill !== 0 && allState !== 0) {
      const tip = ((parseInt(allState) / 100) * bill) / peopleAmount;
      setResult(tip.toFixed(2));

      const total = result * peopleAmount;
      console.log(total);
      const sum = total + Number(bill);
      const device = sum / peopleAmount;
      setTotalSum(device.toFixed(2));
    }
  }, [peopleAmount, allState, bill]);

  // useEffect(() => {
  //   if (result) {
  //     const total = result * peopleAmount;
  //     const sum = total + Number(bill);
  //     const device = sum / peopleAmount;
  //     setTotalSum(device.toFixed(2));
  //   }
  // }, [result]);

  //massive result when massive change after into this function and done his fucction.
  //also into this function when first render
  //if ampty massive it into just one time and if I didnt wtire anything after every render into this function.

  const handleBillChange = (event) => {
    setBill(event.target.value);
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
                style={allState === item ? { background: "red" } : null}
                className="percent"
                key={item}
                onClick={(event) => {
                  setAllState(item);
                }}
              >
                {item}
              </button>
            ))}
            <input
              type="number"
              min="1"
              max="100"
              value={percent}
              className="custom"
              placeholder="Custom"
              onChange={(event) => {
                setAllState(Number(event.target.value));
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
              value={peopleAmount}
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
              <h2 className="output1">
                $ {result !== undefined ? result : "0.00"}
              </h2>
            </div>
          </div>
          <div className="tip_div">
            <h1 className="total">
              Total <br /> <span className="span2">/ person</span>
            </h1>
            <div className="output_div">
              {" "}
              <h2 className="output2">
                $ {totalSum !== undefined ? totalSum : "0.00"}
              </h2>
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
