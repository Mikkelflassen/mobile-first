import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://mobile-first-3a938-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const workoutList1InDB = ref(database, "program1/bench-press/weight");
const workoutList2InDB = ref(database, "program1/bench-press/reps");
const workoutList3InDB = ref(database, "program1/bench-press/sets");
const workoutList4InDB = ref(database, "program1/dips/weight");
const workoutList5InDB = ref(database, "program1/dips/reps");
const workoutList6InDB = ref(database, "program1/dips/sets");
const workoutList7InDB = ref(database, "program1/dumbbellShoulderPress/weight");
const workoutList8InDB = ref(database, "program1/dumbbellShoulderPress/reps");
const workoutList9InDB = ref(database, "program1/dumbbellShoulderPress/sets");
const workoutList10InDB = ref(
  database,
  "program1/OverheadTricepExtension/weight"
);
const workoutList11InDB = ref(
  database,
  "program1/OverheadTricepExtension/reps"
);
const workoutList12InDB = ref(
  database,
  "program1/OverheadTricepExtension/sets"
);
const workoutList13InDB = ref(database, "program1/ChestFlyes/weight");
const workoutList14InDB = ref(database, "program1/ChestFlyes/reps");
const workoutList15InDB = ref(database, "program1/ChestFlyes/sets");

const workoutList16InDB = ref(database, "program1/InclineBenchPress/weight");
const workoutList17InDB = ref(database, "program1/InclineBenchPress/reps");
const workoutList18InDB = ref(database, "program1/InclineBenchPress/sets");

const workoutList19InDB = ref(database, "program1/TricepDips/weight");
const workoutList20InDB = ref(database, "program1/TricepDips/reps");
const workoutList21InDB = ref(database, "program1/TricepDips/sets");

const workoutList22InDB = ref(
  database,
  "program1/OverheadDumbbellTricepExtension/weight"
);
const workoutList23InDB = ref(
  database,
  "program1/OverheadDumbbellTricepExtension/reps"
);
const workoutList24InDB = ref(
  database,
  "program1/OverheadDumbbellTricepExtension/sets"
);

const workoutList25InDB = ref(database, "program1/Push-ups/weight");
const workoutList26InDB = ref(database, "program1/Push-ups/reps");
const workoutList27InDB = ref(database, "program1/Push-ups/sets");

const workoutList28InDB = ref(database, "program1/ArnoldPress/weight");
const workoutList29InDB = ref(database, "program1/ArnoldPress/reps");
const workoutList30InDB = ref(database, "program1/ArnoldPress/sets");

const workoutList34InDB = ref(database, "program1/FrontDumbbellRaise/weight");
const workoutList35InDB = ref(database, "program1/FrontDumbbellRaise/reps");
const workoutList36InDB = ref(database, "program1/FrontDumbbellRaise/sets");

const workoutList37InDB = ref(database, "program1/Close-GripBenchPress/weight");
const workoutList38InDB = ref(database, "program1/Close-GripBenchPress/reps");
const workoutList39InDB = ref(database, "program1/Close-GripBenchPress/sets");

const workoutList40InDB = ref(database, "program2/Bent-OverBarbellRows/weight");
const workoutList41InDB = ref(database, "program2/Bent-OverBarbellRows/reps");
const workoutList42InDB = ref(database, "program2/Bent-OverBarbellRows/sets");

const workoutList43InDB = ref(database, "program2/FacePulls/weight");
const workoutList44InDB = ref(database, "program2/FacePulls/reps");
const workoutList45InDB = ref(database, "program2/FacePulls/sets");

const workoutList46InDB = ref(database, "program2/BarbellShrugs/weight");
const workoutList47InDB = ref(database, "program2/BarbellShrugs/reps");
const workoutList48InDB = ref(database, "program2/BarbellShrugs/sets");

