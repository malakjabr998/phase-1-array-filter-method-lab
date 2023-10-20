// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(collection, string) {
    const newCollection = collection.filter(function(name) {
        return name.toLowerCase() === string.toLowerCase();
    });
    return newCollection;
}

 findMatching(drivers, "bobby");

//fuzzyMatch
 function fuzzyMatch(collection, string) {
    return collection.filter(function(start) {
        return start.toLowerCase().startsWith(string.toLowerCase());
    });
}

fuzzyMatch(drivers, "Sa");

//matchName
const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(collection , string){
    const newDrivers= collection.filter(function(driver){
      return driver.name === string
    })
    return newDrivers
}
matchName(driversObject, "Bobby")