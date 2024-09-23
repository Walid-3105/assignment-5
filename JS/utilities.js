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

function showSectionById(id) {
  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

// close Modal function
document
  .getElementById("close-modal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_5").close();
  });
