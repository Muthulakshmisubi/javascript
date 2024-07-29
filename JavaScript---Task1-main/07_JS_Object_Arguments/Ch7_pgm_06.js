// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

var spaces = function (numSpaces) {
  numSpaces = Math.max(0, numSpaces);
  numSpaces = Math.min(40, numSpaces);
  return Array(numSpaces + 1).join(" ");
};

var emptyBox = function (width) {
  width = Math.max(0, width);
  width = Math.min(40, width);
  var topAndBottom = line(width);
  var middle = "|" + spaces(width - 2) + "|";
  console.log(topAndBottom);
  for (var i = 0; i < 3; i++) {
      console.log(middle);
  }
  console.log(topAndBottom);
};

// Test line lengths from -20 to 60 in steps of 10
for (var i = -20; i <= 60; i += 10) {
  console.log("Line length: " + i);
  console.log(line(i));
  console.log();
}

// Test the spaces function
for (var i = -20; i <= 60; i += 10) {
  console.log("Spaces: " + i);
  console.log(spaces(i));
  console.log();
}

// Test the emptyBox function
emptyBox(12);