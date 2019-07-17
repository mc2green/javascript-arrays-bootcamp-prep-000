var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"
 
 function addElementToBeginningOfArray(chcolateBars, candyString){
   return [candyString, ...chocolateBars]
 }
 
 function destructivelyAddElementToEndOfArray(chcolateBars, candyString){
   return chocolateBars.upshift(candyString)
 }
function accessElementInArray (array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}