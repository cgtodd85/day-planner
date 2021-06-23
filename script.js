const scheduleContainer = $(".container");
// let formEl = $(
//   '<form class="row"><div class="col-md-2 hour">09am</div><div class="col-md-9 description p-0"><textarea id="0" class="past"></textarea></div><button class="col-md-1 saveBtn"></button></form><form class="row"><div class="col-md-2 hour">10am</div><div class="col-md-9 description p-0"><textarea id="1" class="past"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">11am</div><div class="col-md-9 description p-0"><textarea id="2" class="past"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">12pm</div><div class="col-md-9 description p-0"><textarea id="3" class="past"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">01pm</div><div class="col-md-9 description p-0"><textarea id="4" class="present"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">02pm</div><div class="col-md-9 description p-0"><textarea id="5" class="future"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">03pm</div><div class="col-md-9 description p-0"><textarea id="6" class="future"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">04pm</div><div class="col-md-9 description p-0"><textarea id="7" class="future"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form><form class="row"><div class="col-md-2 hour">05pm</div><div class="col-md-9 description p-0"><textarea id="8" class="future"></textarea></div><button class="col-md-1 saveBtn"><i class="far fa-save fa-lg"></i></button></form></div>'
// );
const saveButtons = $("<button>");
let buttonEl = $(".saveBtn");
// let userInput = $('textarea[id = "0"]').val();
// let userInput = $("<form>").val();

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

let userInput = $("<textarea>").text;
function storeCurrentDay() {
  localStorage.setItem("currentDay", JSON.stringify(currentDay));
}

function createSchedule() {
  scheduleContainer.append(formEl);
}

function saveReminder() {
  console.log(userInput);
  userInput = currentDay[0].reminder;
  storeCurrentDay();
}

buttonEl.on("click", function (event) {
  event.preventDefault();
  let getId = $(this).siblings(".description").children(".future").attr("id");
  currentDay[getId].reminder = $(this)
    .siblings(".description")
    .children(".future")
    .val();
  storeCurrentDay();
});
/* 
create table 
time section, input section, save button

set current day as local storage

input into form should have function to save to local storage
and set as the value of the form




*/
