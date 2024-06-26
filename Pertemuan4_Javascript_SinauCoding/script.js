var totalBus = 10;
var busOperations = 6;
var busNumber = 1;

for (busNumber; busNumber <= totalBus; busNumber++) {
    let status;
    if (busNumber <= busOperations) {
      status = "beroperasi dengan baik";
    } else if (busNumber === 8) {
      status = "sedang lembur";
    } else {
      status = "sedang tidak beroperasi";
    }
    
    let text = `Bus transjakarta ${busNumber} ${status}.`;
    
    console.log(text);
  }