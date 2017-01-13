/*External JavaScript */
// alert('External JavaScript is working!');

//Grab the Image Gallery UL, and output to console
var gallery = document.getElementById('imagegallery');
console.log(gallery);

//Capture all links on the page and output to console
var links = document.getElementsByTagName('a');
console.log(links);

// Get the alt attribute from the IMG#placeholder;
var img = document.getElementById('placeholder');
var alt = img.getAttribute('src');
console.log(alt);

//Change colour of paragraph
var para = document.getElementById('description');
para.setAttribute('style','color: red;');
