//Initialize Variables from the HTML to be used by the functions
const form = document.querySelector('form');
const speedInput = document.querySelector('#speed');
const demeritsTd = document.querySelector('#demerits');
const licenseStatusTd = document.querySelector('#license-status');
const clearButton = document.getElementById('clear-button');

//Create an Event Listener for the submit button 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Calculate the number of Demerits and add them to the table
  const speed = parseInt(speedInput.value);
  let demerits = 0;
  
  if (speed > 70) {
    demerits = Math.floor((speed - 70) / 5);
  }
  
  demeritsTd.textContent = `Points: ${demerits}`;
  //Determine whether the license should be suspended based on the number of demerits
  if (demerits > 12) {
    licenseStatusTd.textContent = 'License suspended';
  } else {
    licenseStatusTd.textContent = 'License active';
  }
});
//Clear the tables' cells
clearButton.addEventListener('click', function() {
  demeritsTd.textContent = '';
  licenseStatusTd.textContent = '';
  speedInput.value = '';
});
