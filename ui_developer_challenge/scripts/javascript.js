/*
	Author: Eromosele Donald Odanmen.
	File Type: External JavaScript DOcument.
	File Name: script.js
	Purpose: Client-Side Scripting for added functionality, interactivity and dynamism of the CurrencyFair Web Page.
*/

$(document).ready(function() {									// This function ensures that nothing is executed, until the HTML document has been fully loaded within the browser window and is ready.
	$("button#button_next").click(function() {					// This function displays (fades in) the Grey Background Area and the Identity Verification Section within the FIRST PANEL div, once the NEXT button has been clicked.
		$("div#grey_bg_area").fadeIn("normal");
		$("main div#first_panel section:last-of-type").fadeIn("normal");
	});
	
	$("div#grey_bg_area").click(function() {					// This function hides (fades out) both the Grey Background Area and the Identity Verification Section within the FIRST PANEL div, once the Grey Background Area is clicked on.
		$("div#grey_bg_area").fadeOut("normal");
		$("main div#first_panel section:last-of-type").fadeOut("normal");
	});
});