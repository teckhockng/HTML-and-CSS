// Image Gallery JavaScript
// This code adapted from the book, DOM Scripting by Jeremy Keith (http://domscripting.com/book/), as found in chapter 4.

// STEP 1a - Wait until the DOM is ready to be manipulated
document.addEventListener('DOMContentLoaded', function() {
	// console.log('DOM Ready!');
// STEP 2a - Grab the UL for the image gallery and assign it to the variable 'gallery'
var gallery = document.querySelector('ul#imagegallery');
console.log(gallery);
// STEP 2b - Create an array composed of all the A (anchor) elements inside that UL, now referred to as 'gallery'
var links = gallery.getElementsByTagName('a');
console.log(links);
// STEP 2c - Create a loop that iterates through each item in the links array that we just created
	for (var i=0; i< links.length; i++) {
// STEP 3a - For each one of those A elements, attach an onclick attribute that calls an anonymous function
		//console.log(i);
		links[i].onclick = function() {
// STEP 4a - For the link that was clicked, capture the value of the href attribute as a variable called 'source'
			var source = this.getAttribute('href');
			console.log(source);
// STEP 4b - Grab the IMG element with the id 'placeholder' and assign it to the variable of the same name
			var placeholder = document.getElementById('placeholder');
			//console.log(placeholder);
// STEP 4c - Change the image file that the IMG element points to in the src attribute based on the link clicked
			placeholder.setAttribute('src', source);
// STEP 5a - Capture the title attribute of the link clicked and assign it as the value for the variable 'text'
			var description = this.getAttribute('title');
			console.log(description);
// STEP 5b - Grab the P element with the id 'description'
			var descPara = document.getElementById('description');
			console.log('descPara');
// STEP 5c - Set the content of that paragraph to the value of the title attribute for the link clicked
			descPara.firstChild.nodeValue = description;
// STEP 3c - Cancel the default behaviour of each hyperlink (which is to follow the href)
			return false;
// STEP 3b - End the 'onclick' event anonymous function
		}
// STEP 2d - End the loop through the links array
	}
// STEP 1b - End the DOM ready function
});
