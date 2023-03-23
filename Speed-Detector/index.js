// Initialize the HTML elements using DOM
const form = document.querySelector("form");
const speedInput = document.querySelector("#speed");

//An event listener for the submit button on the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Calculate the number of demerits and add them to the table
  const speed = speedInput.value;
  let demerits = 0;
  if (speed > 70) {
    demerits = Math.floor((speed - 70) / 5);
  }
  demeritsTd.textContent = `Points: ${demerits}`;
  //Determine whether the license should be suspended based on the number of demerits
  if (demerits > 12) {
    licenseStatusTd.textContent = "License suspended";
  } else {
    licenseStatusTd.textContent = "License active";
  }
});
//An event listener for the clear button
clearButton.addEventListener("click", () => {
  demeritsTd.textContent = '';
  licenseStatusTd.textContent = '';
  speedInput.value = '';
});
