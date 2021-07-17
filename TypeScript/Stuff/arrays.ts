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


//multiple type in array

const importantDates:(Date | string)[]= [new Date()];
importantDates.push('2021-7-17')
importantDates.push('2020-7-17')