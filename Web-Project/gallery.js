function change_image(select){
	var image = document.getElementById("flavour");
	image.src = select.options[select.selectedIndex].value;
}
