// app.js - Complete application functionality
function getThumbnail(url) {
  const id = url.includes('youtu.be/') ? url.split('youtu.be/')[1] : url.split('v=')[1];
  if (!id) return '';
  return `https://img.youtube.com/vi/${id.split(/[&?]/)[0]}/default.jpg`;
}

function renderSchedule() {
  const schedule = document.getElementById('schedule');
  if (!schedule) return;
  
  schedule.innerHTML = '';
  
  workoutDays.forEach((wd, dayIndex) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.id = `day-${dayIndex}`;
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'day-header';
    headerDiv.textContent = `${wd.day} – ${wd.name} (${wd.desc})`;
    dayDiv.appendChild(headerDiv);
    
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises';
    
    wd.exercises.forEach((ex, exIndex) => {
      const exDiv = document.createElement('div');
      exDiv.className = 'exercise';
      
      const thumbnailBtn = document.createElement('button');
      thumbnailBtn.className = 'thumbBtn';
      thumbnailBtn.style.backgroundImage = `url('${getThumbnail(ex.video)}')`;
      thumbnailBtn.onclick = () => window.open(ex.video, '_blank');
      thumbnailBtn.setAttribute('aria-label', `Watch ${ex.name} video`);
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';
      
      const nameH4 = document.createElement('h4');
      nameH4.textContent = ex.name;
      
      const detailsP = document.createElement('p');
      detailsP.className = 'details';
      detailsP.textContent = `${ex.sets} | ${ex.rpe}${ex.weight ? ' | ' + ex.weight : ''}`;
      
      const cuesP = document.createElement('p');
      cuesP.className = 'cues';
      cuesP.textContent = ex.cues;
      
      contentDiv.appendChild(nameH4);
      contentDiv.appendChild(detailsP);
      contentDiv.appendChild(cuesP);
      
      exDiv.appendChild(thumbnailBtn);
      exDiv.appendChild(contentDiv);
      exercisesContainer.appendChild(exDiv);
    });
    
    dayDiv.appendChild(exercisesContainer);
    schedule.appendChild(dayDiv);
  });
}

function renderCalendar() {
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;
  
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  calendarEl.innerHTML = '';
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'calendar-day empty';
    calendarEl.appendChild(emptyDiv);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    dayDiv.textContent = day;
    dayDiv.dataset.day = day;
    
    const storageKey = `workout-${year}-${month}-${day}`;
    if (localStorage.getItem(storageKey)) {
      dayDiv.classList.add('done');
    }
    
    dayDiv.onclick = () => {
      const isDone = dayDiv.classList.toggle('done');
      if (isDone) {
        localStorage.setItem(storageKey, 'true');
      } else {
        localStorage.removeItem(storageKey);
      }
      updateCompletedCount();
    };
    
    calendarEl.appendChild(dayDiv);
  }
  
  updateCompletedCount();
}

function updateCompletedCount() {
  const completedDays = document.querySelectorAll('.calendar-day.done').length;
  const countEl = document.getElementById('completed-count');
  if (countEl) {
    countEl.textContent = `Workouts completed this month: ${completedDays}`;
  }
}

function displayTodaysWorkout() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
  const todaysWorkout = workoutDays[todayIndex];
  
  const todayTextEl = document.getElementById('todayText');
  if (todayTextEl) {
    todayTextEl.textContent = `Today: ${todaysWorkout.day} – ${todaysWorkout.name}`;
  }
  
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.onclick = () => {
      const todaySection = document.getElementById(`day-${todayIndex}`);
      if (todaySection) {
        todaySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  }
  
  const copyLinkBtn = document.getElementById('copyLinkBtn');
  if (copyLinkBtn) {
    copyLinkBtn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyLinkBtn.textContent = '✓';
        setTimeout(() => {
          copyLinkBtn.textContent = '🔗';
        }, 2000);
      } catch (err) {
        console.log('Copy failed:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copyLinkBtn.textContent = '✓';
        setTimeout(() => {
          copyLinkBtn.textContent = '🔗';
        }, 2000);
      }
    };
  }
}

function setupDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (!darkModeToggle) return;
  
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    darkModeToggle.textContent = '☀️';
  }
  
  darkModeToggle.onclick = () => {
    const isDark = document.body.classList.toggle('dark');
    darkModeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
}

function handleErrors() {
  window.addEventListener('error', (event) => {
    console.error('Script error:', event.error);
  });
  
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}

function initializeApp() {
  try {
    handleErrors();
    displayTodaysWorkout();
    renderSchedule();
    renderCalendar();
    setupDarkMode();
    
    // Add smooth scrolling for anchor links
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    
    console.log('ExerciseTracker Web v1.3.0 initialized successfully');
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}