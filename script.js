var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
$(document).ready(function() {
    //display current day
    $("#currentDay").text(moment().format("MMM Do YYYY"));
    for (var i = 9; i < 18; i++) {
        //append row to container
        var row = $("<div>").addClass("row time-block").appendTo(".container");
        //append hour to row
        $("<div>").addClass("hour col-1").text(getHours(i)).attr("id", "row-time").appendTo(row);
        //append text area to row
        $("<textarea>").addClass("description col past").attr("id", "savedToDo").appendTo(row);
        //append button to row
        $("<button>").addClass("saveBtn col-1 fas fa-save").appendTo(row);
    }
    //function to add hours to each row which is called in the for loop above 
    function getHours(hours) {
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    getHours();
})
//locale storage 
//save button
// change color 
