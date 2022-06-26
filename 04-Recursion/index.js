let obj = {
    prop2:{value:5},
     school: {
           hogwarts: {
                 headmaster:{
                     name: {
                         first: "Albus",
                         last: "Dumbledore"
                       }
                     }
                 }
             }
           }

const isThere = function (obj,value) {
     let result = false;
     for( let key in obj) {
       if(obj[key] === value) {
         return true;
       } else if (typeof obj[key] === 'object') {
           result = isThere(obj[key],value)
       }
     }
     return result;
}     

console.log(isThere(obj,'22'))



