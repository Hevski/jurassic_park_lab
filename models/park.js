const Park = function (name, ticket_price){
  this.name = name
  this.ticket_price = ticket_price
  this.dinosaurs = []
}

module.exports = Park;

Park.prototype.countDinosaurs = function () {
  return this.dinosaurs.length;
};
