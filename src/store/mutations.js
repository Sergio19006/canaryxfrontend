export const mutations = {
  setEmail: (state, email) => {
    email ? (state.email = email) : (state.email = "");
  },
  setTrip: (state, trip) => {
    trip ? (state.trip = trip) : (state.trip = {});
  },
  setClientTrip: (state, trip) => {
    trip ? (state.clientTrip = trip) : (state.clientTrip = {});
  },
  setCoordenates: (state, coordenates) => {
    coordenates ? (state.trip.coordenates = coordenates) : (state.trip.coordenates = {});
  },
  setNumberOfPersons: (state, numberOfPersons) => {
    numberOfPersons ? (state.numberOfPersons = numberOfPersons) : (state.numberOfPersons = 0);
  }
};


