// todo -> changing the curent date & coming to same date then currDate's color is not avalaible
// todo -> after December nothing is rendered in Select>option
import React, { Component, useState } from "react";
import "../styles/App.css";
const currDate = new Date();
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
const App = () => {
  const [flag, setFlag] = useState(true);
  const [mnth, setMnth] = useState(currDate.getMonth());
  const [year, setYear] = useState(currDate.getFullYear());
  const [inp, setInp] = useState("");
  let cnt = 0;

  function numMonth(month) {
    let newNumMonth = null;
    for (let i = 0; i < months.length; i++) {
      if (months[i] === month) {
        newNumMonth = i;
      }
    }
    return newNumMonth;
  }

  // slackOverFlow -> https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
  // Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
  // but by using 0 as the day it will give us the last day of the prior
  // month. So passing in 1 as the month number will return the last day
  // of January, not February
  function daysInMonth(month, year) {
    if (isNaN(month)) {
      month = numMonth(month);
    }
    return new Date(year, month + 1, 0).getDate();
  }

  // https://bobbyhadz.com/blog/javascript-get-first-day-of-month#:~:text=To%20get%20the%20first%20day,first%20day%20of%20the%20month.
  function getFirstDayOfMonth(year, mnth) {
    const dtForDay = new Date(year, mnth, 1);
    return dtForDay.getDay();
  }

  function check() {
    if (cnt < getFirstDayOfMonth(year, mnth)) {
      cnt++;
      return true;
    } else if (cnt === getFirstDayOfMonth(year, mnth)) {
      return false;
    }
  }
  function createTrTd() {
    const TrTd = [];
    let i = 1;
    while (i <= daysInMonth(mnth, year)) {
      TrTd.push(
        <tr key={Math.random()}>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
          <td
            style={{
              backgroundColor: `${
                i === currDate.getDate() &&
                mnth === currDate.getMonth() &&
                year === currDate.getFullYear()
                  ? "blue"
                  : "transparent"
              }`,
            }}
            id={`${"cell" + i}`}
          >
            {check() ? "" : i <= daysInMonth(mnth, year) ? i++ : ""}
          </td>
        </tr>
      );
    }
    return TrTd;
  }

  return (
    <div id="main">
      <h1 id="heading">Calendar</h1>
      <div id="monthYear">
        <select
          id="month"
          onChange={function (e) {
            setMnth(numMonth(e.target.value));
          }}
        >
          <option value={months[mnth]}>{months[mnth]} </option>
          <option value={"January"}>January</option>
          <option value={"February"}>February</option>
          <option value={"March"}>March</option>
          <option value={"April"}>April</option>
          <option value={"May"}>May</option>
          <option value={"June"}>June</option>
          <option value={"July"}>July</option>
          <option value={"August"}>August</option>
          <option value={"September"}>September</option>
          <option value={"October"}>October</option>
          <option value={"November"}>November</option>
          <option value={"December"}>December</option>
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
                setYear(inp);
              }}
            >
              <input
                type="text"
                id="year-text-box"
                onChange={function (e) {
                  setInp(e.target.value);
                }}
                value={inp}
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
          &lt;&lt; (Previous-Year)
        </button>
        <button
          id="previous-month"
          onClick={function () {
            if (mnth <= 0) {
              setYear(year - 1);
              setMnth(11);
            } else {
              setMnth(mnth - 1);
            }
          }}
        >
          &lt; (Previous-Month)
        </button>
        <button
          id="next-month"
          onClick={function () {
            if (mnth >= 11) {
              setYear(year + 1);
              setMnth(0);
            } else {
              setMnth(mnth + 1);
            }
          }}
        >
          {console.log(mnth)}
          &gt; (Next-Month)
        </button>
        <button
          id="next-year"
          onClick={function () {
            setYear(year + 1);
          }}
        >
          &gt;&gt; (Next-Year)
        </button>
      </div>
    </div>
  );
};

export default App;
