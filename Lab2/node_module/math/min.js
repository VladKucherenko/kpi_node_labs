export const min = (array) => {
    let value = 0;
    array.forEach(element => {
        if(element < value ){
           value = element  
        } 
    });
    return value
} 

// console.log(min([-3, 2, 0]))