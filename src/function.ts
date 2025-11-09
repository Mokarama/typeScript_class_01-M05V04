//Function
//arrow function , normal function

function addNormal(num1:number, num2:number) : number{
    return num1 + num2;
};

//arrow function
const addArrow =(num3:number, num4:number): number =>num3 + num4;

addNormal(2, 2);
addArrow(2, 6);



//object => function => method

const poorUser={
    name:'Shanta',
    ballance:0,

    addBallance(value: number): number{
    const totalbalance= this.ballance + value;
    return totalbalance;

    },
};

poorUser.addBallance(100000);

const arr: number[]=[1, 2, 3,4];

const sqrArray = arr.map((element:number):number =>element * element);

console.log(sqrArray)