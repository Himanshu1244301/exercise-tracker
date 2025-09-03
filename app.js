// app.js

// Generate YouTube thumbnail URL
function getYoutubeThumbnail(url) {
  const id = url.includes('youtu.be/')
    ? url.split('youtu.be/')[1]
    : url.split('v=')[1];
  return `https://img.youtube.com/vi/${id.split(/[&?]/)[0]}/hqdefault.jpg`;
}

// Render schedule
function displaySchedule() {
  const scheduleEl = document.getElementById('schedule');
  workoutDays.forEach(wd => {
    const dayEl = document.createElement('div');
    dayEl.className = 'day';
    dayEl.innerHTML = `
      <div class="day-header">${wd.day} – ${wd.name} (${wd.desc})</div>
      <div class="exercises"></div>
    `;
    const exContainer = dayEl.querySelector('.exercises');

    wd.exercises.forEach(ex => {
      const exEl = document.createElement('div');
      exEl.className = 'exercise';
      exEl.innerHTML = `
        <div class="thumb" style="background-image:url('${getYoutubeThumbnail(ex.video)}')"></div>
        <div class="content">
          <h4>${ex.name}</h4>
          <div class="details">${ex.sets} | ${ex.rpe}${ex.weight ? ' | ' + ex.weight : ''}</div>
          <div class="cues">${ex.cues}</div>
          <button class="videoBtn" onclick="window.open('${ex.video}','_blank')">Watch Video</button>
        </div>
      `;
      exContainer.appendChild(exEl);
    });

    scheduleEl.appendChild(dayEl);
  });
}

// Highlight today's workout
function displayToday() {
  const idx = (new Date().getDay() + 6) % 7; // Monday=0
  const today = workoutDays[idx];
  document.getElementById('todayText').textContent = `Today: ${today.day} – ${today.name}`;
  document.getElementById('startBtn').onclick = () => {
    document.getElementById('schedule').scrollIntoView({behavior: 'smooth'});
  };
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayToday();
  displaySchedule();
});
