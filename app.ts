// //synchronous:
// /*console.log("one");
// console.log("two");
// console.log("three");
// //line by line code excicute hota He;
// //Asynchoronous;
//  function hello() {
//     console.log("Hello");
// }
//  setTimeout(hello,4000) // setTimeOut; 2sc *2000ms;
//  function hurrah() {
//     console.log("hello Waseem Raza");
//  }
//   setTimeout(hurrah,2000);
//   function greet(){
//     console.log("how are you?");
//   }
//   setTimeout(greet,2000);
//   function greed(){
//   console.log("what are you doing next sunday?")
//   }
//   setTimeout(greed,4000);
//   function ask(){
//     console.log("plz ! tell me , can we go country tour next sunday?");
//   }
//   setTimeout(ask,5000 );
//   setTimeout(()=>{
//     console.log("Wow we can !")
//   },
// 4000);
// console.log("four");
// console.log('five')
// function sum(a,b) {
//   console.log(a+b);
// }
// function calculator(a ,b , sumCallback){
//   sumCallback(a,b);
// }
// calculator(1,2,sum);
// const hellow =()=>{
// console.log("hy! hubby")
// };
// setTimeout(hellow, 1000);*/
// //nesting
// /*let age =19;
// if(age>=18){
// if(age>=60){
//   console.log("senior")
// }
// else{
//   console.log("middle")
// }

// }else{
//   console.log("child");
// }
// function getData(dataId ,getNextData) {
//   setTimeout( ()=> {
// console.log("data", dataId);
// if(getNextData){
//  getNextData();
// }

//  }, 2000);
// }
// getData(1 , () => {
//  getData(2, () => {
//  getData(3 ,() => {

//  })
//  } );
// } );

// type Product={
//   title:"string",
//   discription:"string",
//   price:number,
//   addtionalInfo:{
//     color:"string",
//     size:"string",
//     quantity:number,
//   },
// };
//   const  Tshirt={
//        title:"polo",
//        discription:"This is the beautiful shirt",
//        price:500,
//        additionalInfo:{
//         color:"musturd",
//         size:"medium",
//         quantity:150,
//        }
//   };
//   const watch={
//     title:"Quartz",
//     discription:"This is a best brand",
//     price:10000,
//     additionalInfo:{
//       color:"grey",
//       size:"normal",
//       quantity:200,
//     }
//   };
//   const HandBag={
//     title:"gucci",
//     discription:"This is the leather bags with beautiful design",
//     price:3500,
//     additionalInfo:{
//       color:"blue ",
//       size:"standered",
//       quantity:100,
//     },
//   };
//   function property(polo,dataNextpro ) {
//     setTimeout( () =>{
//       console.log("polo" ,property)
//       if(dataNextpro){
//         dataNextpro();
//       }
//     }, 4000)
//   }

// property(1,()=>{
//   property(2,()=>{
//     property(3,() =>{

//   });
// });
// });
// type Student={
//   name:"string",
//   class:number,
//   age:number,
//   gender:"string",
//   personalInfo:{
//     addres:number,
//     street:number|string,
//     standared:"string",
//     city:"string",
//   }
// }
// const student={
//   name: "javeriya",
//   class:9,
//   age:12,
//   gender:"girl",
//   personalInfo:{
//   adress: 123,
//   street:213,
//   standared:"Msc",
//  city :"Karachi",
// }
// };
// console.log(student)
// function stuData(dataId){
// setTimeout( ()=>  {
//   console.log(stuData(student))
// }, 2000)
// }
// //Annonymous function(){}
//  function(){
//  console.log("hello world")
// }
// type  StuData={
//   name:"string",
//   dob: number,
//   gender:"string",
// }

// const student1 ={
//  name:"Ahmed Raza",
//  dob:2.7,
//  gender:"male"
// }
// console.log(student1.gender)
// function fun(num1:number,num2:number){
//  console.log()
// }*/
// //synchoronous:
// //   let sirZiaPromise = new Promise( (resolve , reject) =>{
// //   resolve("passed with mehmood mithai")
// // })

