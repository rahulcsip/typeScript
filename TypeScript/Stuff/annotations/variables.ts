let profileName:string = "rahul";

let age:number = 25

let  loveTravelling:boolean = true ; 
let nothingMuch:null = null;

let nothing :undefined = undefined ;


// built in objects


let now :Date = new Date();


//array

let colors:string[] = ['red','yellow','blue','white','black'] ;
let myNumbers:number[] = [1,2,3,4,5,6,77];
let truths:boolean[] = [true,false,true,false,false,true,true];


//classes

class Car {

}
let cars:Car = new Car();

//objects Literal

let point :{x:number , y:number }={
    x:10,
    y:20
}


//functions


const logNumber:( i:number )=>void = ( i :number) =>{
    console.log(i);
}


//when to use annotations
// 1) function that returns the 'any' type

const json ='{"x":10,"y":20}'
const coordinates:{x:number; y:number} = JSON.parse(json);   //fix any
console.log(coordinates);   // {x:10,y:20}


// 2) when we declear a variable on one line 
// and initalize it later 

let words = ['red','yellow','green'] ;
let foundWord:boolean ;
for(let i=0;i<words.length;i++){
    if(words[i]=== 'green'){
        foundWord = true
    }
}


//3) variable whoose type cannot be infered correctly

let num = [1,2,-10,0,-30]
let numAboZero:boolean | number = false;

for(let i=0; i < num.length;i++){
    if(num[i]>0){
        numAboZero = num[i]
    }
}