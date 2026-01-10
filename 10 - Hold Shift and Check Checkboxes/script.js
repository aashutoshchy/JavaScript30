const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  //   Check if they had the shift key down
  // AND check that they are checking it
  let inBtn = false;
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBtn = !inBtn;
      }

      if (inBtn) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
