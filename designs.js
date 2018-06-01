
function makeGrid(width, height)        // grid generation based on user input
{
	let pixelCanvas, grid;
	pixelCanvas = $('#pixel_canvas');
	if (pixelCanvas.children().length) {
		pixelCanvas.empty();
	}
	for(let i = 0; i < height; i++) {
		grid += "<tr>";
		for (let j = 0; j < width; j++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	pixelCanvas.html(grid);
	pixelCanvas.css("background-color", "#ffffff");
};

$(document).ready(function(){
	$('#submit-btn').click(function(evt) {
		let height, width;
		width = $('#input_width').val();      //user input values for width
		height = $('#input_height').val();       //user input value for height
		evt.preventDefault();
		makeGrid(width, height);
	});

	$('#pixel_canvas').click(function(evt) {
		let color = $('#colorPicker').val();
		$(evt.target).css('background-color', color);     //for picking the color
	});
});









