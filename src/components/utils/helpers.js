import axios from 'axios';

const helpers = {
    getInstagramFeed() {
    // AJAX request to instagram API
        return axios.get("https://api.instagram.com/v1/users/self/media/recent", {
            params: {
                access_token: "3124545252.1677ed0.40f9e15f60944c48828372ce55095ba2"
            }
        }).then((response) => {
            return response.data.data;
        });
    },

    // // get all dishes
    // getDishes: function() {
    //   return axios.get("/api/dishes");
    // },

    // get dishes by category
    getDishes: function(category) {
      console.log('helper: ' + category);
      return axios.get("/api/dishes", {
        params: {
         category: category
        }
      });
    },

    // // get dishes by category
    // getDishes: function(cat) {
    //   return axios.get("/api/dishes", {category:cat});
    // },

    // post dish by passing in dish object
    addDish: function(dish) {
      return axios.post("/api/dishes", dish);
    },

    // edit existing dish by id
    updateDish: function(dish, id) {
      return axios.put("/api/dishes", {dish: dish, id: id});
    },

    // delete dish by id
    deleteDish: function(id) {
      return axios.delete("/api/dishes", {id: id});
    }
}

export default helpers;
