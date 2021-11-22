console.log("Register page");
let house={
    name: "The Photogapher Pet House",
    address:{
        street:"Univeristy",
        number:"1234-G",
        zipcode: "92154",
        state:"CA",
        city:"San Diego",
    },
    hours:{
        open:"9:00 am",
        close:"22:00 pm"
    },
    pets:[] 
}

// create a Pet constructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
let tito = new Pet("Tito",34,"Male","Wolf","Headshots","Big Tidd","222-222-2222");
let sam = new Pet("Sam",22,"Female","lazy","Boudior","Ronda","333-333-3333");
let mike = new Pet("Mike",13,"Male","Shitzu","Fashion","Tone","444-444-4444");
house.pets.push(mike,tito,sam);
console.log(house.pets);
displayCards(tito);
displayCards(sam)
displayCards(mike);

// get the values from the input
let txtName=document.getElementById("petName");
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender");
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService");
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone");
function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    let newPet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
    house.pets.push(newPet);
    console.log(house.pets);
    displayCards(newPet);
    clear();
//create a constructor using the values from the input
//push it into the array
//display on the console
//clear the inputs
}
// create three pets using the constructor

function clear(){
    txtName.value = '';
    txtAge.value = '';
    txtGender.value = '';
    txtBreed.value = '';
    txtService.value = '';
    txtOwner.value = '';
    txtPhone.value = '';

}
function simpleDisplay(){
  // console.log(house.pets[0].name);

/*for(d=0;d<pets.length;d++){
    console.log(house.pets[d].name);
}*/

}
simpleDisplay();



