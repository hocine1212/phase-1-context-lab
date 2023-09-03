/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(arr) {
  const obj = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  return obj;
}

function createEmployeeRecords(arrs) {
  const employees = arrs.map((arr) => createEmployeeRecord(arr));
  return employees;
}

function createTimeInEvent(dateAndTime) {
  const dateTime = dateAndTime.split(" ");

  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(dateTime[1]),
    date: dateTime[0],
  });
  return this;
}

function createTimeOutEvent(dateAndTime) {
  const dateTime = dateAndTime.split(" ");

  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(dateTime[1]),
    date: dateTime[0],
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeInEvent = this.timeInEvents.find((record) => record.date === date);
  const timeOutEvent = this.timeOutEvents.find(
    (record) => record.date === date
  );
  const hoursWorked = timeOutEvent.hour - timeInEvent.hour;
  return hoursWorked / 100;
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this, date);
  const wagesEarned = hoursWorked * this.payPerHour;
  return wagesEarned;
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

function findEmployeeByFirstName(srcArray, firstName) {
  const name = srcArray.find((arr) => arr.firstName === firstName);
  return name;
}

function calculatePayroll(arrOfEmployees) {
  const totalPayroll = arrOfEmployees.reduce(
    (total, wage) => total + allWagesFor.call(wage),
    0
  );

  return totalPayroll;
}
