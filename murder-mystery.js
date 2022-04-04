/* optimal solution

const room = "billiards room";
const suspect = "Mrs. Sparr";

let weapon = "";
let solved = false;

if (room === "ballroom" && suspect === "") {
  weapon = "";
  solved = true;
} else if (room === "ballroom" && suspect === "") {
  weapon = "";
  solved = true;
} else if (room === "ballroom" && suspect === "") {
  weapon = "";
  solved = true;
} else if (room === "ballroom" && suspect === "") {
  weapon = "";
  solved = true;
}

if (solved = true) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} */

var room = "dining room";
var weapon = "";

var suspect = "Mr. Parkes";
var solved = false;

if (room === "ballroom") {
  weapon = "poison";
} else if (room === "gallery") {
  weapon = "trophy";
} else if (room === "billiards room") {
  weapon = "pool stick";
} else {
  weapon = "knife"
}

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
  solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
  solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes") {
  solved = true;
} else {
  solved = false;
}

if (solved === true) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
