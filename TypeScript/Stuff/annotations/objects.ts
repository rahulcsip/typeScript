const profile = {
    name:'rahul',
    age:25,
    coords:{
        lat:0,
        lng:20
    },
    setAge(age:number):void{
        this.age= age;
    }
}

const { age,name}:{age:number , name: string} = profile

const { coords: {lat,lng}}:{coords:{lat:number , lng:number}} = profile