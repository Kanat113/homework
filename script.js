
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 1996,
    color: 'blue',
    displayInfo: function () {
     return this.brand + " " + this.model + " " + this.year + " " + this.color
    }
  
}
console.log('############# Car ############');
console.log(car.model);
console.log(car.year = 2007);
console.log(car.color = 'red' );



console.log(delete car.model);
console.log(car.model);
console.log(car.displayInfo());

let newProp = 'weight'
let reifen = 'tires'
console.log(car[newProp] = 5000);
car[reifen] = 'continental'
console.log(car.tires);
 console.log(car);



const person = {
    name: "Kanat",
    weight: 80,
    adress: {
        strasse: 'Achunbaeva 12',
        stadt: 'Bishkek'
    }
}


console.log('############# Person ############');
console.log('name: ', person.name);
console.log('strasse: ',person.adress.strasse);
console.log('stadt: ', person.adress.stadt);
console.log('salmagu:', person.weight);








