const activity = [
  {
    hour8: "",
    hour9: "",
    hour10: "",
    hour11: "",
    hour12: "",
    hour13: "",
    hour14: "",
    hour15: "",
    hour16: "",
    hour17: "",
  },
];

//Use moment to input date dynamically on page ready
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
  timeLoop();
});

//For loop to create timeblocks.
//Need to use 'hour' for moment js to recognise as a time.
const timeLoop = () => {
  // const saveData = (inputParam) => {
  //   const userInput = $("userInputHour");
  //   activities.push(userInput);
  //   console.log(activities);
  // };

  for (let hour = 8; hour <= 17; hour++) {
    $(".container").append(
      //This row will contain 3 columns, but all in the same div. One for time, one for activity, one for the save button. May need to use bootstrap classes
      // `<div class="row time-block">${moment({ hour }).format("h A")}</div>`
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

    const saveDay = () => {
      localStorage.setItem(`dayActivity${hour}`, activity);
    };

    const pushToArray = () => {
      const inputCheck = document.getElementById(`userInputHour${hour}`).value;
      const activityObject = activity.hour8;
      activity.push(inputCheck);
    };

    document.getElementById(
      `saveButton${hour}`
    ).onclick = function sendActivity() {
      saveDay();
      pushToArray();
    };

    if (hour < moment().format("H")) {
      $(".timeCheck").addClass("past");
    } else if (hour == moment().format("H")) {
      $(".timeCheck").addClass("present");
    } else if (hour > moment().format("H")) {
      $(".timeCheck").addClass("future");
    }
  }
};

// const sendData = (inputParam) => {
//   const inputBox = $("#userInput");
//   inputBox.attr("data-input", inputParam);
//   inputBox.text(inputParam);
// };
