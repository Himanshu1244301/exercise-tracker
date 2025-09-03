// ExerciseTracker Web File Download Application
class FileDownloader {
    constructor() {
        this.files = {
            'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ExerciseTracker</title>
  <base href="/exercise-tracker/">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>ExerciseTracker Web</h1>
    <div class="header-controls">
      <span class="version">v1.3.0</span>
      <button id="darkModeToggle" title="Toggle Dark Mode">🌙</button>
    </div>
  </header>

  <section id="today">
    <h2 id="todayText">Loading today's workout…</h2>
    <div class="today-controls">
      <button id="startBtn">Start Today's Workout</button>
      <button id="copyLinkBtn" title="Copy workout link">🔗</button>
    </div>
  </section>

  <section id="schedule"></section>

  <section id="calendar-section">
    <h2>Workout Calendar</h2>
    <div class="calendar-header">
      <span class="day-label">Sun</span>
      <span class="day-label">Mon</span>
      <span class="day-label">Tue</span>
      <span class="day-label">Wed</span>
      <span class="day-label">Thu</span>
      <span class="day-label">Fri</span>
      <span class="day-label">Sat</span>
    </div>
    <div id="calendar"></div>
    <p id="completed-count"></p>
  </section>

  <footer>
    <p>© 2025 ExerciseTracker Web • All videos courtesy of ATHLEAN-X</p>
  </footer>

  <script src="data.js"></script>
  <script src="app.js"></script>
</body>
</html>`,

            'style.css': `:root {
  --bg: #f2f2f2;
  --fg: #333;
  --card: #fff;
  --header-bg: #1d4e89;
  --header-fg: #fff;
  --accent: #287bce;
  --border: #ddd;
  --shadow: rgba(0,0,0,0.1);
}

body {
  font-family: 'Roboto', sans-serif;
  background: var(--bg);
  margin: 0;
  color: var(--fg);
  transition: all 0.3s ease;
  line-height: 1.4;
}

body.dark {
  --bg: #1a1a1a;
  --fg: #e0e0e0;
  --card: #2d2d2d;
  --header-bg: #0d1117;
  --accent: #4a90e2;
  --border: #444;
  --shadow: rgba(0,0,0,0.3);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--header-bg);
  color: var(--header-fg);
  padding: 16px 20px;
  box-shadow: 0 2px 8px var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.version {
  opacity: 0.7;
  font-size: 12px;
  background: rgba(255,255,255,0.1);
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
}

#darkModeToggle {
  background: transparent;
  border: none;
  color: var(--header-fg);
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.3s ease;
}

#darkModeToggle:hover {
  background: rgba(255,255,255,0.1);
}

h1 { 
  margin: 0; 
  font-weight: 500;
  font-size: 24px;
}

#today {
  text-align: center;
  margin: 24px auto;
  padding: 0 20px;
}

#today h2 {
  font-weight: 400;
  margin-bottom: 16px;
  font-size: 20px;
}

.today-controls {
  display: inline-flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

#today button {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px var(--shadow);
}

#today button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px var(--shadow);
}

#copyLinkBtn {
  padding: 12px 16px !important;
}

#schedule, #calendar-section {
  max-width: 900px;
  margin: 24px auto 40px;
  padding: 0 20px;
}

.day, #calendar-section {
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--shadow);
  margin-bottom: 24px;
  border: 1px solid var(--border);
}

.day-header {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 16px 20px;
  font-weight: 600;
  font-size: 18px;
  color: #495057;
}

body.dark .day-header {
  background: linear-gradient(135deg, #3d3d3d, #4a4a4a);
  color: var(--fg);
}

.exercises {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  padding: 20px;
}

.exercise {
  background: var(--card);
  border-radius: 8px;
  display: flex;
  padding: 12px;
  align-items: center;
  box-shadow: 0 2px 6px var(--shadow);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.exercise:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow);
}

.thumbBtn {
  width: 48px;
  height: 36px;
  background-size: cover;
  background-position: center;
  border: none;
  border-radius: 6px;
  margin-right: 12px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px var(--shadow);
}

