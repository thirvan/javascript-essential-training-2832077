/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


const navlist = document.querySelector("main nav ul");
const myLi = document.querySelector("#test");

function elementInfo(element) {
    console.log(`element ${element.localName} has id: '${element.id}' and classes: '${element.className}'`);
}

const makeRed = function(element) {
    element.classList.add("red");
}

const makeGreen = (element) => {
    element.classList.add("green");
}

elementInfo(navlist);
elementInfo(myLi);

makeGreen(navlist);
makeRed(myLi);

elementInfo(navlist);
elementInfo(myLi);