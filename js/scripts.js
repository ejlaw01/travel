// backend logic
function travel(place, year, landmarks, highlights, image){
  this.place = place;
  this.year = year;
  this.landmarks = landmarks;
  this.highlights = highlights;
  this.image = image;
}




// frontend logic
$("form").submit(function(event){
  event.preventDefault();
  var inputPlace = $("#place").val();
  var inputYear = $("#year").val();
  var inputLandmarks = $("#landmarks").val();
  var inputHighlights = $("#highlights").val();
  var inputImage = $("#image").val();

  var newTravel = new travel(inputPlace, inputYear, inputLandmarks, inputHighlights, inputImage);

  $(".output").append("<li>" + inputPlace + "</li>");

  $(".output li").last().click(function(){
    $(".details").show();
    $(".details h2").text(newTravel.place);
    $("#specificYear").text(newTravel.year);
    $("#specificLandmarks").text(newTravel.landmarks);
    $("#specificHighlights").text(newTravel.highlights);
    $("#specificImage").html("<img src='" + newTravel.image + "'>");
  });

  $("#place").val("");
  $("#year").val("");
  $("#landmarks").val("");
  $("#highlights").val("");

});
