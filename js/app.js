//Problem-user when clicking on img goes to dead edd
//Solution-create an overlay with large iamage
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")
// An image to the overlay
$overlay.append($image);
 //aded ovelay
$("body").append($overlay);


	// A caption

	$overlay.append($caption)

//1. capture the click event on a link to an image
	//1.1.show the overlay
	$("#imageGallery a").click(function( event) {
		event.preventDefault();
		var imageLocation = $(this).attr("href");
		//1.2 update overlay with the img linked in the link
		$image.attr('src', imageLocation);

		//1.1.show the overlay

		$overlay.show();
				
			// 1.3 get childs alt attribute and set caption
			var captionText = $(this).children('img').attr("alt");
			$caption.text(captionText);
			});
	
	// 1.3 get childs alt attribute and set caption


	
//3. when overlay is clicked 
	$overlay.click(function() {
		//3.1 hide the overlay
		$overlay.hide();
	});
	
