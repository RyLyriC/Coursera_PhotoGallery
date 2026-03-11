/*Name this external file gallery.js*/

function upDate(previewPic){

    // Check that the event is triggering
    console.log("Mouse over event triggered!");

    // Log the alt and src values
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    // Change the text inside the preview area
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image
    document.getElementById("image").style.backgroundImage = 
        "url('" + previewPic.src + "')";
}

	function undo(){

    // Reset background image
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset text
    document.getElementById("image").innerHTML = 
        "Hover over an image below to display here.";
}