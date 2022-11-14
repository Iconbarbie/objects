//object methods
//refers to objects where keys have the value of function
let restaurant = {
    name: 'Gaucho',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partysize) {
        let seatleft = this.guestCapacity - this.guestCount;
        return partysize <= seatleft;
    },
    seatParty: function(partysize) {
        this.guestCount = this.guestCount + partysize;
    },
    removeparty: function(partysize) {
        this.guestCount = this.guestCount - partysize;
    },
};

restaurant.seatParty(74);
console.log(restaurant.checkAvailability(3));
restaurant.removeparty(2);
console.log(restaurant.checkAvailability(3));

    
