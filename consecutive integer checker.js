/**
 * Given the number of consecutive integers and the total of the integers,
 * return the consecutive integer at the requested position.
 *
 * @param {int} x number of consecutive integers
 * @param {int} y sum of consecutive integers
 * @param {int} n position of requested integer
 * @return {int} consecutive integer at requested position
 */
function position(x, y, n) {
  // TODO: return consecutive integer at requested position
  var conInts = []; //instantiating the array of consecutive integers

  function startTest(length) {
    for (i = 0; i < x; i++) { //first set of consecutive integers
    conInts.push(i);
    }
  }

  function conIntSum() {
    var intSum = 0;
    for (m = 0; m < conInts.length; m++) {
    intSum += m;
    }
    return intSum
  }

  function resultChecker(mySum, realSum) {
    if (mySum == realSum) {
      return true
    }
    else {
      return false
    }
  }


  function resultReturner() {
    return conInts[n];
  }



  startTest(x) //first set instantiated
  conIntSum() //sum the consecutive integers

  
  var testContinue = true

  while (testContinue == true) {
    var contChecker = resultChecker(conIntSum, y)
    if (contChecker == true) {
      break;
    }
    else {
      conInts.shift();
      var lastInt = conInts[(conInts.length - 1)]
      conInts.push((lastInt + 1))
    }
  }

  return resultReturner()
   
}