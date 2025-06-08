## Challenge 1: Chai Bora Ingredient Calculator

This JavaScript application calculates the required ingredients to make a given number of cups of Kenyan Chai (Chai Bora). The function is interactive and user-friendly, designed to run in a browser environment using the prompt() function to gather user input.

Breakdown of the Code:
The function calculateChaiIngredients starts by prompting the user:
"Karibu! How many cups of Chai Bora would you like to make?"

The input is converted from a string to a number using Number().

Basic validation checks whether the input is a positive number. If the input is invalid, the user receives a Swahili-friendly message and the function exits.

Ingredient quantities are calculated based on the number of cups:

Water: 200 ml per cup

Milk: 50 ml per cup

Tea Leaves (Majani): 1 tablespoon per cup

Sugar (Sukari): 2 teaspoons per cup

The output is printed to the console in a clear, conversational format, showing all the ingredient quantities.

Pluralization is handled so the words "cup," "tablespoon," and "teaspoon" adjust based on quantity.

The final message encourages the user to enjoy their Chai Bora.

## Challenge 2: Boda Boda Ride Fare Estimator 

The function calculateBodaFare prompts the user with:
"Unafika wapi Mkubwa? Kilometer ngapi?"

The input is parsed into a number using Number().

Input validation checks for non-numeric or zero/negative values and exits if invalid.

Constants are defined:

Base fare: KES 50

Per kilometer charge: KES 15

The total fare is calculated with the formula:
totalFare = baseFare + (distanceInKm * chargePerKm)

Output is printed to the console with a breakdown:

Stating the distance

The base charge

The distance-based charge

The total amount

The final line says: "Panda Pikipiki!", encouraging the user to take the ride.

## Challenge 3: Simplified Mobile Money Transaction Fee Estimator

A lightweight calculator that estimates the transaction fee based on a 1.5% rule
with minimum (KES 10) and maximum (KES 70) fee constraints. It prompts the user for 
the amount to be sent and displays the fee along with the total debited.

The function estimateTransactionFee begins by prompting the user:
"Unatuma Ngapi? (KES):"

The input is parsed into a number using Number().

Validation ensures the user has entered a valid, positive amount.
Conditional logic using Math.max() and Math.min() ensures:

Minimum fee is KES 10

Maximum fee is KES 70

The result is printed clearly:

Amount being sent

Calculated transaction fee

Total amount to be debited

Final message: "Send Money Securely!" encourages safe transactions.


### Author: Stercy Mutuku
### MIT Licence
