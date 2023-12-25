let changeBtn = document.querySelector("#changeBtn");
let textField = document.querySelector("#textField");
let copyHex = document.querySelector("#copyHex");
// change Background coloe on click----------------------------------------------------------------
changeBtn.addEventListener("click", () => {
  changeBgColor()
  copyHex.style.backgroundColor = " #CBD5E0"
})
// function to change background color on click----------------------------------------------------------------
function changeBgColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgba(${red},${green},${blue},${0.9})`;
  getTheHexValue(red, green, blue)
  copyHex.textContent = "Copy"

}
// Get the hex value----------------------------------------------------------------
function getTheHexValue(red, green, blue) {
  const redHex = red.toString(16).padStart(2, '0'); // Convert red to hexadecimal
  const greenHex = green.toString(16).padStart(2, '0'); // Convert green to hexadecimal
  const blueHex = blue.toString(16).padStart(2, '0'); // Convert blue to hexadecimal
  textField.value = `${redHex}${greenHex}${blueHex}`
  textField.value = textField.value.toUpperCase()

}
// Copy the Hexadecimal values----------------------------------------------------------------
copyHex.addEventListener('click', () => {
  navigator.clipboard.writeText(textField.value)
  copyHex.textContent = "Copied"
  copyHex.style.backgroundColor = "#0CBABA"

})

// change Background on change the Hexadecimal value----------------------------------------------------------------
textField.addEventListener("input", (e) => {
  e.target.value = e.target.value.toUpperCase()
  if (textField.value.length === 6) {
    let hexadecimalValue = e.target.value
    document.body.style.backgroundColor = `#${hexadecimalValue}`

  }
  else if (textField.value === "") {
    document.body.style.backgroundColor = `#1F2937`

  }

})

// toggle dark Mode ----------------------------------------
let toggleMode = document.querySelector('#toggle')
let mainHeading = document.querySelector("h1")
let isDarkMode = false
toggleMode.addEventListener('click', () => {
  isDarkMode = !isDarkMode
  if (isDarkMode) {
    toggleMode.textContent = "Light Mode"
    document.body.style.backgroundColor = `#1F2937`
    toggleMode.style.color = "white"
    mainHeading.style.color = "white"

  }
  else {
    toggleMode.textContent = "Dark Mode"
    document.body.style.backgroundColor = `#EDF2F7`
    toggleMode.style.color = "black"
    mainHeading.style.color = "black"




  }
})