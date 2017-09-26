
import axios from 'axios';

const helpers = {
    // get all dishes
    getDishes: function() {
      return axios.get("/api/dishes");
    },

    // get dishes by category
    getDishes: function(category) {
      return axios.get("/api/dishes", {category:category});
    },

    // get dishes by category
    getDishes: function(cat) {
      return axios.get("/api/dishes", {category:cat});
    },

    // post dish by passing in dish object
    addDish: function(dish) {
      return axios.post("/api/dishes", dish);
    },

    updateDish: function(dish, id) {
      return axios.put("/api/dishes", {dish, id:id});
    },

    deleteDish: function(id) {
      return axios.delete("/api/dishes", {id: id});
    }
}

export default helpers;