const workoutList49InDB = ref(database, "program2/RearDeltFlyes/weight");
const workoutList50InDB = ref(database, "program2/RearDeltFlyes/reps");
const workoutList51InDB = ref(database, "program2/RearDeltFlyes/sets");

const workoutList52InDB = ref(database, "program2/HammerCurls/weight");
const workoutList53InDB = ref(database, "program2/HammerCurls/reps");
const workoutList54InDB = ref(database, "program2/HammerCurls/sets");

const workoutList55InDB = ref(database, "program2/BarbellBicepCurls/weight");
const workoutList56InDB = ref(database, "program2/BarbellBicepCurls/reps");
const workoutList57InDB = ref(database, "program2/BarbellBicepCurls/sets");

const workoutList58InDB = ref(database, "program2/Deadlifts/weight");
const workoutList59InDB = ref(database, "program2/Deadlifts/reps");
const workoutList60InDB = ref(database, "program2/Deadlifts/sets");

const workoutList61InDB = ref(database, "program2/TBarRows/weight");
const workoutList62InDB = ref(database, "program2/TBarRows/reps");
const workoutList63InDB = ref(database, "program2/TBarRows/sets");

const workoutList64InDB = ref(database, "program2/Chinups/weight");
const workoutList65InDB = ref(database, "program2/Chinups/reps");
const workoutList66InDB = ref(database, "program2/Chinups/sets");

const workoutList67InDB = ref(database, "program2/SeatedCableRows/weight");
const workoutList68InDB = ref(database, "program2/SeatedCableRows/reps");
const workoutList69InDB = ref(database, "program2/SeatedCableRows/sets");

const workoutList70InDB = ref(database, "program2/PreacherCurls/weight");
const workoutList71InDB = ref(database, "program2/PreacherCurls/reps");
const workoutList72InDB = ref(database, "program2/PreacherCurls/sets");

const workoutList73InDB = ref(database, "program2/HammerCurls2/weight");
const workoutList74InDB = ref(database, "program2/HammerCurls2/reps");
const workoutList75InDB = ref(database, "program2/HammerCurls2/sets");

const workoutList76InDB = ref(database, "program3/LegExtensions/weight");
const workoutList77InDB = ref(database, "program3/LegExtensions/reps");
const workoutList78InDB = ref(database, "program3/LegExtensions/sets");

const workoutList79InDB = ref(database, "program3/LegPress/weight");
const workoutList80InDB = ref(database, "program3/LegPress/reps");
const workoutList81InDB = ref(database, "program3/LegPress/sets");

const workoutList82InDB = ref(database, "program3/LegCurl/weight");
const workoutList83InDB = ref(database, "program3/LegCurl/reps");
const workoutList84InDB = ref(database, "program3/LegCurl/sets");

const workoutList85InDB = ref(database, "program3/CalfRaises/weight");
const workoutList86InDB = ref(database, "program3/CalfRaises/reps");
const workoutList87InDB = ref(database, "program3/CalfRaises/sets");

const workoutList88InDB = ref(database, "program3/BarbellSquats/weight");
const workoutList89InDB = ref(database, "program3/BarbellSquats/reps");
const workoutList90InDB = ref(database, "program3/BarbellSquats/sets");

const workoutList91InDB = ref(database, "program3/Deadlifts/weight");
const workoutList92InDB = ref(database, "program3/Deadlifts/reps");
const workoutList93InDB = ref(database, "program3/Deadlifts/sets");

const workoutList94InDB = ref(database, "program3/BulgarianSplitSquats/weight");
const workoutList95InDB = ref(database, "program3/BulgarianSplitSquats/reps");
const workoutList96InDB = ref(database, "program3/BulgarianSplitSquats/sets");

const workoutList97InDB = ref(database, "program3/Lunges/weight");
const workoutList98InDB = ref(database, "program3/Lunges/reps");
const workoutList99InDB = ref(database, "program3/Lunges/sets");