.thumbBtn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px var(--shadow);
}

.content {
  flex: 1;
  min-width: 0;
}

.content h4 {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 600;
  color: var(--fg);
}

.details {
  margin: 0 0 6px;
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
}

.cues {
  margin: 0;
  font-size: 12px;
  color: #666;
  line-height: 1.3;
}

body.dark .cues {
  color: #aaa;
}

/* Calendar Styles */
#calendar-section h2 {
  text-align: center;
  margin: 0 0 20px;
  padding: 20px 20px 0;
  font-weight: 500;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 0 16px;
  margin-bottom: 8px;
}

.day-label {
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  color: #666;
  padding: 8px 4px;
}

body.dark .day-label {
  color: #aaa;
}

#calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 0 16px 16px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  background: var(--card);
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 14px;
}

.calendar-day:hover {
  background: var(--accent);
  color: #fff;
  transform: scale(1.05);
}

.calendar-day.done {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 2px 6px var(--shadow);
}

#completed-count {
  padding: 0 20px 20px;
  font-weight: 600;
  text-align: center;
  color: var(--accent);
  font-size: 16px;
}

footer {
  background: var(--header-bg);
  color: var(--header-fg);
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

footer p {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  header {
    padding: 12px 16px;
  }
  
  h1 {
    font-size: 20px;
  }
  
  .exercises {
    grid-template-columns: 1fr;
    padding: 16px;
  }
  
  #schedule, #calendar-section {
    margin: 16px auto 24px;
    padding: 0 16px;
  }
  
  .today-controls {
    gap: 8px;
  }
  
  #today button {
    padding: 10px 16px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .exercise {
    padding: 10px;
  }
  
  .thumbBtn {
    width: 40px;
    height: 30px;
    margin-right: 8px;
  }
  
  .content h4 {
    font-size: 14px;
  }
  
  .details, .cues {
    font-size: 11px;
  }
}`,

            'data.js': `// data.js - Complete workout data with verified ATHLEAN-X videos
