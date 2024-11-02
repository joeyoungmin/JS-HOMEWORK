
function getValueAtObject(obj, key) {
    return obj[key] !== undefined ? obj[key] : "값이 틀려 다시 생각해봐."
}

const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
  };
  
  console.log(getValueAtObject(person, 'name')); // 'Alice'
  console.log(getValueAtObject(person, 'age'));  // 25
  console.log(getValueAtObject(person, 'city')); // 'Wonderland'
  console.log(getValueAtObject(person, 'country')); // Error !



function getNumberAtArray(arr, index) {
     if(index >= 0 && index < arr.length){
        return arr[index]
     }else{
        return "잘못된거 너도 알지? 반성해"
     }
  }

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!