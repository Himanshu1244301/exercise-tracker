// Premium FitTracker Pro Application
class PremiumFitnessTracker {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.isLoggedIn = sessionStorage.getItem('fitTracker_loggedIn') === 'true';
        this.loginCredentials = { username: 'user', password: 'fitness123' };

        // Convert workoutData to array format for easier processing
        this.workoutDays = Object.keys(workoutData).map(day => ({
            day: day,
            name: workoutData[day].name,
            desc: workoutData[day].desc,
            duration: workoutData[day].duration,
            exercises: workoutData[day].exercises
        }));

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.displayTodaysWorkout();
        this.renderWorkoutSchedule();
        this.renderCalendar();
        this.setupDarkMode();
        this.checkLoginStatus();
    }

    setupEventListeners() {
        // Dark mode toggle
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Copy link functionality
        document.getElementById('copyLinkBtn').addEventListener('click', () => {
            this.copyLink();
        });

        // Start workout button
        document.getElementById('startWorkoutBtn').addEventListener('click', () => {
            this.scrollToTodaysWorkout();
        });

        // Calendar navigation
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.navigateMonth(-1);
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.navigateMonth(1);
        });

        document.getElementById('yearSelector').addEventListener('change', (e) => {
            this.currentYear = parseInt(e.target.value);
            this.renderCalendar();
        });

        // Calendar access button
        document.getElementById('accessCalendar').addEventListener('click', () => {
            if (this.isLoggedIn) {
                this.showCalendarDetails();
            } else {
                this.showLoginModal();
            }
        });

        // Login form
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            this.handleLogin(e);
        });

        document.getElementById('cancelLogin').addEventListener('click', () => {
            this.hideLoginModal();
        });

        // Close modal on overlay click
        document.getElementById('loginModal').addEventListener('click', (e) => {
            if (e.target.id === 'loginModal') {
                this.hideLoginModal();
            }
        });
    }

    displayTodaysWorkout() {
        const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
        const todaysWorkout = this.workoutDays[todayIndex];

        document.getElementById('todayTitle').textContent = `${todaysWorkout.day}: ${todaysWorkout.name}`;
        document.getElementById('todayDescription').textContent = todaysWorkout.desc;
        document.getElementById('todayExerciseCount').textContent = todaysWorkout.exercises.length;
        document.getElementById('todayDuration').textContent = todaysWorkout.duration;
    }

    renderWorkoutSchedule() {
        const scheduleContainer = document.getElementById('workoutSchedule');
        scheduleContainer.innerHTML = '';

        this.workoutDays.forEach((workout, index) => {
            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            dayCard.id = `workout-${index}`;

            dayCard.innerHTML = `
                <div class="day-header">
                    <h3 class="day-title">${workout.day}: ${workout.name}</h3>
                    <p class="day-description">${workout.desc} • ${workout.duration} mins</p>
                </div>
                <div class="exercises-grid">
                    ${workout.exercises.map(exercise => `
                        <div class="exercise-card">
                            <div class="exercise-thumbnail" 
                                 style="background-image: url('${this.getThumbnailUrl(exercise.video)}')"
                                 onclick="window.open('${exercise.video}', '_blank')"
                                 title="Watch ${exercise.name} video">
                            </div>
                            <div class="exercise-info">
                                <h4>${exercise.name}</h4>
                                <div class="exercise-details">${exercise.sets} | ${exercise.rpe}${exercise.weight ? ' | ' + exercise.weight : ''}</div>
                                <div class="exercise-cues">${exercise.cues}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            scheduleContainer.appendChild(dayCard);
        });
    }

    getThumbnailUrl(videoUrl) {
        if (!videoUrl) return '';
        const videoId = videoUrl.includes('youtu.be/') ? 
            videoUrl.split('youtu.be/')[1] : 
            videoUrl.split('v=')[1];
        if (!videoId) return '';
        return `https://img.youtube.com/vi/${videoId.split(/[&?]/)[0]}/default.jpg`;
    }

    scrollToTodaysWorkout() {
        const todayIndex = (new Date().getDay() + 6) % 7;
        const todayWorkout = document.getElementById(`workout-${todayIndex}`);
        if (todayWorkout) {
            todayWorkout.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    renderCalendar() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        document.getElementById('monthYear').textContent = `${monthNames[this.currentMonth]} ${this.currentYear}`;

        const calendarGrid = document.getElementById('calendarGrid');
        calendarGrid.innerHTML = '';

        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const today = new Date();

        // Add empty cells for days before the first day of month
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

            // Check if it's today
            if (this.currentYear === today.getFullYear() && 
                this.currentMonth === today.getMonth() && 
                day === today.getDate()) {
                dayElement.classList.add('today');
            }

            // Check if workout is completed
            const workoutKey = `workout_${this.currentYear}_${this.currentMonth}_${day}`;
            if (localStorage.getItem(workoutKey)) {
                dayElement.classList.add('completed');
            }

            // Add click event
            dayElement.addEventListener('click', () => {
                if (this.isLoggedIn) {
                    this.toggleWorkoutCompletion(day, dayElement);
                } else {
                    this.showLoginModal();
                }
            });

            calendarGrid.appendChild(dayElement);
        }

        this.updateCalendarStats();
    }

    toggleWorkoutCompletion(day, dayElement) {
        const workoutKey = `workout_${this.currentYear}_${this.currentMonth}_${day}`;

        if (localStorage.getItem(workoutKey)) {
            localStorage.removeItem(workoutKey);
            dayElement.classList.remove('completed');
        } else {
            localStorage.setItem(workoutKey, 'true');
            dayElement.classList.add('completed');
        }

        this.updateCalendarStats();
    }

    updateCalendarStats() {
        const completedThisMonth = this.getCompletedWorkoutsForMonth(this.currentYear, this.currentMonth);
        const totalCompleted = this.getTotalCompletedWorkouts();

        document.getElementById('monthWorkouts').textContent = completedThisMonth;
        document.getElementById('totalWorkouts').textContent = totalCompleted;
    }

    getCompletedWorkoutsForMonth(year, month) {
        let count = 0;
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const workoutKey = `workout_${year}_${month}_${day}`;
            if (localStorage.getItem(workoutKey)) {
                count++;
            }
        }

        return count;
    }

    getTotalCompletedWorkouts() {
        let total = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('workout_')) {
                total++;
            }
        }
        return total;
    }

    navigateMonth(direction) {
        this.currentMonth += direction;

        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }

        document.getElementById('yearSelector').value = this.currentYear;
        this.renderCalendar();
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        modal.classList.add('active');
        const usernameField = document.getElementById('username');
        if (usernameField) {
            usernameField.focus();
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('loginModal');
        modal.classList.remove('active');
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.classList.remove('show');
        }
        const form = document.getElementById('loginForm');
        if (form) {
            form.reset();
        }
    }

    handleLogin(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        if (username === this.loginCredentials.username && 
            password === this.loginCredentials.password) {
            this.isLoggedIn = true;
            sessionStorage.setItem('fitTracker_loggedIn', 'true');
            this.hideLoginModal();
            this.showCalendarDetails();
            this.updateCalendarUI();
        } else {
            if (errorMessage) {
                errorMessage.textContent = 'Invalid username or password';
                errorMessage.classList.add('show');
            }
        }
    }

    checkLoginStatus() {
        if (this.isLoggedIn) {
            this.updateCalendarUI();
        }
    }

    updateCalendarUI() {
        const accessButton = document.getElementById('accessCalendar');
        if (accessButton && this.isLoggedIn) {
            accessButton.innerHTML = '<span class="btn-icon">📊</span>View Progress';
        }
    }

    showCalendarDetails() {
        // Scroll to calendar and highlight it
        const calendarSection = document.querySelector('.calendar-section');
        if (calendarSection) {
            calendarSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    toggleDarkMode() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');

        const toggleButton = document.getElementById('darkModeToggle');
        if (toggleButton) {
            toggleButton.innerHTML = `<span class="icon">${isDark ? '☀️' : '🌙'}</span>`;
        }

        localStorage.setItem('fitTracker_darkMode', isDark.toString());
    }

    setupDarkMode() {
        const isDarkMode = localStorage.getItem('fitTracker_darkMode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark');
            const toggleButton = document.getElementById('darkModeToggle');
            if (toggleButton) {
                toggleButton.innerHTML = '<span class="icon">☀️</span>';
            }
        }
    }

    async copyLink() {
        const copyButton = document.getElementById('copyLinkBtn');
        if (!copyButton) return;

        try {
            await navigator.clipboard.writeText(window.location.href);
            copyButton.innerHTML = '<span class="icon">✅</span>';

            setTimeout(() => {
                copyButton.innerHTML = '<span class="icon">🔗</span>';
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            copyButton.innerHTML = '<span class="icon">✅</span>';
            setTimeout(() => {
                copyButton.innerHTML = '<span class="icon">🔗</span>';
            }, 2000);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        new PremiumFitnessTracker();
        console.log('FitTracker Pro loaded successfully');
    } catch (error) {
        console.error('Failed to initialize FitTracker Pro:', error);
    }
});

// Error handling
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});