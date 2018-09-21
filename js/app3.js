We select it with document.getElementById("myHeading"). With this we have the reference for the heading, and put it into a variable called myHeading.

*/
//document variable gyakorlatilag maga az oldal, ahol a myHeading-et keresi
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('mybutton');
const myBlack = document.getElementById('myblack');
const myStyle = document.getElementById('mystyle');
const myCenter = document.getElementById('textalign');
const mySize = document.getElementById('size');
let myInput = document.getElementById('myinput');
let myInputstyle = document.getElementById('myinputstyle');
let myAlign = document.getElementById('centerinput');
let sizeInput = document.getElementById('sizeinput');




/* II. Make  THE SELECTION - variable myHeading TO LISTEN!!!

We can make it listen to mouse clicks using the addEventListener method.
This tells the heading element to start listening for browser events(such as the keypress, scrolling, mouse moves)!!!!!

First argument is about which event(mouseclickm keypress), the second is about what to to do : here comes your function
myButton.addEventListener(EVENT/CLICK, FUNCTION TO DO)
*/

//Tell the browser to manipulate the event

myButton.addEventListener('click', () => myHeading.style.color = myInput.value );

myBlack.addEventListener('click', () => myHeading.style.color = 'black' );

myStyle.addEventListener('click', () => myHeading.style.fontStyle = myInputstyle.value);


myCenter.addEventListener('click', () => myHeading.style.textAlign = myAlign.value);

mySize.addEventListener('click', () => myHeading.style.fontSize = sizeInput.value + "px");
