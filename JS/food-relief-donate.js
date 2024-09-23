document
  .getElementById("btn-food-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addBalance2 = getInputFieldValueById("food-donation");
    const foodDonateBalance = getTextFieldValueById("food-relief-balance");

    const mainBalance2 = getTextFieldValueById("main-balance");

    if (mainBalance2 >= addBalance2) {
      const mainNewBalance2 = mainBalance2 - addBalance2;
      const foodNewBalance = foodDonateBalance + addBalance2;

      document.getElementById("main-balance").innerText = mainNewBalance2;
      document.getElementById("food-relief-balance").innerText = foodNewBalance;
    } else {
      alert("You don't have sufficient Balance ");
      document.getElementById("my_modal_6").classList.add("hidden");
    }
  });

// close Modal function
document
  .getElementById("close-modal-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_6").close();
  });
