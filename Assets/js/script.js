//Use moment to input date dynamically on page ready, also run the function that contains everything.
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
  timeLoop();
});

// let hour = 8;

const timeLoop = () => {
  //For loop to create timeblocks. Need to use 'hour' for moment js to recognise as a time.
  for (let hour = 8; hour <= 17; hour++) {
    $(".container").append(
      //Creating the divs and inputs for the HTML based on the hour variable. Will be 8-17.
      `<div class="row">
        <div class="col- time-block hour mr-4">
          ${moment({ hour }).format("h A")}
        </div>
        <input type="text" id="userInputHour${hour}" class="col-md timeCheck">
        </input>
        <button id="saveButton${hour}" class="col- btn btn-primary rounded-end fas fa-save">
        </button>
      </div>`
    );

    //Changes the colours of the input boxes depending on time
    if (hour < moment().format("H")) {
      $(`#userInputHour${hour}`).addClass("past text-dark");
      console.log("hi");
    } else if (hour == moment().format("H")) {
      console.log("hello");
      $(`#userInputHour${hour}`).addClass("present");
    } else if (hour > moment().format("H")) {
      console.log("hey");
      $(`#userInputHour${hour}`).addClass("future");
    }

    //This function gets the data from local storage and puts the value onto the page.
    const loadData = () => {
      const getActivity = localStorage.getItem(`dayActivity${hour}`);
      document.getElementById(`userInputHour${hour}`).value = getActivity;
    };

    loadData();

    //Function to allow data to be stored in localStorage
    const activityData = () => {
      let activity = JSON.parse(
        localStorage.getItem(`userInputHour${hour}`) || "[]"
      );

      //This function will push the user input into the array.
      const pushToArray = () => {
        const inputCheck = document.getElementById(`userInputHour${hour}`)
          .value;
        activity.push(inputCheck);
      };

      //This function will put the Array data into localStorage.
      const saveDay = () => {
        localStorage.setItem(`dayActivity${hour}`, activity);
      };

      //Run functions on button click and also check if data already exists in localStorage.
      document.getElementById(
        `saveButton${hour}`
      ).onclick = function sendActivity() {
        if (`dayActivity${hour}` in localStorage) {
          localStorage.removeItem(`dayActivity${hour}`);
          pushToArray();
          saveDay();
        } else {
          pushToArray();
          saveDay();
        }
      };
    };

    activityData();
  }
};
