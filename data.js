// data.js - Complete workout data with verified ATHLEAN-X videos
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
];