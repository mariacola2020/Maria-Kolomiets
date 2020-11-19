console.log("Hello, Maria!");
//
let name = " Maria Kolomiets";
let age = 18;
let survived = true;
let city = "Tallinn";
let commentary = "";
let drivingLicense = "";
//console.log("Character: ", name, ". Age: ", age, ".City: ", city);
console.log(`Caracter: ${name}. Age: ${age}. City: ${city}.`);


console.log(`Character ${name} ${commentary}`);

if(age < 18) {
    drivingLicense =`${name} is too young to drive a car.`;
}else{
    drivingLicense =`${name} is old enough to drive a car.`;
}

console.log(drivingLicense);

const html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>She ${commentary}</li>
<li>${drivingLicense}</li>
</ul>
`;

document.body.innerHTML = html;