const workoutList100InDB = ref(database, "program3/RomanianDeadlifts/weight");
const workoutList101InDB = ref(database, "program3/RomanianDeadlifts/reps");
const workoutList102InDB = ref(database, "program3/RomanianDeadlifts/sets");

const workoutList103InDB = ref(database, "program3/BoxJumps/weight");
const workoutList104InDB = ref(database, "program3/BoxJumps/reps");
const workoutList105InDB = ref(database, "program3/BoxJumps/sets");

const workoutList106InDB = ref(database, "program3/StandingCalfRaises/weight");
const workoutList107InDB = ref(database, "program3/StandingCalfRaises/reps");
const workoutList108InDB = ref(database, "program3/StandingCalfRaises/sets");

const workoutList109InDB = ref(database, "program3/WalkingLunges/weight");
const workoutList110InDB = ref(database, "program3/WalkingLunges/reps");
const workoutList111InDB = ref(database, "program3/WalkingLunges/sets");

//const workoutList40InDB = ref(database, "program2/pullUps/weight");
//const workoutList41InDB = ref(database, "program2/pullUps/reps");
//const workoutList42InDB = ref(database, "program2/pullUps/sets");

function addExerciseToDatabase(inputValue, workoutListInDB) {
  // Remove existing values
  remove(workoutListInDB);

  // Add the new value
  push(workoutListInDB, inputValue);
}

function removeExerciseFromDatabase(exerciseID, workoutListInDB) {
  remove(ref(workoutListInDB, exerciseID));
}

function clearWorkoutListEl(workoutListEl) {
  workoutListEl.innerHTML = "";
}

function appendExerciseToWorkoutListEl(
  exercise,
  workoutListEl,
  workoutListInDB
) {
  const exerciseID = exercise[0];
  const exerciseValue = exercise[1];

  const newExerciseEl = document.createElement("li");
  newExerciseEl.textContent = exerciseValue;
  newExerciseEl.addEventListener("click", function () {
    removeExerciseFromDatabase(exerciseID, workoutListInDB);
  });

  workoutListEl.append(newExerciseEl);
}

function handleAddExercise(
  inputEl,
  addButtonEl,
  workoutListEl,
  workoutListInDB
) {
  addButtonEl.addEventListener("click", function () {
    const inputValue = inputEl.value.trim();
    if (inputValue !== "") {
      addExerciseToDatabase(inputValue, workoutListInDB);
    }
    inputEl.value = "";
  });
}

function handleUpdateWorkoutList(workoutListInDB, workoutListEl) {
  onValue(workoutListInDB, function (snapshot) {
    if (snapshot.exists()) {
      const exercisesArray = Object.entries(snapshot.val());
      clearWorkoutListEl(workoutListEl);
      exercisesArray.forEach((exercise) => {
        appendExerciseToWorkoutListEl(exercise, workoutListEl, workoutListInDB);
      });
    } else {
      workoutListEl.innerHTML = "Nothing here... yet";
    }
  });
}
function handleAddExerciseGroup(
  inputId,
  addButtonId,
  workoutListId,
  workoutListInDB
) {
  const inputEl = document.getElementById(inputId);
  const addButtonEl = document.getElementById(addButtonId);
  const workoutListEl = document.getElementById(workoutListId);

  handleAddExercise(inputEl, addButtonEl, workoutListEl, workoutListInDB);
  handleUpdateWorkoutList(workoutListInDB, workoutListEl);
}

// Handle Bench Press
handleAddExerciseGroup(
  "input-weight-1",
  "add-exercise-button-1",
  "workout-list-1",
  workoutList1InDB
);
handleAddExerciseGroup(
  "input-reps-2",
  "add-exercise-button-2",
  "workout-list-2",
  workoutList2InDB
);
handleAddExerciseGroup(
  "input-sets-3",
  "add-exercise-button-3",
  "workout-list-3",
  workoutList3InDB
);

