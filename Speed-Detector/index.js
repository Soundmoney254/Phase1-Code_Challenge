const form = document.querySelector('form');
const speedInput = document.querySelector('#speed');
const demeritsTd = document.querySelector('#demerits');
const licenseStatusTd = document.querySelector('#license-status');
const clearButton = document.getElementById('clear-button');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const speed = parseInt(speedInput.value);
  let demerits = 0;
  
  if (speed > 70) {
    demerits = Math.floor((speed - 70) / 5);
  }
  
  demeritsTd.textContent = `Points: ${demerits}`;
  
  if (demerits > 12) {
    licenseStatusTd.textContent = 'License suspended';
  } else {
    licenseStatusTd.textContent = 'License active';
  }
});

clearButton.addEventListener('click', function() {
  demeritsTd.textContent = '';
  licenseStatusTd.textContent = '';
  speedInput.value = '';
});
