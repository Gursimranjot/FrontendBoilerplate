window.addEventListener('load', function () {

});






// function getvalues() {

//   var amount = document.getElementById("amountEnter").value;
//   var tip = document.getElementById("tipAmount").value;
//   tip = amount / 100;
//   var totalAmount = Number(amount) + Number(tip);
//   console.log(totalAmount);
//   document.querySelector("#totalbilltip").innerHTML = totalAmount;
// };

// var btnSelect = document.getElementById("calculated");
// btnSelect.addEventListener('click', getvalues);

// Scopes
// var scopes = "Javascript for Begineers";
// function somethng() {
//     console.log(scopes);
//     return scopes;
// }
// // somethng();

// var marvel = "Avengers";
// function marvelmovies() {
//     var firstMovie = "ironman";
//     console.log(firstMovie);
// }

// marvelmovies();

// console.log(marvel);
// console.log(firstMovie);


const fruits = [
    "apple",
    "banana",
    "cherries",
    "dates",
    "grapes",
    "guava",
    "kiwi",
    "orange",
    "papaya",
    "pineapple",
];
const vegetables = [
    "carrot",
    "broccoli",
    "cauliflower",
    "cucumber",
    "lettuce",
    "mushrooms",
    "onion",
    "pumnkin",
    "tomato",
    "potato",
];

// const myClickFunction = function () {
//     const dropdownVal = document.querySelector("#drop-down").value;
//     console.log("selected dropdown value - ", dropdownVal);
//     // so we got the value, now check if exists in fruits ref data
//     if (fruits.includes(dropdownVal)) {
//         // yes, we got a fruit value, now append this to fruit list
//         // first in order to append to fruit list, let's get it first
//         const fruitList = document.querySelector("#fruit-list"); // fruit list ul
//         const fruitValueListItem = document.createElement("li"); // a new li for adding new value
//         fruitValueListItem.innerText = dropdownVal; // adding new value to it
//         fruitList.appendChild(fruitValueListItem); // appending it to fruilist
//     }
//     //if we are here, it means val must be a vegetable.
//     if (vegetables.includes(dropdownVal)) {
//         // yes, we got a vegetable value, now append this to vegetable list
//         // first in order to append to vegetable list, let's get it first
//         const vegetableList = document.querySelector("#vegetable-list"); // fruit list ul
//         const vegetableValueListItem = document.createElement("li"); // a new li for adding new value
//         vegetableValueListItem.innerText = dropdownVal; // adding new value to it
//         vegetableList.appendChild(vegetableValueListItem); // appending it to fruilist
//     }
// }
// var btn = document.querySelector("#elementSelector");
// window.onload = function () {
//     console.log("Running on load");
//     // so user clicked, get dropdown value
//     btn.addEventListener('click', myClickFunction);
// }

// window.unload = function () {
//     console.log("I am Marvel Hero");
//     btn.remove("click");
// }
// define onclick handler
// function onSubmit() {
//     console.groupCollapsed("program");
//     console.log(`clicked on submit button`);

//     console.groupEnd();
// };


// var bgColor = document.querySelector('.js-bg-color');
// var textColor = document.querySelector('.js-text-color');
// var body = document.querySelector("body");
// bgColor.addEventListener('keyup', function (event) {
//     body.style.backgroundColor = event.target.value;
// });
// textColor.addEventListener('keyup', function (event) {
//     body.style.color = event.target.value;
// });

var body = document.querySelector("body");
var textColor = document.querySelector(".textselector");
var newBgColor = document.querySelector(".bgcolorselector");
var fontSize = document.querySelector(".fontselector");
newBgColor.addEventListener('keyup', function () {
    body.style.backgroundColor = event.target.value;
});
textColor.addEventListener('keyup', function () {
    body.style.color = event.target.value;
});
fontSize.addEventListener('keyup', function () {
    body.style.fontSize = event.target.value + 'px';
});