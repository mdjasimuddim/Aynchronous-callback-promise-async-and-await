console.log('This is the first line that i am added my code');

// function getVar(){
//     var x;
//     setTimeout(function(){          //asynchronous function
//         x = 12;
//     },3000)
//     return x;
// }
// var value = getVar();
// console.log('The value is: '+value);

// console.log('The value is '+ value);


//callback function

// const getVar = () => {
//     setTimeout(function() {
//        console.log('A Function that takes some time');
//     }, 3000)
//  }
 
//  const printSomething = () => {
//     console.log('Another Function');
//  }
 
//  getVar();
//  printSomething();


// const getVar = (callback) =>{
//     setTimeout(() => {
//         console.log('A function that takes some time');
//         callback();
//     },3000)
// }

// function printSomething(){
//     console.log('This is the print function that print with in the asynchronous function');
// }

// getVar(printSomething);


//Promise
// const aPromise = control => { 
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if(control) {
//              resolve();
//           } else {
//              reject();
//           }
//        }, 3000)
//     })
//  }
//  console.log(aPromise(true));



// const aPromiseWithData = control => { 
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if(control) {
//              resolve('Simple Success Data');
//           } else {
//              reject('Simple Error Data');
//           }
//        }, 3000)
//     })
//  }

//  aPromiseWithData(true)
//   .then((data) => {
//      console.log(data);
//   })


//   //more than one promise at a time
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(true) {
//           resolve('Promise 1 Resolved');
//        } else {
//           reject('Promise 1 Error');
//        }
//     }, 5000)
//   })


//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(true) {
//           resolve('Promise 2 Resolved');
//        } else {
//           reject('Promise 2 Error');
//        }
//     }, 5000)
//  })

//  Promise.all([promise1, promise2]);

//  Promise.all([promise1, promise2]).then((dataArr) => {
//     console.log(dataArr);
//  })


//Fetch Api
// const dataFromRemote = fetch('https://jsonplaceholder.typicode.com/posts');
// dataFromRemote.then((data) => {
//     console.log(data);
//  })

// fetch('https://jsonplaceholder.typicode.com/posts')
//    .then((data) => {
//       return data.json();
//    }).then((posts) => {
//       console.log(posts);
// })


//async and await
const aDemoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(true) {
          resolve('Print Me');
       } else {
          reject('Error');
       }
    }, 5000)
 })

 const data = aDemoPromise;
console.log(data);




