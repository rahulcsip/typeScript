const add = (a:number , b:number):number=>{
    return a+b;
}

const sub = (a:number, b:number)=>{
    return a-b;
}

function divide(a:number, b:number):number{
    return a/b;
}

const mul = function(a:number, b:number):number{
    return a*b;
}


//void

const logger = (message:string):void=>{
    console.log(message);
    
}

//never 

const throwError = (message:string):never=>{
    throw new Error(message)
    
}


// Destructuring with annoatation


const todayWeather = {
    date:new Date(),
    weather:'sunny'
}

const logWeather = (todayWeather:{date:Date, weather:string}):void=>{
    console.log(todayWeather.date);
    console.log(todayWeather.weather);
}

logWeather(todayWeather)

//ES15

const logWeathers = ({date,weather})=>{
    console.log(date);
    console.log(weather);
}

//with annotation

const logWeatherss = ({date,weather} :{date:Date, weather:string}):void=>{
    console.log(date);
    console.log(weather);
}