// Handle Dips
handleAddExerciseGroup(
  "input-weight-4",
  "add-exercise-button-4",
  "workout-list-4",
  workoutList4InDB
);
handleAddExerciseGroup(
  "input-reps-5",
  "add-exercise-button-5",
  "workout-list-5",
  workoutList5InDB
);
handleAddExerciseGroup(
  "input-sets-6",
  "add-exercise-button-6",
  "workout-list-6",
  workoutList6InDB
);

// Handle Dumbbell Shoulder Press
handleAddExerciseGroup(
  "input-weight-7",
  "add-exercise-button-7",
  "workout-list-7",
  workoutList7InDB
);
handleAddExerciseGroup(
  "input-reps-8",
  "add-exercise-button-8",
  "workout-list-8",
  workoutList8InDB
);
handleAddExerciseGroup(
  "input-sets-9",
  "add-exercise-button-9",
  "workout-list-9",
  workoutList9InDB
);

// Handle Overhead Tricep Extension
handleAddExerciseGroup(
  "input-weight-10",
  "add-exercise-button-10",
  "workout-list-10",
  workoutList10InDB
);
handleAddExerciseGroup(
  "input-reps-11",
  "add-exercise-button-11",
  "workout-list-11",
  workoutList11InDB
);
handleAddExerciseGroup(
  "input-sets-12",
  "add-exercise-button-12",
  "workout-list-12",
  workoutList12InDB
);

// Handle Chest Flyes
handleAddExerciseGroup(
  "input-weight-13",
  "add-exercise-button-13",
  "workout-list-13",
  workoutList13InDB
);
handleAddExerciseGroup(
  "input-reps-14",
  "add-exercise-button-14",
  "workout-list-14",
  workoutList14InDB
);
handleAddExerciseGroup(
  "input-sets-15",
  "add-exercise-button-15",
  "workout-list-15",
  workoutList15InDB
);
// Handle Incline Bench Press

handleAddExerciseGroup(
  "input-weight-16",
  "add-exercise-button-16",
  "workout-list-16",
  workoutList16InDB
);
handleAddExerciseGroup(
  "input-reps-17",
  "add-exercise-button-17",
  "workout-list-17",
  workoutList17InDB
);
handleAddExerciseGroup(
  "input-sets-18",
  "add-exercise-button-18",
  "workout-list-18",
  workoutList18InDB
);
// Handle Tricep Dips
handleAddExerciseGroup(
  "input-weight-19",
  "add-exercise-button-19",
  "workout-list-19",
  workoutList19InDB
);
handleAddExerciseGroup(
  "input-reps-20",
  "add-exercise-button-20",
  "workout-list-20",
  workoutList20InDB
);
handleAddExerciseGroup(
  "input-sets-21",
  "add-exercise-button-21",
  "workout-list-21",
  workoutList21InDB
);

// Handle Overhead Dumbbell Tricep Extension
handleAddExerciseGroup(
  "input-weight-22",
  "add-exercise-button-22",
  "workout-list-22",
  workoutList22InDB
);
handleAddExerciseGroup(
  "input-reps-23",
  "add-exercise-button-23",
  "workout-list-23",
  workoutList23InDB
);
handleAddExerciseGroup(
  "input-sets-24",
  "add-exercise-button-24",
  "workout-list-24",
  workoutList24InDB
);

// Handle Push-ups
handleAddExerciseGroup(
  "input-weight-25",
  "add-exercise-button-25",
  "workout-list-25",
  workoutList25InDB
);
handleAddExerciseGroup(
  "input-reps-26",
  "add-exercise-button-26",
  "workout-list-26",
  workoutList26InDB
);
handleAddExerciseGroup(
  "input-sets-27",
  "add-exercise-button-27",
  "workout-list-27",
  workoutList27InDB
);

// Handle Arnold Press
handleAddExerciseGroup(
  "input-weight-28",
  "add-exercise-button-28",
  "workout-list-28",
  workoutList28InDB
);
handleAddExerciseGroup(
  "input-reps-29",
  "add-exercise-button-29",
  "workout-list-29",
  workoutList29InDB
);
handleAddExerciseGroup(
  "input-sets-30",
  "add-exercise-button-30",
  "workout-list-30",
  workoutList30InDB
);

