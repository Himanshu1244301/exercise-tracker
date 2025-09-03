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
    dayDiv.innerHTML = `<div class="day-header">${wd.day} – ${wd.name} (${wd.desc})</div><div class="exercises"></div>`;
    const exContainer = dayDiv.querySelector('.exercises');
    wd.exercises.forEach(ex => {
      const exDiv = document.createElement('div');
      exDiv.className = 'exercise';
      exDiv.innerHTML = `
        <button class="thumbBtn" style="background-image:url('${getThumbnail(ex.video)}')" onclick="window.open('${ex.video}','_blank')"></button>
        <div class="content">
          <h4>${ex.name}</h4>
          <p class="details">${ex.sets} | ${ex.rpe}${ex.weight? ' | ' + ex.weight : ''}</p>
          <p class="cues">${ex.cues}</p>
        </div>`;
      exContainer.appendChild(exDiv);
    });
    schedule.appendChild(dayDiv);
  });
}

function renderCalendar() {
  const cal = document.getElementById('calendar');
  const now = new Date(), year = now.getFullYear(), month = now.getMonth();
  const first = new Date(year, month, 1).getDay(), total = new Date(year, month+1,0).getDate();
  cal.innerHTML = '';
  for (let i = 0; i < first; i++) cal.appendChild(document.createElement('div'));
  for (let d = 1; d <= total; d++) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    cell.textContent = d;
    if (localStorage.getItem(`day-${d}`)) cell.classList.add('done');
    cell.onclick = () => {
      const key = `day-${d}`, done = cell.classList.toggle('done');
      done ? localStorage.setItem(key, '1') : localStorage.removeItem(key);
      updateCount();
    };
    cal.appendChild(cell);
  }
  updateCount();
}

function updateCount() {
  const cnt = document.querySelectorAll('.calendar-day.done').length;
  document.getElementById('completed-count').textContent = `Workouts completed: ${cnt}`;
}

function showToday() {
  const idx = (new Date().getDay() + 6) % 7, td = workoutDays[idx];
  document.getElementById('todayText').textContent = `Today: ${td.day} – ${td.name}`;
  document.getElementById('startBtn').onclick = () => document.getElementById('schedule').scrollIntoView({behavior:'smooth'});
  document.getElementById('copyLinkBtn').onclick = () => {
    navigator.clipboard.writeText(location.href).then(() => alert('Link copied!'));
  };
}

document.addEventListener('DOMContentLoaded', () => {
  renderSchedule();
  renderCalendar();
  showToday();
  document.getElementById('darkModeToggle').onclick = () => document.body.classList.toggle('dark');
});
