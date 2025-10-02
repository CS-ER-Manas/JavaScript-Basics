//singleton
//objectLiterals
const mysym=Symbol("key1")
const jsUser={
    name:"Manas",
    "fullName":"Manas Kashyap",
    [mysym]:"mykey1",
    age:18,
    lacation:"Lucknow",
    email:"mak@gmail.com",
    isloggedIn:false,
    

}

// console.log(jsUser.email )
// console.log(jsUser.fullName)
// console.log(typeof jsUser[mysym]);

jsUser.email="maghjkcdwgjkh@gmail.com"

// console.log(jsUser.email);
// Object.freeze(jsUser)

jsUser.name="prakahr sharma"
// console.log(jsUser.name);

jsUser.greeting=function(){
    console.log("hello World!");
    
}
// console.log(jsUser.greeting());
