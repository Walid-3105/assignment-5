document
  .getElementById("btn-food-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addBalance2 = getInputFieldValueById("food-donation");
    const foodDonateBalance = getTextFieldValueById("food-relief-balance");
    const mainBalance2 = getTextFieldValueById("main-balance");

    if (mainBalance2 >= addBalance2 && addBalance2 > 0) {
      const mainNewBalance2 = mainBalance2 - addBalance2;
      const foodNewBalance = foodDonateBalance + addBalance2;

      document.getElementById("main-balance").innerText = mainNewBalance2;
      document.getElementById("food-relief-balance").innerText = foodNewBalance;

      // transaction section
      const div = document.createElement("div");
      div.style.border = "1px solid rgba(17, 17, 17, 0.1)";
      div.style.padding = "24px";
      div.style.borderRadius = "12px";
      div.innerHTML = `
      <p>${addBalance2} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
      <p>Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT + 0600(Bangladesh Standard Time)</p>
      `;

      document.getElementById("transaction-container").appendChild(div);
      // transaction section ends here
      // Modal show if donate successfully
      document.getElementById("my_modal_6").showModal();
    } else {
      alert("Invalid Donation Amount");

      if (document.getElementById("my_modal_6").open) {
        document.getElementById("my_modal_6").close();
      }
    }
  });

// close Modal function
document
  .getElementById("close-modal-2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_6").close();
  });
