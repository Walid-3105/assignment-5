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
      document.getElementById("my_modal_5").classList.add("hidden");
    }
  });
