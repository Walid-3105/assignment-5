document
  .getElementById("btn-injured-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addBalance3 = getInputFieldValueById("injured-donation");
    const injuredDonateBalance = getTextFieldValueById(
      "injured-donate-balance"
    );

    const mainBalance3 = getTextFieldValueById("main-balance");

    if (mainBalance3 >= addBalance3 && addBalance3 > 0) {
      const mainNewBalance3 = mainBalance3 - addBalance3;
      const injuredNewBalance = injuredDonateBalance + addBalance3;

      document.getElementById("main-balance").innerText = mainNewBalance3;
      document.getElementById("injured-donate-balance").innerText =
        injuredNewBalance;

      // transaction section start here
      const div = document.createElement("div");
      div.style.border = "1px solid rgba(17, 17, 17, 0.1)";
      div.style.padding = "24px";
      div.style.borderRadius = "12px";
      div.innerHTML = `
      <p>${addBalance3} Taka is Donated for Injured in Quota Movement, Bangladesh</p>
      <p>Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT + 0600(Bangladesh Standard Time)</p>
      `;
      document.getElementById("transaction-container").appendChild(div);
      // transaction section ends here
      // Modal show if donate successfully
      document.getElementById("my_modal_7").showModal();
    } else {
      alert("Invalid Donation Amount");
      if (document.getElementById("my_modal_7").open) {
        document.getElementById("my_modal_7").close();
      }
    }
  });

// close Modal function
document
  .getElementById("close-modal-3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_7").close();
  });