// Handle Front Dumbbell Raise
handleAddExerciseGroup(
  "input-weight-34",
  "add-exercise-button-34",
  "workout-list-34",
  workoutList34InDB
);
handleAddExerciseGroup(
  "input-reps-35",
  "add-exercise-button-35",
  "workout-list-35",
  workoutList35InDB
);
handleAddExerciseGroup(
  "input-sets-36",
  "add-exercise-button-36",
  "workout-list-36",
  workoutList36InDB
);

// Handle Close-Grip Bench Press
handleAddExerciseGroup(
  "input-weight-37",
  "add-exercise-button-37",
  "workout-list-37",
  workoutList37InDB
);
handleAddExerciseGroup(
  "input-reps-38",
  "add-exercise-button-38",
  "workout-list-38",
  workoutList38InDB
);
handleAddExerciseGroup(
  "input-sets-39",
  "add-exercise-button-39",
  "workout-list-39",
  workoutList39InDB
);

// Handle Bent-Over Barbell Rows - Program 2
handleAddExerciseGroup(
  "input-weight-40",
  "add-exercise-button-40",
  "workout-list-40",
  workoutList40InDB
);
handleAddExerciseGroup(
  "input-reps-41",
  "add-exercise-button-41",
  "workout-list-41",
  workoutList41InDB
);
handleAddExerciseGroup(
  "input-sets-42",
  "add-exercise-button-42",
  "workout-list-42",
  workoutList42InDB
);

handleAddExerciseGroup(
  "input-weight-43",
  "add-exercise-button-43",
  "workout-list-43",
  workoutList43InDB
);
handleAddExerciseGroup(
  "input-reps-44",
  "add-exercise-button-44",
  "workout-list-44",
  workoutList44InDB
);
handleAddExerciseGroup(
  "input-sets-45",
  "add-exercise-button-45",
  "workout-list-45",
  workoutList45InDB
);

handleAddExerciseGroup(
  "input-weight-46",
  "add-exercise-button-46",
  "workout-list-46",
  workoutList46InDB
);
handleAddExerciseGroup(
  "input-reps-47",
  "add-exercise-button-47",
  "workout-list-47",
  workoutList47InDB
);
handleAddExerciseGroup(
  "input-sets-48",
  "add-exercise-button-48",
  "workout-list-48",
  workoutList48InDB
);

handleAddExerciseGroup(
  "input-weight-49",
  "add-exercise-button-49",
  "workout-list-49",
  workoutList49InDB
);
handleAddExerciseGroup(
  "input-reps-50",
  "add-exercise-button-50",
  "workout-list-50",
  workoutList50InDB
);
handleAddExerciseGroup(
  "input-sets-51",
  "add-exercise-button-51",
  "workout-list-51",
  workoutList51InDB
);

handleAddExerciseGroup(
  "input-weight-52",
  "add-exercise-button-52",
  "workout-list-52",
  workoutList52InDB
);
handleAddExerciseGroup(
  "input-reps-53",
  "add-exercise-button-53",
  "workout-list-53",
  workoutList53InDB
);
handleAddExerciseGroup(
  "input-sets-54",
  "add-exercise-button-54",
  "workout-list-54",
  workoutList54InDB
);

handleAddExerciseGroup(
  "input-weight-55",
  "add-exercise-button-55",
  "workout-list-55",
  workoutList55InDB
);
handleAddExerciseGroup(
  "input-reps-56",
  "add-exercise-button-56",
  "workout-list-56",
  workoutList56InDB
);
handleAddExerciseGroup(
  "input-sets-57",
  "add-exercise-button-57",
  "workout-list-57",
  workoutList57InDB
);

