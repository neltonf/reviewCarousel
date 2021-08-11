var people = [
  ["img\\Aayu.PNG", "Aayush Srivastava", "hotel manager"],
  ["img\\Radha.PNG", "Anuragh Singh", "VESIT student"],
  ["img\\Siso.PNG", "Varun Singh", "digital marketer"],
  ["img\\Swap.PNG", "Swapnil Undage", "DMCE student"],
  ["img\\Nelton.jpeg", "Nelton Fernandes", "DEveloper"],
];
var pointer = 0;
var leftOption = document.getElementById("left");
var rightOption = document.getElementById("right");
var suprise = document.getElementById("btn");

console.log(people[pointer][1]);
document.getElementById("face").src = people[pointer][0];
document.getElementById("name").innerHTML = people[pointer][1];
document.getElementById("proffesion").innerHTML = people[pointer][2];

leftOption.addEventListener("click", function () {
  if (pointer > 0) {
    pointer -= 1;
    console.log(people[pointer][1]);
    document.getElementById("face").src = people[pointer][0];
    document.getElementById("name").innerHTML = people[pointer][1];
    document.getElementById("proffesion").innerHTML = people[pointer][2];
    if (pointer < 0) {
      pointer = 0;
    }
  }
});

rightOption.addEventListener("click", function () {
  if (pointer < people.length) {
    pointer += 1;
    if (pointer > 4) {
      pointer = 4;
    }
    document.getElementById("face").src = people[pointer][0];
    document.getElementById("name").innerHTML = people[pointer][1];
    document.getElementById("proffesion").innerHTML = people[pointer][2];
    console.log(pointer);
  }
});

suprise.addEventListener("click", function () {
  randomPtr = Math.floor(Math.random() * people.length);
  while (randomPtr == pointer) {
    randomPtr = Math.floor(Math.random() * people.length);
  }
  console.log(people[pointer][1]);
  document.getElementById("face").src = people[randomPtr][0];
  document.getElementById("name").innerHTML = people[randomPtr][1];
  document.getElementById("proffesion").innerHTML = people[randomPtr][2];
  pointer = randomPtr;
});
