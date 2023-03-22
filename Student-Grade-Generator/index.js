// get the DOM elements
const form = document.querySelector('form');
const studentId = document.querySelector('#student');
const studentIdMarks = document.querySelector('#student-Id');
const english = document.querySelector('#english');
const kiswahili = document.querySelector('#kiswahili');
const math = document.querySelector('#math');
const environment = document.querySelector('#environment');
const art = document.querySelector('#art');
const music = document.querySelector('#music');
const hygiene = document.querySelector('#hygiene');
const englishMarks = document.querySelector('#english-marks');
const kiswahiliMarks = document.querySelector('#kiswahili-marks');
const mathMarks = document.querySelector('#math-marks');
const environmentMarks = document.querySelector('#environment-marks');
const artMarks = document.querySelector('#art-marks');
const musicMarks = document.querySelector('#music-marks');
const hygieneMarks = document.querySelector('#hygiene-marks');
const englishGrade = document.querySelector('#english-grade');
const kiswahiliGrade = document.querySelector('#kiswahili-grade');
const mathGrade = document.querySelector('#math-grade');
const environmentGrade = document.querySelector('#environment-grade');
const artGrade = document.querySelector('#art-grade');
const musicGrade = document.querySelector('#music-grade');
const hygieneGrade = document.querySelector('#hygiene-grade');
const submitButton = document.querySelector('#submit-button');
const clearButton = document.querySelector('#clear-button');

// grading function
function getGrade(marks) {
  if (marks > 79) {
    return 'A';
  } else if (marks > 59) {
    return 'B';
  } else if (marks > 49) {
    return 'C';
  } else if (marks > 39) {
    return 'D';
  } else {
    return 'E';
  }
}

// event listener for form submission
form.addEventListener('submit', function(event) {
  // prevent the form from submitting and refreshing the page
  event.preventDefault();

  // get the values of the input fields
  const studentIdValue = studentId.value;
  const englishValue = english.value;
  const kiswahiliValue = kiswahili.value;
  const mathValue = math.value;
  const environmentValue = environment.value;
  const artValue = art.value;
  const musicValue = music.value;
  const hygieneValue = hygiene.value;

  // add the values to the corresponding cells in row 3
  document.getElementById('student-Id').innerHTML = studentIdValue;
  englishMarks.innerHTML = englishValue;
  kiswahiliMarks.innerHTML = kiswahiliValue;
  mathMarks.innerHTML = mathValue;
  environmentMarks.innerHTML = environmentValue;
  artMarks.innerHTML = artValue;
  musicMarks.innerHTML = musicValue;
  hygieneMarks.innerHTML = hygieneValue;

  // calculate grades and add them to the corresponding cells in row 4
  englishGrade.innerHTML = getGrade(englishValue);
  kiswahiliGrade.innerHTML = getGrade(kiswahiliValue);
  mathGrade.innerHTML = getGrade(mathValue);
  environmentGrade.innerHTML = getGrade(environmentValue);
  artGrade.innerHTML = getGrade(artValue);
  musicGrade.innerHTML = getGrade(musicValue);
  hygieneGrade.innerHTML = getGrade(hygieneValue);

});

// event listener for clear button
clearButton.addEventListener('click', function() {
  studentId.value = '';
  english.value = '';
  kiswahili.value = '';
  math.value = '';
  environment.value = '';
  art.value = '';
  music.value = '';
  hygiene.value = '';
  studentIdMarks.textContent = '';
  englishMarks.textContent = '';
  kiswahiliMarks.textContent = '';
  mathMarks.textContent = '';
  environmentMarks.textContent = '';
  artMarks.textContent = '';
  musicMarks.textContent = '';
  hygieneMarks.textContent = '';
  englishGrade.textContent = '';
  kiswahiliGrade.textContent = '';
  mathGrade.textContent = '';
  environmentGrade.textContent = '';
  artGrade.textContent = '';
  musicGrade.textContent = '';
  hygieneGrade.textContent = '';
});

 