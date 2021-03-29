//Use moment to input date dynamically
$(document).ready(function () {
  const todaysDate = moment();
  $("#currentDay").text(todaysDate.format("dddd Do MMMM, YYYY"));
});

const dayHours = [];

//For loop to create timeblocks.
//Need to use 'hour' for moment js to recognise as a time
for (let hour = 8; hour < 18; hour++) {
  $(".container").append(
    `<div class="row time-block">${moment({ hour }).format("h A")}</div>`
  );
}
