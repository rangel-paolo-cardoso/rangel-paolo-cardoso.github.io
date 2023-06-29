// About section
const experience = document.getElementById('total-xp');

const startingDate = new Date(2020, 9, 5); // October 5th, 2020
const currentDate = new Date();
const dateDifferenceInMillisecond = currentDate - startingDate;
const dateDifferenceInYears = convertMillisecondsToYears(dateDifferenceInMillisecond);
const yearsOfExperience = Math.floor(dateDifferenceInYears);

const dateDifferenceInMonths = (dateDifferenceInYears - yearsOfExperience) * 12;
const monthsOfExperience = Math.floor(dateDifferenceInMonths);

const text1 = `${yearsOfExperience} years`;
const text2 = ` and ${monthsOfExperience} months `;
const text3 = `of experience`;
const text4 = ` as a Software Developer.`;

// Copyright from Social Media
const copyright = document.getElementById('copyright');
copyright.innerText = `© ${currentDate.getFullYear()} Rangel Paolo Cardoso Bomfim`;


experience.innerHTML += `${text1}${text2}${text3}${text4}`;

function convertMillisecondsToYears(miliseconds) {
    return miliseconds / (1000 * 60 * 60 * 24 * 365.25);
}
