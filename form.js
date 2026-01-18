document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".event-btn");
  const backBtn = document.getElementById("backBtn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      // Remove glow from all buttons
      buttons.forEach(btn => btn.classList.remove("selected"));

      // Add glow to clicked button
      this.classList.add("selected");

      // Redirect ALL buttons to index.html
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);

    });
  });

  // Back button
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      history.back();
    });
  }

});
