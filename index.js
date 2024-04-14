"use strict";
// @ts-ignore
const Name = {
    name: "abdullah",
    age: 18,
};
const Introduction = (student) => {
    const { name, age } = student;
    return `My name is ${name} and my age is ${age}`;
};
console.log(Introduction(Name));


