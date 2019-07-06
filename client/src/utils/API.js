import axios from "axios";

export default {
  // Gets all parks
  getParks: function() {
    return axios.get("/api/parks");
  },
  // Gets the Park with the given id
  getPark: function(id) {
    return axios.get("/api/parks/" + id);
  },
  // Deletes the Park with the given id
  deletePark: function(id) {
    return axios.delete("/api/parks/" + id);
  },
  // Saves a Park to the database
  savePark: function(parkData) {
    return axios.post("/api/parks", parkData);
  }
};
