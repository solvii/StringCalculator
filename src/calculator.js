function add(numbers){
  if(numbers == "")
  return 0;

  if(numbers.includes("\n"))
  {
    var numberArray = numbers.split(/,|\n/g);
    return sum(numberArray);
  }

  if(numbers > 1000)
  {
    numbers = 0;
    return numbers;
  }

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(/,|\n/g);
    return sum(numberArray);
  }

  else
  return parseInt(numbers);
}

function sum(numberArray){
  var total = 0; 
for (var i=0; i < numberArray.length; i++){
  if (numberArray[i] > 1000)
  {
    numberArray[i] = 0;
  }
  total += parseInt(numberArray[i]);
}
return total;
}



module.exports = add;