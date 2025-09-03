// Premium Exercise Tracker Application
class PremiumFitnessTracker {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.isLoggedIn = false;
        this.loginCredentials = { username: 'user', password: 'fitness123' };
        
        // Workout data
        this.workoutDays = [
            {
                day: "Monday", 
                name: "Upper Body Push", 
                desc: "Chest, Shoulders, Triceps",
                exercises: [
                    { 
                        name: "Dumbbell Bench Press", 
                        sets: "4×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/vthMCtgVtFw", 
                        cues: "Elbows 45° • Neutral spine • Inhale lowering • Exhale pressing"
                    },
                    { 
                        name: "Dumbbell Shoulder Press", 
                        sets: "3×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/qEwKCR5JCog", 
                        cues: "Core tight • No head thrust • Inhale start • Exhale overhead"
                    },
                    { 
                        name: "Incline Dumbbell Press", 
                        sets: "3×10–12", 
                        rpe: "RPE8", 
                        weight: "15lb", 
                        video: "https://youtu.be/8iPEnn-ltC8", 
                        cues: "Shoulders down • Elbows 45° • Inhale down • Exhale press"
                    },
                    { 
                        name: "Dumbbell Lateral Raises", 
                        sets: "3×12–15", 
                        rpe: "RPE8", 
                        weight: "10lb", 
                        video: "https://youtu.be/3VcKaXpzqRo", 
                        cues: "No swing • To shoulder level • Inhale down • Exhale lift"
                    },
                    { 
                        name: "Close-Grip Push-ups", 
                        sets: "3×12–15", 
                        rpe: "RPE7", 
                        weight: "BW", 
                        video: "https://youtu.be/trMI8kc1O28", 
                        cues: "Body straight • Elbows 45° • Inhale down • Exhale push"
                    }
                ]
            },
            {
                day: "Tuesday", 
                name: "Lower Body", 
                desc: "Quads, Glutes, Hamstrings, Core",
                exercises: [
                    { 
                        name: "Goblet Squats", 
                        sets: "4×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/MeIiIdhvXT4", 
                        cues: "Knees track toes • Chest up • Inhale descend • Exhale drive"
                    },
                    { 
                        name: "Romanian Deadlift", 
                        sets: "3×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/jEy_czb3RKA", 
                        cues: "Hip hinge • Back straight • Inhale lower • Exhale thrust"
                    },
                    { 
                        name: "Step-ups (bench)", 
                        sets: "3×10–12", 
                        rpe: "RPE8", 
                        weight: "15lb", 
                        video: "https://youtu.be/WMle3bzFgUU", 
                        cues: "Lead leg drive • Torso upright • Inhale step • Exhale drive"
                    },
                    { 
                        name: "Glute Bridges", 
                        sets: "3×12–15", 
                        rpe: "RPE8", 
                        weight: "15lb", 
                        video: "https://youtu.be/OUgsJ8-Vi0E", 
                        cues: "Hips level • Feet planted • Inhale down • Exhale squeeze"
                    },
                    { 
                        name: "Plank Hold", 
                        sets: "3×45sec", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/ASdvN_XEl_c", 
                        cues: "Body straight • Neutral neck • Steady breathing • Tight core"
                    }
                ]
            },
            {
                day: "Wednesday", 
                name: "Upper Body Pull", 
                desc: "Back & Biceps",
                exercises: [
                    { 
                        name: "Dumbbell Bent-over Rows", 
                        sets: "4×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/roCP6wCXPqo", 
                        cues: "Flat back • Retract scapula • Inhale lower • Exhale pull"
                    },
                    { 
                        name: "One-Arm Dumbbell Rows", 
                        sets: "3×10–12", 
                        rpe: "RPE8", 
                        weight: "15lb", 
                        video: "https://youtu.be/XZr497sya2k", 
                        cues: "Torso square • No shoulder shrug • Inhale down • Exhale row"
                    },
                    { 
                        name: "Dumbbell Curls", 
                        sets: "3×12–15", 
                        rpe: "RPE8", 
                        weight: "10lb", 
                        video: "https://youtu.be/ykJmrZ5v0Oo", 
                        cues: "Elbows locked • No body swing • Inhale down • Exhale curl"
                    },
                    { 
                        name: "Reverse Flys", 
                        sets: "3×12–15", 
                        rpe: "RPE8", 
                        weight: "10lb", 
                        video: "https://youtu.be/ea7qmaN9nDk", 
                        cues: "Slight elbow bend • Controlled arc • Inhale down • Exhale lift"
                    },
                    { 
                        name: "Pull-ups (Assisted)", 
                        sets: "3×max", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/eGo4IYlbE5g", 
                        cues: "Strict form • Scapula down • Inhale lower • Exhale pull"
                    }
                ]
            },
            {
                day: "Thursday", 
                name: "Cardio + Core", 
                desc: "Cardio & Core Strength",
                exercises: [
                    { 
                        name: "Outdoor Jog/Run", 
                        sets: "25–30min", 
                        rpe: "Moderate", 
                        weight: "", 
                        video: "https://youtu.be/kVnyY17VS9Y", 
                        cues: "Midfoot strike • Cadence 180 • Nose inhale • Mouth exhale"
                    },
                    { 
                        name: "Hanging Knee Raises", 
                        sets: "3×12–15", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/hdng3Nm1x_E", 
                        cues: "No swing • Tuck pelvis • Inhale lower • Exhale raise"
                    },
                    { 
                        name: "Russian Twists", 
                        sets: "3×15–20/side", 
                        rpe: "RPE8", 
                        weight: "5–10lb", 
                        video: "https://youtu.be/wkD8rjkodUI", 
                        cues: "Chest up • Feet stable • Inhale center • Exhale rotate"
                    },
                    { 
                        name: "Side Planks", 
                        sets: "3×30sec ea", 
                        rpe: "BW", 
                        weight: "", 
                        video: "https://youtu.be/K2VljzCC16g", 
                        cues: "Hips stacked • Body straight • Deep inhale • Exhale hold"
                    }
                ]
            },
            {
                day: "Friday", 
                name: "Full Body Strength", 
                desc: "Total Body Conditioning",
                exercises: [
                    { 
                        name: "Dumbbell Deadlifts", 
                        sets: "4×6–8", 
                        rpe: "RPE8", 
                        weight: "15lb", 
                        video: "https://youtu.be/lJ3QwaXNJfw", 
                        cues: "Neutral spine • Hip hinge • Inhale lower • Exhale stand"
                    },
                    { 
                        name: "Dumbbell Chest Press", 
                        sets: "3×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/vthMCtgVtFw", 
                        cues: "Stable base • Elbows 45° • Inhale down • Exhale press"
                    },
                    { 
                        name: "Goblet Squats", 
                        sets: "3×8–10", 
                        rpe: "RPE7", 
                        weight: "15lb", 
                        video: "https://youtu.be/MeIiIdhvXT4", 
                        cues: "Deep squat • Knees out • Inhale down • Exhale drive"
                    },
                    { 
                        name: "Push-ups", 
                        sets: "3×15", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/IODxDxX7oi4", 
                        cues: "Plank position • Full range • Inhale down • Exhale up"
                    }
                ]
            },
            {
                day: "Saturday", 
                name: "Cardio + Conditioning", 
                desc: "HIIT & Conditioning",
                exercises: [
                    { 
                        name: "Sprint Intervals", 
                        sets: "1′ sprint/2′ rest×6", 
                        rpe: "80–90%", 
                        weight: "", 
                        video: "https://youtu.be/9YUCry7eML4", 
                        cues: "Maintain form • Quick turnover • Inhale prep • Exhale sprint"
                    },
                    { 
                        name: "Jump Rope", 
                        sets: "3×1min", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/1BZM2Vre5oc", 
                        cues: "Light bounce • Wrist turn • Rhythmic breathing • Stay relaxed"
                    },
                    { 
                        name: "Burpees", 
                        sets: "3×12", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/TU8QYVW0gDU", 
                        cues: "Plank form • Full rep • Inhale squat • Exhale jump"
                    },
                    { 
                        name: "Mountain Climbers", 
                        sets: "3×30sec", 
                        rpe: "RPE8", 
                        weight: "BW", 
                        video: "https://youtu.be/nmwgirgXLYM", 
                        cues: "Flat hips • Quick drive • Steady pace • Controlled breathing"
                    }
                ]
            },
            {
                day: "Sunday", 
                name: "Mobility + Recovery", 
                desc: "Active Recovery & Stretching",
                exercises: [
                    { 
                        name: "Light Walk/Yoga", 
                        sets: "20–30min", 
                        rpe: "Recovery", 
                        weight: "", 
                        video: "https://youtu.be/v7AYKMP6rOE", 
                        cues: "Slow pace • Mindful movement • Deep inhale • Long exhale"
                    },
                    { 
                        name: "Mobility Flow", 
                        sets: "15min", 
                        rpe: "Joint focus", 
                        weight: "", 
                        video: "https://youtu.be/FSSDLDhbacc", 
                        cues: "Full range • No bounce • Inhale prepare • Exhale deepen"
                    },
                    { 
                        name: "Core Circuit (optional)", 
                        sets: "2 rounds", 
                        rpe: "Light", 
                        weight: "", 
                        video: "https://youtu.be/ASdvN_XEl_c", 
                        cues: "Steady pace • Perfect form • Inhale brace • Exhale engage"
                    }
                ]
            }
        ];
        
