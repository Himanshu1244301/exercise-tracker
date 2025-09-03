// data.js
const workoutDays = [
  {
    day: 'Monday', name: 'Upper Body Push', desc: 'Chest, Shoulders, Triceps',
    exercises: [
      {
        name: 'Dumbbell Bench Press',
        sets: '4 × 8–10', rpe: 'RPE 7', weight: '15 lb',
        video: 'https://youtu.be/vthMCtgVtFw',
        cues: 'Don’t flare elbows—keep at 45°; Avoid arching back; Inhale lowering; Exhale pressing'
      },
      {
        name: 'Dumbbell Shoulder Press',
        sets: '3 × 8–10', rpe: 'RPE 7', weight: '15 lb',
        video: 'https://youtu.be/qEwKCR5JCog',
        cues: 'Don’t lock elbows; Avoid overarching; Inhale start; Exhale overhead'
      },
      {
        name: 'Incline Dumbbell Press',
        sets: '3 × 10–12', rpe: 'RPE 8', weight: '15 lb',
        video: 'https://youtu.be/8iPEnn-ltC8',
        cues: 'Don’t shrug shoulders; Avoid flaring elbows; Inhale lowering; Exhale pressing'
      },
      {
        name: 'Dumbbell Lateral Raises',
        sets: '3 × 12–15', rpe: 'RPE 8', weight: '10 lb',
        video: 'https://youtu.be/3VcKaXpzqRo',
        cues: 'Don’t swing torso; Avoid raising above shoulders; Inhale down; Exhale lift'
      },
      {
        name: 'Close-Grip Push-ups',
        sets: '3 × 12–15', rpe: 'RPE 7', weight: 'Bodyweight',
        video: 'https://youtu.be/_6NRxf8dMVk',
        cues: 'Don’t sag hips; Avoid flaring elbows; Inhale lowering; Exhale pushing'
      }
    ]
  },
  {
    day: 'Tuesday', name: 'Lower Body', desc: 'Quads, Glutes, Hamstrings, Core',
    exercises: [
      {
        name: 'Goblet Squats',
        sets: '4 × 8–10', rpe: 'RPE 7', weight: '15 lb',
        video: 'https://youtu.be/MeIiIdhvXT4',
        cues: 'Don’t let knees cave; Avoid rounding back; Inhale down; Exhale up'
      },
      {
        name: 'Dumbbell Romanian Deadlifts',
        sets: '3 × 8–10', rpe: 'RPE 7', weight: '15 lb',
        video: 'https://youtu.be/jEy_czb3RKA',
        cues: 'Don’t bend knees too much; Avoid rounding back; Inhale lowering; Exhale hip drive'
      },
      {
        name: 'Step-ups (bench)',
        sets: '3 × 10–12', rpe: 'RPE 8', weight: '15 lb',
        video: 'https://youtu.be/WMle3bzFgUU',
        cues: 'Don’t push with trailing foot; Avoid leaning forward; Inhale step; Exhale drive'
      },
      {
        name: 'Glute Bridges',
        sets: '3 × 12–15', rpe: 'RPE 8', weight: '15 lb',
        video: 'https://youtu.be/OUgsJ8-Vi0E',
        cues: 'Don’t overextend back; Avoid feet too far; Inhale down; Exhale squeeze'
      },
      {
        name: 'Plank Hold',
        sets: '3 × 45 sec', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/ASdvN_XEl_c',
        cues: 'Don’t let hips drop; Avoid neck craning; Inhale steady; Exhale tight core'
      }
    ]
  },
  {
    day: 'Wednesday', name: 'Upper Body Pull', desc: 'Back & Biceps',
    exercises: [
      {
        name: 'Dumbbell Bent-over Rows',
        sets: '4 × 8–10', rpe: 'RPE 7', weight: '15 lb',
        video: 'https://youtu.be/roCP6wCXPqo',
        cues: 'Don’t round back; Avoid dropping shoulder; Inhale down; Exhale pull'
      },
      {
        name: 'One-Arm Dumbbell Rows',
        sets: '3 × 10–12', rpe: 'RPE 8', weight: '15 lb',
        video: 'https://youtu.be/XZr497sya2k',
        cues: 'Don’t twist torso; Avoid shrugging; Inhale down; Exhale row'
      },
      {
        name: 'Dumbbell Curls',
        sets: '3 × 12–15', rpe: 'RPE 8', weight: '10 lb',
        video: 'https://youtu.be/ykJmrZ5v0Oo',
        cues: 'Don’t swing elbows; Avoid rocking; Inhale down; Exhale curl'
      },
      {
        name: 'Reverse Flys',
        sets: '3 × 12–15', rpe: 'RPE 8', weight: '10 lb',
        video: 'https://youtu.be/ea7qmaN9nDk',
        cues: 'Don’t bend elbows too much; Avoid momentum; Inhale down; Exhale lift'
      },
      {
        name: 'Pull-ups (or Assisted)',
        sets: '3 × max', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/eGo4IYlbE5g',
        cues: 'Don’t kip; Avoid shrugging; Inhale down; Exhale pull up'
      }
    ]
  },
  {
    day: 'Thursday', name: 'Cardio + Core', desc: 'Cardio & Core',
    exercises: [
      {
        name: 'Outdoor Jog/Run',
        sets: '25–30 mins', rpe: 'Moderate pace', weight: '',
        video: 'https://youtu.be/kVnyY17VS9Y',
        cues: 'Don’t overstride; Avoid heel strike; Inhale nose; Exhale mouth'
      },
      {
        name: 'Hanging Knee Raises',
        sets: '3 × 12–15', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/hdng3Nm1x_E',
        cues: 'Don’t swing legs; Avoid arching back; Inhale down; Exhale raise'
      },
      {
        name: 'Russian Twists',
        sets: '3 × 15–20/side', rpe: 'RPE 8', weight: '5–10 lb',
        video: 'https://youtu.be/wkD8rjkodUI',
        cues: 'Don’t round back; Avoid moving legs; Inhale rotate; Exhale rotate'
      },
      {
        name: 'Side Planks',
        sets: '3 × 30 sec ea', rpe: 'Bodyweight', weight: '',
        video: 'https://youtu.be/K2VljzCC16g',
        cues: 'Don’t let hips drop; Avoid torso twist; Inhale deep; Exhale hold'
      }
    ]
  },
  {
    day: 'Friday', name: 'Full Body Strength', desc: 'Total Body',
    exercises: [
      {
        name: 'Dumbbell Deadlifts',
        sets: '4 × 6–8', rpe: 'RPE 8', weight: '15 lb',
        video: 'https://youtu.be/lJ3QwaXNJfw',
        cues: 'Don’t round back; Avoid locked knees; Inhale down; Exhale hip drive'
      },
      {
        name: 'Push-ups',
        sets: '3 × 15', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/IODxDxX7oi4',
        cues: 'Don’t flare elbows; Avoid sagging; Inhale down; Exhale up'
      }
    ]
  },
  {
    day: 'Saturday', name: 'Cardio + Conditioning', desc: 'HIIT & Full-Body',
    exercises: [
      {
        name: 'Sprint Intervals',
        sets: '1m sprint+2m jog×6–7', rpe: '80–90% effort', weight: '',
        video: 'https://youtu.be/9YUCry7eML4',
        cues: 'Don’t lose form; Avoid overstride; Inhale prep; Exhale drive'
      },
      {
        name: 'Jump Rope',
        sets: '3 × 1 min', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/1BZM2Vre5oc',
        cues: 'Don’t stiff ankles; Avoid high jumps; Inhale/exhale steady'
      },
      {
        name: 'Burpees',
        sets: '3 × 12', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/TU8QYVW0gDU',
        cues: 'Don’t drop hips; Avoid sloppy push-up; Inhale squat; Exhale jump'
      },
      {
        name: 'Mountain Climbers',
        sets: '3 × 30 sec', rpe: 'RPE 8', weight: 'Bodyweight',
        video: 'https://youtu.be/nmwgirgXLYM',
        cues: 'Don’t raise hips; Avoid knee crossing; Inhale pace; Exhale drive'
      }
    ]
  },
  {
    day: 'Sunday', name: 'Mobility + Recovery', desc: 'Stretch & Recover',
    exercises: [
      {
        name: 'Light Walk/Yoga',
        sets: '20–30 mins', rpe: 'Recovery pace', weight: '',
        video: 'https://youtu.be/v7AYKMP6rOE',
        cues: 'Don’t hold breath; Avoid bouncing; Inhale deep; Exhale relax'
      },
      {
        name: 'Mobility Work',
        sets: '15 mins', rpe: 'Hip/Knee/Shoulder', weight: '',
        video: 'https://youtu.be/FSSDLDhbacc',
        cues: 'Don’t rush; Avoid forced stretch; Inhale prep; Exhale deepen'
      },
      {
        name: 'Optional Core Circuit',
        sets: '2 rounds', rpe: 'Plank variations', weight: '',
        video: 'https://youtu.be/ASdvN_XEl_c',
        cues: 'Don’t speed; Avoid form loss; Inhale brace; Exhale each rep'
      }
    ]
  }
];
