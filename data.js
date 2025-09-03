// data.js
const workoutDays = [
  {
    day: 'Monday', name: 'Upper Body Push', desc: 'Chest, Shoulders, Triceps',
    exercises: [
      { name: 'Dumbbell Bench Press', sets: '4×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/vthMCtgVtFw', cues: 'Elbows 45° • Neutral spine • Inhale down • Exhale up' },
      { name: 'Dumbbell Shoulder Press', sets: '3×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/qEwKCR5JCog', cues: 'Soft elbows • Core tight • Inhale start • Exhale overhead' },
      { name: 'Incline Dumbbell Press', sets: '3×10–12', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/8iPEnn-ltC8', cues: 'Shoulders down • Elbows 45° • Inhale down • Exhale press' },
      { name: 'Dumbbell Lateral Raises', sets: '3×12–15', rpe: 'RPE8', weight: '10lb', video: 'https://youtu.be/3VcKaXpzqRo', cues: 'No swing • Shoulders level • Inhale down • Exhale lift' },
      { name: 'Close-Grip Push-ups', sets: '3×12–15', rpe: 'RPE7', weight: 'BW', video: 'https://youtu.be/_6NRxf8dMVk', cues: 'Hips inline • Elbows 45° • Inhale down • Exhale up' }
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
  {
    day: 'Wednesday', name: 'Upper Body Pull', desc: 'Back & Biceps',
    exercises: [
      { name: 'Bent-over Rows', sets: '4×8–10', rpe: 'RPE7', weight: '15lb', video: 'https://youtu.be/roCP6wCXPqo', cues: 'Flat back • Retract scapula • Inhale lower • Exhale pull' },
      { name: 'One-Arm Rows', sets: '3×10–12', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/XZr497sya2k', cues: 'Torso square • No shrug • Inhale down • Exhale row' },
      { name: 'Dumbbell Curls', sets: '3×12–15', rpe: 'RPE8', weight: '10lb', video: 'https://youtu.be/ykJmrZ5v0Oo', cues: 'Elbows locked • No swing • Inhale down • Exhale curl' },
      { name: 'Reverse Flys', sets: '3×12–15', rpe: 'RPE8', weight: '10lb', video: 'https://youtu.be/ea7qmaN9nDk', cues: 'Slight bend • Controlled arc • Inhale down • Exhale lift' },
      { name: 'Pull-ups', sets: '3×max', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/eGo4IYlbE5g', cues: 'Strict form • Scapula down • Inhale down • Exhale pull' }
    ]
  },
  {
    day: 'Thursday', name: 'Cardio + Core', desc: 'Cardio & Core',
    exercises: [
      { name: 'Jog/Run Tips', sets: '25–30min', rpe: 'Moderate', weight: '', video: 'https://youtu.be/kVnyY17VS9Y', cues: 'Midfoot strike • Short steps • Inhale nose • Exhale mouth' },
      { name: 'Hanging Knee Raises', sets: '3×12–15', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/hdng3Nm1x_E', cues: 'No swing • Tuck pelvis • Inhale down • Exhale raise' },
      { name: 'Russian Twists', sets: '3×15–20/side', rpe: 'RPE8', weight: '5–10lb', video: 'https://youtu.be/wkD8rjkodUI', cues: 'Chest up • Feet stable • Inhale turn • Exhale turn' },
      { name: 'Side Planks', sets: '3×30sec ea', rpe: 'BW', weight: '', video: 'https://youtu.be/K2VljzCC16g', cues: 'Hips stacked • Neutral spine • Inhale deep • Exhale hold' }
    ]
  },
  {
    day: 'Friday', name: 'Full Body Strength', desc: 'Total Body',
    exercises: [
      { name: 'Dumbbell Deadlifts', sets: '4×6–8', rpe: 'RPE8', weight: '15lb', video: 'https://youtu.be/lJ3QwaXNJfw', cues: 'Neutral spine • Slight knees • Inhale down • Exhale stand' },
      { name: 'Push-ups', sets: '3×15', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/IODxDxX7oi4', cues: 'Elbows 45° • Body straight • Inhale down • Exhale up' }
    ]
  },
  {
    day: 'Saturday', name: 'Cardio + Conditioning', desc: 'HIIT & Full-Body',
    exercises: [
      { name: 'Sprint Intervals', sets: '1′ sprint/2′ jog×6–7', rpe: '80–90%', weight: '', video: 'https://youtu.be/9YUCry7eML4', cues: 'Maintain form • Quick drive • Inhale prep • Exhale sprint' },
      { name: 'Jump Rope', sets: '3×1min', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/1BZM2Vre5oc', cues: 'Light bounce • Wrist turn • Steady breathe' },
      { name: 'Burpees', sets: '3×12', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/TU8QYVW0gDU', cues: 'Plank form • Full rep • Inhale squat • Exhale jump' },
      { name: 'Mountain Climbers', sets: '3×30sec', rpe: 'RPE8', weight: 'BW', video: 'https://youtu.be/nmwgirgXLYM', cues: 'Flat hips • Quick drive • Inhale pace • Exhale drive' }
    ]
  },
  {
    day: 'Sunday', name: 'Mobility + Recovery', desc: 'Stretch & Recover',
    exercises: [
      { name: 'Walk/Yoga Flow', sets: '20–30min', rpe: 'Recovery', weight: '', video: 'https://youtu.be/v7AYKMP6rOE', cues: 'Slow moves • Breathe deep • Inhale lengthen • Exhale release' },
      { name: 'Mobility Work', sets: '15min', rpe: 'Joint focus', weight: '', video: 'https://youtu.be/FSSDLDhbacc', cues: 'Controlled stretch • No bounce • Inhale prep • Exhale deepen' },
      { name: 'Core Circuit (opt)', sets: '2 rounds', rpe: 'Plank', weight: '', video: 'https://youtu.be/ASdvN_XEl_c', cues: 'Steady pace • Good form • Inhale brace • Exhale each' }
    ]
  }
];