        this.monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        this.init();
    }
    
    init() {
        this.checkLoginStatus();
        this.renderTodaysWorkout();
        this.renderExerciseSchedule();
        this.setupEventListeners();
        this.loadTheme();
        
        // Only render calendar if logged in
        if (this.isLoggedIn) {
            this.renderCalendar();
        }
    }
    
    checkLoginStatus() {
        // Check session storage for login status
        this.isLoggedIn = sessionStorage.getItem('fitnessTrackerLoggedIn') === 'true';
    }
    
    setupEventListeners() {
        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleDarkMode();
            });
        }
        
        // Copy link button
        const copyLinkBtn = document.getElementById('copyLinkBtn');
        if (copyLinkBtn) {
            copyLinkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.copyLink();
            });
        }
        
        // Start workout button
        const startWorkoutBtn = document.getElementById('startWorkoutBtn');
        if (startWorkoutBtn) {
            startWorkoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToTodaysWorkout();
            });
        }
        
        // Calendar navigation
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const yearSelector = document.getElementById('yearSelector');
        
        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isLoggedIn) this.previousMonth();
            });
        }
        
        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isLoggedIn) this.nextMonth();
            });
        }
        
        if (yearSelector) {
            yearSelector.addEventListener('change', (e) => {
                if (this.isLoggedIn) {
                    this.currentYear = parseInt(e.target.value);
                    this.renderCalendar();
                }
            });
        }
        
        // Modal event listeners
        const closeModalBtn = document.getElementById('closeModal');
        const modalOverlay = document.getElementById('modalOverlay');
        const loginForm = document.getElementById('loginForm');
        
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideModal();
            });
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hideModal();
            });
        }
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.handleLogin();
            });
        }
        
        // Calendar section click - show login if not authenticated
        const calendarSection = document.querySelector('.calendar-section');
        if (calendarSection) {
            calendarSection.addEventListener('click', (e) => {
                if (!this.isLoggedIn && !e.target.closest('#loginModal')) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.showLoginModal();
                }
            });
        }
    }
    
    renderTodaysWorkout() {
        const today = new Date();
        const dayIndex = (today.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
        const todaysWorkout = this.workoutDays[dayIndex];
        
        const titleElement = document.getElementById('todayTitle');
        const descElement = document.getElementById('todayDescription');
        
        if (titleElement && descElement) {
            titleElement.textContent = `Today: ${todaysWorkout.name}`;
            descElement.textContent = `${todaysWorkout.day} • ${todaysWorkout.desc}`;
        }
    }
    
    renderExerciseSchedule() {
        const scheduleContainer = document.getElementById('exerciseSchedule');
        if (!scheduleContainer) return;
        
        scheduleContainer.innerHTML = '';
        
        this.workoutDays.forEach((workout, index) => {
            const dayElement = document.createElement('div');
            dayElement.className = 'workout-day';
            dayElement.id = `workout-day-${index}`;
            
            const workoutHeader = document.createElement('div');
            workoutHeader.className = 'workout-header';
            
            const dayName = document.createElement('h3');
            dayName.className = 'workout-day-name';
            dayName.textContent = `${workout.day} - ${workout.name}`;
            
            const dayDesc = document.createElement('p');
            dayDesc.className = 'workout-description';
            dayDesc.textContent = workout.desc;
            
            workoutHeader.appendChild(dayName);
            workoutHeader.appendChild(dayDesc);
            
            const exerciseGrid = document.createElement('div');
            exerciseGrid.className = 'exercise-grid';
            
            workout.exercises.forEach(exercise => {
                const exerciseCard = this.createExerciseCardElement(exercise);
                exerciseGrid.appendChild(exerciseCard);
            });
            
            dayElement.appendChild(workoutHeader);
            dayElement.appendChild(exerciseGrid);
            scheduleContainer.appendChild(dayElement);
        });
    }
    
    createExerciseCardElement(exercise) {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        const thumbnail = document.createElement('div');
        thumbnail.className = 'exercise-thumbnail';
        
        const thumbnailUrl = this.getYouTubeThumbnail(exercise.video);
        if (thumbnailUrl) {
            const img = document.createElement('img');
            img.src = thumbnailUrl;
            img.alt = `${exercise.name} thumbnail`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            thumbnail.appendChild(img);
        } else {
            thumbnail.textContent = '🎬';
            thumbnail.style.display = 'flex';
            thumbnail.style.alignItems = 'center';
            thumbnail.style.justifyContent = 'center';
            thumbnail.style.fontSize = '24px';
        }
        
        // Add click handler for video
        thumbnail.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(exercise.video, '_blank');
        });
        
        const content = document.createElement('div');
        content.className = 'exercise-content';
        
        const name = document.createElement('h4');
        name.className = 'exercise-name';
        name.textContent = exercise.name;
        
        const details = document.createElement('p');
        details.className = 'exercise-details';
        const weightText = exercise.weight ? ` | ${exercise.weight}` : '';
        details.textContent = `${exercise.sets} | ${exercise.rpe}${weightText}`;
        
        const cues = document.createElement('p');
        cues.className = 'exercise-cues';
        cues.textContent = exercise.cues;
        
        content.appendChild(name);
        content.appendChild(details);
        content.appendChild(cues);
        
        card.appendChild(thumbnail);
        card.appendChild(content);
        
        return card;
    }
    
    getYouTubeThumbnail(url) {
        try {
            let videoId = '';
            if (url.includes('youtu.be/')) {
                videoId = url.split('youtu.be/')[1].split(/[&#?]/)[0];
            } else if (url.includes('youtube.com/watch?v=')) {
                videoId = url.split('v=')[1].split(/[&#]/)[0];
            }
            
            return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : null;
        } catch (error) {
            console.error('Error generating thumbnail:', error);
            return null;
        }
    }
    
    scrollToTodaysWorkout() {
        const today = new Date();
        const dayIndex = (today.getDay() + 6) % 7;
        const workoutElement = document.getElementById(`workout-day-${dayIndex}`);
        
        if (workoutElement) {
            workoutElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Add a subtle highlight effect
            workoutElement.style.transform = 'scale(1.02)';
            workoutElement.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
                workoutElement.style.transform = 'scale(1)';
            }, 1000);
        }
    }
    
    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.classList.remove('hidden');
            
            // Focus on username field after a brief delay
            setTimeout(() => {
                const usernameField = document.getElementById('username');
                if (usernameField) {
                    usernameField.focus();
                }
            }, 100);
        }
    }
    
    hideModal() {
        const modal = document.getElementById('loginModal');
        const errorElement = document.getElementById('loginError');
        
        if (modal) {
            modal.classList.add('hidden');
        }
        
        if (errorElement) {
            errorElement.classList.add('hidden');
        }
        
        // Clear form fields
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        
        if (usernameField) usernameField.value = '';
        if (passwordField) passwordField.value = '';
    }
    
    handleLogin() {
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        const errorElement = document.getElementById('loginError');
        
        const username = usernameField?.value || '';
        const password = passwordField?.value || '';
        
        if (username === this.loginCredentials.username && password === this.loginCredentials.password) {
            this.isLoggedIn = true;
            sessionStorage.setItem('fitnessTrackerLoggedIn', 'true');
            this.hideModal();
            this.renderCalendar();
            this.showSuccessToast('Successfully logged in to premium calendar!');
        } else {
            if (errorElement) {
                errorElement.classList.remove('hidden');
            }
        }
    }
    
    renderCalendar() {
        if (!this.isLoggedIn) return;
        
        const calendarGrid = document.getElementById('calendarGrid');
        const monthYearElement = document.getElementById('currentMonthYear');
        const yearSelector = document.getElementById('yearSelector');
        
        if (!calendarGrid || !monthYearElement) return;
        
        // Update month/year display
        monthYearElement.textContent = `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
        
        // Update year selector
        if (yearSelector) {
            yearSelector.value = this.currentYear.toString();
        }
        
        // Clear calendar
        calendarGrid.innerHTML = '';
        
        // Get first day of month and number of days
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        // Add empty cells for days before first day of month
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            dayElement.dataset.day = day;
            
            const dateKey = `${this.currentYear}-${this.currentMonth}-${day}`;
            if (this.isWorkoutCompleted(dateKey)) {
                dayElement.classList.add('completed');
            }
            
            dayElement.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleWorkoutCompletion(dateKey, dayElement);
            });
            
            calendarGrid.appendChild(dayElement);
        }
        
        this.updateCalendarStats();
    }
    
    isWorkoutCompleted(dateKey) {
        return localStorage.getItem(`workout-${dateKey}`) === 'completed';
    }
    
    toggleWorkoutCompletion(dateKey, dayElement) {
        const isCompleted = dayElement.classList.toggle('completed');
        
        if (isCompleted) {
            localStorage.setItem(`workout-${dateKey}`, 'completed');
        } else {
            localStorage.removeItem(`workout-${dateKey}`);
        }
        
        this.updateCalendarStats();
    }
    
    updateCalendarStats() {
        const completedElement = document.getElementById('completedCount');
        const streakElement = document.getElementById('currentStreak');
        
        if (!completedElement || !streakElement) return;
        
        // Count completed workouts this month
        let completedCount = 0;
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${this.currentYear}-${this.currentMonth}-${day}`;
            if (this.isWorkoutCompleted(dateKey)) {
                completedCount++;
            }
        }
        
        // Calculate current streak
        const currentStreak = this.calculateCurrentStreak();
        
        completedElement.textContent = completedCount;
        streakElement.textContent = currentStreak;
    }
    
    calculateCurrentStreak() {
        let streak = 0;
        const today = new Date();
        let checkDate = new Date(today);
        
        // Go backwards from today to find the streak
        while (true) {
            const year = checkDate.getFullYear();
            const month = checkDate.getMonth();
            const day = checkDate.getDate();
            const dateKey = `${year}-${month}-${day}`;
            
            if (this.isWorkoutCompleted(dateKey)) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
            
            // Prevent infinite loop
            if (streak > 365) break;
        }
        
        return streak;
    }
    
    previousMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.renderCalendar();
    }
    
    nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.renderCalendar();
    }
    
    toggleDarkMode() {
        const body = document.body;
        const darkModeToggle = document.getElementById('darkModeToggle');
        
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (darkModeToggle) {
            const icon = darkModeToggle.querySelector('.icon');
            if (icon) {
                icon.textContent = isDarkMode ? '☀️' : '🌙';
            }
        }
        
        // Save theme preference
        localStorage.setItem('fitnessTrackerTheme', isDarkMode ? 'dark' : 'light');
        
        this.showSuccessToast(isDarkMode ? 'Dark mode enabled' : 'Light mode enabled');
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem('fitnessTrackerTheme');
        const body = document.body;
        const darkModeToggle = document.getElementById('darkModeToggle');
        
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            if (darkModeToggle) {
                const icon = darkModeToggle.querySelector('.icon');
                if (icon) {
                    icon.textContent = '☀️';
                }
            }
        }
    }
    
    async copyLink() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            this.showSuccessToast('Link copied to clipboard!');
        } catch (error) {
            console.error('Failed to copy link:', error);
            // Fallback for older browsers
            this.fallbackCopyToClipboard(window.location.href);
        }
    }
    
    fallbackCopyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showSuccessToast('Link copied to clipboard!');
        } catch (error) {
            console.error('Fallback copy failed:', error);
        }
        
        document.body.removeChild(textArea);
    }
    
    showSuccessToast(message) {
        const toast = document.getElementById('successToast');
        const messageElement = toast?.querySelector('.toast-message');
        
        if (toast && messageElement) {
            messageElement.textContent = message;
            toast.classList.remove('hidden');
            
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PremiumFitnessTracker();
});

// Handle any errors gracefully
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});