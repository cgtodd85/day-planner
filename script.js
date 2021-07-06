const scheduleContainer = $(".container");
const saveButtons = $("<button>");
let buttonEl = $(".saveBtn");
let dateHeader = $("#date");
let currentDay = [
  {
    id: "0",
    hour: "09",
    time: "09",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "1",
    hour: "10",
    time: "10",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "2",
    hour: "11",
    time: "11",
    meridiem: "am",
    reminder: "",
  },
  {
    id: "3",
    hour: "12",
    time: "12",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "4",
    hour: "01",
    time: "13",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "5",
    hour: "02",
    time: "14",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "6",
    hour: "03",
    time: "15",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "7",
    hour: "04",
    time: "16",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "8",
    hour: "05",
    time: "17",
    meridiem: "pm",
    reminder: "",
  },
  {
    id: "9",
    hour: "06",
    time: "18",
    meridiem: "pm",
    reminder: "",
  },
];

////////////////////////////////////////////
/////////////////functions//////////////////
////////////////////////////////////////////

function storeCurrentDay() {
  localStorage.setItem("currentDay", JSON.stringify(currentDay));
}

function displayReminders() {
  currentDay.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

buttonEl.on("click", function (event) {
  event.preventDefault();
  let getId = $(this).siblings(".description").children(".future").attr("id");
  console.log(typeof getId);
  currentDay[getId].reminder = $(this)
    .siblings(".description")
    .children(".future")
    .val();
  storeCurrentDay();
  $(this)
    .siblings(".description")
    .children(".future")
    .val(currentDay[getId].reminder);
});

function init() {
  let storedCurrentDay = JSON.parse(localStorage.getItem("currentDay"));
  if (storedCurrentDay !== null) {
    currentDay = storedCurrentDay;
  }
  displayReminders();
}

dateHeader.text(moment().format("[Today is] MMMM Do YYYY"));
init();
console.log(moment());
console.log(currentDay);
