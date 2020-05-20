

// ternary operator version
let button = document.querySelector("button");

button.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    document.body.style.backgroundColor = curColour === 'red' ? 'white' : 'red';
});

// long version
// let button = document.querySelector("button");
//
// button.addEventListener("click", function() {
//   // container variable
//     const curColour = document.body.style.backgroundColor;
// // if red change to white
//     if (curColour === 'red') {
//         document.body.style.backgroundColor = "white";
//     }
//     // if white change to red
//     else {
//         document.body.style.backgroundColor = "red";
//     }
// });



 // class toggle version
// button.addEventListener("click", function(){
//     document.body.classList.toggle("red");
// });
