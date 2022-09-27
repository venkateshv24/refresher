// const sleep = (time) => {
//     return new Promise((resolve)=>{
//         setTimeout(resolve,time)
//     })
// }

setTimeout(() => {
    console.log('timeout');
  }, 0);
  
  setImmediate(() => {
    console.log('immediate');
  });
  
  console.log("helloo")