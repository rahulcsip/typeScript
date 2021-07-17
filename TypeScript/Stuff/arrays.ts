const carMarkers:string[] = ['ford','honda','tata'];
const dates:Date[] = [new Date(), new Date()];

const carsByMake: string[][]=[];


//Help with inference when extracting values

const car = carMarkers[0];

const myCar = carMarkers.pop();


//help with 'map'

carMarkers.map((car:string):string=>{
    return car;
})