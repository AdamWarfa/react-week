let n:number;

n = "hello"

const numList:number[] =[];
const numList2:Array<number> =[];

interface Person {
    id?:string,
    name:string,
    age:number,

}

const persons:Person[] = [];

persons.push({name:"John",age:25});

function createPerson(name:string,age:number):Person{
    return {name,age};
}

persons.push(createPerson("Jane",30));