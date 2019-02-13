const Park = function (name, ticket_price){
  this.name = name
  this.ticket_price = ticket_price
  this.dinosaurs = dinosaurs
}

module.exports = Park;

Park.prototype.countDinosaurs = function() {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur= function(dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur) {
  const position = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(position, 1)
};

// Park.prototype.mostPopularDinosaur = function () {
//   this.dinosaurs.sort(function (a, b) {
//   console.log((a.guestsAttractedPerDay - b.guestsAttractedPerDay))
// }) // i have no clue what im doing
// };

Park.prototype.findAllBySpecies = function(type) {
  return this.dinosaurs.filter(dinosaur => dinosaur.species === type);
};

Park.prototype.deleteAllBySpecies = function(type) {
   for (var dinosaur in this.dinosaurs){
     if (this.dinosaurs[dinosaur] === type) this.dinosaurs.splice(dinosaur, 1)
   }
   // this.dinosaurs.filter(function(dinosaur) {
   // return dinosaur.species !== type;
 //again, i have no clue
};

Park.prototype.visitsPerDay = function () {
  dayVisits = 0
  for (var dinosaur of this.dinosaurs) {
    dayVisits += dinosaur.guestsAttractedPerDay
  };
    return dayVisits
};

Park.prototype.visitsPerYear = function () {
  return this.visitsPerDay() * 365
};

Park.prototype.totalYearRevenue = function () {
  return this.visitsPerYear() * this.ticket_price

};