// // sirZiaPromise.then( (response)=>{
// //   console.log(response);
// // });
// //let sirZiaPromise1 = new Promise(( resolve, reject) =>{
// //reject("faileded with ammi ki chappal")

// //})
// //sirZiaPromise1.then( (response) =>{
// //console.log(response)
// //}).catch( (error)=>{
// // console.log(error)
// // })
// let sirZiaPromise2 = new Promise((res, rej) => {
//   rej("nahi jaa raha wo usne topi dye di");
// });
// async function sirZiaPromise2Status() {
//   try {
//     let status = await sirZiaPromise2;
//     console.log(status);
//   } catch (error) {
//     console.log(error);
//   }
// }
//sirZiaPromise2Status();

//    let makeFrize=()=>{
//     return "your frize is being read"
// }
//  let response =makeFrize();
//   console.log(response)

let fatchData1 = () => {
  return new Promise((resolve) => {
    resolve("data fatch sucsessfuly !");
  });
};
fatchData1().then((result) => {
  console.log(result);
});

// let processData = () => {
//   return new Promise((resolve, reject) => {
//     reject("data processing failed");
//   });
// };
// async function execute() {
//   fatchData1().then((result) => console.log(result));
//   processData().catch((error) => console.log(error));
// }
// //write simple a asynchronous TS function fetchgreeting that is
// //greeting message after 2-sec delay using setTimeout?

// const fatchgreeting = (callback: any) => {
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };
// fatchgreeting(() => {
//   console.log("Hello! Everyone Happy Eid Mubarak");
// });
// console.log("hello saafiya waseem")//order1 synchronous
// setTimeout( ( ) =>{
//   console.log("Eid Mubarak")
// },5000)
// console.log("i am learning sync and asynchronous terms")

//const promise = new Promise((resolve, reject) => {
//return resolve(2);
//})
//.then((resp: any) => {
//let add = resp + 5;
//return add;
//})
//.then((resp2) => {
//let multiplication = resp2 * 5;
// console.log("multiplication",multiplication)
//return multiplication;
//})
//.then((resp3) => {
//let subtraction = resp3 - 4;
//return subtraction;
//})
//.then((resp4) => {
//let division = resp4 / 2;
//console.log(division);
//});
const finalResult = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("you have lost this year");  
    }, 2000);
  });
};

  finalResult()
    .then((resolve) => {
      console.log(resolve, "promise resolve");
    })
    .catch((error) => {
      console.log(error, "you can't forwered");
    });
     const holiDays = () =>{
    return new Promise((resolve, reject) => {
      setTimeout(  () =>{
        reject("you will not visit anywhere in this viccations")
      },4000) 
    })
  }
  holiDays()
  .then( (readonly)=>{
    console.log(readonly,"promise reject")
  })
  .catch( (freez)=>{
   console.log(freez," promise  finished ")
  });
  const finalResult2=()=>{
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
        resolve("congratulation !you have succeed")
      },5000);
      
   });
  };
  finalResult2()
  .then((fulfil)=>{
  console.log(fulfil,"you can go to Pakistan Toure")
  });
  const eidUlAdha=()=>{
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
        resolve(" InShahAllah ! we will buy cow today ")
      },1000)
    })
  }
  eidUlAdha()
  .then( (decied)=>{
    console.log(decied,"Otherwise we will try next Mandi")
  });
  const eidSecondDay=()=>{
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
       resolve("fatima, javeriya, saafiya, laiba are going in second eid")
      },2000);
    });
  };
  eidSecondDay()
  .then( (response)=>{
   console.log(response)
  })

  const partyInvitation=()=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("laiba party me nahi aarahi")
      },4000);
    })
  };
  partyInvitation()
  .catch( (error)=>{
   console.log(error)
  });
  const dataCollection=()=>{
    return new Promise((resolve, reject) => {
      setTimeout( ()=>{
        resolve("data fatched")
      },3000)
    })
  };
  dataCollection()
  .then( (error)=>{
  console.log(error)
  });