handleAddExerciseGroup(
  "input-weight-58",
  "add-exercise-button-58",
  "workout-list-58",
  workoutList58InDB
);
handleAddExerciseGroup(
  "input-reps-59",
  "add-exercise-button-59",
  "workout-list-59",
  workoutList59InDB
);
handleAddExerciseGroup(
  "input-sets-60",
  "add-exercise-button-60",
  "workout-list-60",
  workoutList60InDB
);

handleAddExerciseGroup(
  "input-weight-61",
  "add-exercise-button-61",
  "workout-list-61",
  workoutList61InDB
);
handleAddExerciseGroup(
  "input-reps-62",
  "add-exercise-button-62",
  "workout-list-62",
  workoutList62InDB
);
handleAddExerciseGroup(
  "input-sets-63",
  "add-exercise-button-63",
  "workout-list-63",
  workoutList63InDB
);

handleAddExerciseGroup(
  "input-weight-64",
  "add-exercise-button-64",
  "workout-list-64",
  workoutList64InDB
);
handleAddExerciseGroup(
  "input-reps-65",
  "add-exercise-button-65",
  "workout-list-65",
  workoutList65InDB
);
handleAddExerciseGroup(
  "input-sets-66",
  "add-exercise-button-66",
  "workout-list-66",
  workoutList66InDB
);

handleAddExerciseGroup(
  "input-weight-67",
  "add-exercise-button-67",
  "workout-list-67",
  workoutList67InDB
);
handleAddExerciseGroup(
  "input-reps-68",
  "add-exercise-button-68",
  "workout-list-68",
  workoutList68InDB
);
handleAddExerciseGroup(
  "input-sets-69",
  "add-exercise-button-69",
  "workout-list-69",
  workoutList69InDB
);

handleAddExerciseGroup(
  "input-weight-70",
  "add-exercise-button-70",
  "workout-list-70",
  workoutList70InDB
);
handleAddExerciseGroup(
  "input-reps-71",
  "add-exercise-button-71",
  "workout-list-71",
  workoutList71InDB
);
handleAddExerciseGroup(
  "input-sets-72",
  "add-exercise-button-72",
  "workout-list-72",
  workoutList72InDB
);

handleAddExerciseGroup(
  "input-weight-73",
  "add-exercise-button-73",
  "workout-list-73",
  workoutList73InDB
);
handleAddExerciseGroup(
  "input-reps-74",
  "add-exercise-button-74",
  "workout-list-74",
  workoutList74InDB
);
handleAddExerciseGroup(
  "input-sets-75",
  "add-exercise-button-75",
  "workout-list-75",
  workoutList75InDB
);

handleAddExerciseGroup(
  "input-weight-76",
  "add-exercise-button-76",
  "workout-list-76",
  workoutList76InDB
);
handleAddExerciseGroup(
  "input-reps-77",
  "add-exercise-button-77",
  "workout-list-77",
  workoutList77InDB
);
handleAddExerciseGroup(
  "input-sets-78",
  "add-exercise-button-78",
  "workout-list-78",
  workoutList78InDB
);

handleAddExerciseGroup(
  "input-weight-79",
  "add-exercise-button-79",
  "workout-list-79",
  workoutList79InDB
);
handleAddExerciseGroup(
  "input-reps-80",
  "add-exercise-button-80",
  "workout-list-80",
  workoutList80InDB
);
handleAddExerciseGroup(
  "input-sets-81",
  "add-exercise-button-81",
  "workout-list-81",
  workoutList81InDB
);

handleAddExerciseGroup(
  "input-weight-82",
  "add-exercise-button-82",
  "workout-list-82",
  workoutList82InDB
);
handleAddExerciseGroup(
  "input-reps-83",
  "add-exercise-button-83",
  "workout-list-83",
  workoutList83InDB
);
handleAddExerciseGroup(
  "input-sets-84",
  "add-exercise-button-84",
  "workout-list-84",
  workoutList84InDB
);

