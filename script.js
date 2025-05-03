let selectedMood = "";

document.querySelectorAll(".mood").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedMood = btn.textContent;
    document.querySelectorAll(".mood").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
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
  document.querySelectorAll(".mood").forEach(b => b.classList.remove("selected"));
  showHistory();
});

function showHistory() {
  const historyEl = document.getElementById("history");
  let moodHistory = JSON.parse(localStorage.getItem("moodHistory") || "[]");
  historyEl.innerHTML = "";
  moodHistory.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.date} – ${entry.mood} – ${entry.note}`;
    historyEl.appendChild(li);
  });
}

showHistory();

