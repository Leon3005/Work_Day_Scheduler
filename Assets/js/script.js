//Use moment to input date dynamically on page ready
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
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
        <div id="timeCheck" class="col-md">
          One of three columns
        </div>
        <div class="col-">
          Btn here
        </div>
      </div>`
    );

    if (hour < moment().format("H")) {
      $("#timeCheck").addClass("past");
    }
  }
};

timeLoop();
