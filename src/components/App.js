// todo -> how to render the calender dates correctly (done)

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
  const [date, setDate] = useState(currDate.getDate());
  const [mnth, setMnth] = useState(currDate.getMonth());
  const [year, setYear] = useState(currDate.getFullYear());
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

  // todo :- day is fixed in variable, how to make it dynamic(like in each day it should upedated automatically)
  // function find1stDay() {
  //   let userWritedDate = new Date(year + "-" + (mnth + 1) + "-" + date);
  //   // console.log(year, mnth, date);
  //   let currDatesDay = userWritedDate.getDay();
  //   let mode = userWritedDate.getDate() % 7;
  //   while (mode > 0) {
  //     currDatesDay--;
  //     mode--;
  //     if (currDatesDay === -1) {
  //       currDatesDay = 7;
  //     }
  //   }
  //   return currDatesDay + 1;
  // }

  // https://bobbyhadz.com/blog/javascript-get-first-day-of-month#:~:text=To%20get%20the%20first%20day,first%20day%20of%20the%20month.
  function getFirstDayOfMonth(year, mnth) {
    const dtForDay = new Date(year, mnth, 1);
    return dtForDay.getDay();
  }
  console.log(getFirstDayOfMonth(year, mnth));

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
                i === date &&
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
                i === date &&
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
                i === date &&
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
                i === date &&
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
                i === date &&
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
                i === date &&
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
                i === date &&
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
            setMnth(e.target.value);
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
              }}
            >
              <input
                type="text"
                id="year-text-box"
                onChange={function (e) {
                  setYear(e.target.value);
                }}
                value={year}
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
