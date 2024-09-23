function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// function for show and hide section
function showSectionById(id) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// function for select button color change
function selectButtonColorChange(id) {
  document.getElementById("donate-btn").classList.remove("active");
  document.getElementById("history-btn").classList.remove("active");

  document.getElementById(id).classList.add("active");
}
