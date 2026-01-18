const form = document.getElementById("eventForm");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  const data = new URLSearchParams();
  data.append("college", document.getElementById("college").value);
  data.append("department", document.getElementById("department").value);
  data.append("name", document.getElementById("username").value);
  data.append("phone", document.getElementById("phone").value);
  data.append("email", document.getElementById("email").value);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzWOiDosfmyVqDJYEWLN0xkWWIS7ybqFnvV6koU0XZ-q50S7Ord6jAM2GU2sO3Kn0hpBw/exec",
      {
        method: "POST",
        body: data
      }
    );

    alert("Form submitted successfully ✅");
    form.reset();

  } catch (error) {
    alert("Submission failed ❌");
    console.error(error);
  }

  sendBtn.disabled = false;
  sendBtn.textContent = "Send";
});
