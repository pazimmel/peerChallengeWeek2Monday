//need a function to randomly generate numbers

//need a Generate Property function
	//activated by a button
	//1 property is 
		//property ID
		//sq footage
		//cost per sq ft
	//make lots of properties(for loop)

//need a remove function
	//activated by a button
	//takes the corresponding property away

//do some CSS for backgrounds and stuff

var propertyID, propertyFootage, propertyCPSF;// propertyCPSF is cost per square foot
var property;

$(document).ready(function(){

	$("#container").append("<button class ='generateDigits'>Generate Property</button>")
	
	$("#container").on('click', '.generateDigits', function(){
		//generate 10 random properties
		//for(var i = 0; i<10; i++) {
		appendDom(generate1Property());
		//}
	});
	removeProperty();
});

function generate1Property() {
	//generate property ID
	propertyID = randomNumber(100,9999);
	//generate sq footage
	propertyFootage = randomNumber(1000,9999);
	//generate cost
	propertyCPSF = randomNumber(1,25);
	//make 1 property
	property = [propertyID,propertyFootage,propertyCPSF];
	return property

}


function removeProperty() {
	$("#container").on('click','.removeButton', function(){
			$(this).parent().slideUp();
	});
}

function appendDom(prop){
	//put properties in container id
	//give each property its own div
	$("#container").append("<div class = 'property'></div>");
	//display each part of property
	var $el = $("#container").children().last().hide().slideDown().fadeIn(1000);
	$el.append("<p>Property ID: "+ prop[0]+"</p>");
	$el.append("<p>"+ prop[1]+" Sq. FT.</p>");
	$el.append("<p>$"+ prop[2]+" / sq.ft.</p>");
	$el.append("<button class = 'removeButton'>Remove</button>");
}

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}