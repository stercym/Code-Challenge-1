function estimateTransactionFee() {
  // ASks user to enter amount
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);

  // Checks if amount entered is a number
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali ingiza kiasi halali cha kutuma.");
    return;
  }

  // Calculates fee based on the given 1.5% percentage of the amount)
  const percentageFee = amountToSend * 0.015;

  // Apply fee limits (KES 10 min, KES 70 max)
  const transactionFee = Math.min(Math.max(percentageFee, 10), 70);

  // Total to be debited
  const totalDebited = amountToSend + transactionFee;

  // Output results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

