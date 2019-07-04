import axios from "axios";

export default {
    getParks: function() {
        return axios.get("/api/parks");
    },
    getPark: function() {
        return axios.get("/api/parks/:id");
    },
    updatePark: function() {
        return axios.put("/api/parks/:id");
    },
    deletePark: function() {
        return axios.delete("/api/parks/:id");
    },
    savePark: function() {
        return axios.post("/api/parks", parkData);
    }
};