# 과제 0번

## 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
## 설명:객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

이해한 방법 : 주어진 함수 시그니처에 문제 해결을 위한 if문 혹은 삼항연자를 삽입 후 함수 밖에 객체를 넣어 콘솔로 찍어내는 형태를 만들고싶었습니다.
범쌤이 주신 예시코드를 적극 활용하였고 삼항연산자로 풀어나가려했습니다.

### 함수 시그니처
function getValueAtObject(obj, key) {
  // 코드를 작성하세요
}

### 예시코드
const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !

### 저의 답

function getValueAtObject(obj, key) {
    return obj[key] !== undefined ? obj[key] : "값이 틀려 다시 생각해봐.";
}

코드 풀이 : 핵심은 객체의 키값을 안전하게 받아오는것.

obj, key는 두 개의 매개변수 obj와 key를 받는 함수입니다.

obj는 값을 가져오고자 하는 객체이고, key는 그 객체의 속성 이름입니다.

obj[key] !== undefined: 이 조건은 obj 객체에서 key에 해당하는 값을 가져와서 그것이 undefined가 아닌지 확인합니다.

obj[key]는 key에 해당하는 속성의 값을 반환합니다. 만약 그 속성이 존재하지 않으면 undefined를 반환합니다.

?는 삼항 연산자를 사용하여 조건을 평가합니다.

**참일 경우:** obj[key]를 반환합니다.

**거짓일 경우:** "값이 틀려 다시 생각해봐."라는 error를 반환합니다.

---


# 과제 1번

## 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
## 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

### 함수시그니처

function getNumberAtArray(arr, index) {
  // 코드를 작성하세요
}

## 예시 코드

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!


생각한 방법 : 예시코드는 동작을 위해 함수 밖에 배치해주고 if문으로 유효범위를 지정한다. 조건은 인덱스가 배열의 유효한 범위내에 존재해야함.

그러니, 예시코드는 총 5개니까 인덱스넘버는 = [0,1,2,3,4] 니까 length = 4 시작 length는 0 즉, 0-4번 사이에 존재하는 index값이 찍히면 에러가 안뜨게 구조설계를하면됨.

&&연산자를 쓰면 좋을거같다고 생각했습니당.

그렇게 나온 결과물..
### 저의 답
function getNumberAtArray(arr, index) {
     if(index >= 0 && index < arr.length){
        return arr[index]
     }else{
        return "잘못된거 너도 알지? 반성해"
     }
}

코드풀이: 함수 시그니처에 arr, index 두 개의 매개변수 arr와 index 받는 함수입니다.

if문은 인덱스 넘버는 0보다 크거나 같은 수여야하고 또 arr.length = numbers.length = 4를 넘지말아야한다는 조건으로 코드를 짰습니다.

return값은 arr = number배열 , index = number의 인덱스 넘버로 지정하려고 하였고 만약 음수가 나오거나, 4를 넘을 시, return문을 사용해 에러를 띄워주도록 설계하였습니다.

**참일 경우:** arr[index]를 반환합니다.

**거짓일 경우:** "잘못된거 너도 알지? 반성해"라는 error를 반환합니다.