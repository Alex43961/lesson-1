// ! RULE!!!
"use strict";

// alert() - modal window with text into it

// "" , '' ,
// `` special signs

// alert("HELLO WORLD")

/* 
	 Hello world
	 World
	 Hello
	 TODO : HEADER FOR TODAY
*/

// instruction
// Call modal window with expression
// alert("Hello world");
// alert("Goodbye");
// confirm("Are you adult ?");

// 2 + 2

// Variable

// name for peace of memory

// * let - keyword to initialize variable
// let greeting;

// create new variable
// let expression = "There is animal in the box : ";
// let box = "Cat";

// greeting = "Hello world";

// greeting = "Hey , sup ,damn? ";

// String
// alert("Hello world");
// Variable
// alert(greeting);
// alert(box);

// * Name for variable

// ! 2 strict RULES

// * 1) admit signs : $ , _
// * OK!

// let hel2lo
// let hello2
// let _hello
// let $hello

// ! NOT OKAY
// let 23hello
// let hello-world
// let hello@world
// let hello!world

// * OK
// * cameCase

// let greeting = "Hello world";
// let goodMorning = "Good morning!";
// let goodMorningForJohn = "Good morning , John!";

//  ? OK - optional => SCREEM CASE
// let NAME = "John";

// ! Forbidden

//  ! Snake-case

// let first_name = "John";

//  ! Pascal-case

// let FirstName = "John"

// ! Cebab-case

// let ke-bab-case

// !!!!! Warning / Attantion !!!!!!!
// let apple = "apple";
// let APPLE = "APPLE COMPANY";

// alert(apple);
// alert(APPLE);
// alert(aPlle);

// ! Reserved names
// let let
// let while
// let class
// let return
// let continue

// * Various of variables

// ! var  , const
// let box = "Duck";

// box = "Hen";

// box = "Dog";

// alert(box);
// var => variable

// var box = "Kenguru";
// box = "Duck";

// box = "Aligator";

// ! 5% - let , 95% - const

// const box = "Tiger";
// ! fail
// ! box = "Lion";

// alert(box);

// let hello = "HELLO !;) ";

// hello = hello + "World!";
// const helloWorld = hello + "World!";

// alert(hello);

// const animal = "Cat";
// const greeting = "Hello";
// const firstName = "John";

// const x
// const y
// const q
// const r

// const admin = "admin ";
// const name = "John";
// * Valery 12

// let name = "John";
// name = "Mike"
// * Max 12

// const adminName = admin + "Oleg";
// alert(adminName);
// * Den 12

// let name = "John ";

// const age = "23";

// const data = name + age;

// alert(data);
// * Irina 12

// let name = "John";

// name += " Doe";

// const age = 23;
// const newAge = age + 9;

// const sentence =
//   "Hello my name is " + name + " nice to meet you , i'm " + newAge + "yo";

// alert(sentence);

// * Nazar 12

// * Evg 12

// Homework

// 1) Create 5 valid variables (name) and assign to variable something by sense
// ??? const myLovelyCat = "Ketty " ;
// ??? const propose = "Kir must recive more money from It-step , please , im realy hungy and thirsty , may be more on 30$ per hour ???"

// 2) Create sentense of 5 variable above -> alert
// alert(myLovelyCat + propose)

// 3) What does mean var , let , const ?
// let - is a modern variable
// const - ...
// var - ...

// 4) Re-evaluate "let variables" 5 tiems
// let name = "John";
// name = "Mike";
// name = "Bob";
// name = "Jack";

// 5) What is JS ?

// const btn = document.getElementById("btn");
// const modal = document.querySelector(".modal");

// const firstNames = ["John", "Mike", "Jack"];

// let i = 0;

// btn.addEventListener("click", () => {
//   modal.innerHTML += `
//       <h1>${firstNames[i]}</h1>
//   `;
//   i++;
// });

// document.querySelector("#hide").addEventListener("click", () => {
//   modal.style.display = "none";
// });

// document.getElementById("btn").addEventListener("click", () => {
//   modal.style.display = "flex";
// });

const town = "Dnipro";
let profession = "It-developer";
let userName = "Alex";
const greeting = "Hello";
let invite = "welcome to";

alert(greeting + " " + userName + "!" + " " + "If you " + profession + "-" + invite + " " + town + "!");

/!*let
Объявляет локальную переменную с блочной областью действия. 
Значение может присваиваться либо при объявлении, либо перед использованием.
В процессе использования переменной можно менять ее значение * /

	/ !*const
		Объявляет именованную константу блочной области, доступную только для чтения.
		Значение присваивается при объявлении. * /

			/ !* var
				Объявляет переменную, при необходимости инициализируя ее значением.
				Может использоваться для объявления как локальных,
				так и глобальных переменных, в зависимости от контекста выполнения .* /


profession = "mainer";
profession = "driver";
profession = "designer";
profession = "waitress";
profession = "engineer";

let animal = "cat";
animal = "dog";
animal = "duck";
animal = "bear";
animal = "monkey";
animal = "snake";

/!*JavaScript – это язык программирования, 
 который добавляет интерактивность на веб - сайт.
 JavaScript позволяет создать динамически обновляемый контент,
	управляет мультимедиа, анимирует изображения и т.д. * /