handleAddExerciseGroup(
  "input-weight-85",
  "add-exercise-button-85",
  "workout-list-85",
  workoutList85InDB
);
handleAddExerciseGroup(
  "input-reps-86",
  "add-exercise-button-86",
  "workout-list-86",
  workoutList86InDB
);
handleAddExerciseGroup(
  "input-sets-87",
  "add-exercise-button-87",
  "workout-list-87",
  workoutList87InDB
);

handleAddExerciseGroup(
  "input-weight-88",
  "add-exercise-button-88",
  "workout-list-88",
  workoutList88InDB
);
handleAddExerciseGroup(
  "input-reps-89",
  "add-exercise-button-89",
  "workout-list-89",
  workoutList89InDB
);
handleAddExerciseGroup(
  "input-sets-90",
  "add-exercise-button-90",
  "workout-list-90",
  workoutList90InDB
);

handleAddExerciseGroup(
  "input-weight-91",
  "add-exercise-button-91",
  "workout-list-91",
  workoutList91InDB
);
handleAddExerciseGroup(
  "input-reps-92",
  "add-exercise-button-92",
  "workout-list-92",
  workoutList92InDB
);
handleAddExerciseGroup(
  "input-sets-93",
  "add-exercise-button-93",
  "workout-list-93",
  workoutList93InDB
);

handleAddExerciseGroup(
  "input-weight-94",
  "add-exercise-button-94",
  "workout-list-94",
  workoutList94InDB
);
handleAddExerciseGroup(
  "input-reps-95",
  "add-exercise-button-95",
  "workout-list-95",
  workoutList95InDB
);
handleAddExerciseGroup(
  "input-sets-96",
  "add-exercise-button-96",
  "workout-list-96",
  workoutList96InDB
);

handleAddExerciseGroup(
  "input-weight-97",
  "add-exercise-button-97",
  "workout-list-97",
  workoutList97InDB
);
handleAddExerciseGroup(
  "input-reps-98",
  "add-exercise-button-98",
  "workout-list-98",
  workoutList98InDB
);
handleAddExerciseGroup(
  "input-sets-99",
  "add-exercise-button-99",
  "workout-list-99",
  workoutList99InDB
);

handleAddExerciseGroup(
  "input-weight-100",
  "add-exercise-button-100",
  "workout-list-100",
  workoutList100InDB
);
handleAddExerciseGroup(
  "input-reps-101",
  "add-exercise-button-101",
  "workout-list-101",
  workoutList101InDB
);
handleAddExerciseGroup(
  "input-sets-102",
  "add-exercise-button-102",
  "workout-list-102",
  workoutList102InDB
);

handleAddExerciseGroup(
  "input-weight-103",
  "add-exercise-button-103",
  "workout-list-103",
  workoutList103InDB
);
handleAddExerciseGroup(
  "input-reps-104",
  "add-exercise-button-104",
  "workout-list-104",
  workoutList104InDB
);
handleAddExerciseGroup(
  "input-sets-105",
  "add-exercise-button-105",
  "workout-list-105",
  workoutList105InDB
);

handleAddExerciseGroup(
  "input-weight-106",
  "add-exercise-button-106",
  "workout-list-106",
  workoutList106InDB
);
handleAddExerciseGroup(
  "input-reps-107",
  "add-exercise-button-107",
  "workout-list-107",
  workoutList107InDB
);
handleAddExerciseGroup(
  "input-sets-108",
  "add-exercise-button-108",
  "workout-list-108",
  workoutList108InDB
);

handleAddExerciseGroup(
  "input-weight-109",
  "add-exercise-button-109",
  "workout-list-109",
  workoutList109InDB
);
handleAddExerciseGroup(
  "input-reps-110",
  "add-exercise-button-110",
  "workout-list-110",
  workoutList110InDB
);
handleAddExerciseGroup(
  "input-sets-111",
  "add-exercise-button-111",
  "workout-list-111",
  workoutList111InDB
);
