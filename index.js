// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  return drivers.filter(
      function(match) {
          return match.toLowerCase() === name.toLowerCase()
      }
  )
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(
        function (match) {
            const match1 = match.toLowerCase()
            const match2 = match1.indexOf(letters.toLowerCase())
            return match2 === 0
        }
    )
}

function matchName(drivers, matchString ) {
    return drivers.filter(
        function (matchFoo) {
            return matchFoo.name === matchString
        }
    )
}