const activities = [];

//Use moment to input date dynamically on page ready
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
  timeLoop();
});

//For loop to create timeblocks.
//Need to use 'hour' for moment js to recognise as a time.
const timeLoop = () => {
  for (let hour = 8; hour <= 17; hour++) {
    $(".container").append(
      //This row will contain 3 columns, but all in the same div. One for time, one for activity, one for the save button. May need to use bootstrap classes
      // `<div class="row time-block">${moment({ hour }).format("h A")}</div>`
      `<div class="row">
        <div class="col- time-block hour mr-4">
          ${moment({ hour }).format("h A")}
        </div>
        <input type="text" id="userInput" class="col-md timeCheck">
        </input>
        <button class="col- btn btn-primary rounded-end fas fa-save">
        </button>
      </div>`
    );

    if (hour < moment().format("H")) {
      $(".timeCheck").addClass("past");
    } else if (hour == moment().format("H")) {
      $(".timeCheck").addClass("present");
    } else if (hour > moment().format("H")) {
      $(".timeCheck").addClass("future");
    }
  }
};

const sendData = () => {
  inputBox = $("#userInput");
};
