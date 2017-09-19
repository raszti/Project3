$("#submit_size").click(makeGrid);

// Select size inputs
const gridWidth = $("#input_width");

const gridHeigth = $("#input_height");

// Select color input
const colorPicker = $("#colorPicker");

// Select canvas
const canvas = $("#pixel_canvas")

// When size is submitted by the user, call makeGrid()
function makeGrid() {

  console.log("makeGrid called.");

  // Clear current grid
  canvas.empty();

  // Drawing the grid
  for (let r = 0; r < gridHeigth.val(); r++){
    $("#pixel_canvas").append("<tr></tr>");

    for (let c = 0; c < gridWidth.val(); c++){
      $("tr").last().append("<td></td>");
    }

  // Set onclicklistener on the canvas
  canvas.on("click","td", function(){
    $(this).css('background-color', colorPicker.val());
  });

  event.preventDefault();
}
}
