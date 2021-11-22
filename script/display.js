function displayCards(aPet){
    let petsDiv=document.getElementById("pets");
    let tmp=`
    <div class="bg">
    <h1>${aPet.name}</h1>
    <p>Age: ${aPet.age} </p>
    <p>Gender: ${aPet.gender}</p>
    <p>Breed: ${aPet.breed}</p>
    <p>Service: ${aPet.service}</p>
    <p>Owner: ${aPet.owner}</p>
    <p>Phone: ${aPet.phone}</p>
    </div>`;
    petsDiv.innerHTML+=tmp;
    
}
