//Use moment to input date dynamically on page ready
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
});

//For loop to create timeblocks.
//Need to use 'hour' for moment js to recognise as a time.
for (let hour = 8; hour < 18; hour++) {
  $(".container").append(
    //This row will contain 3 columns, but all in the same div. One for time, one for activity, one for the save button.
    `<div class="row time-block">${moment({ hour }).format("h A")}</div>`
  );
}
