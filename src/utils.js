var isNumber = function(x) {
  return x !== null && x !== undefined && x.constructor === Number
}

var convertRange = function(oldValue = 2, values = {
  oldMax: 10, oldMin: 1,
  newMax: 1, newMin: 0
}){
  // thanks to https://stackoverflow.com/a/929107/2332101
  // OldRange = (OldMax - OldMin)  
  // NewRange = (NewMax - NewMin)  
  // NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
  let value = (((oldValue - values.oldMin) * (values.newMax - values.newMin))
    / (values.oldMax - values.oldMin)) + values.newMin
  return +value.toFixed(2)
}

export {
  convertRange,
  isNumber
}
