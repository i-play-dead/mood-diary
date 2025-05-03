const moodCards = document.querySelectorAll('.mood-card');
const noteInput = document.getElementById('note');
const saveButton = document.getElementById('save-btn');

let selectedMood = null;

moodCards.forEach(card => {
  card.addEventListener('click', () => {
    moodCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedMood = card.getAttribute('data-mood');
  });
});

saveButton.addEventListener('click', () => {
  if (!selectedMood) {
    alert('Pick a mood first, stan!');
    return;
  }

  const entry = {
    mood: selectedMood,
    note: noteInput.value,
    date: new Date().toLocaleString()
  };

  const history = JSON.parse(localStorage.getItem('moodHistory') || '[]');
  history.push(entry);
  localStorage.setItem('moodHistory', JSON.stringify(history));
  alert('Mood saved 💿');
  noteInput.value = '';
  moodCards.forEach(c => c.classList.remove('selected'));
  selectedMood = null;
});