const workoutDays = [
  {
    day: 'Monday', name: 'Upper Body Push', desc: 'Chest, Shoulders, Triceps',
    exercises: [
      { 
        name: 'Dumbbell Bench Press', 
        sets: '4×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/vthMCtgVtFw', 
        cues: 'Elbows 45° • Neutral spine • Inhale lowering • Exhale pressing up'
      },
      { 
        name: 'Dumbbell Shoulder Press', 
        sets: '3×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/qEwKCR5JCog', 
        cues: 'Core tight • No head thrust • Inhale start • Exhale overhead'
      },
      { 
        name: 'Incline Dumbbell Press', 
        sets: '3×10–12', 
        rpe: 'RPE8', 
        weight: '15lb', 
        video: 'https://youtu.be/8iPEnn-ltC8', 
        cues: 'Shoulders down • Elbows 45° • Inhale down • Exhale press'
      },
      { 
        name: 'Dumbbell Lateral Raises', 
        sets: '3×12–15', 
        rpe: 'RPE8', 
        weight: '10lb', 
        video: 'https://youtu.be/3VcKaXpzqRo', 
        cues: 'No swing • To shoulder level • Inhale down • Exhale lift sides'
      },
      { 
        name: 'Close-Grip Push-ups', 
        sets: '3×12–15', 
        rpe: 'RPE7', 
        weight: 'BW', 
        video: 'https://youtu.be/trMI8kc1O28', 
        cues: 'Body straight • Elbows 45° • Inhale down • Exhale push away'
      }
    ]
  },
  {
    day: 'Tuesday', name: 'Lower Body', desc: 'Quads, Glutes, Hamstrings, Core',
    exercises: [
      { 
        name: 'Goblet Squats', 
        sets: '4×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/MeIiIdhvXT4', 
        cues: 'Knees track toes • Chest up • Inhale descend • Exhale drive up'
      },
      { 
        name: 'Romanian Deadlift', 
        sets: '3×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/jEy_czb3RKA', 
        cues: 'Hip hinge • Back straight • Inhale lower • Exhale hip thrust'
      },
      { 
        name: 'Step-ups (bench)', 
        sets: '3×10–12', 
        rpe: 'RPE8', 
        weight: '15lb', 
        video: 'https://youtu.be/WMle3bzFgUU', 
        cues: 'Lead leg drive • Torso upright • Inhale step • Exhale drive heel'
      },
      { 
        name: 'Glute Bridges', 
        sets: '3×12–15', 
        rpe: 'RPE8', 
        weight: '15lb', 
        video: 'https://youtu.be/OUgsJ8-Vi0E', 
        cues: 'Hips level • Feet planted • Inhale down • Exhale squeeze glutes'
      },
      { 
        name: 'Plank Hold', 
        sets: '3×45sec', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/ASdvN_XEl_c', 
        cues: 'Body straight • Neutral neck • Steady breathing • Tight core'
      }
    ]
  },
  {
    day: 'Wednesday', name: 'Upper Body Pull', desc: 'Back & Biceps',
    exercises: [
      { 
        name: 'Dumbbell Bent-over Rows', 
        sets: '4×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/roCP6wCXPqo', 
        cues: 'Flat back • Retract scapula • Inhale lower • Exhale pull elbow'
      },
      { 
        name: 'One-Arm Dumbbell Rows', 
        sets: '3×10–12', 
        rpe: 'RPE8', 
        weight: '15lb', 
        video: 'https://youtu.be/XZr497sya2k', 
        cues: 'Torso square • No shoulder shrug • Inhale down • Exhale row'
      },
      { 
        name: 'Dumbbell Curls', 
        sets: '3×12–15', 
        rpe: 'RPE8', 
        weight: '10lb', 
        video: 'https://youtu.be/ykJmrZ5v0Oo', 
        cues: 'Elbows locked • No body swing • Inhale down • Exhale curl'
      },
      { 
        name: 'Reverse Flys', 
        sets: '3×12–15', 
        rpe: 'RPE8', 
        weight: '10lb', 
        video: 'https://youtu.be/ea7qmaN9nDk', 
        cues: 'Slight elbow bend • Controlled arc • Inhale down • Exhale lift'
      },
      { 
        name: 'Pull-ups (Assisted)', 
        sets: '3×max', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/eGo4IYlbE5g', 
        cues: 'Strict form • Scapula down • Inhale lower • Exhale pull chin'
      }
    ]
  },
  {
    day: 'Thursday', name: 'Cardio + Core', desc: 'Cardio & Core Strength',
    exercises: [
      { 
        name: 'Outdoor Jog/Run', 
        sets: '25–30min', 
        rpe: 'Moderate', 
        weight: '', 
        video: 'https://youtu.be/kVnyY17VS9Y', 
        cues: 'Midfoot strike • Cadence 180 • Nose inhale • Mouth exhale'
      },
      { 
        name: 'Hanging Knee Raises', 
        sets: '3×12–15', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/hdng3Nm1x_E', 
        cues: 'No swing • Tuck pelvis • Inhale lower • Exhale raise knees'
      },
      { 
        name: 'Russian Twists', 
        sets: '3×15–20/side', 
        rpe: 'RPE8', 
        weight: '5–10lb', 
        video: 'https://youtu.be/wkD8rjkodUI', 
        cues: 'Chest up • Feet stable • Inhale center • Exhale rotate'
      },
      { 
        name: 'Side Planks', 
        sets: '3×30sec ea', 
        rpe: 'BW', 
        weight: '', 
        video: 'https://youtu.be/K2VljzCC16g', 
        cues: 'Hips stacked • Body straight • Deep inhale • Exhale hold'
      }
    ]
  },
  {
    day: 'Friday', name: 'Full Body Strength', desc: 'Total Body Conditioning',
    exercises: [
      { 
        name: 'Dumbbell Deadlifts', 
        sets: '4×6–8', 
        rpe: 'RPE8', 
        weight: '15lb', 
        video: 'https://youtu.be/lJ3QwaXNJfw', 
        cues: 'Neutral spine • Hip hinge • Inhale lower • Exhale stand tall'
      },
      { 
        name: 'Dumbbell Chest Press', 
        sets: '3×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/vthMCtgVtFw', 
        cues: 'Stable base • Elbows 45° • Inhale down • Exhale press'
      },
      { 
        name: 'Goblet Squats', 
        sets: '3×8–10', 
        rpe: 'RPE7', 
        weight: '15lb', 
        video: 'https://youtu.be/MeIiIdhvXT4', 
        cues: 'Deep squat • Knees out • Inhale down • Exhale drive'
      },
      { 
        name: 'Push-ups', 
        sets: '3×15', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/IODxDxX7oi4', 
        cues: 'Plank position • Full range • Inhale down • Exhale up'
      }
    ]
  },
  {
    day: 'Saturday', name: 'Cardio + Conditioning', desc: 'HIIT & Conditioning',
    exercises: [
      { 
        name: 'Sprint Intervals', 
        sets: '1′ sprint/2′ rest×6', 
        rpe: '80–90%', 
        weight: '', 
        video: 'https://youtu.be/9YUCry7eML4', 
        cues: 'Maintain form • Quick turnover • Inhale prep • Exhale sprint'
      },
      { 
        name: 'Jump Rope', 
        sets: '3×1min', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/1BZM2Vre5oc', 
        cues: 'Light bounce • Wrist turn • Rhythmic breathing • Stay relaxed'
      },
      { 
        name: 'Burpees', 
        sets: '3×12', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/TU8QYVW0gDU', 
        cues: 'Plank form • Full rep • Inhale squat • Exhale jump'
      },
      { 
        name: 'Mountain Climbers', 
        sets: '3×30sec', 
        rpe: 'RPE8', 
        weight: 'BW', 
        video: 'https://youtu.be/nmwgirgXLYM', 
        cues: 'Flat hips • Quick drive • Steady pace • Controlled breathing'
      }
    ]
  },
  {
    day: 'Sunday', name: 'Mobility + Recovery', desc: 'Active Recovery & Stretching',
    exercises: [
      { 
        name: 'Light Walk/Yoga', 
        sets: '20–30min', 
        rpe: 'Recovery', 
        weight: '', 
        video: 'https://youtu.be/v7AYKMP6rOE', 
        cues: 'Slow pace • Mindful movement • Deep inhale • Long exhale'
      },
      { 
        name: 'Mobility Flow', 
        sets: '15min', 
        rpe: 'Joint focus', 
        weight: '', 
        video: 'https://youtu.be/FSSDLDhbacc', 
        cues: 'Full range • No bounce • Inhale prepare • Exhale deepen'
      },
      { 
        name: 'Core Circuit (optional)', 
        sets: '2 rounds', 
        rpe: 'Light', 
        weight: '', 
        video: 'https://youtu.be/ASdvN_XEl_c', 
        cues: 'Steady pace • Perfect form • Inhale brace • Exhale engage'
      }
    ]
  }
];`,

            'app.js': `// app.js - Complete application functionality
