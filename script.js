// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let integrityCheck = [0, 0, 0, 0];
      let fields = ["Pilot Name", "Co-pilot Name", "Fuel Level", "Cargo Mass"];
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      
      if (pilotName.value.length == 0){
         integrityCheck[0] = 1;
         
      }
      if (copilotName.value.length == 0){
         integrityCheck[1] = 1;
         
      }
      if (fuelLevel.value.length == 0){
         integrityCheck[2] = 1;
         
      } else if (isNaN(fuelLevel.value)){
         integrityCheck[2] = 10;
      }

      if (cargoMass.value.length == 0){
         integrityCheck[3] = 1;
      } else if (isNaN(cargoMass.value)){
         integrityCheck[2] = 100;
      }

      // Create a sum of all the values in integrityCheck
      let integritySum = integrityCheck.reduce(function(a, b){
         return a + b;
      },0);
      
      if (integritySum == 1){
         let missingField = fields[integrityCheck.indexOf(1)];
            alert(`Please, make sure you fill out ${missingField} before submission.`);
      } else if (integritySum > 1 && integritySum < 10) {
         alert("Multiple fields unfilled. Please, make sure you fill them out before submission.");
      } else if (integritySum == 10) {
         alert("Fuel Level requires a number. Please, enter a valid value before submission");
      } else if (integritySum > 10 && integritySum < 100){
         alert("Fuel Level requires a number, also all fields must be filled out before submission");
      } else if (integritySum == 100){
         alert("Cargo Mass requires a number. Please, enter a valid value before submission");
      } else if (integritySum > 100 && integritySum < 110){
         alert("Cargo Mass requires a number, also all fields must be filled out before submission");
      } else if (integritySum == 110) {
         alert("Fuel Level and Cargo Mass require numbers. Please, enter valid values before submission");
      } else if (integritySum > 110){
         alert("Fuel Level and Cargo Mass require numbers, also all fields must be filled out before submission");
      } else {
         alert("You are good to go!");
      }
 
      
   });
   // Updating shuttle requeriments
   let pilotStatus = document.getElementById("pilotStatus");
   
});