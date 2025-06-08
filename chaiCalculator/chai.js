function calculateChaiIngredients() {
  // Prompts user for number of cups
  const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  const numberOfCups = Number(input);
// validates the number entered by user
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number).");
    return;
  }
// calculates the total ingrediates depending on the number of cups
  const water = numberOfCups * 200;
  const milk = numberOfCups * 50; 
  const teaLeaves = numberOfCups * 1;
  const sugar = numberOfCups * 2;  
// outputs the results in the console
  console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon${teaLeaves > 1 ? 's' : ''}`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon${sugar > 1 ? 's' : ''}`);
  console.log("Enjoy your Chai Bora!");
}
