$(document).ready(function() {
    $("#currentDay").text(moment().format("MMM Do YYYY"));

    for (var i = 9; i < 18; i++) {

        //create row
        var row = $("<div data-time=${i} id='${i}'>");
        row.addClass("row time-block");
        //hour
        var hourDiv = $("<div>");
        hourDiv.addClass("hour col-1");
        //text
        var descriptionText = $("<textarea>");
        descriptionText.addClass("description col past")
        descriptionText.attr("placeholder", "add event here")
        //save button
        var saveButton = $("<button>");
        saveButton.addClass("saveBtn col-1 fas fa-save");
        //append hour text and save button to row
        row.append(hourDiv);
        row.append(descriptionText);
        row.append(saveButton);
        //append row to container
        $(".container").append(row);
    }
})