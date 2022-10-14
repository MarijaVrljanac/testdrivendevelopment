//5. Mock API
// Use free API to check data that you expect to receive from server. 
// Then mock this API (investigate mocking with JEST). 
// You want to create functions for adding new entry to array 
// that can be received from server (now is mocked) and to remove entry from that array. 
// Do that using TDD!

const axios = require('axios');

async function mockFunction(){
  let response = await axios.get('https://api.nationalize.io/?name=nathaniel');
  
  return response.data.country;
}


function addInArray(existingArray, newArray, index){
  if((index !== undefined || index !== null) && (!isNaN(index))){
      if(index >= existingArray.length)
          throw new Error('Index is greater then an array length')
      else if (index < 0)
          throw new Error('Index is less then an array length')
  }

  if(typeof(index) != 'number')
      throw new Error('Index must be type of number')
  
  newArray.forEach(x => {
      existingArray.splice(index, 0, x)
  });

  return existingArray;
}

function removeFromArray(existingArray, newArray){

  newArray.forEach((x) => {
      for (let index = 0; index < existingArray.length; index++) {
          const element = existingArray[index];
          if(JSON.stringify(x) === JSON.stringify(element))
          {
              existingArray.splice(index, 1)
          }
      }
      
  })

  return existingArray;
}


module.exports = { mockFunction, addInArray, removeFromArray }