console.log("Script running...")
// Task 1: Light & Dark Mode
// Select the '☀️' button

let b=document.querySelector("#lightMode")
console.log(b)
// Select the '🌑' button

let be=document.querySelector("#darkMode")
// Select the body element
// You can use document.body or document.querySelector("body")
let v=document.querySelector("body")

// Add an event listener to the ☀️ button such that when it's clicked, the body's background color is lightyellow
b.addEventListener("click", function(event){
  v.style.backgroundColor="lightyellow"
})


// Add an event listener to the ☀️ button such that when it's clicked, the body's background color is navy
// Bonus: also make the body's text color white
be.addEventListener("click", function(event){
  v.style.backgroundColor="navy"
})


// Task 2: Image size
// Select the image


// Add an event listener to the image such that when it's clicked, the width of the image becomes 110%



// Task 3: RGB
// Select the red h2


// Add an event listener to the h2 such that when it's clicked, the text color changes to red



// Implement the same DOM manipulation flows for green and blue h2s


