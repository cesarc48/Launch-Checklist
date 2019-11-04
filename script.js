// Write your JavaScript code here!
window.addEventListener("load", function(event){
fetchPlanet();
validate();
})
function validate(){

document.addEventListener("submit", function(event){
   let pilotName = document.getElementById("pilotName").value;
   let copilotName = document.getElementById("copilotName").value;
   fuelLevel = document.getElementById("fuelLevel").value;
   cargoMass = document.getElementById("cargoMass").value;
   console.log(pilotName, copilotName, fuelLevel, cargoMass)

      event.preventDefault();
      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === ""){
         alert("NO FIELD CAN BE EMPTY");
      } else {
         if (!isNaN(pilotName)){
            alert("Check 'Pilot Name' Field")
         }
         else if (!isNaN(copilotName)){
            alert("Check 'Co-Pilot Name' Field")
         }
         else if (isNaN(fuelLevel)){
            alert("Check 'Fuel Level' Field")
         }
         else if (isNaN(cargoMass)){
            alert("Check 'Cargo Mass' Field")
         }
         else {
            updateShuttleStatus();
         }
      }

})
 
}

function updateShuttleStatus(){
   let faultyItems = document.getElementById("faultyItems")
   let pilotStatus = document.getElementById("pilotStatus")
   let copilotStatus = document.getElementById("copilotStatus")
   let fuelStatus = document.getElementById("fuelStatus")
   let cargoStatus = document.getElementById("cargoStatus")
   let launchStatus = document.getElementById("launchStatus")

   if (fuelLevel >= 10000 && cargoMass <= 10000){
      faultyItems.style.visibility="hidden"
      fuelStatus.innerHTML="Sufficient Fuel"
      cargoStatus.innerHTML="Sufficient Cargo Mass"
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color="green"
   } else {
      if (fuelLevel < 10000){
         faultyItems.style.visibility="visible"
         fuelStatus.innerHTML="NOT ENOUGH FUEL"
         launchStatus.innerHTML = "Shuttle NOT ready for launch";
         launchStatus.style.color="red"
      } else {
         fuelStatus.innerHTML="Sufficient Fuel"
      }
      if (cargoMass > 10000){
         faultyItems.style.visibility="visible"
         cargoStatus.innerHTML="TOO MUCH WEIGHT"
         launchStatus.innerHTML = "Shuttle NOT ready for launch";
         launchStatus.style.color="red"
      } else {
         cargoStatus.innerHTML="Sufficient Cargo Mass"
      }
   }
}

function fetchPlanet(){
   let missionTarget= document.getElementById("missionTarget")
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
               // Access the JSON in the response
               response.json().then( function(json) {
                  missionTarget.innerHTML = `<h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img src="${json[0].image}"></img>`
               });
            });
   
}
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
