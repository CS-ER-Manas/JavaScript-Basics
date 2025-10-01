//primitive
/*7types:String,Number,Boolean,null,undefined,Symbol,BigInt */

const score=100
const scoreValue=100
const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);

const bigNumber=123456789012345678n
//Reference(Non primitive)
//Array,object,functions

const heros=["saktiman","nagRaj","doga"]
let obj={
    name:"manas",
    age:23

}
const Myfunction=function(){
console.log("Hello world!");

}
// console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++
//Stack (Primitive),Heap (Non-primitive)
let myYTName="ramaNand"
let anothername=myYTName
anothername="ramaSagar"

// console.log(anothername)
// console.log(myYTName);

let userOne={
    email:"usre@google.com",
    upi:"ybl@payment"
}
let userTwo=userOne
userTwo.email="manansa@dfgtrdhujeikx"
console.log(userOne.email);

console.log(userTwo.email);
