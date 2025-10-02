const tinderUser={}
tinderUser.id="1223abc"
tinderUser.name="manas kashayp"
tinderUser.isloggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        UserFullName:{
            fristName:"Manas",
            lastName:"Kashayp"
        }
    }
}

// console.log(regularUser.fullname.UserFullName.fristName)
// console.log(...regularUser);
 
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:"1234",
        email:"m@gmail.com"
    },
     {
        id:"1234",
        email:"m@gmail.com"
    },
     {
        id:"1234",
        email:"m@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('islogged'));

const course ={
    courseInstructor:"manas",
    price:'999',
    
}

//destructuring of an Array
const{courseInstructor,price}=course