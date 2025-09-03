// app.js
function getThumbnail(url) {
  const id = url.includes('youtu.be/') ? url.split('youtu.be/')[1] : url.split('v=')[1];
  return `https://img.youtube.com/vi/${id.split(/[&?]/)[0]}/default.jpg`;
}

function renderSchedule() {
  const schedule = document.getElementById('schedule');
  workoutDays.forEach(wd => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.innerHTML = `
      <div class="day-header">${wd.day} – ${wd.name} (${wd.desc})</div>
      <div class="exercises"></div>
    `;
    const exContainer = dayDiv.querySelector('.exercises');
    wd.exercises.forEach(ex => {
      const exDiv = document.createElement('div');
      exDiv.className = 'exercise';
      exDiv.innerHTML = `
        <button class="thumbBtn" style="background-image:url('${getThumbnail(ex.video)}')" onclick="window.open('${ex.video}','_blank')"></button>
        <div class="content">
          <h4>${ex.name}</h4>
          <p class="details">${ex.sets} | ${ex.rpe}${ex.weight ? ' | ' + ex.weight : ''}</p>
          <p class="cues">${ex.cues}</p>
        </div>
      `;
      exContainer.appendChild(exDiv);
    });
    schedule.appendChild(dayDiv);
  });
}

function renderCalendar() {
  const calendarEl = document.getElementById('calendar');
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  calendarEl.innerHTML = '';
  for (let i = 0; i < first; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-day';
    calendarEl.appendChild(empty);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';
    day.textContent = d;
    day.dataset.day = d;
    if (localStorage.getItem(`day-${d}`) === 'done') {
      day.classList.add('done');
    }
    day.onclick = () => {
      if (day.classList.toggle('done')) {
        localStorage.setItem(`day-${d}`, 'done');
      } else {
        localStorage.removeItem(`day-${d}`);
      }
      updateCount();
    };
    calendarEl.appendChild(day);
  }
  updateCount();
}

function updateCount() {
  const days = document.querySelectorAll('.calendar-day.done').length;
  document.getElementById('completed-count').textContent = `Workouts completed: ${days}`;
}

function showToday() {
  const idx = (new Date().getDay() + 6) % 7;
  const today = workoutDays[idx];
  document.getElementById('todayText').textContent = `Today: ${today.day} – ${today.name}`;
  document.getElementById('startBtn').onclick = () => {
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
  };
}

document.addEventListener('DOMContentLoaded', () => {
  showToday();
  renderSchedule();
  renderCalendar();
});
