// flood donate section
document
  .getElementById("btn-flood-donate")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addBalance = getInputFieldValueById("flood-donation");
    const fDonateBalance = getTextFieldValueById("flood-donate-balance");
    const mainBalance = getTextFieldValueById("main-balance");

    if (mainBalance >= addBalance && addBalance > 0) {
      const mainNewBalance = mainBalance - addBalance;
      const fNewBalance = fDonateBalance + addBalance;

      document.getElementById("main-balance").innerText = mainNewBalance;
      document.getElementById("flood-donate-balance").innerText = fNewBalance;

      // transaction section
      const div = document.createElement("div");
      div.style.border = "1px solid rgba(17, 17, 17, 0.1)";
      div.style.padding = "24px";
      div.style.borderRadius = "12px";
      div.innerHTML = `
      <p>${addBalance} Taka is Donated for Flood at Noakhali, Bangladesh</p>
      <p>Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()} GMT + 0600(Bangladesh Standard Time)</p>
      `;
      document.getElementById("transaction-container").appendChild(div);
      // transaction section ends here
      // Modal show if donate successfully
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Invalid Donation Amount");

      if (document.getElementById("my_modal_5").open) {
        document.getElementById("my_modal_5").close();
      }
    }
  });

// close Modal function
document
  .getElementById("close-modal")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("my_modal_5").close();
  });

// --------------------------------------------------------------------
// Show Donate Section function & Select button color change
document.getElementById("donate-btn").addEventListener("click", function () {
  showSectionById("donate-section");
  selectButtonColorChange("donate-btn");
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("history-section");
  selectButtonColorChange("history-btn");
});

// Default Selected button-------------
document.getElementById("donate-btn").classList.add("active");

// Home to Blog Page----------
document.getElementById("btn-blog").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "/blog.html";
});

// Blog to Home Page -----------
