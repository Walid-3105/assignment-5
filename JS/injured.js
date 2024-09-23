document
  .getElementById("btn-injured-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addBalance3 = getInputFieldValueById("injured-donation");
    const injuredDonateBalance = getTextFieldValueById(
      "injured-donate-balance"
    );

    const mainBalance3 = getTextFieldValueById("main-balance");

    if (mainBalance3 >= addBalance3) {
      const mainNewBalance3 = mainBalance3 - addBalance3;
      const injuredNewBalance = injuredDonateBalance + addBalance3;

      document.getElementById("main-balance").innerText = mainNewBalance3;
      document.getElementById("injured-donate-balance").innerText =
        injuredNewBalance;
    } else {
      alert("You don't have sufficient Balance ");
      document.getElementById("my_modal_7").classList.add("hidden");
    }
  });

// close Modal function
document
  .getElementById("close-modal-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_7").close();
  });
