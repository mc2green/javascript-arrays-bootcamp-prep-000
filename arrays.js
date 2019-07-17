var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "foo"
 
 function addElementToBeginningOfArray(chcolateBars, candyString){
   return [candyString, ...chocolateBars]
 }
 
 function destructivelyAddElementToEndOfArray(chcolateBars, candyString){
   return chocolateBars.upshift(candyString)
 }
function accessElementInArray (chocolateBars, index){
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift()
}
function removeElementFromBeginningOfArray(array){
   array = array.slice(0)
   return array
  
}