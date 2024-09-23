// flood donate section
document
  .getElementById("btn-flood-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addBalance = getInputFieldValueById("flood-donation");
    const fDonateBalance = getTextFieldValueById("flood-donate-balance");
    const mainBalance = getTextFieldValueById("main-balance");

    if (mainBalance >= addBalance) {
      const mainNewBalance = mainBalance - addBalance;
      const fNewBalance = fDonateBalance + addBalance;

      document.getElementById("main-balance").innerText = mainNewBalance;
      document.getElementById("flood-donate-balance").innerText = fNewBalance;
    } else {
      alert("You don't have sufficient Balance ");
      document.getElementById("my_modal_5").classList.add("hidden");
    }
  });

// close Modal function
document
  .getElementById("close-modal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_5").close();
  });

// Show Donate Section function
document.getElementById("donate-btn").addEventListener("click", function () {
  showSectionById("donate-section");
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("history-section");
});
