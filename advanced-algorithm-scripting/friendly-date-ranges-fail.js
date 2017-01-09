// display friendly date
// if the date range ends in less than a year from when it begins, do not display the ending year
// if the date range begins in the current year and ends within one year, the year should not be displayed at the beginning
// if the range ends in the same month that it begins, do not display the ending year or month.

function makeFriendlyDates(arr) {
  var currentYear = new Date().getFullYear();
  var dateArray = [], yearCompare = [], monthCompare = [];



  function cleanDate(raw) {
    var unformatedDate = new Date(raw);
    var day = unformatedDate.getDate();
    var month = "January,February,March,April,May,June,July,August,September,October,November,December"
      .split(",")[unformatedDate.getMonth()];
    var year = unformatedDate.getFullYear();

    yearCompare.push(day);
    monthCompare.push(month);

    function nth(number) {
      if (number > 3 && number < 21) return 'th';
      switch (number % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    }
    return month + " " + day + nth(day) + ", " + year;
  }


  dateArray.push(cleanDate(arr[0]));
  dateArray.push(cleanDate(arr[1]));


  // if (dateStart === dateEnd) {
  //   console.log(dateStart + ' start and end dates are equal');
  // }



  return dateArray;
}

makeFriendlyDates(["2016-12-01", "2018-02-03"]);
// makeFriendlyDates(['2016-07-01', '2016-07-01']);
