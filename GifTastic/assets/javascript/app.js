

var animals = ["dog", "cat", "rabbit", "skunk", "goldfish", "fish", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", " serval", "salamander", "frog"];

function displayGiphys(){
	var movie = $(this).attr("data-name");
	var queryURL = "http://giphy.com/";

	 $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          $("#animal-view").html(JSON.stringify(response));
          renderButtons();
        });
      }

function renderButtons(){

	$("#animalButtons").empty();

	for(var i = 0; i< animals.length; i++){

		var a = $("<button>");

		a.addClass("animal");
		a.attr("data-name", animals[i]);
		a.text(animals[i]);
		$("#animalButtons").append(a);
	}
}

$("#addAnimal").on("click", function(event) {
	event.preventDefault();


var animal = $("#animal-input").val().trim();

animals.push(animal);
console.log(animals);

renderButtons();
});

$(document).on("click", ".animal", displayGiphys);

renderButtons();
