const renderTimeBlock = (hour) => {
  $(".container").append(
    //Creating the divs and inputs for the HTML based on the hour variable. Will be 8-17.
    `<div class="row">
      <div class="col-2 time-block hour mr-4">
        ${moment({ hour }).format("h A")}
      </div>
      <input type="text" id="userInputHour${hour}" class="col-md timeCheck">
      </input>
      <button id="saveButton${hour}" class="col-1 btn btn-primary rounded-end fas fa-save">
      </button>
    </div>`
  );

  const currentHour = moment().hour();

  if (hour < currentHour) {
    $(`#userInputHour${hour}`).addClass("past text-dark");
  } else if (hour === currentHour) {
    $(`#userInputHour${hour}`).addClass("present");
  } else if (hour > currentHour) {
    $(`#userInputHour${hour}`).addClass("future");
  }
};

const loadData = (hour) => {
  const getActivity = localStorage.getItem(`dayActivity${hour}`);
  $(`#userInputHour${hour}`).val(getActivity);
};

const timeLoop = () => {
  for (let hour = 9; hour <= 17; hour++) {
    renderTimeBlock(hour);

    loadData(hour);

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
        const inputCheck = document.getElementById(`userInputHour${hour}`)
          .value;
        if (localStorage[`dayActivity${hour}`] === inputCheck) {
          return;
        } else {
          pushToArray();
          saveDay();
        }
      };
    };

    activityData();
  }
};

const onReady = () => {
  $("#currentDay").text(moment().format("dddd Do MMMM, YYYY"));

  timeLoop();
};

$(document).ready(onReady);
