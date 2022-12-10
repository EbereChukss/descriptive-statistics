//to calculate the average/mean

const avg = arr => {
    const sum = arr.reduce((acc, cur) => acc + cur);
    const average = sum/arr.length;
    return average;
  }
  
  console.log(avg([1, 2, 3, 7, 8]))
  

  //calculating the median of numbers
  const median = arr => {
    const { length } = arr;
    
    arr.sort((a, b) => a - b);
    
    if (length % 2 === 0) {
      return (arr[length / 2 - 1] + arr[length / 2]) / 2;
    }
    
    return arr[(length - 1) / 2];
  }
  console.log(median([1, 2, 3, 4, 5, 6, 7, 9]))
  

  // javascript to calculate the mode
  const mode = arr => {
    const mode = {};
    let max = 0, count = 0;
  
    for(let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if(mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }
      
      if(count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }
     
    return max;
  }
  
  console.log(mode([1, 2, 3, 4, 3, 5, 5, 5]))


  // measures of dispersion


  //range of 8 numbers
  const range = arr => {
    arr.sort((a, b) => a - b);
    
    return [arr[0], arr[arr.length - 1]];
  }
  
  console.log(range([2, 4, 5, 7, 1, 8, 1]))
  
  
  
  // Javascript program to calculate the standard deviation of an array
  function dev(arr){
    // Creating the mean with Array.reduce
    let mean = arr.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / arr.length;
     
    // Assigning (value - mean) ^ 2 to every array item
    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })
     
    // Calculating the sum of updated array
   let sum = arr.reduce((acc, curr)=> acc + curr, 0);
    
   // Calculating the variance
   let variance = sum / arr.length
    
   // Returning the standard deviation
   return Math.sqrt(sum / arr.length)
  }
   
   
  console.log(dev([1, 2, 3, 4, 5]))
  console.log(dev([23, 4, 6, 457, 65, 7,]))