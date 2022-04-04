let category;
const eatsPlants = true;
const eatsAnimals = true;

// eatsPlants && !eatsAnimals ? category = "herbivore";
// !eatsPlants && eatsAnimals ? category = "carnivore";
// eatsPlants && !eatsAnimals ? category = "omnivore";
// !eatsPlants && !eatsAnimals ? category = "undefined";

// let category = eatsAnimals ? (eatsPlants ? "omnivore" : "carnivore") : (eatsPlants ? "herbivore" : "undefined");

category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

console.log(category);