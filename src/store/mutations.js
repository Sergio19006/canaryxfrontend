export const mutations = {
  setEmail: (state, email) => {
    email ? (state.email = email) : (state.email = "");
  },
  setTrip: (state, trip) => {
    trip ? (state.trip = trip) : (state.trip = {});
  },
  setCoordenates: (state, coordenates) => {
    coordenates ? (state.trip.coordenates = coordenates) : (state.trip.coordenates = {});
  }
};


