
$(document).ready(function() {
    for (var i = 9; i < 18; i++) {

       var row = $("<div>").addClass("row time-block").appendTo(".container");
        $("<div>").addClass("hour col-1").appendTo(row);
        $("<textarea>").addClass("description col past").attr("placeholder", "add event here").appendTo(row);
        $("<button>").addClass("saveBtn col-1 fas fa-save").appendTo(row);
    }
})