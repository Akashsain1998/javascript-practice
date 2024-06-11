// primitive
// 7 types of primitive:  string, number, boolean, null, undefined, symbol(this means kisi chij ko unique bnane ke liye jese rect me component ko unique bana hai ), BigInt(this means big value of number)

let string = "hello akash";
//console.log(typeof string) // iska string hi atta hai data types

let number = 2;
//console.log(typeof number)  // iska number hi aata hai data tupes

let boolean = true; 
//console.log(typeof boolean); // iska boolean hi aaat hai data types

const Null = "";
//console.log(typeof null);  // iska object aata hai data types

let variable;
//console.log(typeof variable) // iska undefined ayega data types

const id = Symbol('12');
//console.log(typeof id); // iska symbol ayega data types

const bigInt = 5252525215221452n;
//console.log(typeof bigInt); // iska bigint ayega data types



// reference (Non-primitive) ( ye wo hai jinka reference apko memory me allocate kiya ja skata hai)
//3 types
//Array, objects, functions

//const Car = ['bmw', 'audi', 'jaguar'];

//console.log(typeof Car);  // iska object ayega data types


const Object = {

    name:"akash",
    age:19

}

//console.log(typeof Object) // iska to object hi ayega data types


const Function = function(){
    //console.log("hello world");
}
//console.log(typeof Function); // iska function ayega data types


////////////////////////////////////////////////////////////////

// two types of memory 
// stack(primitive)  is memory me value ki copy banti hai 
// heap (non-primitive) is memory me value ka reference milta hai 

let myname = "akash";

let Anothername = myname;
 Anothername = "kumar";
//console.log(myname);
//console.log(Anothername);


let userOne =
{
 email:"akash@123",
 age:18
}
let userTwo = userOne;
userTwo.email = "kumar@123"


console.log(userOne.email);
console.log(userTwo.email);