function getThumbnail(url) {
  const id = url.includes('youtu.be/') ? url.split('youtu.be/')[1] : url.split('v=')[1];
  if (!id) return '';
  return \`https://img.youtube.com/vi/\${id.split(/[&?]/)[0]}/default.jpg\`;
}

function renderSchedule() {
  const schedule = document.getElementById('schedule');
  if (!schedule) return;
  
  schedule.innerHTML = '';
  
  workoutDays.forEach((wd, dayIndex) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.id = \`day-\${dayIndex}\`;
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'day-header';
    headerDiv.textContent = \`\${wd.day} – \${wd.name} (\${wd.desc})\`;
    dayDiv.appendChild(headerDiv);
    
    const exercisesContainer = document.createElement('div');
    exercisesContainer.className = 'exercises';
    
    wd.exercises.forEach((ex, exIndex) => {
      const exDiv = document.createElement('div');
      exDiv.className = 'exercise';
      
      const thumbnailBtn = document.createElement('button');
      thumbnailBtn.className = 'thumbBtn';
      thumbnailBtn.style.backgroundImage = \`url('\${getThumbnail(ex.video)}')\`;
      thumbnailBtn.onclick = () => window.open(ex.video, '_blank');
      thumbnailBtn.setAttribute('aria-label', \`Watch \${ex.name} video\`);
      
      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';
      
      const nameH4 = document.createElement('h4');
      nameH4.textContent = ex.name;
      
      const detailsP = document.createElement('p');
      detailsP.className = 'details';
      detailsP.textContent = \`\${ex.sets} | \${ex.rpe}\${ex.weight ? ' | ' + ex.weight : ''}\`;
      
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
    
    const storageKey = \`workout-\${year}-\${month}-\${day}\`;
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
    countEl.textContent = \`Workouts completed this month: \${completedDays}\`;
  }
}

function displayTodaysWorkout() {
  const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
  const todaysWorkout = workoutDays[todayIndex];
  
  const todayTextEl = document.getElementById('todayText');
  if (todayTextEl) {
    todayTextEl.textContent = \`Today: \${todaysWorkout.day} – \${todaysWorkout.name}\`;
  }
  
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.onclick = () => {
      const todaySection = document.getElementById(\`day-\${todayIndex}\`);
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
}`,

            'README.md': `# ExerciseTracker Web - Complete Project Files

This is a comprehensive fitness tracking website with the following features:

## Features
- **Workout Schedule**: 7-day weekly routine with detailed exercises
- **Video Thumbnails**: Clickable thumbnails that open YouTube exercise videos
- **Form Cues**: Breathing, start, and finish instructions for each exercise
- **Workout Calendar**: Track completed workouts with localStorage persistence
- **Dark Mode**: Toggle between light and dark themes
- **Version Badge**: Track code updates (v1.3.0)
- **Copy Link**: Share today's workout easily
- **Responsive Design**: Works on desktop and mobile

## Files Included
1. **index.html** - Main HTML structure
2. **style.css** - All styling and themes
3. **data.js** - Workout data with verified ATHLEAN-X videos
4. **app.js** - Application functionality and interactivity

## Installation
1. Download all files to your project folder
2. Upload to GitHub repository
3. Enable GitHub Pages (Settings → Pages → Branch: main)
4. Access at: https://your-username.github.io/your-repo-name/

## Video Sources
All exercise videos are sourced from ATHLEAN-X channel on YouTube for consistent, professional instruction.

## Browser Support
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Version History
- v1.3.0: Added working calendar, dark mode, verified video links
- v1.2.0: Enhanced thumbnails, version badge, copy link feature
- v1.1.0: Initial modular structure with responsive design`
        };

        this.init();
    }

    init() {
        this.setupDownloadButton();
    }

    setupDownloadButton() {
        const downloadBtn = document.getElementById('downloadBtn');
        const successMessage = document.getElementById('successMessage');

        if (!downloadBtn) return;

        downloadBtn.addEventListener('click', async () => {
            try {
                // Add loading state
                downloadBtn.classList.add('loading');
                downloadBtn.disabled = true;

                // Small delay to show loading state
                await new Promise(resolve => setTimeout(resolve, 500));

                // Create ZIP file
                const zip = new JSZip();

                // Add all files to ZIP
                Object.entries(this.files).forEach(([filename, content]) => {
                    zip.file(filename, content);
                });

                // Generate ZIP file
                const zipBlob = await zip.generateAsync({
                    type: 'blob',
                    compression: 'DEFLATE',
                    compressionOptions: {
                        level: 6
                    }
                });

                // Create download link
                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(zipBlob);
                downloadLink.download = 'ExerciseTracker-Web-v1.3.0.zip';
                
                // Trigger download
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);

                // Cleanup blob URL
                URL.revokeObjectURL(downloadLink.href);

                // Show success message with clear visibility
                successMessage.classList.remove('hidden');
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Hide success message after 7 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 7000);

                console.log('ExerciseTracker Web files downloaded successfully');

            } catch (error) {
                console.error('Download failed:', error);
                alert('Download failed. Please try again.');
            } finally {
                // Remove loading state
                downloadBtn.classList.remove('loading');
                downloadBtn.disabled = false;
            }
        });
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new FileDownloader();
});