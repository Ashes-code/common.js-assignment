let dataBase = require("./export.js");

let firstData = dataBase.dataBase[0].fullname;
console.log(firstData);

function nameAndHobbies(){
  for (let name = 0; name < dataBase.dataBase.length; name++) {
    const names = dataBase.dataBase[name].fullname;
    console.log(names)
  } 
  for (let hobby = 0; hobby < dataBase.dataBase.length; hobby++) {
    const hobbies = dataBase.dataBase[hobby].hobby; 
    console.log(hobbies);
  }
}

nameAndHobbies();

let place = require("./export.js");
console.log(place.names)
console.log(place.nationality)

for (let i = 0; i < dataBase.dataBase.length; i++) {
  const phone = dataBase.dataBase[i].phone;
  console.log(phone);
}
