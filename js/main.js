const years = document.getElementById('years');
const months = document.getElementById('months');

const statingDate = new Date(2020, 9, 5); // October 5th, 2020
const currentDate = new Date();
const dateDifferenceInMillisecond = currentDate - statingDate;
const datDifferenceInYears = dateDifferenceInMillisecond / (1000 * 60 * 60 * 24 * 365.25);
const yearsOfExperience = Math.floor(datDifferenceInYears);

const datDifferenceInMonths = (datDifferenceInYears - yearsOfExperience) * 12;
const monthssOfExperience = Math.floor(datDifferenceInMonths);

years.innerHTML = yearsOfExperience;
months.innerHTML = monthssOfExperience;