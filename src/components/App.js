// todo -> how to render the calender dates correctly (done)

import React, { Component, useState } from "react";
import "../styles/App.css";
const currDate = new Date();

const App = () => {
  const [flag, setFlag] = useState(true);
  const [date, setDate] = useState(currDate.getDate());
  const [mnth, setMnth] = useState(currDate.getMonth());
  const [year, setYear] = useState(currDate.getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let cnt = 0;

  // slackOverFlow -> https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
  // Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
  // but by using 0 as the day it will give us the last day of the prior
  // month. So passing in 1 as the month number will return the last day
  // of January, not February
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  function createTrTd() {
    const TrTd = [];
    let i = 0;
    while (i < daysInMonth(mnth, year)) {
      console.log(daysInMonth(mnth, year));
      TrTd.push(
        <tr key={Math.random()}>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i + 1 === date &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
          >
            {check(cnt, i) ? "" : i < daysInMonth(mnth, year) ? ++i : ""}
          </td>
        </tr>
      );
    }
    return TrTd;
  }

  function check() {
    if (find1stDay() > cnt) {
      cnt++;
      return true;
    } else if (find1stDay() === cnt) {
      return false;
    }
  }

  // todo :- day is fixed in variable, how to make it dynamic(like in each day it should upedated automatically)
  function find1stDay() {
    let userWritedDate = new Date(year + "-" + (mnth + 1) + "-" + date);
    let currDatesDay = userWritedDate.getDay();
    let mode = userWritedDate.getDate() % 7;
    while (mode > 0) {
      currDatesDay--;
      mode--;
      if (currDatesDay === -1) {
        currDatesDay = 7;
      }
    }
    return currDatesDay + 1;
  }

  return (
    <div id="main">
      <h1 id="heading">Calendar</h1>
      <div id="monthYear">
        <select
          id="month"
          onChangeCapture={function (e) {
            setMnth(Number(e.target.value));
            console.log(mnth, Number(e.target.value), months[mnth]);
          }}
          value={mnth}
        >
          <option value={mnth} style={{ backgroundColor: "lightblue" }}>
            {months[mnth]}
          </option>
          {/* {months.map((month, idx) => (
            <option value={idx} key={idx}>
              {month}
            </option>
          ))} */}

          <option value={"0"}>{months[0]}</option>
          <option value={"1"}>{months[1]}</option>
          <option value={"2"}>{months[2]}</option>
          <option value={"3"}>{months[3]}</option>
          <option value={"4"}>{months[4]}</option>
          <option value={"5"}>{months[5]}</option>
          <option value={"6"}>{months[6]}</option>
          <option value={"7"}>{months[7]}</option>
          <option value={"8"}>{months[8]}</option>
          <option value={"9"}>{months[9]}</option>
          <option value={"10"}>{months[10]}</option>
          <option value={"11"}>{months[11]}</option>
        </select>
        <div id="YearText">
          {flag ? (
            <span
              id="year"
              onDoubleClick={function () {
                setFlag(!flag);
              }}
            >
              {year}
            </span>
          ) : (
            <form
              onSubmit={function (e) {
                e.preventDefault();
                setFlag(!flag);
              }}
            >
              <input
                type="text"
                id="year-text-box"
                onChange={function (e) {
                  setYear(e.target.value);
                }}
              />
            </form>
          )}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th id="Sun">Sunday</th>
            <th id="Mon">Monday</th>
            <th id="Tue">Tuesday</th>
            <th id="Wed">Wednesday</th>
            <th id="Thu">Thursday</th>
            <th id="Fri">Friday</th>
            <th id="Sat">Saturday</th>
          </tr>
        </thead>
        <tbody>{createTrTd().map((el) => el)}</tbody>
      </table>

      <div id="btn">
        <button
          id="previous-year"
          onClick={function () {
            setYear(year - 1);
          }}
        >
          &lt;&lt;
        </button>
        <button
          id="previous-month"
          onClick={function () {
            setMnth(mnth - 1);
          }}
        >
          &lt;
        </button>
        <button
          id="next-month"
          onClick={function () {
            setMnth(mnth + 1);
          }}
        >
          &gt;
        </button>
        <button
          id="next-year"
          onClick={function () {
            setYear(year + 1);
          }}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default App;
