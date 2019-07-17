var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var element = "foo"
 
 function addElementToBeginningOfArray(chcolateBars, element){
   return [element, ...chocolateBars]
 }
 
 function destructivelyAddElementToEndOfArray(chcolateBars, element){
   return chocolateBars.upshift(element)
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