// data.js
const workoutDays = [
  {
    day: 'Monday', name: 'Upper Body Push', desc: 'Chest, Shoulders, Triceps',
    exercises: [
      { name: 'Dumbbell Bench Press', sets: '4×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/vthMCtgVtFw', cues: 'Elbows 45° • Neutral spine • Inhale down • Exhale up' },
      { name: 'Dumbbell Shoulder Press', sets: '3×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/qEwKCR5JCog', cues: 'Soft elbows • Core tight • Inhale start • Exhale overhead' },
      { name: 'Incline Dumbbell Press', sets: '3×10–12', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/8iPEnn-ltC8', cues: 'Shoulders down • Elbows 45° • Inhale down • Exhale press' },
      { name: 'Dumbbell Lateral Raises', sets: '3×12–15', rpe: 'RPE8', weight: '10lb', video: 'https://youtu.be/3VcKaXpzqRo', cues: 'No swing • Shoulders level • Inhale down • Exhale lift' },
      { name: 'Close-Grip Push-ups', sets: '3×12–15', rpe: 'RPE7', weight: 'BW', video: 'https://youtu.be/trMI8kc1O28', cues: 'Hips inline • Elbows 45° • Inhale down • Exhale up' }
    ]
  },
  {
    day: 'Tuesday', name: 'Lower Body', desc: 'Quads, Glutes, Hamstrings, Core',
    exercises: [
      { name: 'Goblet Squats', sets: '4×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/MeIiIdhvXT4', cues: 'Knees track toes • Chest up • Inhale down • Exhale up' },
      { name: 'Romanian Deadlift', sets: '3×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/jEy_czb3RKA', cues: 'Hip hinge • Neutral back • Inhale down • Exhale thrust' },
      { name: 'Step-ups (bench)', sets: '3×10–12', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/WMle3bzFgUU', cues: 'Lead leg drive • Torso upright • Inhale step • Exhale drive' },
      { name: 'Glute Bridges', sets: '3×12–15', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/OUgsJ8-Vi0E', cues: 'Hips level • Feet placement • Inhale down • Exhale squeeze' },
      { name: 'Plank Hold', sets: '3×45sec', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/ASdvN_XEl_c', cues: 'Body straight • Neutral neck • Steady breathe' }
    ]
  },
  // ... Wednesday–Sunday with verified ATHLEAN-X URLs ...
];
