var array = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "foo"
 
 function addElementToBeginningOfArray(array, element){
   return [element, ...array]
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