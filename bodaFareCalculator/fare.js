function calculateBodaFare() {
  // Prompts user to enter distance to cover to destination
  const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  const distanceInKm = Number(input);
// validates that the user input is actually a number
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali ingiza umbali halali kwa kilomita.");
    return;
  }
//calculates fare based on the distance
  const baseFare = 50; 
  const chargePerKm = 15;
  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;
//prints out the output
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}
