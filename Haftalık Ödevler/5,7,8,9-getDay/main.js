var day = new Date().getDay();

// Immedia function

(function (currentDay) {
  switch (currentDay) {
    case 1:
      document.write("Immedia Function: Bugün pazartesi");
      break;
    case 2:
      document.write("Immedia Function: Bugün salı");
      break;
    case 3:
      document.write("Immedia Function: Bugün çarşamba");
      break;
    case 4:
      document.write("Immedia Function: Bugün perşembe");
      break;
    case 5:
      document.write("Immedia Function: Bugün cuma");
      break;
    case 6:
      document.write("Immedia Function: Bugün cumartesi");
      break;
    case 7:
      document.write("Immedia Function: Bugün pazar");
      break;
  }
})(day);

document.write("<br><br>");

// Arrow function

var currentDay = (day) => {
  switch (day) {
    case 1:
      document.write("Arrow Function: Bugün pazartesi");
      break;
    case 2:
      document.write("Arrow Function: Bugün salı");
      break;
    case 3:
      document.write("Arrow Function: Bugün çarşamba");
      break;
    case 4:
      document.write("Arrow Function: Bugün perşembe");
      break;
    case 5:
      document.write("Arrow Function: Bugün cuma");
      break;
    case 6:
      document.write("Arrow Function: Bugün cumartesi");
      break;
    case 7:
      document.write("Arrow Function: Bugün pazar");
      break;
  }
};

currentDay(day);

document.write("<br><br>");

// Anonymous function

let currentDay2 = function (day){
  switch (day) {
    case 1:
      document.write("Anonymous Function: Bugün pazartesi");
      break;
    case 2:
      document.write("Anonymous Function: Bugün salı");
      break;
    case 3:
      document.write("Anonymous Function: Bugün çarşamba");
      break;
    case 4:
      document.write("Anonymous Function: Bugün perşembe");
      break;
    case 5:
      document.write("Anonymous Function: Bugün cuma");
      break;
    case 6:
      document.write("Anonymous Function: Bugün cumartesi");
      break;
    case 7:
      document.write("Anonymous Function: Bugün pazar");
      break;
  }
 }

 currentDay2(day);
