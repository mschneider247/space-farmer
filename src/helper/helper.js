const numFormater = (num) => {
  let numbers = num.toString().split('').reverse();
  let commaNumbers = numbers.reduce((acc, number, index) => {
    acc.push(number)
    if ((index + 1) % 3 === 0) {
      acc.push(',')
    }
    return acc;
  }, []).reverse()
  if (commaNumbers[0] === ',') {
    commaNumbers.shift()
  }
  let formatedNum = commaNumbers.join('')
  return formatedNum;
}

export default numFormater;