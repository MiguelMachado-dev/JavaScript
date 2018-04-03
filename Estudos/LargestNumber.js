var x = prompt("Type a number:");
var y = prompt("Type another number:");
var z = prompt("Ok, the last one:");

if ( (x > z) && (x > y) ) {
  document.write("<h1> The largest number is: " + x + "</h1");
} else if ( (y > z) && (y > x) ) {
  document.write("<h1> The largest number is: " + y + "</h1>");
} else {
  document.write("<h1> The largest number is: " + z + "</h1>");
}

// Yay works!
