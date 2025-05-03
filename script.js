let selectedMood = "";

document.querySelectorAll(".mood-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mood-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedMood = card.dataset.mood;
  });
});

document.getElementById("save-btn").addEventListener("click", () => {
  if (!selectedMood) return alert("Please select a mood!");
  const note = document.getElementById("note").value;
  const date = new Date().toLocaleDateString();

  const entry = { date, mood: selectedMood, note };
  let moodHistory = JSON.parse(localStorage.getItem("moodHistory") || "[]");
  moodHistory.unshift(entry);
  localStorage.setItem("moodHistory", JSON.stringify(moodHistory));

  document.getElementById("note").value = "";
  selectedMood = "";
  document.querySelectorAll(".mood-card").forEach(c => c.classList.remove("selected"));
  alert("Mood saved! 💖");
});
