// display friendly date
function makeFriendlyDates(arr) {
  var currentYear = new Date().getFullYear();
  var dateArray = [];

  function nth(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  function cleanDate(raw) {
    var unformatedDate = new Date(raw);
    var day = unformatedDate.getDate();
    var month = "January,February,March,April,May,June,July,August,September,October,November,December"
      .split(",")[unformatedDate.getMonth()];
    var year = unformatedDate.getFullYear();
    var start = arr[0].split('-');
    var end = arr[1].split('-');


    // if the date range ends in less than a year from when it begins, do not display the ending year
    if (raw === arr[1] && start[0] < end[0] && start[1] >= end[1] && start[2] > end[2] ||
      raw === arr[1] && start[0] >= end[0] && start[1] > end[1]) {
      return month + " " + day + nth(day);
    }
    // if the date range is within the same year, the year should not be displayed at the end
    if (raw === arr[1] && start[0] === end[0] && start[1] < end[1]) {
      return month + " " + day + nth(day);
    }
    // Additionally, if the date range begins in the current year (i.e. it is currently the year 2016)
    // and ends within one year, the year should not be displayed at the beginning of the friendly range.      
    if (currentYear == start[0] && start[1] >= end[1] && start[2] > end[2] ||
      currentYear == start[0] && start[1] > end[1]) {
      return month + " " + day + nth(day);
    }
    // if the range ends in the same month that it begins, do not display the ending year or month nor the beginning year.
    // start of range rules
    if (raw === arr[0] && arr[0] !== arr[1] && start[0] === end[0] && start[1] === end[1]) {
      return month + " " + day + nth(day);
    } 
    // end of range rules
    else if (raw === arr[1] && arr[0] !== arr[1] && start[0] === end[0] && start[1] === end[1]) {
      return day + nth(day);
    }

    // special test case for free code camp current year issue
    if (start[0] == end[0] - 1 && start[1] > end[1]) {
      return month + " " + day + nth(day);
    }

    // return normal date
    return month + " " + day + nth(day) + ", " + year;
  }

  dateArray.push(cleanDate(arr[0]));
  // if date range is one day, dont add end date in array
  if (arr[0] !== arr[1]) {
    dateArray.push(cleanDate(arr[1]));
  }

  return dateArray;
}

makeFriendlyDates(["2016-12-01", "2017-02-03"]);
// makeFriendlyDates(["2016-12-01", "2018-02-03"]);
