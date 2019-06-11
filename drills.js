function hanoiTower(height, srcP, desP, bufferP) {
  if (height >= 1) {
    hanoiTower(height -1, srcP, bufferP, desP)
    console.log('Move disk from Tower ', srcP, ' to Tower ', desP)

    hanoiTower(height - 1, bufferP, desP, srcP)
  }

  return;
}
console.log(hanoiTower(4, "A", "C", "B"))
// Polynomial O(n^n) base runtime function

function countSheep(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`)
  }
    console.log('All sheep jumped over the fence')
}
console.log(countSheep(5))
// O(n) linear runtime function

function powerCalc(num, power) {
  let result = 1
  for (let i=0; i<power; i++) {
    result*=num
  }
  return result
}

console.log(powerCalc(2, 6)) // => 64
// O(n) linear runtime function

function reverseString(str) {
  let newStr = ''
  for(i=str.length; i>0; i--) {
    newStr+=str[i-1]
  }
  return newStr
}

console.log(reverseString('elan')) // => 'nale'
// O(n) linear runtime function
function triangularNumber(n) {
  let output = 0
  for(let i=0; i<n; i++) {
    output+=1
  }
  return output
}

console.log(triangularNumber(5)) // => 15
// O(n) linear runtime function
function stringSplitter(str, splitter) {
  let newStr = ''
  for(let i=0; i<str.length; i++) {
    if(str.charAt(i) === splitter) {
      newStr+=''
    } else {
      newStr+=str.charAt(i)
    }
  }
  return newStr
}

console.log(stringSplitter('e/l/nna/n', '/')) // => elnnan
// O(n) linear runtime function
function fibSequence(num) {
  let output = [0, 1]
  for (let i = 2; i < num + 1; i++ ) {
    output.push(output[i-2] + output[i-1])
  }
  return output
}

console.log(fibSequence(7)) // => [0, 1, 1, 2, 3, 5, 8, 13]
// O(n) linear runtime function
function factorial(num) {
  let output = 1
  for(let i = 0; i < num; i++) {
    output*=(num-i)
  }
  return output
}

console.log(factorial(5)) // => 120

