const moment = require('moment');

function getCurrentDay() {
  console.log(moment().format('dddd'));
}

function getCurrentMonth() {
  console.log(moment().format('MMMM'));
}

function getCurrentYear() {
  console.log(moment().format('YYYY'));
}

function getCurrentDate() {
  console.log(moment().format('dddd, MMMM D, YYYY'));
}

function isWeekend() {
  const dayOfWeek = moment().day();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log('Today is a weekend');
  } else {
    console.log('Today is a weekday');
  }
}

function getDaysUntilNewYear() {
  const now = moment().startOf('day');
  const nextNewYear = moment().add(1, 'year').startOf('year');
  const daysLeft = nextNewYear.diff(now, 'days');
  console.log(`${daysLeft} days until New Year`);
}

function getAge(birthDateStr) {
  const birthDate = moment(birthDateStr, 'YYYY-MM-DD');
  const age = moment().diff(birthDate, 'years');
  console.log(`You are ${age} years old`);
}

function getDaysUntilBirthday(birthDateStr) {
  const today = moment().startOf('day');
  const birthDate = moment(birthDateStr, 'YYYY-MM-DD');
  let nextBirthday = moment(birthDate).year(today.year()).startOf('day');

  if (nextBirthday.isBefore(today)) {
    nextBirthday.add(1, 'year');
  }

  const daysLeft = nextBirthday.diff(today, 'days');
  console.log(`${daysLeft} days until your birthday`);
}

getCurrentDay();
getCurrentMonth();
getCurrentYear();
getCurrentDate();
isWeekend();
getDaysUntilNewYear();
getAge("2012-05-25");
getDaysUntilBirthday("2012-05-25");