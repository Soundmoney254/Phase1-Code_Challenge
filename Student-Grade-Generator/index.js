// Initialize the HTML elements using DOM
const form = document.querySelector("form");
const studentId = document.querySelector("#student");
const english = document.querySelector("#english");
const kiswahili = document.querySelector("#kiswahili");
const math = document.querySelector("#math");
const environment = document.querySelector("#environment");
const art = document.querySelector("#art");
const music = document.querySelector("#music");
const hygiene = document.querySelector("#hygiene");

//Grading function
function getGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks > 59) {
    return "B";
  } else if (marks > 49) {
    return "C";
  } else if (marks > 39) {
    return "D";
  } else {
    return "E";
  }
}
//An event listener for the submit button on the form
form.addEventListener("submit",(event) => {
  event.preventDefault();

  //Add the Input values to the corresponding cells in row 3
  studentIdMarks.textContent = studentId.value;
  englishMarks.textContent = english.value;
  kiswahiliMarks.textContent = kiswahili.value;
  mathMarks.textContent = math.value;
  environmentMarks.textContent = environment.value;
  artMarks.textContent = art.value;
  musicMarks.textContent = music.value;
  hygieneMarks.textContent = hygiene.value;

  //Calculate grades and add them to the corresponding cells in row 4
  englishGrade.textContent = getGrade(english.value);
  kiswahiliGrade.textContent = getGrade(kiswahili.value);
  mathGrade.textContent = getGrade(math.value);
  environmentGrade.textContent = getGrade(environment.value);
  artGrade.textContent = getGrade(art.value);
  musicGrade.textContent = getGrade(music.value);
  hygieneGrade.textContent = getGrade(hygiene.value);

});
//An event listener for the clear button
clearButton.addEventListener('click', () => {
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