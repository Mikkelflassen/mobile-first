import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://mobile-first-3a938-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const weightRef = ref(database, "/program1/exercise1/weight");

const inputWeightEl = document.getElementById("input-weight");
const updateWeightButtonEl = document.getElementById("update-weight-button");

updateWeightButtonEl.addEventListener("click", function () {
  const weightValue = inputWeightEl.value;

  // Update the weight value in the Firebase database
  set(weightRef, weightValue);
});
