"use strict";

const userFirstName = "Vasya";
const userLastName = "Pupkin";

const userBirthDay = prompt("Enter birth day");
const userBirthMonth = prompt("Enter birth month");
const userBirthYear = prompt("Enter birth year");

const userAge = 2022 - userBirthYear;

alert(`${userLastName} ${userFirstName} \nDate of birth: ${userBirthDay}.${userBirthMonth}.${userBirthYear} \nAge is ${userAge} years`);


